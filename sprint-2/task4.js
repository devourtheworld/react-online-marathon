const maxInterv = (...numbers) => {
  let difference = 0;
  let diffArr = [];
  if (numbers.length <= 1){
      return 0;
  }
  for (let i = 0; i < numbers.length - 1; i++){
      difference = numbers[i] - numbers[i + 1];
      if (difference < 0){
        difference = difference * -1;
      }
      diffArr.push(difference);
    }
  return(Math.max(...diffArr));
};
