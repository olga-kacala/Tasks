
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

    return (
      <div>
        <h1>What will be the outcome of this code: </h1>
          {`for (let i = 0; i < 3; i++) {
            setTimeout(function() {alert(i); }, 1000 + 1);
          }`}
       
      </div>
    );
  };
