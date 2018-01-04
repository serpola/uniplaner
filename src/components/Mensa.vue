<template>
<div>
    <p id="beschreibung">Hier findest du den Mensaplan deiner Hochschule. Scroll einfach durch und such sie.</p>


    <div id="app">

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

        <select v-if="canteens.length" v-on:change="load" v-model="canteenId">
            <option v-for="c in canteens" v-bind:value="c.id">{{ c.name }}</option>
        </select>

        <p v-if="meals.length == 0">
            No meal plan.
        </p>
        <ul v-else>
            <li v-for="m in meals">{{ m.name }}</li>
        </ul>

    </div>
</div>

</template>

<script>
    export default {
        name: "mensa",

        el: '#app',
        mounted: function() {
            this.$http.get(`//openmensa.org/api/v2/canteens/`)
                .then(resp => {
                    console.log(resp.body)
                    this.$data.canteens = resp.body
                    this.$data.progress = '100%'
                })
                .catch(err => console.log(err))
        },
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
            }
        }
    }
</script>

<style scoped>

</style>