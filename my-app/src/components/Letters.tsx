import React from "react";

export const Letters = (): JSX.Element => {

  const sentence = "this is a sentence with big first letters";
  let newArr = sentence
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  return (
    <div>
      <h1>Result of simple JS task (letters):</h1>
      <p>{newArr}</p>
    </div>
  );
};

// In this code, we are using the + operator to concatenate the capitalized first letter of each word with the rest of the word, and then joining the words back into a sentence using the join() method with a space character as the separator. We then return a JSX element containing a p tag that displays the capitalized sentence.




































