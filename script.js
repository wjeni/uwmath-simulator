
let myDiv = document.querySelector('div');

myDiv.addEventListener('click', () => {
    myDiv.style.backgroundImage = `url('image/left_s1_1.png')`;
    document.getElementById("msg1").style.visibility = "hidden";
    document.getElementById("link").style.visibility = "hidden";
});
