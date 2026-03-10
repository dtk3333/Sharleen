function unlock(){

const pass = document.getElementById("passcode").value;

if(pass === "laska"){

document.getElementById("lockScreen").style.display="none";
document.getElementById("museum").classList.remove("hidden");

}
else{
document.getElementById("error").innerText="Wrong magic word ✨";
}

}

const sparkleContainer = document.getElementById("sparkles");

for(let i=0;i<80;i++){

let s=document.createElement("span");

s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";

sparkleContainer.appendChild(s);

}

const butterflyContainer=document.getElementById("butterflies");

for(let i=0;i<6;i++){

let b=document.createElement("img");

b.src="assets/butterflies/butterfly.png";

b.classList.add("butterfly");

b.style.left=Math.random()*100+"vw";

butterflyContainer.appendChild(b);

}
