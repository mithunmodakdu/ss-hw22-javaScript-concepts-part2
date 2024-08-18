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

// example-10
function multiply(){
    let x, y, z;
    x = 5;
    y = 7;
    z = x * y;
    document.getElementById('multiplication').innerHTML="z = x * y =" + z; 
}

// example-11
function subtract(){
    let x, y, z;
    x = 55;
    y = 15;
    z = x - y;
    document.getElementById('subtraction').innerHTML="z = x - y =" + z; 
}

// example-12
function divide(){
    let x, y, z;
    x = 55;
    y = 11;
    z = x / y;
    document.getElementById('division').innerHTML="z = x / y =" + z; 
}

// example-13
function modulus(){
    let x, y, z;
    x = 55;
    y = 10;
    z = x % y;
    document.getElementById('remainder').innerHTML="z = x % y =" + z; 
}

// example-14
const car = {type:"Fiat", model:"500", color:"white"};

function carObject(){
    document.getElementById("car_details").innerHTML =
    "The car type: " + car.type + ", Model: " + car.model + ", Color: " + car.color;
}

// example-15
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

function personAge(){
   
    document.getElementById("person_age").innerHTML = person["firstName"] + " " + person["lastName"] + " is " + person["age"] + " " + "years old.";
}

// 16 & 17
// date on mouseover

// example-18
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function textLength(){
    document.getElementById('text_length').innerHTML = text.length;
}

// example-19
let myName = "mithun kumer modak";
function makeUppercase(){
    
    document.getElementById('make_uppercase').innerHTML = myName.toUpperCase();
}

// example-20
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


// example-21
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

// example-22
function createEntriesWithObjectPropertyValue(){

    const fruits = {Bananas:300, Oranges:200, Apples:500}; 

    let fruitEntries = " ";
    for(let [fruit, amount] of Object.entries(fruits)){
        fruitEntries += fruit + ": "+ amount + "<br>";
        
    }
    document.getElementById('create_Entries_WithObjectPropertyValue').innerHTML = fruitEntries;
}

// example-23
function stringifyObject(){
    const person2 = {
        name: "John",
        age: 30,
        city: "New York"
    };
    document.getElementById('stringify_Object').innerHTML = JSON.stringify(person2);
}


// example-24
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


  // example-25
  let num1, num2;
  num1 = 45;
  num2 = 50;
  num1 += num2

  function addNumber(){
    document.getElementById('add_Number').innerHTML = num1;
  }

// example-26
function turnOnBulb1(){
    document.getElementById('bulb1').src="images/bulbon.gif";
}
function turnOffBulb1(){
    document.getElementById('bulb1').src="images/bulboff.gif";
}

// example-27
function makeBig1(){
    document.getElementById('make_big1').style.fontSize = "60px";
}

// example-28
function hideText1(){
    document.getElementById('hide1').style.display = "none";
}

// example-29
function showText1(){
    document.getElementById('s_text1').style.display = "block";
}

// example-30
function changeText1(){
    document.getElementById('c_text1').innerHTML = "consectetur adipisicing elit. Atque, maiores.";
}

// example-31
function changeColor1(){
    document.getElementById('c_color1').style.color = "red";
}

// example-32
let escapeText = "We are the so-called \"Vikings\" from the north.";
function useEscapeCharacter(){
    document.getElementById('use_Escape_Character').innerHTML = escapeText;

}

// example-33
let stringText = "John";
let newStringText = new String("John");
function stringNewString(){
    document.getElementById('string_NewString').innerHTML = typeof stringText + "<br/>" + typeof newStringText;
}

// example-34
let stringText1 = "Hello World";
function getCharAtIndex(){
    document.getElementById('get_CharAtIndex').innerHTML = stringText1.charAt(0);
}

// example-35
let partOfStringText = "Amar Sonar Bangla";
function getPartOfString(){
    document.getElementById('getPart_OfString').innerHTML = partOfStringText.slice(11, 17);
}

