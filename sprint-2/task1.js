const filterNums = (arr, number, parameter, filteredArr) => {
    if (parameter === "greater") {
      filteredArr = arr.filter((value) => value > number);
    } else if (parameter === "less") {
      filteredArr = arr.filter((value) => value < number);
    } else if (parameter === undefined) {
      if (number === undefined) {
        filteredArr = arr.filter((value) => value > 0);
      } else {
        filteredArr = arr.filter((value) => value > number);
      }
    }
    return filteredArr;
};
  