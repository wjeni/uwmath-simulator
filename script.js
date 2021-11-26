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

// Why changed code style? 
//https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick

function addEvent(element, event, funct){
    if (element.attachEvent)
     return element.attachEvent('on'+event, funct);
    else
     return element.addEventListener(event, funct, false);
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


// Try many different ways of coding in attempt to add an event to another element. All have failed
// The function works if it is put in the html file using eventListener, however it strangely doesn't worke in the js file.
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