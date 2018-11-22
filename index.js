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

  describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
