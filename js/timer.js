var config = {
    apiKey: "AIzaSyAq2195z7B1TI7wzxZAs5ZfLiQ4UPK-67M",
    authDomain: "smoke-90922.firebaseapp.com",
    databaseURL: "https://smoke-90922.firebaseio.com",
    projectId: "smoke-90922",
    storageBucket: "smoke-90922.appspot.com",
    messagingSenderId: "302692762911"
};


var click = 0;
var names = ["lukas", "uli", "joerg", "mario"];
var timer;

function init() {

    firebase.initializeApp(config);
    var database = firebase.database();
    // Initialize Firebase
    for (var i = 0; i <= names.length - 1; i++) {
        $("#resetButton" + names[i]).click(resetTimer);
        timer = new Timer(names[i]);
        timer.getTime(names[i]);
    }

}

function resetTimer() {
    var id = event.target.id;
    var newid = id.substr(11);
    timer.setEventListener(newid);
}