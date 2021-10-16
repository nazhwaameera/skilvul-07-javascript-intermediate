//soal 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//soal 2
const arr11 = [1, 3, 4, 1, 2, 8];
const arr21 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let sum = 0
    let flag = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let average = sum / arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            flag++
        }
    }
    return flag
}

console.log(getAverage(arr11))
console.log(getAverage(arr21))

//soal 3
const arr23 = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(arr, num) {
    var myNewArray = arr.reduce(function(prev, curr) {
        return prev.concat(curr);
    });
    let result = myNewArray.indexOf(num)
    if (result == -1) {
        return null
    } else {
        return result
    }
}

console.log(searchInArray(arr23, 3));
console.log(searchInArray(arr23, 2));
console.log(searchInArray(arr23, 4));
console.log(searchInArray(arr23, 8));