//Write a function that would allow you to do this.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

export function createBase (baseNumber:number) {
    return function (N:number) {
      return baseNumber + N;
    }
  }
  
  let addSix = createBase(6);
  console.log(addSix(10)); // returns 16
  addSix(21); // returns 27
    console.log(Date.now()); 