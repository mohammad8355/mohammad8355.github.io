
function CloneMaker( source, destination,count){ 
  
  for(let i =0;i<count;i++){ 
          var SourceTag = document.getElementById(source);
  var DestinationTag = document.getElementById(destination);
   var CloneTag = SourceTag.cloneNode(true);
  CloneTag.removeAttribute("id");
  DestinationTag.appendChild(CloneTag);
  
  }
}
  //start typing landing page
const typedTextSpan = document.querySelector("#introductiontxt");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["FrontEndDeveloper", "DotNetDeveloper", "ITEnginner", "Student"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
//banner content typing 
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing"))
    cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
//end type function
//menu resonsive
var togglemenu = document.querySelector(".togglemenu");
var menu = document.querySelector("#nav");
togglemenu.addEventListener('click',function(){
    if(!menu.classList.contains("Open")){
   menu.classList.add("Open");
    }
    else{
        menu.classList.remove("Open");
    }
}) 
//about me typing
var aboutDesc = document.querySelector(".AboutDesc");
var aboutTxt = "Hello, I am Mohammad Mahdi, I am a programmer, Front-end Developer,back-end developer and lover of the world of technology and programming. I like to discover and learn new things." + 
"I was born in 2004 and I am currently a computer engineering student and I had experience working in web and back-end fields."
var Curser = document.querySelector("#Cursor");
var CharIndex = 0;
function typing(){
if(CharIndex<aboutTxt.length){
  if(!Curser.classList.contains("typing")) 
  Curser.classList.add("typing");
  aboutDesc.textContent += aboutTxt.charAt(CharIndex);
    CharIndex++;
    setTimeout(typing,100);
}
    else {
      Curser.classList.remove("typing");
      setTimeout(Erase, 2000);
    }

}
function Erase() {
	if (CharIndex > 0) {
    if(!Curser.classList.contains("typing")) Curser.classList.add("typing");
    aboutDesc.textContent = aboutTxt.substring(0, CharIndex-1);
    CharIndex--;
    setTimeout(Erase, 50);
  } 
  else {
    Curser.classList.remove("typing");

    setTimeout(typing, 2000);
  }
}
document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(aboutTxt.length) setTimeout(typing, 2250);
});
//scroll effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add("Show");
    }
    else{
      entry.target.classList.remove('Show');
    }
  })
})

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));
/////////////////////////////////portfolio start
var Portfolio = [
  {
    imgLocation:'img/portfolio-1.jpg',
    title:'BlockBreaker',
    Description:'BlockBreaker is a game that you should break block with ball ,tho game is on autoplay mode'
  },
  {
    imgLocation:'img/portfolio-2.jpg',
    title:'Ballrun',
    Description:'you should run up on the wall and does not hit the shackle'
  },
  {
    imgLocation:'img/portfolio-1.jpg',
    title:'BlockBreaker',
    Description:'BlockBreaker is a game that you should break block with ball ,tho game is on autoplay mode'
  },
  {
    imgLocation:'img/portfolio-1.jpg',
    title:'BlockBreaker',
    Description:'BlockBreaker is a game that you should break block with ball ,tho game is on autoplay mode'
  },
  {
    imgLocation:'img/portfolio-2.jpg',
    title:'Ballrun',
    Description:'you should run up on the wall and does not hit the shackle'
  },
  {
    imgLocation:'img/portfolio-1.jpg',
    title:'BlockBreaker',
    Description:'BlockBreaker is a game that you should break block with ball ,tho game is on autoplay mode'
  }
];
 
//clone of portfolio cards
CloneMaker("card","contain",5);
var cardcover = document.querySelectorAll(".card-cover");
var title = document.querySelectorAll(".title");
var description = document.querySelectorAll("#description");
var tagindex = 0;
//assign content to cards
Portfolio.forEach((cd) => {
  var card = Portfolio[tagindex];
   cardcover[tagindex].style.backgroundImage = "url("+cd.imgLocation+")";
  title[tagindex].innerHTML = cd.title;
  description[tagindex].innerHTML = cd.Description;
  cardcover[tagindex].setAttribute("background",cd.imgLocation);
  tagindex++
 })
 //navigation of portfolio scroll
