<template xmlns:v-model="http://www.w3.org/1999/xhtml">

    <div>

    <header>
        <div><p>Uni-Planer</p>
            <a id="lgout" href="../index.html">Abmelden</a></div>
    </header>

    <p id="beschreibung">Hier findest du den Mensaplan deiner Hochschule. Scroll einfach durch und such sie.</p>


    <div id="mens" v-bind:onload="mounted">

        <div id="progress">
            <h1>
                Loading cantinas...
            </h1>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: progress}">
                    <span class="sr-only">60% Complete</span>
                </div>
            </div>
        </div>

        <!--
        <select v-if="canteens.length" v-on:change="load" v-model="canteenId">
            <option v-for="c in canteens" v-bind:value="c.id">{{ c.name }}</option>
        </select>

        <p v-if="meals.length == 0">
            No meal plan.
        </p>
        <ul v-else>
            <li v-for="m in meals">{{ m.name }}</li>
        </ul>
-->
    </div>
</div>

</template>

<script>
    export default {
        name: "mensa",


        data: {
            progress: 0,
            canteens: [],
            meals: [],
            canteenId: 0
        },
        methods: {
            load: function() {
                console.log('lade canteen ' + this.$data.canteenId)
                this.$http.get(`//openmensa.org/api/v2/canteens/${this.$data.canteenId}/days/20171130/meals\\`)
                    .then(resp => {
                        console.log(resp.body)
                        this.$data.meals = resp.body
                    })
            },


            mounted: function() {
                this.$http.get(`//openmensa.org/api/v2/canteens/`)
                    .then(resp => {
                        console.log(resp.body)
                        this.$data.canteens = resp.body
                        this.$data.progress = '100%'
                    })
                    .catch(err => console.log(err))
            },
        }
    }
</script>

<style>
    #lgout{

        color: white;
        margin-left: auto;
        float: right;

    }

    header{
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
        font-family: sans-serif;
    }

</style>