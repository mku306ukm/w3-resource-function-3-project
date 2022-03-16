// 3. Write a JavaScript function that generates all combinations of a string.
function combinations(string) {
  listOfStrings = new Array();
  
  for (i = 0; i < string.length; i++) {
    for (j = i + 1; j < string.length + 1; j++) {
      listOfStrings.push(string.slice(i, j));
    }
  }
  return listOfStrings;
}

console.log(combinations("12"));
console.log(typeof(listOfStrings));//show object but it is Array 
