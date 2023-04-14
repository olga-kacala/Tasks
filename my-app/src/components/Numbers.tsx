import React from "react";

export const Numbers = ():JSX.Element => {
const numbers = [1,3,11,11,5,7];
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
console.log(result);

    return (
<div>
    <h1>Result of medium task in JS (numbers):</h1>
    <p>{result !== null ? result : -1}</p>
    </div>
    )
    
}

// function ARR(arr) {
//     const freqMap = {};
//     let maxFreq = 1;
//     let mostFreqNums = [];
  
//     arr.forEach((num, index) => {
//       if (freqMap[num]) {
//         freqMap[num].count++;
//         if (freqMap[num].count > maxFreq) {
//           maxFreq = freqMap[num].count;
//           mostFreqNums = [num];
//         } else if (freqMap[num].count === maxFreq) {
//           mostFreqNums.push(num);
//         }
//       } else {
//         freqMap[num] = { count: 1, index };
//       }
//     });
  
//     const firstMode = mostFreqNums[0] || null;
  
//     return firstMode !== null ? firstMode : -1;
//   }