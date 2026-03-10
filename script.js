function unlock(){

let pass=document.getElementById("passcode").value;

if(pass==="laska"){

document.getElementById("dungeon").style.display="none";
document.getElementById("museum").classList.remove("hidden");

document.getElementById("music").play();

startMuseumSequence();

}

else{
document.getElementById("error").innerText="Wrong password";
}

}



function startMuseumSequence(){

/* PHOTO 1 */

setTimeout(()=>{
document.getElementById("p1").classList.remove("hidden");
document.getElementById("p1").classList.add("show");
},1000);



/* PHOTO 2 after 13 seconds */

setTimeout(()=>{
document.getElementById("p2").classList.remove("hidden");
document.getElementById("p2").classList.add("show");
},14000);



/* PHOTO 3 after another 13 seconds */

setTimeout(()=>{
document.getElementById("p3").classList.remove("hidden");
document.getElementById("p3").classList.add("show");
},27000);



/* SCROLL after photos */

setTimeout(()=>{
document.getElementById("poemScroll").classList.remove("hidden");
},40000);

}
