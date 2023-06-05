
export const Loop = (): JSX.Element => {
    // for (let i=0; i<3; i++){setTimeout(function() {alert(i);},1000+1)};

    // for (let i=0; i<=10;i++){
    //   if (i %2 == 0){
    //     console.log([i])
    //   }
    // }

// function sumArr (arr) {
//   let sum = 0;
// for(let i=0; i<arr.length; i++){
//   sum =+ arr[i]
// }
// }

//what will be in cosnolelog?

let a = 1;
let b = ++a;
let c = a++;

console.log(a,b,c)

/*The expressions ++a and a++ are both increment operations, but they differ in their behavior:

++a (pre-increment): This is a prefix increment operator. It increments the value of a and returns the updated value. It means that a is incremented before its value is used or assigned to another variable. So, if a is initially 1, ++a will increment a to 2 and return the updated value of a, which is 2.

a++ (post-increment): This is a postfix increment operator. It also increments the value of a, but it returns the original value of a before the increment. It means that a is incremented after its value is used or assigned to another variable. So, if a is initially 1, a++ will return the original value of a (1) and then increment a to 2.*/

    return (
      <div>
        <h1>What will be the outcome of this code: </h1>
          {`for (let i = 0; i < 3; i++) {
            setTimeout(function() {alert(i); }, 1000 + 1);
          }`}
       
      </div>
    );
  };
