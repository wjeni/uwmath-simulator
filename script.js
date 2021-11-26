let myDiv = document.querySelector('div');

function hide(id){
    return document.getElementById(id).style.visibility = "hidden";
}

function display(id){
    return document.getElementById(id).style.visibility = "visible";
}

function changebg(img){
    return myDiv.style.backgroundImage = img;
}

document.getElementById("L_subview1").addEventListener('click', () => {
    changebg('url(image/left_s1_1.png)');
    hide("right_arrow");
    hide("msg1");
    hide("L_subview1")
    display("back_arrow");
});

document.getElementById("back_arrow").addEventListener('click', () => {
    changebg('url(image/left_view.png)');
    display("right_arrow");
    display("msg1");
    display("L_subview1")
    hide("back_arrow");
});
