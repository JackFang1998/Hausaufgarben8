// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email, number) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.number =number;
       
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
        return  "Manager";
    };
    getOfficeNumber (){
        return this.number;
    }
    };
  module.exports=Manager