```index.d.ts
declare module '@recon-struct/bitcraft' {

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
/**
 * Adds two numbers or bigints.
 *
 * @typeParam A - The type of the first number or bigint.
 * @typeParam B - The type of the second number or bigint.
 */
export type Add<A extends number | bigint, B extends number | bigint> = ToNumber<FromDigitNumber<Normalize<AddDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>>>>;
export declare const u8: {
	readonly type: "Uint8";
	readonly byteLength: 1;
};
export declare const u16: {
	readonly type: "Uint16";
	readonly byteLength: 2;
};
export declare const u32: {
	readonly type: "Uint32";
	readonly byteLength: 4;
};
export declare const i8: {
	readonly type: "Int8";
	readonly byteLength: 1;
};
export declare const i16: {
	readonly type: "Int16";
	readonly byteLength: 2;
};
export declare const i32: {
	readonly type: "Int32";
	readonly byteLength: 4;
};
export declare const f32: {
	readonly type: "Float32";
	readonly byteLength: 4;
};
export declare const f64: {
	readonly type: "Float64";
	readonly byteLength: 8;
};
export declare const i64: {
	readonly type: "BigInt64";
	readonly byteLength: 8;
};
export declare const u64: {
	readonly type: "BigUint64";
	readonly byteLength: 8;
};
export type BigIntTypes = "BigInt64" | "BigUint64";
export type StructData = (typeof DataTypes)[keyof typeof DataTypes];
export interface StructTuple<A extends Struct[] = Struct[]> {
	type: "Tuple";
	items: A;
	byteLength: TupleByteLength<A>;
}
export type Struct = StructData | StructTuple;
export type TupleByteLength<A extends Struct[], B extends number | bigint = 0> = A extends [
] ? B : A extends [
	infer C extends Struct,
	...infer E extends Struct[]
] ? TupleByteLength<E, Add<C["byteLength"], B>> : B;
export type Scalar = number | bigint;
export type ScalarArray = (Scalar | ScalarArray)[];
export type StructDataValue<A extends StructData> = A["type"] extends BigIntTypes ? bigint : number;
export type StructTupleValues<A extends Struct[], B extends ScalarArray = [
]> = A extends [
] ? B : A extends [
	infer C extends Struct,
	...infer D extends Struct[]
] ? StructTupleValues<D, [
	...B,
	StructValue<C>
]> : B;
export type StructValue<A extends Struct> = A extends StructData ? StructDataValue<A> : A extends StructTuple<infer B> ? StructTupleValues<B> : never;
/**
 * Extends the given buffer by the length of the data.
 *
 * @param buffer - The buffer to extend.
 * @param struct - The data to append to the buffer.
 * @category Struct
 */
export declare const bufferExtend: (buffer: ArrayBuffer, struct: Struct) => void;
/**
 * Shrinks the size of the given buffer by the length of the data.
 *
 * @param buffer - The buffer to shrink.
 * @param struct - The data to remove from the buffer.
 * @category Struct
 */
export declare const bufferShrink: (buffer: ArrayBuffer, struct: Struct) => ArrayBuffer;
/**
 * Creates a tuple-like structure from an array of structs.
 *
 * @param structs - An array of structs.
 * @returns A tuple-like structure containing the input structs.
 * @category Struct
 */
export declare const createStruct: <A extends Struct[]>(structs: [
	...A
]) => StructTuple<[
	...A
]>;
/**
 * Creates a generator function that iterates over a DataView and yields values based on a given Struct.
 *
 * @generator
 * @param {DataView} view - The DataView to iterate over.
 * @param {Struct} struct - The Struct that defines the structure of the data.
 * @param {number} [offset=0] - The starting offset within the DataView.
 * @param {boolean} [isLittleEndian=getIsLittleEndian()] - Indicates whether the data is in little endian format.
 * @yields {any} The value extracted from the DataView based on the Struct.
 * @category Struct
 */
export declare function createGetGen(view: DataView, struct: Struct, offset?: number, isLittleEndian?: boolean): Generator<number | bigint | [
], void, unknown>;
/**
 * Retrieves structured data from a DataView object based on a given struct definition.
 *
 * @param view - The DataView object to retrieve data from.
 * @param struct - The struct definition that describes the data structure.
 * @param offset - The offset within the DataView object to start retrieving data from.
 * @param isLittleEndian - Optional. Specifies whether the data is in little-endian byte order. Defaults to the system's endianness.
 * @returns The structured data retrieved from the DataView object.
 * @throws If the offset is outside the bounds of the DataView object's buffer.
 * @category Struct
 */
export declare const viewGet: <A extends DataView, B extends Struct, C extends number, D extends boolean = boolean>(view: A, struct: B, offset: C, isLittleEndian?: D) => StructValue<B>;
/**
 * Sets the values of a given struct in a DataView at the specified offset.
 *
 * @typeParam A - The type of the DataView.
 * @typeParam B - The type of the struct.
 * @typeParam C - The type of the offset.
 * @typeParam D - The type of the struct value.
 * @typeParam E - The type of the isLittleEndian flag.
 * @param {A} view - The DataView to set the values in.
 * @param {B} struct - The struct whose values need to be set.
 * @param {C} offset - The offset at which to set the values.
 * @param {D} value - The value of the struct.
 * @param {E} isLittleEndian - The flag indicating whether the DataView is little endian.
 * @throws If the offset is outside the bounds of the buffer.
 * @category Struct
 */
export declare const viewSet: <A extends DataView, B extends Struct, C extends number, D extends StructValue<B>, E extends boolean = boolean>(view: A, struct: B, offset: C, value: D, isLittleEndian?: E) => void;

declare namespace DataTypes {
	export { f32, f64, i16, i32, i64, i8, u16, u32, u64, u8 };
}

}
```

