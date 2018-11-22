/*global describe, it */

function takeANumber(arr, name) {
  var i = arr.length;
  arr[i] = name;
  return `Welcome, ${arr[i]}. You are number ${i + 1} in line.`;
}

function nowServing(arr) {
  idx = arr.length - 1;
  if (arr.length < 0) {
    return "There is nobody waiting to be served!";
  } else {
    let name = arr[idx];
    arr.shift;
    return `Currently serving ${name}.`
  }
}

function currentLine(arr) {
  if (arr.length === 0) {
    return "The line is currently empty."
  } else {
    let str = "The line is currently: ";
    while (i = 0; i < arr.length; i++ )
    {
      if (i === 1){
        str += `${i}. ${arr[i]}`
      } else {
        str += `, ${i}. ${arr[i]}`
      }
    }
  }
  return str;
}


