```index.d.ts
declare module '@recon-struct/utility-types' {

export type ToNumber<T extends string> = T extends `${infer N extends number | bigint}` ? N : never;
export type ToString<T extends number | bigint> = `${T}`;
export type Digits = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9
];
export type Digit = Digits[number];
export type DigitNumber = {
	sign: "-" | "";
	num: Digit[];
};
export type MakeDigitNumber<S extends "-" | "", N extends Digit[]> = {
	sign: S;
	num: N;
};
export type ToDigits<T extends string, Acc extends Digit[] = [
]> = T extends `${infer N extends Digit}${infer R}` ? ToDigits<R, [
	...Acc,
	N
]> : Acc;
export type ToDigitNumber<T extends string> = T extends `-${infer R}` ? {
	sign: "-";
	num: ToDigits<R>;
} : {
	sign: "";
	num: ToDigits<T>;
};
export type FromDigits<T, Acc extends string = ""> = T extends [
	infer N extends Digit,
	...infer R
] ? FromDigits<R, `${Acc}${N}`> : Acc;
export type Sign<T extends DigitNumber> = T["sign"];
export type InvertSign<T extends DigitNumber> = Sign<T> extends "-" ? "" : "-";
export type MulSign<S1 extends "-" | "", S2 extends "-" | ""> = S1 extends "-" ? S2 extends "-" ? "" : "-" : S2 extends "-" ? "-" : "";
export type Num<T extends DigitNumber> = T["num"];
export type FromDigitNumber<T extends DigitNumber> = `${Sign<T>}${FromDigits<Num<T>>}`;
export type TrimZeros<T extends Digit[]> = T extends [
	0
] ? [
	0
] : T extends [
	0,
	...infer R extends Digit[]
] ? TrimZeros<R> : T;
export type Normalize<T extends DigitNumber, Trim extends Digit[] = TrimZeros<Num<T>>> = Trim extends [
	0
] ? MakeDigitNumber<"", Trim> : MakeDigitNumber<Sign<T>, Trim>;

export type Absolute<A extends number | bigint> = `${A}` extends `-${infer U extends number | bigint}` ? U : ToNumber<FromDigitNumber<Normalize<ToDigitNumber<ToString<A>>>>>;
export type CompareLength<A extends any[], B extends any[]> = A["length"] extends B["length"] ? 1 : 0;
export type DigitCompareTable = [
	[
		0,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1
	],
	[
		1,
		0,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1
	],
	[
		1,
		1,
		0,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1
	],
	[
		1,
		1,
		1,
		0,
		-1,
		-1,
		-1,
		-1,
		-1,
		-1
	],
	[
		1,
		1,
		1,
		1,
		0,
		-1,
		-1,
		-1,
		-1,
		-1
	],
	[
		1,
		1,
		1,
		1,
		1,
		0,
		-1,
		-1,
		-1,
		-1
	],
	[
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		-1,
		-1,
		-1
	],
	[
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		-1,
		-1
	],
	[
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		-1
	],
	[
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0
	]
];
export type DigitCompare<A extends Digit, B extends Digit> = DigitCompareTable[A][B];
export type CompareDigitsWithEqualLength<A extends Digit[], B extends Digit[]> = A extends [
	infer C extends Digit,
	...infer D extends Digit[]
] ? B extends [
	infer E extends Digit,
	...infer F extends Digit[]
] ? DigitCompare<C, E> extends 0 ? CompareDigitsWithEqualLength<D, F> : DigitCompare<C, E> : 0 : 0;
export type CompareDigits<A extends Digit[], B extends Digit[]> = CompareLength<A, B> extends 1 ? CompareDigitsWithEqualLength<A, B> : keyof B extends keyof A ? 1 : -1;
export type CompareDigitNumbers<A extends DigitNumber, B extends DigitNumber> = Sign<A> extends Sign<B> ? Sign<A> extends "" ? CompareDigits<Num<A>, Num<B>> : CompareDigits<Num<B>, Num<A>> : Sign<A> extends "-" ? -1 : 1;

export type Compare<A extends number | bigint, B extends number | bigint> = A extends B ? 0 : CompareDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>;
export type AddDigitTable = [
	[
		[
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9
		],
		[
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			0
		],
		[
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			0,
			1
		],
		[
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			0,
			1,
			2
		],
		[
			4,
			5,
			6,
			7,
			8,
			9,
			0,
			1,
			2,
			3
		],
		[
			5,
			6,
			7,
			8,
			9,
			0,
			1,
			2,
			3,
			4
		],
		[
			6,
			7,
			8,
			9,
			0,
			1,
			2,
			3,
			4,
			5
		],
		[
			7,
			8,
			9,
			0,
			1,
			2,
			3,
			4,
			5,
			6
		],
		[
			8,
			9,
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7
		],
		[
			9,
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		]
	],
	[
		[
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			0
		],
		[
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			0,
			1
		],
		[
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			0,
			1,
			2
		],
		[
			4,
			5,
			6,
			7,
			8,
			9,
			0,
			1,
			2,
			3
		],
		[
			5,
			6,
			7,
			8,
			9,
			0,
			1,
			2,
			3,
			4
		],
		[
			6,
			7,
			8,
			9,
			0,
			1,
			2,
			3,
			4,
			5
		],
		[
			7,
			8,
			9,
			0,
			1,
			2,
			3,
			4,
			5,
			6
		],
		[
			8,
			9,
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7
		],
		[
			9,
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		],
		[
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9
		]
	]
];
export type AddDigitCarryTable = [
	[
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		]
	],
	[
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		]
	]
];
export type AddDigit<A extends Digit, B extends Digit, Carry extends 0 | 1 = 0> = AddDigitTable[Carry][A][B];
export type AddCarryDigit<A extends Digit, B extends Digit, Carry extends 0 | 1 = 0> = AddDigitCarryTable[Carry][A][B];
export type AddDigits<A extends Digit[], B extends Digit[], Carry extends 0 | 1 = 0, Acc extends Digit[] = [
]> = A extends [
	...infer C extends Digit[],
	infer D extends Digit
] ? B extends [
	...infer E extends Digit[],
	infer F extends Digit
] ? AddDigits<C, E, AddCarryDigit<D, F, Carry>, [
	AddDigit<D, F, Carry>,
	...Acc
]> : AddDigits<C, [
], AddCarryDigit<D, 0, Carry>, [
	AddDigit<D, 0, Carry>,
	...Acc
]> : B extends [
	...infer G extends Digit[],
	infer H extends Digit
] ? AddDigits<[
], G, AddCarryDigit<0, H, Carry>, [
	AddDigit<0, H, Carry>,
	...Acc
]> : Carry extends 1 ? [
	1,
	...Acc
] : Acc;
export type SubDigitTable = [
	[
		[
			0,
			9,
			8,
			7,
			6,
			5,
			4,
			3,
			2,
			1
		],
		[
			1,
			0,
			9,
			8,
			7,
			6,
			5,
			4,
			3,
			2
		],
		[
			2,
			1,
			0,
			9,
			8,
			7,
			6,
			5,
			4,
			3
		],
		[
			3,
			2,
			1,
			0,
			9,
			8,
			7,
			6,
			5,
			4
		],
		[
			4,
			3,
			2,
			1,
			0,
			9,
			8,
			7,
			6,
			5
		],
		[
			5,
			4,
			3,
			2,
			1,
			0,
			9,
			8,
			7,
			6
		],
		[
			6,
			5,
			4,
			3,
			2,
			1,
			0,
			9,
			8,
			7
		],
		[
			7,
			6,
			5,
			4,
			3,
			2,
			1,
			0,
			9,
			8
		],
		[
			8,
			7,
			6,
			5,
			4,
			3,
			2,
			1,
			0,
			9
		],
		[
			9,
			8,
			7,
			6,
			5,
			4,
			3,
			2,
			1,
			0
		]
	],
	[
		[
			9,
			8,
			7,
			6,
			5,
			4,
			3,
			2,
			1,
			0
		],
		[
			0,
			9,
			8,
			7,
			6,
			5,
			4,
			3,
			2,
			1
		],
		[
			1,
			0,
			9,
			8,
			7,
			6,
			5,
			4,
			3,
			2
		],
		[
			2,
			1,
			0,
			9,
			8,
			7,
			6,
			5,
			4,
			3
		],
		[
			3,
			2,
			1,
			0,
			9,
			8,
			7,
			6,
			5,
			4
		],
		[
			4,
			3,
			2,
			1,
			0,
			9,
			8,
			7,
			6,
			5
		],
		[
			5,
			4,
			3,
			2,
			1,
			0,
			9,
			8,
			7,
			6
		],
		[
			6,
			5,
			4,
			3,
			2,
			1,
			0,
			9,
			8,
			7
		],
		[
			7,
			6,
			5,
			4,
			3,
			2,
			1,
			0,
			9,
			8
		],
		[
			8,
			7,
			6,
			5,
			4,
			3,
			2,
			1,
			0,
			9
		]
	]
];
export type SubDigitCarryTable = [
	[
		[
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		]
	],
	[
		[
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1
		],
		[
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1
		]
	]
];
export type SubDigit<A extends Digit, B extends Digit, Carry extends 0 | 1 = 0> = SubDigitTable[Carry][A][B];
export type SubCarryDigit<A extends Digit, B extends Digit, Carry extends 0 | 1 = 0> = SubDigitCarryTable[Carry][A][B];
export type SubDigits<A extends Digit[], B extends Digit[], Carry extends 0 | 1 = 0, Acc extends Digit[] = [
]> = A extends [
	...infer C extends Digit[],
	infer D extends Digit
] ? B extends [
	...infer E extends Digit[],
	infer F extends Digit
] ? SubDigits<C, E, SubCarryDigit<D, F, Carry>, [
	SubDigit<D, F, Carry>,
	...Acc
]> : SubDigits<C, [
], SubCarryDigit<D, 0, Carry>, [
	SubDigit<D, 0, Carry>,
	...Acc
]> : B extends [
	...infer G extends Digit[],
	infer H extends Digit
] ? SubDigits<[
], G, SubCarryDigit<0, H, Carry>, [
	SubDigit<0, H, Carry>,
	...Acc
]> : Carry extends 1 ? [
	...Acc,
	9
] : Acc;
export type AddDigitNumbers<A extends DigitNumber, B extends DigitNumber> = Sign<A> extends Sign<B> ? MakeDigitNumber<Sign<A>, AddDigits<Num<A>, Num<B>>> : CompareDigits<Num<A>, Num<B>> extends 1 ? MakeDigitNumber<Sign<A>, SubDigits<Num<A>, Num<B>>> : MakeDigitNumber<InvertSign<A>, SubDigits<Num<B>, Num<A>>>;

export type Add<A extends number | bigint, B extends number | bigint> = ToNumber<FromDigitNumber<Normalize<AddDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>>>>;
export type SubDigitNumbers<A extends DigitNumber, B extends DigitNumber> = Sign<A> extends Sign<B> ? CompareDigits<Num<A>, Num<B>> extends 1 ? MakeDigitNumber<Sign<A>, SubDigits<Num<A>, Num<B>>> : MakeDigitNumber<InvertSign<A>, SubDigits<Num<B>, Num<A>>> : MakeDigitNumber<Sign<A>, AddDigits<Num<A>, Num<B>>>;
export type Subtract<A extends number | bigint, B extends number | bigint> = ToNumber<FromDigitNumber<Normalize<SubDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>>>>;

export type IsNegative<A extends number | bigint> = `${A}` extends `-${number | bigint}` ? true : false;

export type IsGreaterThan<A extends number | bigint, B extends number | bigint> = IsNegative<Subtract<B, A>>;

export type IsGreaterThanOrEqual<A extends number | bigint, B extends number | bigint> = IsNegative<Subtract<A, B>> extends true ? false : true;

export type IsLessThan<A extends number | bigint, B extends number | bigint> = IsNegative<Subtract<A, B>>;

export type IsLessThanOrEqual<A extends number | bigint, B extends number | bigint> = IsNegative<Subtract<B, A>> extends true ? false : true;

export type IsNonNegative<A extends number | bigint> = `${A}` extends `-${number | bigint}` ? false : true;

export type BigIntAddIdentity = 0n;

export type NumAddIdentity = 0;
export type Zeroish = NumAddIdentity | BigIntAddIdentity;

export type IsZero<A extends number | bigint> = A extends Zeroish ? true : false;
export type IsNonPositive<A extends number | bigint> = `${A}` extends `-${number | bigint}` ? true : IsZero<A>;
export type IsPositive<A extends number | bigint> = IsZero<A> extends true ? false : `${A}` extends `-${number | bigint}` ? false : true;

export type Decrement<A extends number | bigint> = Subtract<A, 1>;
export type Rest<A extends Digit[]> = A extends [
	Digit,
	...infer B extends Digit[]
] ? B : never;
export type TruncateWith<A extends Digit[], B extends Digit[], Acc extends Digit[] = [
]> = B extends [
] ? [
	A,
	Acc
] : A extends [
	infer C extends Digit,
	...infer D extends Digit[]
] ? TruncateWith<D, Rest<B>, [
	...Acc,
	C
]> : [
	A,
	Acc
];
export type DivModByDigit<A extends Digit[], B extends Digit[], Mul extends Digit[] = [
	0
], IterTable extends Digit[] = Digits, NextMul extends Digit[] = AddDigits<B, Mul>, Comp = CompareDigits<A, NextMul>> = IterTable extends [
	infer Iteration extends Digit,
	...infer Next extends Digit[]
] ? Comp extends 0 ? {
	Quotient: Next[0];
	Remainder: [
		0
	];
} : Comp extends 1 ? DivModByDigit<A, B, NextMul, Next> : {
	Quotient: Iteration;
	Remainder: SubDigits<A, Mul>;
} : never;

export type DivModDigits<A extends Digit[], B extends Digit[], C extends Digit[], D extends Digit[] = [
]> = DivModByDigit<B, C> extends {
	Quotient: infer E extends Digit;
	Remainder: infer F extends Digit[];
} ? A extends [
	infer G extends Digit,
	...infer H extends Digit[]
] ? DivModDigits<H, TrimZeros<[
	...F,
	G
]>, C, [
	...D,
	E
]> : {
	Quotient: [
		...D,
		E
	];
	Remainder: F;
} : never;
export type DivDigits<A extends Digit[], B extends Digit[]> = TruncateWith<A, B> extends [
	infer C extends Digit[],
	infer D extends Digit[]
] ? DivModDigits<C, D, B>["Quotient"] : never;
export type ModDigits<A extends Digit[], B extends Digit[]> = TruncateWith<A, B> extends [
	infer C extends Digit[],
	infer D extends Digit[]
] ? DivModDigits<C, D, B>["Remainder"] : never;
export type DivDigitNumbers<A extends DigitNumber, B extends DigitNumber> = MakeDigitNumber<MulSign<Sign<A>, Sign<B>>, DivDigits<Num<A>, Num<B>>>;

export type Divide<A extends number | bigint, B extends number | bigint> = ToNumber<FromDigitNumber<Normalize<DivDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>>>>;

export type Increment<A extends number | bigint> = Add<A, 1>;
export type ModDigitNumbers<A extends DigitNumber, B extends DigitNumber> = MakeDigitNumber<Sign<A>, ModDigits<Num<A>, Num<B>>>;

export type Mod<A extends number | bigint, B extends number | bigint> = ToNumber<FromDigitNumber<Normalize<ModDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>>>>;
export type MulX2<A extends Digit[]> = AddDigits<A, A>;
export type MulX3<A extends Digit[]> = AddDigits<A, MulX2<A>>;
export type MulX4<A extends Digit[]> = MulX2<MulX2<A>>;
export type MulX5<A extends Digit[]> = AddDigits<A, MulX4<A>>;
export type MulX6<A extends Digit[]> = MulX2<MulX3<A>>;
export type MulX7<A extends Digit[]> = SubDigits<MulX10<A>, MulX3<A>>;
export type MulX8<A extends Digit[]> = SubDigits<MulX10<A>, MulX2<A>>;
export type MulX9<A extends Digit[]> = SubDigits<MulX10<A>, A>;
export type MulX10<A extends Digit[]> = [
	...A,
	0
];
export type MulByDigit<A extends Digit[], B extends Digit> = B extends 0 ? [
	0
] : B extends 1 ? A : B extends 2 ? MulX2<A> : B extends 3 ? MulX3<A> : B extends 4 ? MulX4<A> : B extends 5 ? MulX5<A> : B extends 6 ? MulX6<A> : B extends 7 ? MulX7<A> : B extends 8 ? MulX8<A> : MulX9<A>;
export type MulDigits<A extends Digit[], B extends Digit[], Acc extends Digit[] = [
]> = B extends [
	infer N extends Digit,
	...infer R extends Digit[]
] ? MulDigits<A, R, AddDigits<MulByDigit<A, N>, MulX10<Acc>>> : Acc;
export type MulDigitNumbers<A extends DigitNumber, B extends DigitNumber> = MakeDigitNumber<MulSign<Sign<A>, Sign<B>>, MulDigits<Num<A>, Num<B>>>;

export type Multiply<A extends number | bigint, B extends number | bigint> = ToNumber<FromDigitNumber<Normalize<MulDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>>>>;

export type Negate<A extends number | bigint> = A extends 0 | 0n ? ToNumber<FromDigitNumber<Normalize<ToDigitNumber<ToString<A>>>>> : `${A}` extends `-${infer B extends number | bigint}` ? B : `-${A}` extends `${infer C extends number | bigint}` ? C : never;
export type PowerDigits<A extends Digit[], B extends Digit[], Acc extends Digit[] = [
	1
]> = B extends [
	0
] ? [
	1
] : B extends [
	1
] ? MulDigits<A, Acc> : B extends [
	infer C extends Digit,
	...infer D extends Digit[]
] ? DivModDigits<D, [
	C
], [
	2
]> extends {
	Quotient: infer E extends Digit[];
	Remainder: infer F extends Digit[];
} ? TrimZeros<F> extends [
	0
] ? PowerDigits<MulDigits<A, A>, TrimZeros<E>, Acc> : PowerDigits<MulDigits<A, A>, TrimZeros<E>, MulDigits<A, Acc>> : never : Acc;
export type PowerSign<A extends "" | "-", B extends DigitNumber> = A extends "-" ? Num<B> extends [
	...Digit[],
	0 | 2 | 4 | 6 | 8
] ? "" : "-" : "";
export type PowerDigitNumbers<A extends DigitNumber, B extends DigitNumber> = Sign<B> extends "-" ? MakeDigitNumber<Sign<A>, [
	0
]> : MakeDigitNumber<PowerSign<Sign<A>, B>, PowerDigits<Num<A>, Num<B>>>;

export type Power<A extends number | bigint, B extends number | bigint> = ToNumber<FromDigitNumber<Normalize<PowerDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>>>>;

}
```

