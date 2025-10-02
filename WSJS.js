var a = 's'

console.log(a)



console.log(typeof (a))

var a = 9.4


console.log(a)

console.log(typeof (a))

var amen = true

console.log(amen)

console.log(typeof(amen))

var t = [2,4,3,"Abderahmen",3.7, true]


console.log(t)

console.log(t[4])

console.log(t.length)

console.log(typeof(t))


var user = {name : "Abderahmen", age : 20, city : "Lac"}

console.log(user)

console.log(user.age)
console.log(user.city)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(typeof(user))


var a 

console.log(typeof(a))

var b = null

console.log(typeof(b))


var a = 5

var b = 2

var somme = a + b

console.log(somme)

console.log(a + b)

console.log(a - b)

console.log(a * b)

console.log(a / b)

console.log(a % b)

a = 10

console.log(a)

a = 99

a = a + 1

console.log(a)

a++

console.log(a)

a--
// a = a - 1
console.log(a)

a = a + 5

console.log(a)

a+= 10
// a = a + 10
console.log(a)


console.log(b ** 2)


var a = 5
var b = 6
var c = "5"

console.log(a>b)

console.log(a == b)

console.log(a == c)

console.log(a === c)

console.log(a != b)

console.log(a != c)

console.log(a !== c)


var a = 5
var b = 6
var c = 20

console.log(a>b && b>a)

console.log(a > b || b > a)



var age = 60


if(age <= 18){
  console.log("Mineur")
}else if(age <=60){
  console.log("Adulte")
}else{
  console.log("Vieux")
}


var mois = 5

switch(mois){
  case 1 : console.log("Janvier")
           break 
  case 2 : console.log("Fevrier")
           break  
  case 3 : console.log("Mars")
           break 
  default : console.log('Error')
}


function somme(a,b){
  return a + b
}

console.log(somme(3, 6))

console.log(somme(9, 6))

console.log(somme(3, 1))

var resultat = somme(99, 1)

console.log(resultat)


function sayHello(f){
  return "Hello " + f
}

console.log(sayHello("Amen"))
console.log(sayHello("Mahmoud"))


var t = [2,4,5,7]
// var sum = 0
// console.log(t)

// console.log(t[0])
// console.log(t[1])
// console.log(t[2])
// console.log(t[3])
// console.log(t.length)
// for(var i = 0; i < t.length; i++){
//   // console.log(sum)
//   sum = sum + t[i]
//   // console.log(t[i])
// }

// console.log(sum)


// for(var ahmed in t){
//   // console.log(ahmed)

//   console.log(t[ahmed])
// }
var sum = 0
for(var gomycode of t){
  sum = sum + gomycode
  
}

console.log(sum)
