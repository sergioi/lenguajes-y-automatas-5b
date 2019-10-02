// 1
console.log("");// usado como salto
console.log("1.-palabras con logitud mayor a 7");
console.log("");
let mensaje2 = "El 20 de enero de 2019 se inicio  la 3 semana nacional de tecnologia";
let newMensaje2 = mensaje2.replace(/[a-z]{7,}/g, "");
console.log(mensaje2);
console.log(newMensaje2);

// 2
console.log("");// usado como salto
console.log("2.-expresiones que no finalicen con vocal.");
console.log("");
var newMensaje = /[^aeiou]$/g;
let te = "lunas";
console.log(te);
console.log(newMensaje.test("lunas"));

te = "puerto";
console.log(te);
console.log(newMensaje.test(te))


//3
console.log("");// usado como salto
console.log("3.-inicia con m y la 2da no sea vocal.");
console.log("");

var mensaje4 = /[m,M][^aeiou]/;
let newMensaje4 = "marzo";
console.log(newMensaje4 + " = " + mensaje4.test(newMensaje4));
newMensaje4 = "mrro";
console.log(newMensaje4 + " = " + mensaje4.test(newMensaje4));

//4
console.log("");
console.log("4...deteccion de comillas");// usado como salto
console.log("");

var comp = /['""']/;
let mensaje7 = '-El 20 de enero de 2019 se inicio  la 3 semana nacional de tecnologia';
console.log(mensaje7 + "=");
console.log(comp.test(mensaje7));

mensaje7 = '-El 20 de "enero" de 2019 se inicio  la 3 semana nacional de tecnologia';
console.log(mensaje7 + "=");
console.log(comp.test(mensaje7));

// ejercicio 5.
console.log("");
console.log("5.-Deteccion de ip:\n"); // resolver
let palabra5 = / [172\.0\.0\.1)]/;
let ip = "en esta horacion hay una ip 172.125.2.2";
console.log(ip);
console.log(palabra5.test(ip));
ip = "En esta oracion no hay ip";
console.log(ip);
console.log(palabra5.test(ip));

//ejercicio 6

console.log("\n6.- deteccion de hora\n.");
let palabra7 = /["H:MM:SS"]/;
let hora = "muchos salen a caminar 5:00";
console.log(hora);
console.log(palabra7.test(hora));
hora = "muchos salen a caminar ";
console.log(hora);
console.log(palabra7.test(hora));

//7
console.log("\n8.- deteccion de numero telefonico.\n");
let palabra9 = /\d\d\d+[-|" "]\d\d\d+[-|" "]\d\d+[-|" "]\d\d/;
let ornum = "aqui hay un telefono 998-105 85 12";
console.log(ornum);
console.log(palabra9.test(ornum));
ornum = "aqui no hay telefono  ";
console.log(ornum);
console.log(palabra9.test(ornum));


// 8
console.log("\n7.- deteccion de correo.\n");
let palabra8 = /[a-z][@][a-z][a-z]/;
let correo = "esta horacion tiene un correo sergio.coatlperez@itsva.edu.mx";
console.log(correo);
console.log(palabra8.test(correo));
correo = "esta horacion no tiene un correo sergio.coatlperezitsva.edu.mx";
console.log(correo);
console.log(palabra8.test(correo));


// 9
console.log("\n9.- deteccion de url.\n");

let palabra10 = /http(:)(\/)(\/)[a-z]/g;
let oracion = "aqui hay una direccion url http://www.casa.com ";
console.log(oracion);
console.log(palabra10.test(oracion));
oracion = "aqui no hay direccion urls ";
console.log(oracion);
console.log(palabra10.test(oracion));
 
//10

console.log("\n10.- deteccion de codigo postal.\n");
let palabra11 = /[\d\d\d\d\d]\ [a-z]?/;
let postal="esta oracion tiene un  codigo postal 97780 "
console.log(postal);
console.log(palabra11.test(postal));
postal="esta oracion no tiene un codigo postal "
console.log(postal);
console.log(palabra11.test(postal));
