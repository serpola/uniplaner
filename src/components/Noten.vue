<template xmlns:v-model="http://www.w3.org/1999/xhtml">
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
            </tr>
            <tr>
                <td><input type="text" name="modul" v-model:"user.modul" ></td> <!--Inputfelder -->
                <td><input type="text" name="note" v-model:"user.name" ></td>
                <td><input type="text" name="ects" v-model:"user.ects" ></td>
            </tr>
            <tr>
                <td><input type="text" name="modul" v-model:"user.modul" ></td> <!--Inputfelder -->
                <td><input type="text" name="note" v-model:"user.name" ></td>
                <td><input type="text" name="ects" v-model:"user.ects" ></td>
            </tr>
            <tr>
                <td><input type="text" name="modul" v-model:"user.modul" ></td> <!--Inputfelder -->
                <td><input type="text" name="note" v-model:"user.name" ></td>
                <td><input type="text" name="ects" v-model:"user.ects" ></td>
            </tr>
            <!-- Mit JS durch Button neue Tabellenzeile generieren -->
        </table>
    </div>
    <div id="buttons">
        <button id="newEntry" >Neuen Eintrag generieren</button><br><!--neue Tabellenzeile generieren -->
        <button id="getECTS" >ECTS berechnen</button><!-- Summe der ECTS berechnen-->
        <button id="getNotes" >Notendurchschnitt berechnen</button><!--Durchschnitt der bestandenen Noten berechnen -->
    </div>
    </div>
</template>

<script>
    export default {
        name: "noten",

        methods:{
            addEntry: function () {
                let uri = 'http://localhost:8080/api/noten';
                this.axios.post(uri, this.user).then((response) => {
                    this.$router.push({name: 'modul'})
                })


            }
        }

        methods:{
            addRow: function() {}
        }


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
    }
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