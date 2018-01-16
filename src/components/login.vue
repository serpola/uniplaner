<template>
    <div class="container">

        <form id = "login" class="form-signin" v-on:submit.prevent="authenticate">
            <h2 class="form-signin-heading">Hier Anmelden</h2>
            <label for="inputEmail" class="sr-only">BenutzerName</label>
            <input type="text" id="inputEmail" class="form-control" placeholder="Benutzername" required autofocus v-model="user.lname">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Passwort" required autofocus v-model="user.password">
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Angemeldet bleiben
                </label>
                <router-link to="Register">Registrieren Sie sich hier!</router-link>

            </div>
            <button class="btn btn-lg btn-warning btn-block"  >Anmelden</button>
        </form>

    </div>
</template>

<script>

    import auth from '../auth/authentifizierung'
    export default {
        data(){
            return{
                user:{
                    lname:'',
                    password:''
                },
                error:''
            }
        },
        methods:{
            authenticate() {


                var user={
                    lname: this.user.lname,
                    password: this.user.password
                }

                auth.login(this,user,'secret')

            }
        }
    }
</script>

<style scoped>

</style>