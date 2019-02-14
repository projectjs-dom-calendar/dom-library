//1. Взимане на съществуващ DOM елемент от страницата.

var elementGet = document.getElementsByTagName("li");
console.log(elementGet);

 //2. Добавяне на не съществуващ елемент към произволен елемент, вече съществуващ
//на HTML страницата.
function addFunction() {
var newli = document.createElement("li");
var textInLi = document.createTextNode("Item 4");
newli.appendChild(textInLi);
document.getElementById("itemsList").appendChild(newli);
};

// //3. Изтриване на съществуващ елемент от HTML страницата

function removeFunction() {
    var listOfElements = document.getElementById("itemsList");
    listOfElements.removeChild(listOfElements.childNodes[0]);
};

// //4. Промяна на свойствата на избран елемент, в това число:
// //???a. Промяна на атрибутите на елемента (id / class / data / name)
// //???b. Промяна и връщане на текстово съдържание
// //c. Промяна и връщане на HTML съдържание на елемента
// //d. Промяна на съществуващи стилове, както и добавяне на множество стилове
// //под формата на обект.



function changeTextFunction(){
document.getElementById("changeIt").value = "Text is changed";
};

function changeWidthFunction(){
    var chooseElement = document.getElementById("changeIt");
chooseElement.style.width = "500px";
};


// //5. Контрол на траверсирането спрямо селектираният елемент в това число
// //• Достъп до родител (parent element)
// //• Достъп до роднина, над елемент (sibling element)
// //• Достъп до роднина под елемент (sibling element)
// //• Достъп до всички деца на елемента (children elements)


// //показвам елемента родител на елемента li
function siblingParent(){
var firstListItem = document.querySelector('li');
var list = firstListItem.parentElement;

console.log(list);
}

// //• Достъп до роднина, над елемент (sibling element)
function siblingPrevious(){
   var x = document.getElementById("number2").previousElementSibling.innerHTML;
   
   console.log(x);
}

// //• Достъп до роднина под елемент (sibling element)
function siblingNext(){
    var x = document.getElementById("number2").nextElementSibling.innerHTML;
    
    console.log(x);
 }

//  //• Достъп до всички деца на елемента (children elements)
 function allKidsFunction(){
     var all = document.getElementById("itemsList").childNodes;
     console.log(all);
 }

//  //6/

//  //1
 function func(){
    document.getElementById("button-change-events").style.backgroundColor = "yellow";
 }



 function now(){
 $("#itemsList").css("color", "red").slideUp(2000);
 }

 function reset(){
     
    $("#itemsList").css("color", "black").slideDown(2000);

 }