function checkAdult(age){
    if (age === undefined){
      console.log('Error Please, enter your age');
    } else if (age < 0){
      console.log('Error Please, enter positive number');
    } else if (age < 18){
      console.log('Error Access denied - you are too young!');
    } else if (typeof(age) === "string"){ 
        if (age.match(/[a-z]/i)){
          console.log('Error Please, enter number');
        }
    } else if (age%1 > 0){
      console.log('Error Please, enter Integer number');
    } else {
      console.log('Access allowed');
    }
    console.log('Age verification complete');
}