var leftnav = document.querySelector(".left-nav");
var rightnav = document.querySelector(".right-nav");
var cardContain = document.querySelector("#card-scroll");
leftnav.addEventListener('click',function(){
  cardContain.scrollLeft -= 40;
})
rightnav.addEventListener('click',function(){
  cardContain.scrollLeft += 40;
})
 
//MySkill Dropdown menu's 
var skills = [
  {
     title:"C#",
     ImgName:"csharp_icon.png",
     alt:"Csharp programming language",
     value:"80%",
  },
  {
    title:"c++",
     ImgName:"cplusplus_icon.png",
     alt:"cplusplus programming language",
     value:"50%",
 },
 {
  title:"CSS",
  ImgName:"css_icon.png",
  alt:"Casecading Style sheet",
  value:"100%",
},
{
  title:"SASS",
  ImgName:"sass_icon.png",
  alt:"Style sheet anguage base on css ",
  value:"70%",
},
{
  title:"HTML",
  ImgName:"html_icon.png",
  alt:"Hyper Text Markup Language",
  value:"100%",
},
{
  title:"Bootstrap",
  ImgName:"bootstrap_icon.png",
  alt:"populare css framework",
  value:"70%",
},
{
  title:"JS",
  ImgName:"js_icon.png",
  alt:"powerfull Programming language for clientSide",
  value:"50%",
},
{
  title:"JQuery",
  ImgName:"jquery_icon.png",
  alt:"js library",
  value:"70%",
},
 ];
 CloneMaker("skill","skill-containerMenu",7);
 var skill_title = document.querySelectorAll(".skill-title");//title of progbar
 var skill_icon = document.querySelectorAll(".skill-icon");//icon of progbar
 var value = document.querySelectorAll(".value");//value of progbar
 var prog = document.querySelectorAll(".prog");
 var skillIndex = 0;
 skills.forEach((el) => {
    skill_title[skillIndex].innerHTML = el.title;
    skill_icon[skillIndex].setAttribute("src","img/" + el.ImgName);
    skill_icon[skillIndex].setAttribute("alt",el.alt);
    value[skillIndex].setAttribute("style","width:"+el.value);
    prog[skillIndex].setAttribute("title",el.value);
    skillIndex++;
 })


var dropdown = document.querySelectorAll(".skill");
dropdown.forEach((menu) => {
  menu.addEventListener('click',function(){
    if(!menu.classList.contains("show")){
        menu.classList.add("show");
    }else{
      menu.classList.remove("show");
    }
  
  })
})
 //services
 var Services = [
  {
    ImgName:"icons8-team-work-66.png",
    title:"Team Working",
    p:"Teamwork experience has made teamwork one of my goals and services, and it also makes me proud to work in a professional team.",
  },
  {
    ImgName:"icons8-front-end-64.png",
    title:"Front-end",
    p:"Every Websites have to side such as front-end and back-end so i con help you in front-end with html,css,js,... interesting tools",
  },
  {
    ImgName:"icons8-desktop-100.png",
    title:"Desktop Apps",
    p:"Windows is a powerful and popular System Operator that update his self momentary i can make interesting and wonderful desktop app for you ",
  },
 ]
 CloneMaker("service-body","services-container",2);
 var service_title = document.querySelectorAll(".service-title");
 var service_img = document.querySelectorAll(".service-img");
 var service_description = document.querySelectorAll(".service-description");
 let serviceIndex = 0;
 Services.forEach((el) => {
    service_title[serviceIndex].innerHTML = el.title;
    service_img[serviceIndex].setAttribute("src","img/" + el.ImgName);
    service_description[serviceIndex].innerHTML = el.p;
    serviceIndex++;
 })
