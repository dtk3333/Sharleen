function unlock(){

let pass=document.getElementById("passcode").value;

if(pass==="laska"){

document.getElementById("dungeon").style.display="none";
document.getElementById("museum").classList.remove("hidden");

document.getElementById("music").play();

showGallery();

}

else{
document.getElementById("error").innerText="Wrong password";
}

}

function showGallery(){

setTimeout(()=>{
document.getElementById("p1").classList.remove("hidden");
document.getElementById("p1").classList.add("show");
},1000);

setTimeout(()=>{
document.getElementById("p2").classList.remove("hidden");
document.getElementById("p2").classList.add("show");
},3000);

setTimeout(()=>{
document.getElementById("p3").classList.remove("hidden");
document.getElementById("p3").classList.add("show");
},5000);

}
