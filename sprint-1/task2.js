function combineArray(arr1, arr2) {
    const tempArr = arr1.concat(arr2);
    const numArr = [];
    for (let i = 0; i < tempArr.length; i++) {
      if (typeof tempArr[i] === "number") {
        numArr.push(tempArr[i]);
      }
    }
    return numArr;
}