/*Funcion Flecha*/

/* function greetings() {
  return "Hola";
} */
const gretings = word =>  
    {return 'hola' }
console.log (gretings ())


/* function division(a,b) {
  return a / b;
} */
const division = (a,b) => 
    { return a / b }
console.log (division (4,2))

/*function myName(name) {
  return `Mi nombre es ${name}`;
} */
const myName = name => `Mi nombres es ${name}`
console.log (myName ("Marjorie"))

/* 
Convierte las siguientes funciones en funciones flecha:
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}	 */
const test2 = () => "Funcion test 2 ejecutada"
console.log ("Funcion test 2 ejecutada")

const test1 = callback => callback()
console.log (test1)



/*Foreach*/
let people = [
    { name: 'Jamiro', age: 45 },
    { name: 'Juan', age: 35 },
    { name: 'Paco', age: 34 },
    { name: 'Pepe', age: 14 },
    { name: 'Pilar', age: 24 },
    { name: 'Laura', age: 24 },
    { name: 'Jenny', edad: 10 },
   ]


  //  Crea un array con la gente mayor de 25 años y muéstralo por consola.
  const agefilter = []
people.forEach ((ages) => {
  if (ages.age > 25) {
    agefilter.push(ages)
  }
} )

// console.log (agefilter)

// Crea un array con la gente que empieza por J. 
const letterj = []
 people.forEach ((letters) => { 
 if  (letters.name [0] === 'J') {
      letterj.push (letters)
 }
})
// console.log (letterj)



/*Map*/ 
 //Sacar gente mayor de 25 y monstrar por pantalla
const arraymayor25 = []
people.map ((ages) => {
  if (ages.age > 25 )
    arraymayor25.push (ages)

})
console.log (arraymayor25)

const arrayletterj = []
 people.forEach ((letters) => { 
 if  (letters.name [0] === 'J') {
      arrayletterj.push (letters)
 }
})
console.log (arrayletterj)


const numbers1 = [ 4, 5, 6, 7, 8, 9, 10]

const elevarsimismo =numbers1.map((numero)=>
  Math.pow(numero,numero))

console.log (elevarsimismo)



/*Filter*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*Sacar el numero impar*/
const impar = numbers.filter (number => number %2 !== 0)
console.log (impar)

//Filtar los platos verganos y sacar una frase

const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ]

const vegan = foodList.filter(platos => platos.isVeggie)
vegan.forEach(veganen => {
  console.log ('Que rico ' +veganen.name+' me voy a comer! ')
  
});


/*Reduce*/
//obtén la multiplicación de todos los elementos
const numbers2 = [39, 2, 4, 25, 62]
const multi = numbers2.reduce ((a,b)=> a*b)
console.log (multi)




   