![Utility-Types: Math](https://storage.googleapis.com/hox-io-blog-assets/2024-05-30-math.webp)

Ever found yourself obsessing over unit tests? No? Well, welcome to my world,
where I dive into unit tests like a sun-deprived hermit hitting the beach after
a grim winter. I crave full coverage like a vampire craves blood. Yes, I'm that
kind of crazy.

## The Old Days

So, picture this: a couple of weeks ago, I stumbled upon this mind-blowing
library called ts-calc. It was like discovering a hidden cheat code in the game
of TypeScript. Their approach to math in the TypeScript compiler? Utterly
superior. It made the other methods look like a caveman trying to light a fire
with two sticks.

But hold on. There was a dark side. A glaring void. The absence of unit tests.
Like finding a shiny new car without airbags, I was both excited and horrified.
Naturally, I had to dig in, kick the tires, and slap some of my own tests onto
ts-calc's types.

Flashback to the "olden days"—circa 2020. Picture it: a couple of crafty
TypeScript programmers figured out you could perform basic math by converting
numbers into tuples. Tuples, with their blessed lengths known to TypeScript,
became the secret sauce for integer math. Genius, right?

Fast forward to the present. TypeScript 4.8 dropped and with it came the
beefed-up support for template strings. This upgrade unlocked basic parser-like
capabilities, paving the way for mathematical operations by first converting
numbers to strings. It's like watching a clunky robot evolve into a sleek, agile
machine.

## Math Antecedents

One shining beacon in the TypeScript galaxy is the @recon-struct/utility-types
library. It's got this neat trick of composing boolean logic, thanks to its
collection of antecedents—conditional types that return true or false. These
little gems come in handy in the math module, making it a powerful tool for all
your computational needs.

### IsGreaterThanOrEqual

A comparison if `A >= B`, where `A` and `B` are `number | bigint`.

```typescript
import { IsGreaterThanOrEqual } from '@recon-struct/utility-types'

type Ex1 = IsGreaterThanOrEqual<3, 1> // true
type Ex2 = IsGreaterThanOrEqual<3, 3> // true
type Ex3 = IsGreaterThanOrEqual<1, 3> // false
```

### IsGreaterThan

A comparison if `A > B`, where `A` and `B` are `number | bigint`.

```typescript
import { IsGreaterThan } from '@recon-struct/utility-types'

type Ex1 = IsGreaterThan<3, 1> // true
type Ex2 = IsGreaterThan<3, 3> // false
type Ex3 = IsGreaterThan<1, 3> // false
```

### IsLessThanOrEqual

A comparison if `A <= B`, where `A` and `B` are `number | bigint`.

```typescript
import { IsLessThanOrEqual } from '@recon-struct/utility-types'

type Ex1 = IsLessThanOrEqual<3, 1> // false
type Ex2 = IsLessThanOrEqual<3, 3> // true
type Ex3 = IsLessThanOrEqual<1, 3> // true
```

### IsLessThan

A comparison if `A < B`, where `A` and `B` are `number | bigint`.

```typescript
import { IsLessThan } from '@recon-struct/utility-types'

type Ex1 = IsLessThan<3, 1> // false
type Ex2 = IsLessThan<3, 3> // false
type Ex3 = IsLessThan<1, 3> // true
```

### IsNegative

Check if `A` is negative.

```typescript
import { IsNegative } from '@recon-struct/utility-types'

type Ex1 = IsNegative<-1> // true
type Ex2 = IsNegative<0> // false
type Ex3 = IsNegative<1> // false
```

### IsNonNegative

Check if `A` is non-negative.

```typescript
import { IsNonNegative } from '@recon-struct/utility-types'

type Ex1 = IsNonNegative<-1> // false
type Ex2 = IsNonNegative<0> // true
type Ex3 = IsNonNegative<1> // true
```

### IsNonPositive

Check if `A` is non-positive.

```typescript
import { IsNonPositive } from '@recon-struct/utility-types'

type Ex1 = IsNonPositive<-1> // true
type Ex2 = IsNonPositive<0> // true
type Ex3 = IsNonPositive<1> // false
```

### IsPositive

Check if `A` is positive.

```typescript
import { IsPositive } from '@recon-struct/utility-types'

type Ex1 = IsPositive<-1> // false
type Ex2 = IsPositive<0> // false
type Ex3 = IsPositive<1> // true
```

### IsZero

Check if `A` is zero.

```typescript
import { IsZero } from '@recon-struct/utility-types'

type Ex1 = IsZero<0> // true
type Ex2 = IsZero<0n> // true
```

## Math Types

One drawback to the string technique for performing math with TypeScript is that
it implicitly converts every `bigint` to a `number`. You can add two `bigint`s
together but the output will be a `number`. Consider the following hover over
the type `Ex` you'll see that it reports `42` instead of the expected `42n`.

```typescript
type Ex = `${42n}` // 42
```

It's alright we can deal with this shortcoming having the ability to do math
right here in the type system is still great.

### Absolute

Get the absolute value of `A`.

```typescript
import { Absolute } from '@recon-struct/utility-types'

type Ex1 = Absolute<-1> // 1
type Ex2 = Absolute<0> // 0
type Ex3 = Absolute<1> // 1
```

### Add

Evaluate the sum of `A + B`, where `A` and `B` are `number | bigint`.

```typescript
import { Add } from '@recon-struct/utility-types'

type Ex1 = Add<1, 3> // 4
type Ex2 = Add<-3, 1> // -2
```

### Decrement

Decrement `A` by one.

```typescript
import { Decrement } from '@recon-struct/utility-types'

type Ex1 = Decrement<2> // 1
type Ex2 = Decrement<1> // 0
type Ex3 = Decrement<0> // -1
```

### Divide

Evaluate the quotion of `A / B`, where `A` and `B` are `number | bigint`.

```typescript
import { Divide } from '@recon-struct/utility-types'

type Ex1 = Divide<9, 3> // 3
type Ex2 = Divide<8, 2> // 4
type Ex3 = Divide<5, 1> // 5
```

### Increment

Increment `A` by one.

```typescript
import { Increment } from '@recon-struct/utility-types'

type Ex1 = Increment<2> // 3
type Ex2 = Increment<1> // 2
type Ex3 = Increment<0> // 1
```

### Mod

Evaluate the modulus `A % B`, where `A` and `B` are `number | bigint`.

```typescript
import { Mod } from '@recon-struct/utility-types'

type Ex1 = Mod<9, 3> // 0
type Ex2 = Mod<8, 3> // 2
type Ex3 = Mod<5, 2> // 1
```

### Multiply

Evaluate the product `A * B`, where `A` and `B` are `number | bigint`.

```typescript
import { Multiply } from '@recon-struct/utility-types'

type Ex1 = Multiply<3, 2> // 6
type Ex2 = Multiply<2, 1> // 2
type Ex3 = Multiply<1, 0> // 0
```

### Negate

Negate the value `A`.

```typescript
import { Negate } from '@recon-struct/utility-types'

type Ex1 = Increment<-1> // 1
type Ex2 = Increment<1> // -1
```

### Power

Evaluate the power of `A ** B`, where `A` and `B` are `number | bigint`.

```typescript
import { Power } from '@recon-struct/utility-types'

type Ex1 = Power<3, 2> // 9
type Ex2 = Power<2, 1> // 2
type Ex3 = Power<1, 0> // 1
```

### Subtract

Evaluate the difference of `A - B`, where `A` and `B` are `number | bigint`.

```typescript
import { Subtract } from '@recon-struct/utility-types'

type Ex1 = Subtract<5, 2> // 3
type Ex2 = Subtract<2, 1> // 1
type Ex3 = Subtract<1, 2> // -1
```

## Conclusion

As you can see we've got some powerful tools for doing wath in TypeScript.

So, there you have it. My journey through the wild world of TypeScript math,
where I've embraced the chaos, wrangled the code, and, most importantly,
slathered everything with glorious unit tests. Because if you're not testing,
are you even coding?
