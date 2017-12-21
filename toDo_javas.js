
function add() {
var n;
   var table =  document.getElementById('liste');

    var row = table.insertRow(n);
    var cell1 = row.insertCell(0);
    cell1.innerHTML += '<input type="checkbox"> <input type="text">';
    n = n+1;
}    

function entfernen() {
 document.getElementById('liste').deleteRow(n);
}