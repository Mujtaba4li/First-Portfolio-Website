


 var menuSwitch=document.querySelector(".burger").addEventListener("click", ()=>{
    navbar.classList.toggle('h_nav');
    navlist.classList.toggle('v_class');
 })



const menuBtn= document.querySelector(".burger");
let menuOpen=false;
menuBtn.addEventListener("click",()=>{
    if(!menuOpen)
    {
        menuBtn.classList.add("open");
        menuOpen=true;
    }else{
        menuBtn.classList.remove("open");
        menuOpen=false;
    }
})


// ======================changing name on header==================== 
 // Array of words 
 var words = ['Website Designer', 'MobileApp Developer']; 
 // Function that executes every 2000 milliseconds 
 var t = setInterval(function() { 
   // Random number generator 
   var randomNumber = Math.round( Math.random() * (words.length-1) ); 
   // Change the word in the span for a random one in the array of words 
   document.querySelector('#changing').innerHTML= words[ randomNumber ] ; 
 }, 2000);





//  ========== service section ===================
    //service 1
    var service1 = document.querySelector("#service_1");
    service1.addEventListener("click", () => {
      alert("hello 1workd");

    })

    //service 2
    var service1 = document.querySelector("#service_2");
    service1.addEventListener("click", () => {
      alert("hello  2 workd");

    })

    //service 3
    var service1 = document.querySelector("#service_3");
    service1.addEventListener("click", () => {
      alert("hello  3 workd");

    })
//  ========== Projects ===================

let articles = document.querySelectorAll(".article");

articles.forEach((i) => {
  i.addEventListener(
    "mousemove",
    (e) => {
      let mouseX = e.offsetX;
      let mouseY = e.offsetY;
      i.querySelector(".overlay").style.setProperty(
        "background-image",
        `radial-gradient(circle at ${(mouseX * 100) / -i.offsetWidth + 100}% ${(mouseY * 100) / -i.offsetHeight + 100
        }%,rgba(0,0,0,0.2) 20%,rgba(0,0,0,0.3) 50%)`
      );
      i.style.setProperty(
        "transform",
        `rotateY(${(((mouseX * 100) / i.offsetWidth - 50) / 100) * 2
        }deg) rotateX(${(((mouseY * 100) / i.offsetHeight - 50) / 100) * 2
        }deg) `
      )
    },
    false
  );
  i.addEventListener("mouseleave", () => {
    i.style.setProperty("transform", `rotateX(0deg) rotateY(0deg)`);

    i.querySelector(".overlay").style.setProperty(
      "background-image",
      `radial-gradient(circle at 50% 50%,rgba(0,0,0,0.2) 20%,rgba(0,0,0,0.3) 50%)`
    );
  });
});

// change background... 


//  ========== Contact Form ===================
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
    alert("Your Contact form is Submitted successfully");
  });



//   ====== cursor===============
// var cursor = document.querySelector(".cursor");
// var cursor2 = document.querySelector(".cursor2");
// document.addEventListener("mousemove",function(e){
//   cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
// });

// var all_buttons=document.getElementsByTagName("button");

// all_buttons.forEach(btns => {
//   btns.addEventListener("mouseover",()=>{
//     cursor.classList.add("cursor_grow");
//   });
// });
// for(var i=0;i<all_buttons.length;i++)
// {
//   btns.addEventListener("mouseover",()=>{
//     cursor.classList.add("cursor_grow");
//   });
// }



// ================== scrolling effect ======================



