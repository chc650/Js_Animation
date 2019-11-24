var bodyElement;

function randomItem(items){
  return items[Math.floor(Math.random()*items.length)]; 
}

var items = ["https://media.giphy.com/media/VGo6rWE1toDmw/giphy.gif",
"https://media.giphy.com/media/RN1QoLazIxmGA/giphy.gif",
"https://media.giphy.com/media/SBy70JYu41qvu/giphy.gif",
"https://media.giphy.com/media/KVzcbhhJGEZmU/giphy.gif",
"https://media.giphy.com/media/JnurytSDWZkAw/giphy.gif",
"https://media.giphy.com/media/hECXzyharB5qo/giphy.gif"]

var elementData = [{
    "head": "https://media.giphy.com/media/hECXzyharB5qo/giphy.gif",
    "xSpeed": 10,
    "ySpeed": 5,
    "xDirection" : 1,
    "yDirection" : 1
  },
  {
     "head": "https://media.giphy.com/media/JnurytSDWZkAw/giphy.gif",
    "xSpeed": 20,
    "ySpeed": 10,
    "xDirection" : -1,
    "yDirection" : -1
  }
];

document.addEventListener('DOMContentLoaded', function(event) {
  bodyElement = document.getElementsByTagName("body")[0];
  // for (var i = 0; i < elementData.length; i++) {
  //   createElement(elementData[i]);
  // }
  window.setInterval(animateElements, 100);
});



function makeNewGoatData(evt) {
  var randomXSpeed = Math.random() * 10;
  var randomYSpeed = Math.random() * 10;
  var newElement = {
    "head" : randomItem(items),
    "xSpeed": randomXSpeed,
    "ySpeed": randomYSpeed,
    "xDirection" : 1,
    "yDirection" : -1
  }

  elementData.push(newElement);
  return newElement
}
function addGoat(evt){
  var p = makeNewGoatData()
  bornGoat(p, evt)
  
}

function bornGoat(incomingJSON,evt) {

  let newGoat = document.createElement("DIV");
  newGoat.classList.add("bounce");


  if (evt){
     newGoat.style.left = evt.x + "px";
     newGoat.style.top = evt.y + "px";

  }else{
     newGoat.style.left = (window.innerWidth / 2) + "px";
      newGoat.style.top = (window.innerHeight / 2) + "px";
  }
 

 let elImage = document.createElement("img");
  elImage.setAttribute("src",incomingJSON.head);

  bodyElement.appendChild(newGoat);
  newGoat.appendChild(elImage);

}
  window.addEventListener("click",function (evt){
  addGoat(evt)
})

function animateElements() {

  var allElements = document.getElementsByClassName("bounce");

  for (var i = 0; i < allElements.length; i++) {
    var oldLeft = parseInt(allElements[i].style.left);
    if (oldLeft > window.innerWidth-150) {
      elementData[i]["xDirection"] = -2;
      oldLeft = window.innerWidth-150;
    }
    if (oldLeft < 0) {
      elementData[i]["xDirection"] = 1;
      oldLeft = 0;
    }

    var newLeft = oldLeft + (elementData[i]["xSpeed"] * elementData[i]["xDirection"]);

    allElements[i].style.left = newLeft + 'px';
    var oldTop = parseInt(allElements[i].style.top);

    if (oldTop > window.innerHeight-150) {
      elementData[i]["yDirection"] = -2;
      oldTop = window.innerHeight-150;
    }
    if (oldTop < 0) {
      elementData[i]["yDirection"] = 1;
      oldTop = 0;
    }
    var newTop = oldTop + (elementData[i]["ySpeed"] * elementData[i]["yDirection"]);
    allElements[i].style.top = newTop + 'px';
  }


}