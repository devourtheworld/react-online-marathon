function longestLogin(loginList) {
    let longest;
    let sameLength;
    let arr = [];
    for (let i = 0; i < loginList.length; i++){
      longest = 0;
      sameLength = 0;
      for (let j = 0; j < loginList.length; j++){
        if (loginList[i].length > loginList[j].length || loginList[i] === loginList[j]){
          longest++;
          if (longest === loginList.length){
            return loginList[i];
          }
        } else if (loginList[i].length >= loginList[j].length){
            sameLength++;
            if (sameLength > 1){
              arr.push(loginList[i]);
            }
        }
      }
    }
    return arr[arr.length - 1];
  }