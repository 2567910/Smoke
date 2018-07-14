

var Timer = function(name) {

    this.name = name;
}

Timer.prototype.setEventListener = function(cname) {
    this.currentName = cname;
    var now = new Date().getTime();
    if (click < 9) {
        click++;
        console.log(click);
    } else {

        var database = firebase.database();
        var ref = database.ref().child(this.currentName + 'Time');
        var responce = ref.set(now);
        click = 0;
        console.log(responce + this.currentName + 'Time');
    }
}

Timer.prototype.getTime = function(namec) {
    console.log(namec);
    var refdb = firebase.database().ref().child(namec + 'Time');
    refdb.on('value', function(snapshot) {
        calculteDifference(namec, snapshot.val());
    });

    function calculteDifference(id, time) {
        var currentId = id;
        var timedb = time;
        console.log("claculate" + time + currentId);

        setInterval(function() {
            // Find the distance between now an the count down date
            var now = new Date().getTime();
            var distance = now - timedb;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var total = (days * 2);
            var money = (total * 32);
            var time = (total * 11);
            document.getElementById(currentId + "Tag").innerHTML = days + " - " + hours + " - " +
                minutes + " - " + seconds + "";
            document.getElementById(currentId + "total").innerHTML = total;
            document.getElementById(currentId + "money").innerHTML = (money / 100);
            document.getElementById(currentId + "timesave").innerHTML = ((total * 5) / 60);
            document.getElementById(currentId + "time").innerHTML = (time / 60);
            document.getElementById(currentId + "tote").innerHTML = ((days * 86400) / 5);
            // If the count down is finished, write some text
        }, 1000);
    }
}