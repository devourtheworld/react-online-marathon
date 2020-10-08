const Checker = require('./Checker.js');
class Movie {
   constructor(name, category, startShow){
       this.name = name;
       this.category = category;
       this.startShow = startShow;
   }
   watchMovie(){
       return("I watch the movie " + this.name + "!");
   }
}
const movie1 = new Movie ('Titanic', 'drama', 1997);
const movie2 = new Movie ('Troya', 'historical', 2004);
