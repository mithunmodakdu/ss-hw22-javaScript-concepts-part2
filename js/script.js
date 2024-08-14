// example-1
function showDate(){
    document.getElementById('s_date').innerHTML=Date();
}

// example-2
function turnOnBulb(){
    document.getElementById('bulb').src="images/bulbon.gif";
}
function turnOffBulb(){
    document.getElementById('bulb').src="images/bulboff.gif";
}

// example-3
function makeBig(){
    document.getElementById('make_big').style.fontSize = "60px";
}

// example-4
function hideText(){
    document.getElementById('hide').style.display = "none";
}

// example-5
function showText(){
    document.getElementById('s_text').style.display = "block";
}

// example-6
function changeText(){
    document.getElementById('c_text').innerHTML = "consectetur adipisicing elit. Atque, maiores.";
}

// example-7
function changeColor(){
    document.getElementById('c_color').style.color = "red";
}

// example-8
window.alert('Example-8: Welcome to my JavaScript Examples')

// example-9


function add(){
    let x, y, z;
    x = 5;
    y = 7;
    z = x + y;
    document.getElementById('addition').innerHTML="z = x + y =" + z; 
}

function multiply(){
    let x, y, z;
    x = 5;
    y = 7;
    z = x * y;
    document.getElementById('multiplication').innerHTML="z = x * y =" + z; 
}

function subtract(){
    let x, y, z;
    x = 55;
    y = 15;
    z = x - y;
    document.getElementById('subtraction').innerHTML="z = x - y =" + z; 
}

function divide(){
    let x, y, z;
    x = 55;
    y = 11;
    z = x / y;
    document.getElementById('division').innerHTML="z = x / y =" + z; 
}

function modulus(){
    let x, y, z;
    x = 55;
    y = 10;
    z = x % y;
    document.getElementById('remainder').innerHTML="z = x % y =" + z; 
}


const car = {type:"Fiat", model:"500", color:"white"};

function carObject(){
    document.getElementById("car_details").innerHTML =
    "The car type: " + car.type + ", Model: " + car.model + ", Color: " + car.color;
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


function personAge(){
   
    document.getElementById("person_age").innerHTML = person["firstName"] + " " + person["lastName"] + " is " + person["age"] + " " + "years old.";
}

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function textLength(){
    document.getElementById('text_length').innerHTML = text.length;
}

let myName = "mithun kumer modak";
function makeUppercase(){
    
    document.getElementById('make_uppercase').innerHTML = myName.toUpperCase();
}




function displayPropertyValue(){
    const mySelf = {
        name: "Mithun",
        age: 34,
        city: "Mymensingh"
    };
    
    let properties = " ";

    for(let x in mySelf){
        console.log(mySelf[x])
        properties += mySelf[x] + " ";
    
    };

    document.getElementById('display_properties').innerHTML = properties;
}



function createArrayWithObjectValues(){
    
    const person1 = {
        name: "John",
        age: 30,
        city: "New York"
    };
    
    // Create an Array
    const myArray = Object.values(person1);
    console.log(myArray)
    document.getElementById('create_Array_With_Object_Values').innerHTML = myArray;
}

function createEntriesWithObjectPropertyValue(){

    const fruits = {Bananas:300, Oranges:200, Apples:500}; 

    let fruitEntries = " ";
    for(let [fruit, amount] of Object.entries(fruits)){
        fruitEntries += fruit + ": "+ amount + "<br>";
        
    }
    document.getElementById('create_Entries_WithObjectPropertyValue').innerHTML = fruitEntries;
}


function stringifyObject(){
    const person2 = {
        name: "John",
        age: 30,
        city: "New York"
    };
    document.getElementById('stringify_Object').innerHTML = JSON.stringify(person2);
}



  function createObjectConstructor(){
        // Constructor Function for Person objects
        function Person(first, last, age, eye) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eye;
            console.log(this)
        }
        
        // Create a Person object
        const myFriend = new Person("John", "Doe", 50, "blue");
        
        document.getElementById('create_Object_Constructor').innerHTML = myFriend.firstName + " " + myFriend.lastName + " is " + myFriend.age + " years old. He has " + myFriend.eyeColor + " eyes.";
  }





