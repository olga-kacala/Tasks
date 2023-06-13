import React from "react";

export const Numbers = ():JSX.Element => {
const numbers = [0,0,3,3,11,11,5,7];

const numberCountMap: { [key: string]: { count: number, index?: number } } = {};
let maxFreq = 1;
let mostFrequentNumb: number[] = [];

numbers.forEach((num, index)=>{
    if(numberCountMap[num]) {
        numberCountMap[num].count++;

    if (numberCountMap[num].count > maxFreq) {
        maxFreq= numberCountMap[num].count;
        mostFrequentNumb = [num];
    } else if (numberCountMap[num].count === maxFreq) {
        mostFrequentNumb.push(num);
    }
    } else {
        numberCountMap[num] = {count:1, index};
    }
})
// const result = mostFrequentNumb[0] || null;
// not working with 0 

const result = mostFrequentNumb.includes(0) ? 0 : mostFrequentNumb[0] || null;


  
    return (
<div>
    <h1>Result of medium task in JS (numbers):</h1>
    <p>{result !== null ? result : -1}</p>
    </div>
    )
    
}
