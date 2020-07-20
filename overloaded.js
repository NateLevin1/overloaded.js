// SEE LICENSE FOR LICENSE INFORMATION
var overload = {
    keys: {},
    function: (name, types, callback)=>{
        // args[0] == function name
        if(!overload.keys[name]) {
            overload.keys[name] = {};
        }
        // args[1] is types
        types = types.map((val)=>{ return (val.name); });
        
        overload.keys[name][types.join(",")] = callback;
        console.log(overload.keys);
    },
    call: (name, params)=>{
        // params[0] == function name
        if(!overload.keys[name]) {
            throw "No function named "+name+" exists."
        }
        let types = params.map((val)=>{ 
            return val.constructor.name;
        });
        return overload.keys[name][types.join(",")](...params);
    }
}