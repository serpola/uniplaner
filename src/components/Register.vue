<template>
    <div>
    <header><div><p>
        Uni-Planer</p>
    </div></header>

    <h1> Tragen Sie hier Ihre Kontaktdaten ein</h1>

    <form id = "regist" action = "http://localhost:8080/api/users" method="post" enctype="application/json">
        <label for="lname" class="sr-only">Login Name</label>
        <input type="text" name="lname"id="lname" placeholder="Login Name"><br>

        <label for="vname" class="sr-only">Vorname Name</label>
        <input type="text" name="vname"id="vname" placeholder="Vorname"><br>

        <label for="nname" class="sr-only">Nachname</label>
        <input type="text" name="nname"id="nname"  placeholder="Nachname"><br>

        <label for="anschrift" class="sr-only">Anschrift</label>
        <input type="text" name="anschrift" id="anschrift"  placeholder="Anschrift"><br>

        <label for="password" class="sr-only">Password</label>
        <input type="password" name="password"id="password"  placeholder="Passwort"><br>
        <div>
        <button class="btn btn-lg btn-warning btn-block" type="submit" value="send Message" ></button>

    </div> <!-- /container -->
    </form>
</div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>

</style>