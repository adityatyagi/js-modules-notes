# WorkingWithModules
This Repository is for the Working with JavaScript Modules Pluralsight course. 

# NOTES - Working with JavaScript Modules

Modules in JS are used so that we dont expose all our JS code upto the parent level.  

IIFE doesn't allow anything to share out of its scope until and unless it is exported.  
This way we can actually protect things from the global scope.  

But this is a bit unfriendly to read. Thus, we use modules to share the code.  

## What are modules?
ES6 has introduced modules in JS.  
`import` and `export` are the two keywords we use. `export` is used to create the modules and `import` is used to consume the module.  

They allow us to encapsulate our code in a single entity. We can expose selective pieces of codes from the module created.  

It also allows us to control access to the code and thus protect.  

We can reference our own dependencies - internally. If for example, a single module uses `lodash` library, then I dont have to import lodash globally. I can just import the library in the module which is using it.  

## MODULE CONSIDERATIONS

1. Modules are singleton: When you export something from a module, every other module that imports the same module get the SAME INSTANCE of it.  

2. Properties are bound. THis means, if some variable is exported and changed, it changes everywhere - in every other module that imports it, because from pt. 1 - Modules are singleton (using the same instance).  

3. Exports are static: Once you define what will be exposed during export, you cannot change it during runtime. Once it loaded, it stays the same.  

4. One module per file: Modules are file based. If you are loading multiple modules in your browser, you'll request those files one at a time over HTTP. We can use module bundlers like **webpack** to bundle all the modules in one file and serve it.  

# CREATING MODULES - EXPORT

## Named exports
This is where you actually export the only things that you want the other files to import or have access to. The problem with the Named exports is that you have to know what are the names of the things which are being exported from the file.  


```javascript
// 1.
export const a = 10;

// 2.
export function randomFun(){
    console.log('hey');
}

// 3.
const b = 20;
function randomFunction2(){
    console.log('hello');
}

export {b, randomFunction2};

// 4. Renaming exports
 const c = 40;
 export {c as d};

```  

## Default Exports

Use `export default <thing>` or `export {<thing> as default}`;  

Now if in any other JS file I try to import it using `import anyName from ./file.js`, I will get `<thing>`, no matter what.  

You can export 1 thing as a default value. 

## Combining named and default exports

`export {<thing1> as default, <thing2>}`;  

## Aggregating modules
When you want to club multiple imports from a single source JS file, then you aggregate modules. Now this means that if there are 3 JS files - file1.js, file2.js and file3.js and you want to import things from file2.js and file3.js into file1.js - you can either directly import the 2 into file1.js separately or you can export file3.js again from file2.js. This way when you import file2.js in file1.js, you are importing both file2.js and file3.js - BUT WITH A SINGLE IMPORT STATEMENT.  

This is no way gives file3.js does not get added to the scope for file2.js, even though you are exporting file3.js from file2.js. It is not an import.  

# USING MODULES - IMPORT
If you are using Vanilla JS, then to make use of imports in a JS file, it has to be a module.  

Create the link statement as a module with "type=module".  
`<script src="js/app.js" type="module"></script>`  

This helps the browser know that we are using modules.  

## Default imports
`import getSessions from './sessionRepository.js';` or `import anyName from './sessionRepository.js';`  

## Named imports
`import {sessionTemplate, errorMessage} from ./template.js;` ---> The imports in the { } has to be of the same named, unlike Default imports.  
Though you can rename them while importing --> ``import {sessionTemplate as ST, errorMessage as EM} from ./template.js;`  

To import everthing: use `import * as anyName from ./fileName.js;`


