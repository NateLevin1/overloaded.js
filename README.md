# overloaded.js
Overloaded functions in javascript!

Basic usage:
`overload add(String, String, (a, b)=>{
  return "Added strings: "+a+b;
});
overload add(Number, Number, (a, b)=>{
  return "Added numbers: "+(a+b);
});

o.call(add, [1,2]); // "Added numbers: 3"
o.call(add, ["A","B"]); // "Added strings: AB"
`
