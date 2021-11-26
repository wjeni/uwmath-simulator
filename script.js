let myDiv = document.getElementById('screen');

function hide(id){
    return document.getElementById(id).style.visibility = "hidden";
}

function display(id){
    return document.getElementById(id).style.visibility = "visible";
}

function changebg(img){
    return myDiv.style.backgroundImage = img;
}

function addEvent(element, evnt, funct){
    if (element.attachEvent)
     return element.attachEvent('on'+evnt, funct);
    else
     return element.addEventListener(evnt, funct, false);
}

addEvent(
    document.getElementById('L_subview1'),
    'click',
    function(){
        changebg('url(image/left_s1_1.png)');
        hide("right_arrow");
        hide("msg1");
        hide("L_subview1")
        display("back_arrow");
    }
);

addEvent(
    document.getElementById('back_arrow'),
    'click',
    function(){
        changebg('url(image/left_view.png)');
        display("right_arrow");
        display("msg1");
        display("L_subview1")
        hide("back_arrow");
    }
);