function unlock(){

let pass=document.getElementById("passcode").value;

if(pass==="laska"){

document.getElementById("dungeon").style.display="none";
document.getElementById("museum").classList.remove("hidden");

document.getElementById("music").play();

createButterflies();

}

else{
document.getElementById("error").innerText="Wrong password";
}

}



function createButterflies(){

let container=document.getElementById("butterflies");

for(let i=0;i<6;i++){

let b=document.createElement("img");

b.src="butterfly.png";

b.classList.add("butterfly");

b.style.left=Math.random()*100+"vw";
b.style.animationDelay=Math.random()*20+"s";

container.appendChild(b);

}

}
