/* ==========================================================
   STARTUP SPARK AI
   Premium JavaScript
   Part 1
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTS
========================================================== */

const heroButton = document.querySelector(".primary-btn");
const loadingScreen = document.getElementById("loading-screen");
const generateButton = document.querySelector(".generator-box button");
const outputCards = document.querySelectorAll(".output-card");
const counters = document.querySelectorAll(".hero-stats h2");

/* ==========================================================
   LOADING SCREEN
========================================================== */

function showLoading(){

    if(!loadingScreen) return;

    loadingScreen.style.display="flex";

    setTimeout(()=>{

        loadingScreen.style.display="none";

    },2200);

}

if(heroButton){

heroButton.addEventListener("click",showLoading);

}

if(generateButton){

generateButton.addEventListener("click",showLoading);

}

/* ==========================================================
   FADE UP ANIMATION
========================================================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.25
});

document.querySelectorAll(

".feature-card,.timeline-card,.price-card,.testimonial-card,.output-card"

).forEach(card=>{

card.classList.add("fade-up");

observer.observe(card);

});

/* ==========================================================
   COUNTER ANIMATION
========================================================== */

function animateCounter(el,target){

let count=0;

const speed=Math.max(10,Math.floor(target/100));

const timer=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(timer);

}

if(target===98){

el.innerHTML=count+"%";

}

else if(target===140){

el.innerHTML=count+"+";

}

else if(target===25){

el.innerHTML=count+"K+";

}

},20);

}

if(counters.length>=3){

animateCounter(counters[0],25);

animateCounter(counters[1],140);

animateCounter(counters[2],98);

}

/* ==========================================================
   RANDOM STARTUP DATA
========================================================== */

const startups=[

{

name:"GreenBin AI",

problem:"Restaurants waste food.",

solution:"AI predicts food demand.",

revenue:"Subscription",

users:"Restaurants",

tech:"Node.js, AI"

},

{

name:"MediVision",

problem:"Late disease detection.",

solution:"AI medical scanning.",

revenue:"Hospital License",

users:"Hospitals",

tech:"Python + AI"

},

{

name:"FarmPilot",

problem:"Poor crop prediction.",

solution:"Satellite AI.",

revenue:"Monthly SaaS",

users:"Farmers",

tech:"React + Node"

},

{

name:"SkillBridge",

problem:"Students lack guidance.",

solution:"Career AI Mentor.",

revenue:"Premium Plans",

users:"Students",

tech:"JavaScript"

}

];

/* ==========================================================
   GENERATE STARTUP
========================================================== */

if(generateButton){

generateButton.addEventListener("click",()=>{

const s=startups[

Math.floor(Math.random()*startups.length)

];

const p=document.querySelectorAll(".output-card p");

if(p.length>=6){

p[0].textContent=s.name;

p[1].textContent=s.problem;

p[2].textContent=s.solution;

p[3].textContent=s.revenue;

p[4].textContent=s.users;

p[5].textContent=s.tech;

}

});

}
/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================================================
   BUTTON RIPPLE EFFECT
========================================================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

const radius=diameter/2;

circle.style.width=

circle.style.height=

`${diameter}px`;

circle.style.left=

`${e.clientX-this.getBoundingClientRect().left-radius}px`;

circle.style.top=

`${e.clientY-this.getBoundingClientRect().top-radius}px`;

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.35)";

circle.style.transform="scale(0)";

circle.style.animation="ripple .6s linear";

circle.style.pointerEvents="none";

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

circle.classList.add("ripple");

this.appendChild(circle);

});

});

/* ==========================================================
   GLASS CARD TILT
========================================================== */

