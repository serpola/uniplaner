<template>
<div>
    <header><div><p>
        Uni-Planer</p>
        <router-link to="login">Anmelden</router-link>
       </div></header>

    <br>
    <article id="indx">
        <h1>Herzlich Willkommen bei deinem individuellen UniPlaner</h1>
        <p>
        Herzlich Willkommen bei deinem individuellen UniPlaner.
        Hier kannst du deinen Unikalender, deine To-Do-Liste und deine erhaltenen Noten eintragen und verwalten.
        Zusätzlich kannst du nachschauen welche Gerichte eure Mensa heute zu bieten hat.
    </p></article>

    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />

    <img src="pics/icons_index/kalender/kalender_64.png" alt="Kalender">
    <router-link to="Kalender">Kalender</router-link>
    <br>
    <img src="pics/icons_index/grades/grades_64.png" alt="Noten">
    <router-link to="Noten">Noten</router-link>
    <br>

    <img src="pics/icons_index/notepade/notepad_64.png" alt="Notizen">
    <router-link to="toDo">ToDo</router-link>
</div>
</template>

<script>
    export default {
        name: "start"
    }
</script>

<style>

    #t1{
        font-size:100px;
        font-family: Arial, sans-serif;
        background-color: orange;
        color: white;
        position: fixed;

    }

    header
    {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: orange;
        text-align: center;
        font-family: sans-serif;
        color: white
    }

    header p{
        font-size: 30px;
    }

    articel{
        margin-top:auto;
        font-family: sans-serif;
    }


    body {
        margin-left: 30px;
        margin-right: 30px;
        background: white;
        padding-top: 90px;
    }

    #indx{
        margin-top: auto;
        font-family: sans;
    }

    article h1 {
        font-size: 32px;
    }

    article p{

    }

    #lgn{

        color: white;
        margin-left: auto;
        float: right;

    }

    img{
        margin:0 auto;

    }



    /*-------------------------
    Please follow me @maridlcrmn
    /*-------------------------*/


    .material-button-anim {
        position: relative;
        padding: 127px 15px 27px;
        text-align: center;
        max-width: 320px;
        margin: 0 auto 20px;
    }

    .material-button {
        position: relative;
        top: 0;
        z-index: 1;
        width: 70px;
        height: 70px;
        font-size: 1.5em;
        color: #fff;
        background: #2C98DE;
        border: none;
        border-radius: 50%;
        box-shadow: 0 3px 6px rgba(0,0,0,.275);
        outline: none;
    }
    .material-button-toggle {
        z-index: 3;
        width: 90px;
        height: 90px;
        margin: 0 auto;
    }
    .material-button-toggle span {
        -webkit-transform: none;
        transform:         none;
        -webkit-transition: -webkit-transform .175s cubic-bazier(.175,.67,.83,.67);
        transition:         transform .175s cubic-bazier(.175,.67,.83,.67);
    }
    .material-button-toggle.open {
        -webkit-transform: scale(1.3,1.3);
        transform:         scale(1.3,1.3);
        -webkit-animation: toggleBtnAnim .175s;
        animation:         toggleBtnAnim .175s;
    }
    .material-button-toggle.open span {
        -webkit-transform: rotate(45deg);
        transform:         rotate(45deg);
        -webkit-transition: -webkit-transform .175s cubic-bazier(.175,.67,.83,.67);
        transition:         transform .175s cubic-bazier(.175,.67,.83,.67);
    }

    #options {
        height: 70px;
    }
    .option {
        position: relative;
    }
    .option .option1,
    .option .option2,
    .option .option3 {
        filter: blur(5px);
        -webkit-filter: blur(5px);
        -webkit-transition: all .175s;
        transition:         all .175s;
    }
    .option .option1 {
        -webkit-transform: translate3d(90px,90px,0) scale(.8,.8);
        transform:         translate3d(90px,90px,0) scale(.8,.8);
    }
    .option .option2 {
        -webkit-transform: translate3d(0,90px,0) scale(.8,.8);
        transform:         translate3d(0,90px,0) scale(.8,.8);
    }
    .option .option3 {
        -webkit-transform: translate3d(-90px,90px,0) scale(.8,.8);
        transform:         translate3d(-90px,90px,0) scale(.8,.8);
    }
    .option.scale-on .option1,
    .option.scale-on .option2,
    .option.scale-on .option3 {
        filter: blur(0);
        -webkit-filter: blur(0);
        -webkit-transform: none;
        transform:         none;
        -webkit-transition: all .175s;
        transition:         all .175s;
    }
    .option.scale-on .option2 {
        -webkit-transform: translateY(-28px) translateZ(0);
        transform:         translateY(-28px) translateZ(0);
        -webkit-transition: all .175s;
        transition:         all .175s;
    }

    @keyframes toggleBtnAnim {
        0% {
            -webkit-transform: scale(1,1);
            transform:         scale(1,1);
        }
        25% {
            -webkit-transform: scale(1.4,1.4);
            transform:         scale(1.4,1.4);
        }
        75% {
            -webkit-transform: scale(1.2,1.2);
            transform:         scale(1.2,1.2);
        }
        100% {
            -webkit-transform: scale(1.3,1.3);
            transform:         scale(1.3,1.3);
        }
    }
    @-webkit-keyframes toggleBtnAnim {
        0% {
            -webkit-transform: scale(1,1);
            transform:         scale(1,1);
        }
        25% {
            -webkit-transform: scale(1.4,1.4);
            transform:         scale(1.4,1.4);
        }
        75% {
            -webkit-transform: scale(1.2,1.2);
            transform:         scale(1.2,1.2);
        }
        100% {
            -webkit-transform: scale(1.3,1.3);
            transform:         scale(1.3,1.3);
        }
    }

</style>