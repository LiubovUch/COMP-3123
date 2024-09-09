function capitalizeFirstLetter(str) {
    // Split the string into an array of words
    const words = str.split(" ");
  
    // Map through each word and capitalize the first letter
    const capitalizedWords = words.map(word => {
      // Capitalize the first letter and concatenate it with the rest of the word
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Join the array of capitalized words back into a single string
    return capitalizedWords.join(" ");
  }
  
  // Example usage
  const inputString = "the quick brown fox";
  const result = capitalizeFirstLetter(inputString);
  console.log(result);