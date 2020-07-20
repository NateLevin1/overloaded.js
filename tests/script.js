console.log("Tests:");
overload.function('add', [String, String], (a, b)=>{
    return "Added strings: "+a+b;
});
overload.function('add', [Number, Number], (a, b)=>{
    return "Added numbers: "+(a+b);
});

console.log(overload.call('add', [1,2])); // "Added numbers: 3"
console.log(overload.call('add', ["A","B"])); // "Added strings: AB"