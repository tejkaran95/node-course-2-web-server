 var square = x => x*x;


console.log(square(9));

var user = {
name: 'Andrew',
sayHi: function(name) {
    console.log(`HI ${name} ${this.name}`)
},
sayHiAlt (name) {
    console.log(`HI ${name} ${this.name} efadsff`)
}

};

user.sayHi("stephen");

user.sayHiAlt("sandas");
