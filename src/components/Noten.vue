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
                <tr v-bind:id="note.modul" v-for="note in noten">
                    <td><input type="text" v-model="note.modul"></td>
                    <td><input type="text" v-model="note.note"></td>
                    <td><input type="text" v-model="note.ect"></td>
                    <td><a @click="removeRow(note)">Remove</a></td>
                </tr>
                </tbody>
            </table>
            <div>
                <button class="button btn-primary" @click="addRow">Zeile hinzufügen</button>
            </div>
        </div>
    <div id="buttons">
        <button id="getECTS" v-on:click="getEcts">ECTS berechnen</button><!-- Summe der ECTS berechnen-->
        <button id="getNotes" v-on:click="getGradesAverage">Notendurchschnitt berechnen</button><!--Durchschnitt der bestandenen Noten berechnen -->
        <button id="save" v-on:click="saveAll">Speichern</button>
    </div>
    </div>
</template>

<script>
    export default {
        name: "noten",

        data() { return{
            noten:[]
        }},
        methods:{
            addRow: function(){
                this.noten.push({modul: "",note: "", ect: ""} );
            },
            removeRow: function(note){
                //console.log(note);
                this.noten.$remove(note);
            },

            saveAll: function () {
                let uri = 'http://localhost:8080/api/noten';
                this.axios.post(uri, this.$data.noten).then((response) => {
                    this.$router.push({name: 'Noten'})
                })
            },
            getEcts: function(){
                var i = 0;
                var gesamt = 0;
                while(1){ /* Solange es Ects gibt sollen sie zusammen gezählt werden. */
                    // ects = Ects an der Stelle i
                    gesamt = gesamt; // + ects;
                    i++;
                }
                //console.log(gesamt);
            },
            getGradesAverage: function(){
                var count;
                var grade; //current Grade
                var allGrades = 0;
                var solution;

                for(var j = 0; j < noten.length(); j++) {

                    if (grade != NULL) {
                        allGrades = allGrades + grade;
                        count++;
                    }
                }

                solution = allGrades / count;
                //console.log(solution);
            }




        },







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
        position: relative;
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
    table td{
        border-style: solid;

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