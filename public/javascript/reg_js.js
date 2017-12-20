var con = required("server");

function register() {
    


    var l_name = document.getElementById('inputLName').value;
    var v_name = document.getElementById('inputVName').value;
    var n_name = document.getElementById('inputNName').value;
    var anschrift = document.getElementById('inputAnschrift').value;
    var password = document.getElementById('inputPassword');


    app.post('/api/users',function(req, res){
        var u = new User({
            lname:l_name,
            vname: v_name,
            nname: n_name,
            password: password,
            anschrift: anschrift,
            admin: false,

        })
        user.save(function (err) {
            if (err) throw err;

            console.log('Benutzer erfolgreich gespeichert');
            res.json({ success: true });

        })



    });
}