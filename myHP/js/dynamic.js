$(document).ready(function() {
	var r = ["Hi.", 
    "I'm Li, Yang",
    "You can also call me Joyce Lee.", 
    "I major in Computer Science and now study at USC.",
    "I enjoy coding with Java, Python, C/C++,",
    "as well as play with HTML, CSS & JavaScript.",
    "I'm familiar with Mac OS, Linux & Windows.",
    "Eclipse, Xcode, Matlab, MySQL, Git...  are tools I realy like."]; 
    var intro = $("#intro");
    var idx = 0;

    intro.html(r[idx]);
    ++idx;

    var f = function() {
        setTimeout(function() {
            intro.attr("class","hide");
        }, 700)
        setTimeout(function() {
            intro.html(r[idx]);
            ++idx;
        }, 1400)
        setTimeout(function() {
            intro.attr("class","");
        }, 2100)
        if(idx == r.length) idx = 0;
        setTimeout(f, 3500);
    }

    setTimeout(f, 3000);
});