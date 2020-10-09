function mapCreator(keys, values) {
    const cities = new Map ();
    for (let i = 0; i < values.length; i++){
       if (typeof values[i] === 'string'){
         cities.set(keys[i],values[i]);
       }
    }
    return cities;
 }
 