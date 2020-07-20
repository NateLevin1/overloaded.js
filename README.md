# overloaded.js
Overloaded functions in javascrip in just 24 lines of code!

Basic usage:
```javascript
overload.function('add', [String, String], (a, b)=>{
    return "Added strings: "+a+b;
});
overload.function('add', [Number, Number], (a, b)=>{
    return "Added numbers: "+(a+b);
});

console.log(overload.call('add', [1,2])); // "Added numbers: 3"
console.log(overload.call('add', ["A","B"])); // "Added strings: AB"
```

It even works with custom classes!
```javascript
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
```

# Compatibility
Supports: <br>
**Chrome**: 15+ <br>
**Edge**: 14+ <br>
**Firefox**: 1+ <br>
**Internet Explorer**: None <br>
**Opera**: 10.5+ <br>
**Safari**: 6+ <br>
**Node.js**: Yes <br>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#bcd:javascript.builtins.Function.name">See full support data on MDN.</a>
