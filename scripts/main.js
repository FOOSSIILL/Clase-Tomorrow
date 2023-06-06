import { log } from "console";
import { getformattedDate } from "./utils/dates.js";
/*import { initializeApp } from "firebase";*/

/**------------Tipos de datos---------------- */

/*Number
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
const obj = {name: "Juan", 'age': 23};*/

/**-------------------Valores y Referencias----------------- */
/*
let a = [10];
let b =  [10];
b.push(11);

console.log(a,b);*/

/**-----------------------Operadores--------------------------------------- */

//Operadores de asignación
/*
let x = 5;
x+= 6; 
x -= 10;
x*= 2;
x /= 3;

console.log(x);*/

/*Operadores de comparación
console.log(x == "5"); //Igualdad
console.log(x != "5"); //desigualdad
console.log(x === "5");//Igualdad estricta
console.log(x !== "5"); //Desigualdad estricta*/
/**
 * Mayor >
 * Maoyr o igual >=
 * Menor <
 * Menor o igual <=
 */
/*console.log(x <= 5);*/

/*Operadores aritméticos
// + - * /
const modulo = 12 % 5;//Modulo = residuo de división

x++;// x += 1
x--;// x -+ 1
-x;
x ** 3;

console.log(x);*/

/*Operadores lógicos
console.log(x > 1 && false);
console.log(x > 1 || false);
console.log(x > 1 && !false);*7

/*Operadores de string
let myString = "hola";
myString += x;*/

/*Operador condicional
(x > 1) ? -x : x;*/

/*Operador unitario
typeof [10];
delete obj.age;*/

/**---------------Coercion-------------------- */

/*Truthy 
if(true);
if([]);
if({});
if(1);
if(-1);
if("0");*/

/*Falsy
if(false);
if(0);
if(-0);
if("");
if(null);
if(undefined);
if(NaN);*/

/**----------------------Arrays------------------ */
/*const text = "hola"*/
/*onst myArray = text.split("");*/ 

/*myArray.reverse(); // [10, "hola", 4, 2]*/

/*const otherArray = myArray.slice(); 

myArray.push(11);*/

/*const myArray = ["hola", "adios", "carro", "moto", "pez", "perro"];

myArray.sort((value1, value2) => {
    //Retorna positivo = value1 se coloca depues que value2
    //Retorna negativo = value2 se coloca depues que value1
    //Retorna 0 = no cambia posicion
    if ( value1.length < value2.length) {
        return 1;
    }else if (value1.length < value2.length) {
        return -1;
    }else {
        return 0;
    }
});

console.log(myArray);*/


//DOM - Document Object Model

/*const container = document.querySelector('.container');
const nameInput = document.querySelector('input');
const btn =document.querySelector('button');
let name = '';

nameInput.addEventListener('input', (event) => {
    name = event.target.value;
})

btn.addEventListener('click', () =>{
    const nameElement = document.createElement('div');
    const prefix = container.dataset.prefix;
    nameElement.innerText = getformattedDate() + prefix + name;
    nameElement.classList.add('name-text'); 

    nameElement.addEventListener('click', () => {
        nameElement.remove();
    });
    container.appendChild(nameElement);
})*/

/**
 * click
 * focus
 * blur
 * mouseenter
 * mouseleave
 
 * input
 * keydown
 * change     
 */

//NODE PACKAGE MANAGER
/*initializeApp ();*/

/*-------------------Ejemplo-------------------*/
/*setInterval(saludar, 1000);

console.log("Terminó");

function saludar () {
    const nombre = "Juan";
//1.
    console.log("voy a saludar");

    decirHola(nombre);
//3.
    console.log("Ya saludé");
}

function decirHola(nombre) {
// 2.
    console.log('hola ' + nombre);
} */

async function getAdvice () {
    const container = document.querrySelector('.container');

    const  response =  await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    
    container.InnerHTML = data.slip.advice;
}

getAdvice();

// GET - Obtener información
// POST - Crear información
// PUT - Actualizar información
// DELETE - Borrar información






















