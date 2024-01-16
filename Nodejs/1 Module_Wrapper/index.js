// console.log("hello vishal singh")

//the below code is known as Module Wrapper(IIFE FUNCTION)

(function(exports,require,module,__filename,__dirname)
{
    console.log("hello from IIFE Function")
    console.log(__dirname)
    console.log(__filename)
})()