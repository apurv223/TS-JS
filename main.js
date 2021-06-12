function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
//To run transpile ts to js by tsc main.ts
//It creates main.js
//now run main.js from noe by node main.js
//-----------------------
//Two ways to declare a variable
//var or let
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //notice i is not destroyed
    //available to nearest function
    log("Final value of i " + i);
    //not the case with let
}
doSomething();
//------------------------
let a;
let b;
let c;
let d;
let g; //default type any
let e = [1, 2, 3];
let f = [a, true, 'a', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
;
let bgColor = Color.Green;
//------------------------
let mes = 'abc';
let endsWihtC = mes.endsWith('c');
let mes1;
mes1 = 'abc';
let endsWihtC1 = mes1.endsWith('c');
let endsWihtC2 = mes1.endsWith('c');
//----------------------
let log1 = function (message) {
    console.log(message);
};
let log2 = (message) => {
    console.log(message);
};
let log3 = () => console.log();
let drawPoint = (point) => {
    //do Something
};
drawPoint({ x: 1, y: 2 });
//----------------------------
// to make use of class from other file or module
//use export and import here
class Pointer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("Point is: " + this.x + " " + this.y);
    }
}
let point1 = new Pointer();
let point2 = new Pointer(5, 5);
//-----------------------------
//property in ts could be getter or setter
// instead of getX() we can use get X()
class Pointer1 {
    //automatically makes the x and y for the class
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("Point is: " + this.x + " " + this.y);
    }
    get X() {
        return this.x;
    }
    set X(value) {
        this.x = value;
    }
}
let point3 = new Pointer1(1, 2);
let x = point3.X;
point3.X = 3;
point3.draw();
//---------------------------------------------
