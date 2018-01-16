<template>


    <div><div>
        <header>
            <div>
                <p>Uni-Planer</p>

            </div>
        </header>
        </div>
<div>
    <vue-event-calendar >
        <template scope="props">
            <div v-if="loading" v-on:change="loadEvents" v-model="events">
             <!--  <div v-for="(event, index) in events" v-on:change="loadEvents"class="event-item">-->
           <div v-for="event in events" class="event-item" v-on:change="loadEvents">
                <!-- In here do whatever you want, make you owner event template -->
                {{event.title}} {{event.date}} {{event.beschr}}
            </div>
            </div>
        </template>


    </vue-event-calendar>


</div>
        <br>
        <div>
            <form v-on:submit.prevent="addEvent">
            <input type="date" v-model="events.date">
            <input type="text" placeholder="Titel" v-model="events.title">
            <input type="text" placeholder="Beschreibung" v-model="events.beschr">
                <button class="btn btn-lg btn-warning">Speichern</button>
            </form>
        </div>
</div>
</template>

<script>
    import auth from '../auth/authentifizierung'
    export default {
        name: 'kalender',
        data () {
            return {
                loading: true,
                events:{}
            }
        },
        ready: function () {
            this.loading = true;
            let uri = 'http://localhost:8080/api/events'
            this.axios.get(uri)
                .then(resp=>{
                    this.$data.events = resp.data

                })
            
        }
        /*created () {
            this.loadEvents()
        },*/
        methods: {

            addEvent: function () {
                this.loading = false;
                let uri = 'http://localhost:8080/api/events';
                this.axios.post(uri, this.events).then((response)=> {
                    this.$router.push({name:'Kalender'})
                    this.loading =true;
                })
            },
            loadEvents: function () {
                this.loading = true;
                let uri = 'http://localhost:8080/api/events'
                this.axios.get(uri)
                    .then(resp=>{
                        this.$data.events = resp.data

                    })

            }
        },
        /*created: function () {
            let uri = 'http://localhost:8080/api/events'
            this.axios.get(uri)
                .then(resp=>{
                    this.$data.events = resp.data
                })
        },*/
        route: {
        }
    }
</script>

<style scoped >

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 30px;
    }

    h1, h2, h3 {
        font-weight: normal;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .t-center{
        text-align: center;
        margin: 20px;
    }
    .mt150{
        margin-top: 150px;
    }
</style>