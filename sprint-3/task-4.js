const Checker = require('./Checker.js');

class Student {
    constructor(fullName, direction) {
      this._fullName = fullName;
      this._direction = direction;
    }
    showFullName(){
        return(this._fullName);
    }
    nameIncludes(data){
      return(this._fullName.includes(data));
    }
    static studentBuilder() {
        const stud3 = new Student ('Ihor Kohut', 'qc');
        return stud3;
    }
    get direction(){
        return this._direction;
    }
    set direction(value){
        this._direction = value;
    }
}
const stud1 = new Student ('Ivan Petrenko', 'web');
const stud2 = new Student ('Sergiy Koval', 'python');
const stud3 = new Student ('Ihor Kohut', 'qc');
