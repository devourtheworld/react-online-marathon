const maxInterv = (...numbers) => {
    let a = 0;
    let b = [];
    if (numbers.length <= 1) {
      return 0;
    }
    for (let i = 0; i < numbers.length - 1; i++) {
      a = numbers[i] - numbers[i + 1];
      if (a < 0) {
        a = a * -1;
      }
      b.push(a);
    }
    return Math.max(...b);
};
