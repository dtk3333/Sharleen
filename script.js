function unlock(){

let pass=document.getElementById("passcode").value;

if(pass==="laska"){

document.getElementById("dungeon").style.display="none";

document.getElementById("museum").classList.remove("hidden");

document.getElementById("music").play();

startGallery();

}else{

document.getElementById("error").innerText="Wrong password";

}

}

function startGallery(){

setTimeout(()=>{
show("p1");
},1000);

setTimeout(()=>{
show("p2");
},14000);

setTimeout(()=>{
show("p3");
},27000);

setTimeout(()=>{
document.getElementById("plaque").classList.remove("hidden");
},40000);

}

function show(id){

let el=document.getElementById(id);

el.classList.remove("hidden");

setTimeout(()=>{
el.classList.add("show");
},50);

}
