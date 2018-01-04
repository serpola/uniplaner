<template>
    <div>
    <header><div><p>Uni-Planer</p></div></header>
    <h1> Tragen Sie hier Ihre Kontaktdaten ein</h1>

    <form v-on:submit.prevent="addUser">
        <div>
        <label>Login Name:</label><br>
        <input type="text" placeholder="Login Name" v-model="user.lname"><br>
        </div>
        <div>
        <label>Vorname:</label><br>
        <input type="text" placeholder="Vorname" v-model="user.vname"><br>
        </div>
        <div>
        <label>Nachname:</label><br>
        <input type="text" placeholder="Nachname" v-model="user.nname"><br>
        </div>
        <div>
        <label>Anschrift:</label><br>
        <input type="text" placeholder="Anschrift" v-model="user.anschrift"><br>
        </div>
        <div>
        <label>Password:</label> <br>
        <input type="password" placeholder="Passwort" v-model="user.password"><br>
        </div>
        <div>
        <button class="btn btn-lg btn-warning btn-block">Registrieren</button>
    </div> <!-- /container -->
    </form>
</div>
</template>

<script>
    export default {
       data(){
            return{
                user:{}
            }
        },
        methods:{
            addUser: function () {
                let uri = 'http://localhost:8080/api/users';
                this.axios.post(uri, this.user).then((response) => {
                    this.$router.push({name: 'login'})
                })


            }
        }
    }
</script>

<style scoped>

</style>