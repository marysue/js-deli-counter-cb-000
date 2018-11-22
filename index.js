/*global describe, it */

function takeANumber(arr, name) {
  var i = arr.length;
  arr[i] = name;
  return `Welcome, ${arr[i]}. You are number ${i + 1} in line.`;
}

function nowServing(arr) {
  //otherDeli = ["Steven", "Blake", "Avi"];
  var idx = arr.length - 1;
  if (idx < 0) {
    return "There is nobody waiting to be served!";
  } else {
    let name = arr[0];
    //arr.shift;

    return `Currently serving ${arr.shift()}.`
  }
}

function currentLine(arr) {
  if (arr.length === 0) {
    return "The line is currently empty."
  } else {
    var str = "The line is currently: ";
    for (let i = 0; i < arr.length; i++ )
    {
      if (i === 0){
        str += `${i + 1}. ${arr[i]}`
      } else {
        str += `, ${i + 1}. ${arr[i]}`
      }
    }
  }
  return str;
}
