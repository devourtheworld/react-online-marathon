const sumOfLen = (...strings) => {
    let strLength = strings.reduce((value, acc) => acc.length + value, 0);
    return strLength;
};
