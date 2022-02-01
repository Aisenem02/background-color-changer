
const body= document.getElementById('body');
const btn = document.getElementById("btn");
const rc = () => Math.random() * (255 - 0) + 0;

const  buttonClick =()=>{
body.style.background = `rgb(${rc()}, ${rc()}, ${rc()})`;
}
btn.addEventListener("click", buttonClick);

