
let myDiv = document.querySelector('div');

function hide(id){
    return document.getElementById(id).style.visibility = "hidden";
}

function changebg(img){
    return myDiv.style.backgroundImage = img;
}

myDiv.addEventListener('click', () => {
    changebg(`url(image/left_s1_1.png)`);
    hide("link");
    hide("msg1");
});