//experience
var Experience = [
  {
    logo:"img/medric-logo.png",
    from_date:"1401/012/15",
    to_date:"1402/04/23",
    title:"Medric Game",
    description: "I work in medric game as unity designer and game designer i learn lots of things like team working and Unity and C# ...",
  },
  {
    logo:"img/SharifGame-Logo.png",
    title:"Sharifgame",
    from_date:"1401/09/15",
    to_date:"1402/10/23",
    description: "I join in sharif game competition with some of my friends to make mobile game our game was about boat that should save people ...",
  },
]
CloneMaker("experience","ex-container",1);
var extitle= document.querySelectorAll(".ex-title");
var exLogo= document.querySelectorAll(".logos");
var exDescription= document.querySelectorAll(".ex-description");
var exFromDate = document.querySelectorAll(".ex-fro-date");
var exToDate = document.querySelectorAll(".ex-to-date");
var exIndex = 0;
Experience.forEach((el) => {
   extitle[exIndex].innerHTML = el.title;
   exDescription[exIndex].innerHTML = el.description;
   exLogo[exIndex].setAttribute("style","background-image:url(" + el.logo +");");
   exFromDate[exIndex].innerHTML += el.from_date;
   exToDate[exIndex].innerHTML += el.to_date;
   exIndex++;
});
CloneMaker("videos-cover","videos",3);
var videos = [
  {
    video_source:"video/MyRecord_20230726180641.mp4",
    video_title:"website",
    video_des:"story land project",
    video_poster:"img/Capture.png",
  },
  {
    video_source:"video/game.mp4",
    video_title:"game",
    video_des:"destroy block",
    video_poster:"img/Portfolio-1.jpg",
  },
  {
    video_source:"video/MyRecord_20230726180641.mp4",
    video_title:"websites",
    video_des:"story land project",
    video_poster:"img/Capture.png",
  },
  {
    video_source:"video/game.mp4",
    video_title:"gamemaker",
    video_des:"destroy block",
    video_poster:"img/Portfolio-1.jpg",
  },
]

var video_cover = document.querySelectorAll(".video-cover");
var video_title = document.querySelector(".video-title");
var descrip_video = document.querySelector(".descrip-video");
var cover_title = document.querySelectorAll(".cover-title");
var cover_description = document.querySelectorAll(".cover-description");
var videoIndex = 0;
videos.forEach((el) => {
  video_cover[videoIndex].setAttribute("poster",el.video_poster);
  video_cover[videoIndex].setAttribute("id","id" + videoIndex);
  video_cover[videoIndex].setAttribute("src",el.video_source);
  cover_title[videoIndex].innerHTML = el.video_title;
  cover_description[videoIndex].innerHTML  = el.video_des;
  video_cover[videoIndex].addEventListener("click",function(){
    video_title.innerHTML = el.video_title;
    descrip_video.innerHTML = el.video_des;
  })
  videoIndex++;
})
CloneMaker("certificate","certi-container",3);
var certificates = [
  {
    title:"Certificate",
    imgLocation:"img/download.png",
  },
  {
    title:"unity",
    imgLocation:"img/unity_cert_new.jpg",
  },
  {
    title:"php",
    imgLocation:"img/download.png",
  },
  {
    title:"c#",
    imgLocation:"img/unity_cert_new.jpg",
  },
]

var certificate = document.querySelectorAll(".certificate");
var certTitle = document.querySelectorAll(".certi-title");
var certImg = document.querySelectorAll(".certi-img");
let index = 0;
certImg.forEach((img) => {
  certImg[index].setAttribute("id",index + "img");
  index++;
})
var certiIndex = 0;
certificates.forEach((el) => {
certTitle[certiIndex].innerHTML = el.title;
certImg[certiIndex].setAttribute("src",el.imgLocation);
certiIndex++;
})
function enlarg(id){
  var url = document.getElementById(id).getAttribute("src");
  window.open(url,'image','width=80em,height=auto','resizable=1');
}