document.querySelectorAll(

".glass-card,.feature-card,.price-card"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=-(

(y-rect.height/2)

)/20;

const rotateY=(

(x-rect.width/2)

)/20;

card.style.transform=

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* ==========================================================
   FLOATING EMOJIS
========================================================== */

setInterval(()=>{

const emoji=document.createElement("div");

const icons=[

"🚀",

"💡",

"🌍",

"✨",

"⚡",

"💰",

"🤖"

];

emoji.innerHTML=

icons[Math.floor(

Math.random()*icons.length

)];

emoji.style.position="fixed";

emoji.style.left=

Math.random()*100+"vw";

emoji.style.top="100vh";

emoji.style.fontSize=

20+Math.random()*30+"px";

emoji.style.pointerEvents="none";

emoji.style.zIndex="999";

emoji.style.transition="6s linear";

document.body.appendChild(emoji);

setTimeout(()=>{

emoji.style.transform=

`translateY(-120vh)
rotate(${Math.random()*360}deg)`;

emoji.style.opacity="0";

},100);

setTimeout(()=>{

emoji.remove();

},6000);

},1500);

/* ==========================================================
   HERO GLOW
========================================================== */

document.addEventListener("mousemove",(e)=>{

const glow=document.getElementById("cursorGlow");

if(!glow) return;

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
/* ==========================================================
   PARTICLE ENGINE
========================================================== */

const canvas=document.getElementById("particleCanvas");

if(canvas){

const ctx=canvas.getContext("2d");

let particles=[];

function resize(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

class Particle{

constructor(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height;

this.radius=Math.random()*2+1;

this.speedX=(Math.random()-.5)*1.2;

this.speedY=(Math.random()-.5)*1.2;

this.opacity=Math.random()*.8+.2;

}

draw(){

ctx.beginPath();

ctx.arc(

this.x,

this.y,

this.radius,

0,

Math.PI*2

);

ctx.fillStyle=`rgba(0,229,255,${this.opacity})`;

ctx.fill();

}

update(){

this.x+=this.speedX;

this.y+=this.speedY;

if(this.x<0||this.x>canvas.width){

this.speedX*=-1;

}

if(this.y<0||this.y>canvas.height){

this.speedY*=-1;

}

this.draw();

}

}

for(let i=0;i<350;i++){

particles.push(new Particle());

}

function connectParticles(){

for(let a=0;a<particles.length;a++){

for(let b=a;b<particles.length;b++){

const dx=

particles[a].x-particles[b].x;

const dy=

particles[a].y-particles[b].y;

const distance=Math.sqrt(dx*dx+dy*dy);

if(distance<120){

ctx.strokeStyle=

`rgba(0,229,255,${
0.12-(distance/1200)
})`;

ctx.lineWidth=.5;

ctx.beginPath();

ctx.moveTo(

particles[a].x,

particles[a].y

);

ctx.lineTo(

particles[b].x,

particles[b].y

);

ctx.stroke();

}

}

}

}

function animateParticles(){

ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);

particles.forEach(p=>{

p.update();

});

connectParticles();

requestAnimationFrame(

animateParticles

);

}

animateParticles();

}
/* ==========================================================
   SHOOTING STARS
========================================================== */

function createStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*250+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(createStar,3500);
/* ==========================================================
   AI TYPING EFFECT
========================================================== */

const aiMessages=[

"Analyzing your startup idea...",

"Finding competitors...",

"Checking market demand...",

"Generating revenue model...",

"Preparing investor pitch...",

"Building startup roadmap...",

"Calculating business score...",

"Almost Done..."

];

const generatorText=document.querySelector(".generated-card p");

let aiIndex=0;

function typeEffect(text){

if(!generatorText) return;

generatorText.textContent="";

let i=0;

const typing=setInterval(()=>{

generatorText.textContent+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},35);

}

if(generatorText){

setInterval(()=>{

typeEffect(aiMessages[aiIndex]);

aiIndex++;

if(aiIndex>=aiMessages.length){

aiIndex=0;

}

},4000);

}

/* ==========================================================
   MAGNETIC BUTTON EFFECT
========================================================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)/6;

const moveY=(y-rect.height/2)/6;

button.style.transform=

`translate(${moveX}px,${moveY}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});

/* ==========================================================
   PARALLAX
========================================================== */

window.addEventListener("scroll",()=>{

const value=window.scrollY;

const g1=document.querySelector(".gradient-one");

const g2=document.querySelector(".gradient-two");

const g3=document.querySelector(".gradient-three");

if(g1){

g1.style.transform=`translateY(${value*.20}px)`;

}

if(g2){

g2.style.transform=`translateY(${-value*.15}px)`;

}

if(g3){

g3.style.transform=`translateY(${value*.08}px)`;

}

});

/* ==========================================================
   RANDOM GLOW
========================================================== */

setInterval(()=>{

const glow=document.createElement("div");

glow.className="randomGlow";

glow.style.left=Math.random()*100+"vw";

glow.style.top=Math.random()*100+"vh";

document.body.appendChild(glow);

setTimeout(()=>{

glow.remove();

},5000);

},900);

/* ==========================================================
   HERO TITLE ANIMATION
========================================================== */

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

heroTitle.animate([

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1500,

fill:"forwards"

});

}
/* ==========================================================
   FAKE AI GENERATION
========================================================== */

const generateBtn=document.querySelector(".generator-box button");
const output=document.querySelectorAll(".output-card p");

const startupIdeas=[

{
name:"GreenBin AI",
problem:"Restaurants waste food.",
solution:"AI predicts customer demand.",
revenue:"Monthly SaaS",
users:"Restaurants",
tech:"Node.js + AI"
},

{
name:"EduVerse",
problem:"Students lack guidance.",
solution:"AI Career Assistant.",
revenue:"Premium Subscription",
users:"Students",
tech:"React + Express"
},

{
name:"HealthSync",
problem:"Medical records are scattered.",
solution:"Cloud based health platform.",
revenue:"Hospital Licensing",
users:"Hospitals",
tech:"MongoDB + Node.js"
},

{
name:"FarmVision",
problem:"Low crop productivity.",
solution:"AI powered crop prediction.",
revenue:"Government + SaaS",
users:"Farmers",
tech:"Satellite AI"
}

];

if(generateBtn){

generateBtn.addEventListener("click",()=>{

const startup=startupIdeas[

Math.floor(Math.random()*startupIdeas.length)

];

output[0].textContent=startup.name;
output[1].textContent=startup.problem;
output[2].textContent=startup.solution;
output[3].textContent=startup.revenue;
output[4].textContent=startup.users;
output[5].textContent=startup.tech;

});

}
/* ==========================================================
   INPUT VALIDATION
========================================================== */

const ideaInput = document.querySelector(".generator-box textarea");

if (generateBtn && ideaInput) {

    generateBtn.addEventListener("click", () => {

        if (ideaInput.value.trim() === "") {

            alert("Please enter your startup idea.");

            ideaInput.focus();

            return;
        }

    });

}
/* ==========================================================
   CTRL + ENTER
========================================================== */

if (ideaInput && generateBtn) {

    ideaInput.addEventListener("keydown", (e) => {

        if (e.ctrlKey && e.key === "Enter") {

            generateBtn.click();

        }

    });

}