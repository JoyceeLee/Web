(function dynamic() {
	var r = ["Hi.", "I'm Li, Yang", "I major in Computer Science and now study at USC"]; 
    var intro = document.getElementById("intro");
    var idx = 0;

    intro.innerHTML= r[idx];
    ++idx;

    var f = function() {
        setTimeout(function() {
            intro.className = "hide";
        }, 700)
        setTimeout(function() {
            intro.innerHTML= r[idx];
            ++idx;
        }, 1400)
        setTimeout(function() {
            intro.className = "";
        }, 2100)
        if(idx == r.length) idx = 0;
        setTimeout(f, 3500);
    }

    setTimeout(f, 3000);

}).call(this);