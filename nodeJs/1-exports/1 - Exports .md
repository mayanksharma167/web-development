# 1 - Exports

### Exports in js

In Node.js, `module.exports` is a special object which is included in every JavaScript file in Node.js by default. It is used to expose functions, objects, or values from a file so they can be used in other JavaScript files using the `require()` function. For example, to export a function from a file, you might write:

```jsx
module.exports.myFunction = function() {
  // function code here
};

```

You could then use this function in another file like this:

```jsx
var myModule = require('./myFile');
myModule.myFunction();

```

This system allows for a modular structure in Node.js projects, where each file can have its own scope and can choose what to expose and what to keep private.

by default the exports module returns a structure