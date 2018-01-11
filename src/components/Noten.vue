<template xmlns:v-model="http://www.w3.org/1999/xhtml">
    <div>
        <header><div id="header"><p>
        Uni-Planer</p>
        <a id="lgout" href="index.html">Abmelden</a></div></header>


        <div id="app">
            <table class="table">
                <thead>
                <tr>
                    <td><strong>Modul</strong></td>
                    <td><strong>Note</strong></td>
                    <td><strong>ECT</strong></td>
                    <td></td>
                </tr>
                </thead>

                <tbody>
                <tr v-for="row in rows">
                    <td><input type="text" v-model="row.modul"></td>
                    <td><input type="text" v-model="row.note"></td>
                    <td><input type="text" v-model="row.ects"></td>
                    <td><a @click="removeRow(row)">Remove</a></td>
                </tr>
                </tbody>
            </table>
            <div>
                <button class="button btn-primary" @click="addRow">Add row</button>
            </div>
        </div>
    <div id="buttons">
        <button id="newEntry" v-on:click="addRow">Neuen Eintrag generieren</button><br><!--neue Tabellenzeile generieren -->
        <button id="getECTS" v-on:click="getEcts">ECTS berechnen</button><!-- Summe der ECTS berechnen-->
        <button id="getNotes" v-on:click="getGradesAverage">Notendurchschnitt berechnen</button><!--Durchschnitt der bestandenen Noten berechnen -->
    </div>
    </div>
</template>

<script>
    export default {
        name: "noten",

        data: {
            rows: [
                {modul: "",note: "", ect: ""},
                {modul: "",note: "", ect: ""},
            ]
        },
        methods:{
            addRow: function(){
                this.rows.push({modul: "",note: "", ect: ""},
                );
            },
            removeRow: function(row){
                //console.log(row);
                this.rows.$remove(row);
            }
        },
            addEntry: function () {
                let uri = 'http://localhost:8080/api/noten';
                this.axios.post(uri, this.user).then((response) => {
                    this.$router.push({name: 'modul'})
                })


            },



            getEcts: function(){
                var i = 0;
                var gesamt = 0;
                while(1){ /* Solange es Ects gibt sollen sie zusammen gezählt werden. */
                    // Ects = Ects an der Stelle i
                    gesamt = gesamt; // + Ects
                    i++;
                }

            },
            getGradesAverage: function(){
                var count;
                var grade; //current Grade
                var allGrades = 0;
                var soluction;

                for(var j = 0; j < tablelength; j++) {

                    if (grade != NULL) {
                        allGrades = allGrades + grade;
                        count++;
                    }
                }

                soluction = allGrades / count;

            }
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