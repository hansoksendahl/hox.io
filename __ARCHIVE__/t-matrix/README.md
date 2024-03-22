Description
===

Calculating nearest neighbors in n dimensions.

D₁
--

For any value `m` the *nearest neighbors* are `m - 1` and `m + 1`.

If we include `m` in the results then the cardinality of the result set is `3`.

D₂
--

For any value (`m`, `n`) there will be three possible values for `m`, and `n`.

If we include (`m`, `n`) in the results then the cardinality of the result set is `3²`.

D₃
--

Invoking induction we can see that for any number of dimensions i `Dᵢ` we will have `3ⁱ - 1`
neighbors and the *centroid* `(c₁, c₂, …, cᵢ)`.

Problem
=======

Assume we are iterating through the values `i ∈ { i | 0 ≤ i ≤ 3ⁱ }`. For some number nearest neighbors
for the toroidal grid `G` in `Dᵢ`.

What is the equation which will determine the values of the vectors `v` ∈ `(v₁, v₂, …, vᵢ)` surrounding
the *centroid* `(c₁, c₂, …, cᵢ)`.

Example
-------
