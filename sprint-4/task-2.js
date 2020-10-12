function add(x, y) {
    const promise = new Promise((resolve, reject) => {
      if (typeof x === 'number' && typeof y === 'number'){
        resolve(x + y);
      } else {
        reject("Error!");
      }
    });
    return promise;
}
  