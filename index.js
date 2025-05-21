let crsr=document.querySelector("#cursor");
let blurr=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    blurr.style.left=dets.x-200+"px";
    blurr.style.top=dets.y-200+"px";
    gsap.to(crsr, { left: dets.x, top: dets.y, duration: 0.5 });
    gsap.to(blurr, { left: dets.x - 200, top: dets.y - 200, duration: 0.7 });
})

let h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95c11e";
        crsr.style.backgroundColor="#95c11e";
    })
})

gsap.to("#nav",{
    backgroundColor:"black",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1 
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

const cards = document.querySelectorAll('.card');
const container = document.querySelector('#cards-container');

container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width;  // Cursor position (0 to 1)
    const y = (e.clientY - top) / height;  // Cursor position (0 to 1)

    // Calculate tilt angles (adjust 20 for max tilt)
    const tiltX = (0.5 - y) * 20; // Vertical tilt
    const tiltY = (x - 0.5) * 20; // Horizontal tilt

    cards.forEach(card => {
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
});

// Reset on mouse leave
container.addEventListener('mouseleave', () => {
    cards.forEach(card => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
});

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.35,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})