![Bitcraft illustration](https://storage.googleapis.com/hox-io-blog-assets/2024-07-06-bitcraft.webp)

Working with binary data can often feel like deciphering a cryptic puzzle. And
when it comes to performing linear algebra on top of that? It can quickly become
overwhelming. That's why I developed a struct library called
[bitcraft](https://github.com/recon-struct/bitcraft) to make these tasks more
straightforward and efficient, especially in preparation for my new role as a
senior software engineer at Blue Origin.

This library is designed to streamline the process of handling binary data,
making it easier to read, write, and manipulate. It’s also equipped with tools
to perform linear algebra, making complex calculations more accessible and less
error-prone. Whether you're dealing with data from spacecraft telemetry or
tackling other intricate projects, this library is built to be your reliable
companion.

In this blog post, I'll take you through the features and benefits of the
library, demonstrating how it can simplify your workflow and enhance your
productivity. Join me as we explore this new tool, and discover how it can help
you navigate the complexities of binary data and linear algebra with ease.

## The Birth of the Library

In the ever-evolving landscape of software engineering, predicting future
challenges is as crucial as solving present ones. As I prepared for upcoming
projects, I foresaw a recurring theme: working with binary data and optimizing
performance for visualization and simulation purposes. This insight was the
driving force behind developing this struct library.

With an eye on future requirements, I anticipated the need to handle binary data
efficiently. Whether it's processing telemetry data or rendering complex
simulations, the ability to manipulate binary data swiftly and accurately is
paramount. This library is designed to work seamlessly with ArrayBuffers, making
it an ideal tool for high-performance applications.

Additionally, knowing that visualization and simulation would play a significant
role, I built this library with WebGL and WebAssembly in mind. WebGL offers
powerful capabilities for rendering graphics in the browser, essential for
visualizing complex data sets and simulations. WebAssembly, on the other hand,
provides near-native performance, allowing us to run computationally intensive
tasks at breakneck speed.

By integrating support for these technologies,
[bitcraft](https://github.com/recon-struct/bitcraft) ensures that developers can
easily manage binary data and array buffers while optimizing performance for
front-end visualization and simulations. This forward-thinking approach means
that when the time comes to tackle these demanding projects, the groundwork is
already laid, and the tools are at your fingertips.

## Typed Arrays

JavaScript has this underappreciated, low-level mechanism for working with
binary data called typed arrays. Most people associate them with 3D
visualization using WebGL or memory manipulation in WebAssembly. But let's be
real, these aren't your everyday web programming tasks. So, let’s dive into the
data formats of typed arrays, shall we?

Digging deeper, we encounter ArrayBuffers and DataViews. An
[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
is just a collection of ones and zeros, strung together in a byte-length chain.
A
[DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
is how you squint at this binary soup to make sense of it. Imagine each data
format in typed arrays as a method of wrangling those ones and zeros into a
format we can actually work with in code.

### Numerical Data

A DataView can utilize any data format defined in Typed Arrays to pack data into
an ArrayBuffer. The data formats are:

| Data Format | BitCraft Shorthand | JavaScript Type | Byte Length |
| ----------- | ------------------ | --------------- | ----------- |
| Uint8       | `u8`               | number          | 1           |
| Uint16      | `u16`              | number          | 2           |
| Uint32      | `u32`              | number          | 4           |
| BigUint64   | `u64`              | bigint          | 8           |
| Int8        | `i8`               | number          | 1           |
| Int16       | `i16`              | number          | 2           |
| Int32       | `i32`              | number          | 4           |
| BigInt64    | `i64`              | bigint          | 8           |
| Float32     | `f32`              | number          | 4           |
| Float64     | `f64`              | number          | 8           |

> Note: There is also a [Float16
> proposal](https://github.com/tc39/proposal-float16array) but as of this
> writing, it has not been released.

#### Integer Formats

These formats specify both signed and unsigned variants of integers. Signed
variants reserve a bit to indicate if the integer is positive or negative.
Unsigned variants skip this bit, allowing them to represent a larger range of
positive values.

#### Floating Point Formats

Currently, there are two floating point formats (Float32 and Float64) with a third,
[Float16](https://github.com/tc39/proposal-float16array), in the works.

## BitCraft

The [bitcraft](https://github.com/recon-struct/bitcraft) library is a powerful
toolkit for wrangling the raw power of TypedArrays and their underlying
representation, ArrayBuffers. With bitcraft, you can effortlessly construct
structured data types composed of various numerical data formats.

### Data Formats

The [bitcraft](https://github.com/recon-struct/bitcraft) library provides slick
shorthands for all the data formats you need:

- `u8` - Uint8
- `u16` - Uint16
- `u32` - Uint32
- `u64` - BigUint64
- `i8` - Int8
- `i16` - Int16
- `i32` - Int32
- `i64` - Int64
- `f32` - Float32
- `f64` - Float64

### Structured Data

The [bitcraft](https://github.com/recon-struct/bitcraft) library introduces the
concept of structured data, which is just a fancy way of saying arrays of
numerical formats or other structured data. Think of it as Lego blocks for your
data structures.

For instance, here's how you'd create a struct to retrieve a 3-tuple of `Uint8`
values.

```typescript
import { createStruct, u8 } from '@recon-struct/bitcraft'

const struct = createStruct([u8, u8, u8])

console.log(struct.byteLength) // Logs: 3
```

### Working With DataViews

The [bitcraft](https://github.com/recon-struct/bitcraft) library makes it a
breeze to work with JavaScript
[DataViews](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
on
[ArrayBuffers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer),
whether you're setting or getting data. It's like having a personal assistant
for your binary data needs.

```typescript
import { createStruct, u8, viewGet, viewSet } from '@recon-struct/bitcraft'

const struct = createStruct([u8, u8, u8])
const view = new DataView(new ArrayBuffer(struct.byteLength))

viewSet(view, struct, 0, [63, 127, 255])
viewGet(view, struct, 0) // [63, 127, 255]
```

## Example

Imagine you're showing off some point cloud data, where each point is a 3D
coordinate in the form (x, y, z) paired with a Red Green Blue (RGB) value.

To do this, you'll want to construct a struct of two three-tuples:

1. The 3D point data `[number, number, number]` Internally, JavaScript
   represents `number` as a 64-bit floating point value based on the IEEE-754
   standard. So, to represent a 3D point, you'd use `[f64, f64, f64]`.
2. The RGB color `[number, number, number]` Each channel of an RGB color can
   have values from 0 to 255, so `u8` is perfect. Thus, an RGB value is
   `[u8, u8, u8]`.

Consider this: Suppose you have 1000 points in your point cloud data. The
[bitcraft](https://github.com/recon-struct/bitcraft) library can handle it with
ease.

```typescript
import { createStruct, f64, u8, viewSet, viewGet } from '@recon-struct/bitcraft'

const pointStruct = createStruct([f64, f64, f64])
const colorStruct = createStruct([u8, u8, u8])
const struct = createStruct([pointStruct, colorStruct])
const pointCount = 1000
const view = new DataView(new ArrayBufer(struct.byteLength * pointCount))

// Create points at random coordinates and set the color to white
for (let i = 0; i < pointCount; i++) {
  viewSet(view, struct, i * struct.byteLength, [
    [Math.random(), Math.random(), Math.random()],
    [255, 255, 255],
  ])
}

// Get the points one-by-one
for (let i = 0; i < pointCount; i++) {
  const [point, color] = viewGet(view, struct, i * struct.byteLength)

  // Do something with `point` and `color`
}
```

## Conclusion

I'm stoked about the possibilities of working with binary data formats and
leveraging technologies like WebGL and WebAssembly in my new role. I created
this library anticipating the need to craft new codecs for binary data formats,
build data visualizations, or dive into high-performance computing.

The [bitcraft](https://github.com/recon-struct/bitcraft) library is another
weapon in your arsenal for tackling binary data in JavaScript. Unleash the
power!
