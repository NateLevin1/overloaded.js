console.log("Tests:");

// Basic
overload.function('add', [String, String], (a, b)=>{
    return "Added strings: "+a+b;
});
overload.function('add', [Number, Number], (a, b)=>{
    return "Added numbers: "+(a+b);
});

console.log(overload.call('add', [1,2])); // "Added numbers: 3"
console.log(overload.call('add', ["A","B"])); // "Added strings: AB"

// Custom Classes
class Hello {
    talk() {
        return "Hello!";
    }
}
class Howdy {
    talk() {
        return "Howdy!";
    }
}
overload.function('talk', [Hello], (obj)=>{
    return obj.talk();
});
overload.function('talk', [Howdy], (obj)=>{
    return obj.talk();
});

console.log(overload.call('talk', [new Hello])); // "Hello!"
console.log(overload.call('talk', [new Howdy])); // "Howdy!"