// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
   
  };
//returns id
getName(){
    return this.name
};
getId(){
    return this.id;
};
//returns email
getEmail() {
    return this.email;
};
//returns role
getRole () {
    return  "Employee";
};
};
  

module.exports=Employee