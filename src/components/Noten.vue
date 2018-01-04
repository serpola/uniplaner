<template>
    <div><header><div id="header"><p>
        Uni-Planer</p>
        <a id="lgout" href="index.html">Abmelden</a></div></header>

    <div id="app">
        <h1>{{ message}}</h1>
    </div>

    <div id="tables">
        <table>
            <tr><!-- Tabellenkopf -->
                <th>Modul</th>
                <th>Note</th>
                <th>ECTS</th>
                <th>Datum</th>
            </tr>
            <tr>
                <td><input type="text" name="modul" v-model:"blabla"></td> <!--Inputfelder -->
                <td><input type="text" name="note" v-model:"blabla"></td>
                <td><input type="text" name="ects" v-model:"blabla"></td>
                <td><input type="text" name="datum" v-model:"blabla"></td>
            </tr>
            <tr>
                <td><input type="text" name="modul" v-model:"blabla"></td> <!--Inputfelder -->
                <td><input type="text" name="note" v-model:"blabla"></td>
                <td><input type="text" name="ects" v-model:"blabla"></td>
                <td><input type="text" name="datum" v-model:"blabla"></td>
            </tr>
            <tr>
                <td><input type="text" name="modul" v-model:"blabla"></td> <!--Inputfelder -->
                <td><input type="text" name="note" v-model:"blabla"></td>
                <td><input type="text" name="ects" v-model:"blabla"></td>
                <td><input type="text" name="datum" v-model:"blabla"></td>
            </tr>
            <!-- Mit JS durch Button neue Tabellenzeile generieren -->
        </table>
    </div>
    <div id="buttons"> Brauch ich die Funktionen dann überhaupt ?
        <button id="newEntry" onclick="newTableRow()">Neuen Eintrag generieren</button><br><!--neue Tabellenzeile generieren -->
        <button id="getECTS" onclick="CalculatorECTS()">ECTS berechnen</button><!-- Summe der ECTS berechnen-->
        <button id="getNotes" onclick="AverageGrades()">Notendurchschnitt berechnen</button><!--Durchschnitt der bestandenen Noten berechnen -->
    </div>
    </div>
</template>

<script>
    //export default {
        //name: "noten"
    //}


   /* let buttons = new Vue({
            el: '#buttons',
            data: {
                tablerow:
            <td><input type="text" name="modul" ></td>
            <td><input type="text" name="note" ></td>
            <td><input type="text" name="ects" ></td>
        },
        methods: {
        add: function() {
            this.$data.tablerow.push(this.$refs['my-input'].value)
        },
    }
    })*/
</script>

<style scoped>
    header
    {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: orange;
        text-align: center;
        font-family: sans-serif;
        color: white
    }
    header p{
        font-size: 30px;
    }
    button{
        position: relative; /* or absolute ? */
        background-color: orange;
        font-size: 16px;
        margin-top: 5px;
        margin-left: 3px;
    }
    #buttons{
        margin-top: 20px;
        text-align: center;
    }
    #tables{
        margin-top: 30px;
    }
    table {
        margin: auto;

    }
    table td{ /* wieso sind diese rahmen so komisch beschissen ? >.< */
        border-style: solid; /*sieht zwar nicht perfekt aus aber ich lass es mal so.*/

    }

    header
    {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: orange;
        text-align: center;
        font-family: sans-serif;
        color: white
    }

    body {
        margin-left: 30px;
        margin-right: 30px;
        background: white;
        padding-top: 90px;
    }

    #lgout{

        color: white;
        margin-left: auto;
        float: right;

    }
</style>