//QQ1
[1,2,3,4]

//QQ2
//This returns a new Set named referee and all of the elements are joined together in a string

//QQ3

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

m {
    [1, 2, 3] => true,
    [1, 2, 3] => false
  }

//hasDuplicate

function hasDuplicate(arr) {
    const noDups = new Set(arr);
    if (noDups.size !== arr.length) {
        return true;
    }
    return false;
}

//vowelCount

function vowelCount(str) {
    const theVowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelMap = new Map();

    for (let char of str.toLowerCase()) {
        if (theVowels.includes(char)) {
            if(vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1);
            } else {
                vowelMap.set(char, 1);
            }
        }
    }
  return vowelMap;
}
  