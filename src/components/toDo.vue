<template>
    <div>
   <div> <header>
        <div><p>Uni-Planer</p>
            <a id="lgout" href="../index.html">Abmelden</a></div>
    </header>
   </div>
    <p id="todo">Deine To-Do Liste</p>
    
        <p id="beschreibung">
            Du hast vergessen die Hausarbeit in Mathe zu machen oder dein Referat? Kein Problem! Mit diesem Tool kannst du deine Erledigungen eintragen und sie abhacken, wenn sie erledigt sind.
        </p>
        
        <div id="myDIV" class="ueberschrift">
            <input type="text" id="myInput" placeholder="Aufgabe...">
            <span onclick="newElement()" class="addBtn">Add</span>
        </div>

        <ul id="myUL">
            <li>Mathe Hausarbeit</li>
            <li class="checked">WT-Projekt</li>
            <li>Meet George</li>
        </ul>
   </div>
</template>

<script>
    import td from '../components_js/toDo.js'
    export default {
        name: "to-do",
data(){

},
        methods(){
            td.newItem()
        }
    }
</script>

<style>
   body {
  margin: 0;
  min-width: 250px;
}

/*Beschreibung der Seite*/
#todo{
    font-size: 20px;
    margin-top: 75px;
    margin-bottom: 5px;
    text-align: center;
}

#lgout{
    color: white;
    margin-left: auto;
    float: right;
    
}

/*Header fix*/
header{
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: orange;
  text-align: center;
  font-family: sans-serif;
  color: white;
}

/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
    
}

/* Remove margins and padding from the list */
ul {
  margin-top: 15px;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  
  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* (zebra-stripes) */
ul li:nth-child(odd) {
  background: #F7BE81;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text FUNKTIONIERT NICHTTT*/
ul li.checked {
  background: #FE9A2E;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.ueberschrift {
  background-color: white;
  padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 30px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  border: none;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>