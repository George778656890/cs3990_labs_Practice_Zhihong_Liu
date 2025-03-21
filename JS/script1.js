// function greetings()
// {
//     console.log(makeGreet());
// }

// function makeGreet()
// {
//     return 'Rise & Shine!';    
// }

// greetings();

// for (var i = 0; i < 3; i++) {
//     var name = "Hanna";
// }
// console.log(i);  //3, "i" is visible after loop, it's a global variable
// console.log(name); //"name" "i" is visible after loop, it's a global variable

// var name ="Hanna"
// var name ="NotHanna" //it doesn't trigger an error
// alert(name); //"NotHanna" 

// alert(myprof);
// var myprof="Hanna"

// const MY_PROF="Hanna";
// myProf="NotHanna"; // error, can't reassign Hanna!

// let myProf="Hanna"
// console.log(`Hi from ${myProf}`)


// alert("Hi from Hanna!")
// let res=confirm ("Do you like CS3990?")
// if (res) alert ("Glad to know!")

// let userName=prompt("Your name?","Hanna")
// alert(`Hi ${userName}! Nice to meet you!`)


/*

function sayHi1() {
    let msg = "Hello, I'm Hanna"; // local variable  
    alert(msg);
}
  
sayHi1(); // Hello,  I'm Hanna
alert( msg ); // <-- Error! The variable is local to the function

let userName = 'Hanna';

function sayHi2() {
  let msg = 'Hello, ' + userName;
  alert(msg);
}
sayHi2(); // Hello, Hanna

let user = 'Hanna';

function sayHi3() {
    user='Franco' //changed the value of the outer variable
    let msg = 'Hello, ' + userName;
    alert(msg);
}

console.log( user ); // Hanna before the function sayHi3 call
sayHi3(); // Hello, Franco
console.log( user ); // Franco after the function sayHi3 call

let instructor = 'Hanna';

function sayHi4() {
    let instructor='Franco' //declare a local (its own) instructor variable 
    let msg = 'Hello, ' + instructor;
    alert(msg); 
}

console.log( instructor ); // Hanna 
sayHi4()//Hello, Franco
console.log( instructor ); // Hanna

*/
/*
function HiFromHanna() {
    console.log('Hi! I am Hanna');
  }

setTimeout(HiFromHanna);//immediate execution ==regular call
setTimeout(HiFromHanna, 1000);////execution in 1 sec

function HiFromHanna1(username) {
    console.log(`Hi ${username}! I am Hanna`);
  }

setTimeout(HiFromHanna1, 1000, 'Joe');////execution in 1 sec
*/

//setTimeout("console.log('Hi! I am Hanna')", 1000);//NOT recommended!!!
//setTimeout(()=>console.log('Hi! I am Hanna'), 1000); //correct way

/*
let timerID = setTimeout(() => alert("It will be never displayed!"), 1000);
alert(timerID); // timer identifier

clearTimeout(timerID);
alert(timerID); // same identifier (doesn't become null after canceling)
*/

/*
//show the message every 5 seconds
let timerID = setInterval(() => alert('Hi!'), 5000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerID); alert('Bye-Bye!'); }, 5000);
*/

// let i = 1;
// setInterval(function() {
//   func(i++);
// }, 100);

// function func(num) {
//     alert(`Hi${num}! I am Hanna`);
//   }

// let i = 1;
// setInterval(()=>func(i++), 100);

// let j = 1;
// setTimeout(function run() {
//   func(j++);
//   setTimeout(run, 100);
// }, 100);


let LogIn=()=>{
  let userType=prompt("Who are you?","Student");

  let content="";

  if(userType.toLowerCase()=="admin"){
    content +="<button onclick='favouriteAnimal()'>Favourite Animal</button>";
    content +="<button onclick='sayHi()'>Say Hi</button>";
    document.write(content);
  }else if(userType.toLowerCase()=="student"){
    content="<button onclick='sayHi()'>Say Hi</button>";
    document.write(content);
  }else{
  alert("I don't know you");}

}


let sayHi=()=>{
  let language=prompt("What is your language? (Eng,Fr,De,Spa)");
  language=language.toLowerCase();

  let greeting="";
  switch(language){
    case "eng":
      greeting="Hello!";
      break;
    case "fr":
      greeting="Bonjour!";
      break;
    case "de":
      greeting="Hallo!";
      break;
    case "spa":
      greeting="Hola!";
      break;
    default:
      greeting="Sorry,but I don't speak your language";
  }
  alert(greeting);
}

let favouriteAnimal=()=>{ 
  let birthYear=prompt("What is your birth year?");
  let age=2025- parseInt(birthYear);

  if(age>=18){
   
    displayImage("Images/banana.jpg");

    if(age>=18 && age<=55){
      let animal=prompt("What is your favourite animal? (Cat,Dog,Frog,Mouse)");
      animal=animal.toLowerCase();

      switch(animal){
        case "cat":
          displayImage("Images/cat.jpg");
          break;
        case "dog":
          displayImage("Images/dog.jpg");
          break;
        case "frog":
          displayImage("Images/frog.jpg");
          break;
        case "mouse":
          displayImage("Images/mouse.jpg");
          break;
        default:
          alert("Sorry, but I don't have the image of your favourite animal");
    }

    
    }else if(age>55){
      alert("Much like mathematics, programming is a logico-deductive system. And I think the important point that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. However, insofar as there is art in mathematics, there is philosophy in mathematics. Insofar as there is art in programming, there is philosophy in programming.");
    }




  }else{
    alert("Content is not available due to age restrictions");
  }
}

let displayImage=(imagePath)=>{
  let imageContainer = document.createElement('div');  
  imageContainer.innerHTML = `  <img src=${imagePath}>  `;  
  document.body.appendChild(imageContainer); 
}