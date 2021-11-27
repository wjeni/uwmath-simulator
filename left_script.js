let myDiv = document.getElementById('screen');

function hide(id) {
    return document.getElementById(id).style.visibility = "hidden";
}

function display(id) {
    return document.getElementById(id).style.visibility = "visible";
}

function changebg(img) {
    return myDiv.style.backgroundImage = img;
}

function addEvent(element, event, funct) {
    if (element.attachEvent)
        return element.attachEvent('on' + event, funct);
    else
        return element.addEventListener(event, funct, false);
}

addEvent(
    document.getElementById('L_subview1'),
    'click',
    function() {
        changebg('url(image/left_s1_1.png)');
        hide("right_arrow");
        hide("msg1");
        hide("L_subview1")
        display("L_back_arrow");
        display("msg2");
    }
);

addEvent(
    document.getElementById('L_back_arrow'),
    'click',
    function() {
        changebg('url(image/left_view.png)');
        display("right_arrow");
        display("msg1");
        display("L_subview1")
        hide("L_back_arrow");
        hide("msg2");
    }
);