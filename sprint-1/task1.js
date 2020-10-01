function modifyArray(array) {
    array.shift();
    array.unshift("Start");
    array.pop();
    array.push("End");
    return array;
 }