
export const Loop = (): JSX.Element => {
    for (let i=0; i<3; i++){setTimeout(function() {alert(i);},1000+1)}
  
    
    return (
      <div>
        <h1>What will be the outcome of this code: </h1>
          {`for (let i = 0; i < 3; i++) {
            setTimeout(function() {alert(i); }, 1000 + 1);
          }`}
       
      </div>
    );
  };
