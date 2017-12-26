<template>
   <div> <header>
        <div><p>Uni-Planer</p>
            <a id="lgout" href="../index.html">Abmelden</a></div>
    </header>

    <p id="todo">TO-DO Liste</p>

    <p id="description">Du hast vergessen die Hausarbeit in Mathe zu machen oder dein Referat? Kein Problem! Mit diesem Tool kannst du deine Erledigungen eintragen und sie abhacken, wenn sie erledigt sind. </p>

    <div class="buttons">
        <ul class="nav">

            <button onclick="add()">Neuer Eintrag</button>
            <button onclick="entfernen()">Letzten Eintrag löschen</button>
        </ul>
    </div>

    <div class="to-do">

        <table id="liste">

            <caption>To-Do Liste</caption>

            <tr>
                <td>
                    <input type="checkbox">
                    <input type="text">
                </td>
            </tr>

            <tr>
                <td>
                    <input type="checkbox">
                    <input type="text">
                </td>
            </tr>

            <tr>
                <td>
                    <input type="checkbox">
                    <input type="text">
                </td>
            </tr>

        </table>

    </div>
   </div>
</template>

<script>
    export default {
        name: "to-do"
    }
</script>

<style>
    body {
        margin-left: 30px;
        margin-right: 30px;
        background: white;
        padding-top: 90px;
        font-family: sans-serif;
    }

    #todo{
        font-size: 30px;
        text-align: center;
    }


    /*To-DO Liste Anfang*/
    caption{
        font-size: 30px;
        background-color: bisque;
        color: black;
        border: 1px solid black;
    }

    #liste{
        width: 80%;
        height: auto;
        border: 1px solid black;
        border-spacing: 7px;
    }
    /*To-DO Liste Ende*/


    /*Serdar*/
    #lgout{

        color: white;
        margin-left: auto;
        float: right;

    }

    /*Serdar*/
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: orange;
        text-align: center;
        font-family: sans-serif;
        color: white;
    }
</style>