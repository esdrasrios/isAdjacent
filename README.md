# AdjacentMaxDistance 
Integer V lies strictly between integers U and W if U < V < W or if U > V > W.
A non-empty zero-indexed array A consisting of N integers is given. A pair of indices (P, Q), where 0 ≤ P < Q < N, is said to have adjacent values if no value in the array lies strictly between values A\[P\] and A\[Q\].

For example, in array A such that:

A\[0\] = 0 A\[1\] = 3 A\[2\] = 3 A\[3\] = 7 A\[4\] = 5 A\[5\] = 3 A\[6\] = 11 A\[7\] = 1
the following pairs of indices have adjacent values:

(0, 7), (1, 5), (2, 5), (3, 6),
(1, 2), (1, 7), (2, 7), (4, 5),
(1, 4), (2, 4), (3, 4), (5, 7).

For example, indices 4 and 5 have adjacent values because there is no value in array A that lies strictly between A\[4\] = 5 and A\[5\] = 3; the only such value could be the number 4, and it is not present in the array.

Given two indices P and Q, their distance is defined as abs(A\[P\] − A\[Q\]), where abs(X) = X for X ≥ 0, and abs(X) = −X for X < 0. For example, the distance between indices 4 and 5 is 2 because (A\[4\] − A\[5\]) = (5 − 3) = 2.

Write a function:  
class Solution { public int solution(int\[\] A); }
that, given a non-empty zero-indexed array A consisting of N integers, returns the maximum distance between indices of this array that have adjacent values. The function should return −2 if no adjacent indices exist.

Assume that:

\* N is an integer within the range \[1..40,000\];  
\* each element of array A is an integer within the range

\[−2,147,483,648..2,147,483,647\].  
For example, given array A such that:

A\[0\] = 0 A\[1\] = 3 A\[2\] = 3 A\[3\] = 12 A\[4\] = 5 A\[5\] = 3 A\[6\] = 7 A\[7\] = 1

the function should return 5 because:

\* indices 3 and 6 are adjacent, because the array does not contain any value that lies strictly between A\[3\] = 12 and A\[6\] = 7;
\* the distance between these indices is (A\[3\] − A\[6\]) = (12 - 7) = 5;  
\* no other pair of adjacent indices that has greater distance exists.
Performance:  
\* The best possible performance is expected.


# Files

The main files are adjValues.js and index.spec.js;

## Usage

```
git clone https://github.com/esdrasrios/isAdjacent.git
cd isAdjacent
npm install
npm test
```

By default there are five tests:

 - 3 simple arrays.
 - 1 array that returns -2, because there is no adjacent value.
 - 1 array with negative values that returns the absolute value anyway.

If you want to add more tests just add  one more it to the file index.spec.js
```
it('description goes here(expected $)', () => {
const  result  =  solution([yourArrhere]);
expect(result).toEqual(yourExpectedResultHere);

});
```
**if you preffer to not run the test, you can call the function adding to  adjValues.js** 
```
 console.log(solution([0, 3, 3, 12, 5, 3, 7, 1])); // 5
 ```
**live version on repl.it**
https://repl.it/repls/KindheartedWorrisomeOpengl
