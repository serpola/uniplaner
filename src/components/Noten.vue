<template>
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
                <tr v-bind:id="note._id" v-for="note in noten">
                    <td><input type="text" v-model="note.modul"></td>
                    <td><input type="text" v-model="note.note"></td>
                    <td><input type="text" v-model="note.ect"></td>
                    <td><a @click="removeRow(note._id)">Remove</a></td>
                </tr>
                </tbody>
            </table>
            <div>
                <button class="button btn-primary" @click="addRow">Zeile hinzufügen</button>
            </div>
        </div>
    <div id="buttons">
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
                this.noten.push({modul: "",note: "", ect: "",});
            },
            removeRow: function(note_id){
                this.$data.noten.splice(this.$data.noten.indexOf(this.$data.note),1);
                let uri = 'http://localhost:8080/api/noten'
                this.axios.delete(uri, { params: {_id: note_id}})
                    .then((response)=>{
                        console.log(this.$data.noten);
                    }

                )
            },
            saveAll: function () {
                let uri = 'http://localhost:8080/api/noten';
                //filter alle raus die _id haben.!!!!!

                this.axios.post(uri, this.$data.noten).then((response) => {
                    this.$router.push({name: 'Noten'})
                })
            },
            getMethod: function(){
                let uri='http://localhost:8080/api/noten';
                this.axios.get(uri).then((response) =>{
                    this.$data.noten = response.data
                })
            },
        },
        mounted: function(){
            this.getMethod();
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