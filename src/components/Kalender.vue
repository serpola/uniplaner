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
                <div>
           <div v-bind:id="event._id" v-for="event in events" class="event-item">

                {{event.title}} {{event.date}} {{event.beschr}} <button v-on:click="removeEvent(event._id)">x</button>

            </div>
            </div>
        </template>


    </vue-event-calendar>


</div>
        <br>
        <div>
            <form v-on:submit="addEvent">
            <input type="date" v-model="newEvent.date">
            <input type="text" placeholder="Titel" v-model="newEvent.title">
            <input type="text" placeholder="Beschreibung" v-model="newEvent.beschr">
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
                events:[],
                newEvent:{},

            }
        },
        methods: {
            addEvent: function () {
                this.loading = false;
                let uri = 'http://localhost:8080/api/events';
                this.axios.post(uri,{
                    date: this.$data.newEvent.date,
                    title:this.$data.newEvent.title,
                    beschr:this.$data.newEvent.beschr,}
                ).then((response)=> {
                    this.loading =true;
                    this.$data.events.push(this.$data.newEvent);
                    window.location.reload();
                    console.log(this.$data.events);
                })
            },
            loadEvents: function () {
                this.loading = true;
                let uri = 'http://localhost:8080/api/events'
                this.axios.get(uri)
                    .then(resp=>{
                        this.$data.events = resp.data
                        console.log(this.$data.events);
                    })
            },
            removeEvent: function (event_id) {
                    let uri = 'http://localhost:8080/api/events';
                    this.axios.delete(uri, { params: {_id: event_id}})
                        .then((response)=>{
                                this.$data.events.splice(this.$data.events.indexOf(event_id),1);
                                window.location.reload();
                                console.log(this.$data.events);
                            }
                        )

            }

        },

        mounted: function () {
            let uri = 'http://localhost:8080/api/events'
            this.axios.get(uri)
                .then(resp=>{
                    this.$data.events = resp.data
                })
        },
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