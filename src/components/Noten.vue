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
    export default {
        name: "noten"
    }
</script>

<style scoped>

</style>