function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Child constructor
function Student(name, branch) {

    Person.call(this, name);

    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

let student1 = new Student("Anushka", "CSE");

student1.showName();
student1.showBranch();