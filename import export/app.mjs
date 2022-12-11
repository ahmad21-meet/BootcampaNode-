
//What is the difference between import and require?
//Import is used to import modules in ES6. Require is used to import modules in CommonJS.

//Give 2 node.js environment variables that are not available when using the import syntax.
//__dirname and __filename

//Create 3 functions using the export/import syntax.
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  export { add, subtract, multiply };