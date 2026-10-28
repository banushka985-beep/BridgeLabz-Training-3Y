
"use strict";

function outer() {
    console.log("Outer count:", count);

    var count = 5;

    const inner = () => {
     
        console.log("Inner count:", count);

        var count = 10;
    };

    inner();

    console.log("Outer count after inner:", count);
}

outer();
