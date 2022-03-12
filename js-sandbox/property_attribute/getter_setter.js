const person = {
  firstName: "Lee",
  lastName: "Yunseong",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
console.log(Object.getOwnPropertyDescriptor(person, "lastName"));
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));
