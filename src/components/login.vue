<template>
    <div class="container">

        <form id = "login" class="form-signin" >
            <h2 class="form-signin-heading">Hier Anmelden</h2>
            <label for="inputEmail" class="sr-only">BenutzerName</label>
            <input type="text" id="inputEmail" class="form-control" placeholder="Benutzername" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Passwort" required>
            <div class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Angemeldet bleiben
                </label>
                <router-link to="Register">Registrieren Sie sich hier!</router-link>

            </div>
            <button class="btn btn-lg btn-warning btn-block" type="submit" >Anmelden</button>
        </form>

    </div> <!-- /container -->
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>