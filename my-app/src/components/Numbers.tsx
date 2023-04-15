import React from "react";

export const Numbers = ():JSX.Element => {
const numbers = [3,3,11,11,5,7];
const numberCountMap: { [key: string]: { count: number, index?: number } } = {};
let maxFreq = 1;
let mostFrequentNums: number[] = [];

numbers.forEach((num, index)=>{
    if(numberCountMap[num]) {
        numberCountMap[num].count++;

    if (numberCountMap[num].count > maxFreq) {
        maxFreq= numberCountMap[num].count;
        mostFrequentNums = [num];
    } else if (numberCountMap[num].count === maxFreq) {
        mostFrequentNums.push(num);
    }
    } else {
        numberCountMap[num] = {count:1, index};
    }
})
const result = mostFrequentNums[0] || null;
  
    return (
<div>
    <h1>Result of medium task in JS (numbers):</h1>
    <p>{result !== null ? result : -1}</p>
    </div>
    )
    
}