// example-36
let convertUpperText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ducimus";
function convertUpperCase(){
    document.getElementById('convert_UpperCase').innerHTML = convertUpperText.toUpperCase();
}

// example-37
let convertLowerText = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. NESCIUNT, DUCIMUS";
function convertLowerCase(){
    document.getElementById('convert_LowerCase').innerHTML = convertLowerText.toLowerCase();
}

// example-38
let joinText1 = "Lorem";
let joinText2 = "ipsum";
function joinTwoStringsUsingConcat(){
    document.getElementById('join_TwoStrings_UsingConcat').innerHTML = joinText1.concat(" ", joinText2);
}

// example-39
let removeWhiteSpaceText = "    dolor   ";
let afterRemoveWhiteSpaceText = removeWhiteSpaceText.trim();
function removeWhiteSpace(){
    document.getElementById('remove_WhiteSpace').innerHTML = afterRemoveWhiteSpaceText.length;
}

// example-40
let padText1 = '5';
let padText2 = '0';
let paddedText = padText1.padStart(8, padText2);

function getPaddedText(){
    document.getElementById('get_Padded_Text').innerHTML = paddedText;
}

// example-41
let repeatText = "Mithun";
function getRepeatedText(){
    document.getElementById('get_Repeated_Text').innerHTML = repeatText.repeat(10);
}

// example-42
let replaceText = "Please visit Microsoft and Microsoft!";
let replacedText = replaceText.replace(/MICROSOFT/i, "w3school");
function getReplacedText(){
    document.getElementById('get_Replaced_Text').innerHTML = replacedText;
}

// example-43
let splitText = "Hello";
let arrayBySplit = splitText.split("");
function getElementsOfArrayBySplit(){
    let elements = " ";
    for(i = 0; i < arrayBySplit.length; i++){
        elements += arrayBySplit[i] + "<br/>"
    }
    document.getElementById('getElements_OfArrayBySplit').innerHTML = elements;
}
// example-44
let convertLowerText1 = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. NESCIUNT, DUCIMUS";
function convertLowerCase1(){
    document.getElementById('convert_LowerCase1').innerHTML = convertLowerText1.toLowerCase();
}

// example-45
let joinText11 = "Lorem";
let joinText21 = "ipsum";
function joinTwoStringsUsingConcat1(){
    document.getElementById('join_TwoStrings_UsingConcat1').innerHTML = joinText11.concat(" ", joinText21);
}

// example-46
let removeWhiteSpaceText1 = "    dolor   ";
let afterRemoveWhiteSpaceText1 = removeWhiteSpaceText1.trim();
function removeWhiteSpace1(){
    document.getElementById('remove_WhiteSpace1').innerHTML = afterRemoveWhiteSpaceText1.length;
}

// example-47
let padText11 = '5';
let padText21 = '0';
let paddedText1 = padText11.padStart(8, padText21);

function getPaddedText1(){
    document.getElementById('get_Padded_Text1').innerHTML = paddedText1;
}

// example-48
let repeatText1 = "Mithun";
function getRepeatedText1(){
    document.getElementById('get_Repeated_Text1').innerHTML = repeatText1.repeat(10);
}

// example-49
let replaceText1 = "Please visit Microsoft and Microsoft!";
let replacedText1 = replaceText1.replace(/MICROSOFT/i, "w3school");
function getReplacedText1(){
    document.getElementById('get_Replaced_Text1').innerHTML = replacedText1;
}

// example-50
let splitText1 = "Hello";
let arrayBySplit1 = splitText1.split("");
function getElementsOfArrayBySplit1(){
    let elements1 = " ";
    for(i = 0; i < arrayBySplit1.length; i++){
        elements1 += arrayBySplit1[i] + "<br/>"
    }
    document.getElementById('getElements_OfArrayBySplit1').innerHTML = elements1;
}








