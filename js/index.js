var final_text = "./tanuj"
cursor = "<span id=\"cursor\">|</span>";
caret = "<span id=\"caret\">></span>";
caret2 = "<span id=\"caret2\">></span>";
var text = [
    caret + " " + cursor +  "        ",
    caret + " ." + cursor +  "       ",
    caret + " ./" + cursor +  "      ",
    caret + " ./t" + cursor +  "     ",
    caret + " ./ta" + cursor +  "    ",
    caret + " ./tan" + cursor +  "   ",
    caret + " ./tanu" + cursor +  "  ",
    caret + " ./tanuj" + cursor +  " ",
    caret + " ./tanuj  \n" + caret2 + " " + cursor +  "        "
    ];

var blink_id = -1;



function typeWriter(elem,n) {
    if (n < (text.length)) {
        elem.innerHTML = text[n];
        var time = 150;
        if (n >= text.length-2)
            time = 300;
        n++;
        setTimeout(function() {
            typeWriter(elem, n);
        }, time);
    } else {
        setTimeout(loadEverything,200);
    }
}

function loadEverything() {
    document.getElementById('cursor').style.opacity = 0;
    document.getElementById('caret').style.opacity = 0;
    document.getElementById('caret2').style.opacity = 0;
    document.getElementById('content').style.opacity = 1;
    document.getElementById('profile-img').style.opacity = 1;
    document.getElementById('footer').style.opacity = 1;
}

function blinkCursor() {
    document.getElementById('cursor').style.opacity = 0;
    setTimeout(function() {
        document.getElementById('cursor').style.opacity = 1;
    },210)
}

blink_id = setInterval(blinkCursor,420);



window.onload = function() {
    var elem = document.getElementById('terminal');
    var text = elem.innerHTML;
    // blinkCursor();
    // setTimeout(blinkCursor,420);
    // setTimeout(blinkCursor,820);
    setTimeout(function() {
        clearInterval(blink_id);
        typeWriter(elem,0);
    }, 1500);
    // loadEverything()

};