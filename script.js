function unlock(){

let pass=document.getElementById("passcode").value;

if(pass==="laska"){

document.getElementById("dungeonBackground").style.display="none";
document.getElementById("museum").classList.remove("hidden");

document.getElementById("music").play();

startEffects();

}

else{
document.getElementById("error").innerText="Wrong password";
}

}


function startEffects(){

let sparkleContainer=document.getElementById("sparkles");

for(let i=0;i<60;i++){

let s=document.createElement("span");

s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";

sparkleContainer.appendChild(s);

}

let butterflyContainer=document.getElementById("butterflies");

for(let i=0;i<5;i++){

let b=document.createElement("img");

b.src="butterfly.png";

b.classList.add("butterfly");

b.style.left=Math.random()*100+"vw";

butterflyContainer.appendChild(b);

}

}
