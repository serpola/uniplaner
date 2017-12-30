let app = new Vue({
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
})