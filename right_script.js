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
    document.getElementById('R_subview1'),
    'click',
    function() {
        changebg('url(images/right_s1_1.png)');
        hide("left_arrow");
        hide("msg1");
        hide("R_subview1")
        display("R_back_arrow");
        display("msg2");
    }
);

addEvent(
    document.getElementById('R_back_arrow'),
    'click',
    function() {
        changebg('url(images/right_view.png)');
        display("left_arrow");
        display("msg1");
        display("R_subview1")
        hide("R_back_arrow");
        hide("msg2");
    }
);