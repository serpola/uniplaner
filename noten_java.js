function newTableRow() { //erster Verusch zum einfügen einer Tabellenzeile
	var table_id = "tables";
	var table = document.getElementById('table_id');
	var row = table.getElementsByTagName('tr').length;
	var tr = table.insertRow( rows );
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	var td4 = document.createElement("td");
	td1.innerHTML = '<input type="text" name="modul">'
	td2.innerHTML = '<input type="text" name="note">'
	td3.innerHTML = '<input type="text" name="ects">'
	td4.innerHTML = '<input type="text" name="datum">'
	tr.appendChild( td1);
	tr.appendChild( td2);
	tr.appendChild( td3);
	tr.appendChild( td4);
} //noch nciht getestet
function AverageGrades() {

}
function CalculatorECTS() {

}
