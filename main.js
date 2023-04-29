/**------------Tipos de datos---------------- */

//Number
const num = 1;

console.log(bool);

//Boolean
const bool = false;

//String
const str = "Hola";

console.log(str);

//Null
let petName = null;


//Undefined
let myUndefinedValue;

//object
const obj = {name: "Juan", 'age': 23};

/**-------------------Valores y Referencias----------------- */

let a = [10];
let b =  [10];
b.push(11);

console.log(a,b);

/**-----------------------Operadores--------------------------------------- */

//Operadores de asignación
let x = 5;
x+= 6; 
x -= 10;
x*= 2;
x /= 3;

console.log(x);

//Operadores de comparación
console.log(x == "5"); //Igualdad
console.log(x != "5"); //desigualdad
console.log(x === "5");//Igualdad estricta
console.log(x !== "5"); //Desigualdad estricta
/**
 * Mayor >
 * Maoyr o igual >=
 * Menor <
 * Menor o igual <=
 */
console.log(x <= 5);

//Operadores aritméticos
// + - * /
const modulo = 12 % 5;//Modulo = residuo de división

x++;// x += 1
x--;// x -+ 1
-x;
x ** 3;

console.log(x);

//Operadores lógicos
console.log(x > 1 && false);
console.log(x > 1 || false);
console.log(x > 1 && !false);

//Operadores de string
let myString = "hola";
myString += x;

//Operador condicional
(x > 1) ? -x : x;

//Operador unitario
typeof [10];
delete obj.age;

/**---------------Coercion-------------------- */

//Truthy 
if(true);
if([]);
if({});
if(1);
if(-1);
if("0");

//Falsy
if(false);
if(0);
if(-0);
if("");
if(null);
if(undefined);
if(NaN);

function sayName(name) {
    if(!name) {
        console.log("No hay nombre");
    } else {
        console.log("El nombre es" + name);
    }
}

sayName("Juan");

sayName("");
sayName();