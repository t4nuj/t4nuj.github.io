cursor = "<span id=\"cursor\">|</span>";
caret = "<span id=\"caret\">></span>";
caret2 = "<span id=\"caret2\">></span>";


// hardcoded hack to ensure text remains centered with cursor and caret
// find a more elegant solution later
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

// web api constants for finding how a person reached the page
// found at https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation

var TYPE_NAVIGATE = 0;
var TYPE_RELOAD = 1;
var TYPE_BACK_FORWARD = 2;
var TYPE_RESERVED = 255;


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

var navType = window.performance.navigation.type; 
var blink_id = null;

function clear_transitions() {
    // By setting class this way, a reflow is triggered which avoids
    // race condition while setting css styles 
    // (avoids the problem of animation being triggered before animation is cleared)

    document.getElementById('cursor').setAttribute("class","no-trans");
    document.getElementById('caret').setAttribute("class","no-trans");
    document.getElementById('caret2').setAttribute("class","no-trans");
    document.getElementById('content').setAttribute("class","no-trans");
    document.getElementById('profile-img').setAttribute("class","no-trans");
    document.getElementById('footer').setAttribute("class","no-trans");
}

function animate_website() {
    blink_id = setInterval(blinkCursor,420);
    window.onload = function() {
    var elem = document.getElementById('terminal');
    setTimeout(function() {
            clearInterval(blink_id);
            typeWriter(elem,0);
        },1500);
    };
}

if(navType || navType === 0) {
    
    // Don't want transition animations when page is reached by pressing back/forward, bad ux.
    if(navType === TYPE_BACK_FORWARD) {
        var elem = document.getElementById('terminal')
        elem.innerHTML = text[text.length-1]
        clear_transitions();
        loadEverything();
    }
    else {
        animate_website();       
    }
} else {
    // don't know how we got here, let's animate 
    animate_website();
}