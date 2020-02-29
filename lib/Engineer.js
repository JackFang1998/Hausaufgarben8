// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class engineer {
    constructor(name, id, email,account) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.account=account;
       
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
        return  "Engineer";
    };
    getGithub(){
        return this.account;
    };
    };
  module.exports=engineer