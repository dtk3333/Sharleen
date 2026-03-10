function unlock(){

let pass=document.getElementById("passcode").value;

if(pass==="laska"){

document.getElementById("dungeon").style.display="none";
document.getElementById("museum").classList.remove("hidden");

document.getElementById("music").play();

showPhotos();

}

else{
document.getElementById("error").innerText="Wrong password";
}

}


/* PHOTO SEQUENCE */

function showPhotos(){

setTimeout(()=>{
let p1=document.getElementById("photo1");
p1.classList.remove("hidden");
p1.classList.add("show");
},1000);

setTimeout(()=>{
let p2=document.getElementById("photo2");
p2.classList.remove("hidden");
p2.classList.add("show");
},2500);

setTimeout(()=>{
let p3=document.getElementById("photo3");
p3.classList.remove("hidden");
p3.classList.add("show");
},4000);

}
