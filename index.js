function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
   return function named() {
       console.log("hey")
   }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("hi")
    }
}





    


