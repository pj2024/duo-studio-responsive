function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        // console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

function cursorAnim() {
    let crsr = document.querySelector("#cursor")
    let main = document.querySelector("body")
    let imgCon = document.querySelector("#video-con")
    const img1crsr = document.querySelector("#img1crsr")
    let navh2 = document.querySelector(".menu-opt")
    const img2crsr = document.querySelector("#img2crsr")
  
    main.addEventListener("mousemove", (dets)=>{
      gsap.to(crsr, {
        x: dets.x ,
        y: dets.y ,
        opacity:1,
        duration: .5 
      })
    })
    main.addEventListener("mouseleave", ()=>{
      gsap.to(crsr, {
        opacity:0,
        duration: .5 
      })
    })
  
    imgCon.addEventListener("mouseenter", ()=> {
        crsr.style.display="none";
        img1crsr.style.opacity=1;
        imgCon.addEventListener("mousemove", (dets)=>{
          gsap.to(img1crsr, {
            x: dets.x,
            y: dets.y,
          })
        })
    })
    imgCon.addEventListener("mouseleave", ()=> {
       crsr.style.display="block";
       img1crsr.style.opacity=0;
    })
  
  
    navh2.addEventListener("mouseenter", ()=>{
      gsap.to(crsr, {
        transform: "scale(2.5)",
        duration: 0.5,
        ease: "power2.inOut",
        zIndex: 8,
      })
    })
    navh2.addEventListener("mouseleave", ()=>{
      gsap.to(crsr, {
        transform: "scale(1)",
        duration: 0.5,
        ease: "power2.inOut",
        zIndex: 10,
        
      })
    })
  
    
  
  
    let Con = document.querySelectorAll(".page3-con .con")
    Con.forEach((lcon)=>{
        lcon.addEventListener("mouseenter", ()=>{
          crsr.style.zIndex=0;
          crsr.style.display="none";
          img2crsr.style.opacity=1;
          lcon.addEventListener("mousemove", (dets)=>{
            gsap.to(img2crsr, {
              x: dets.x,
              y: dets.y,
            })
          })
        })
        lcon.addEventListener("mouseleave", ()=>{
          crsr.style.display="block";
          img2crsr.style.opacity=0;
          crsr.style.zIndex=10;
        })
    })
    
  
    let boxes = document.querySelectorAll(".box")
    boxes.forEach((elem)=>{
        elem.addEventListener("mouseenter",()=>{
            let attr = elem.getAttribute("data-image")
            crsr.style.zIndex = "0"
            crsr.style.width="30vw"
            crsr.style.height="50vh"
            crsr.style.borderRadius=".5rem"
            crsr.style.backgroundImage=`url(${attr})`
            crsr.style.mixBlendMode = 'normal'
        })
        elem.addEventListener("mouseleave",()=>{
            crsr.style.width="1vw"
            crsr.style.height="1vw"
            crsr.style.borderRadius="50%"
            crsr.style.backgroundImage="none"
            crsr.style.mixBlendMode = 'difference';
        })
    })
}

function page1loadAnim() {
    let headingText = document.querySelectorAll(".heading-t") 
    let tl1 = gsap.timeline({
        delay:1
    })
    headingText.forEach((elem)=>{
        tl1.from(elem,{
            transform:"translateY(130%) rotate(10deg)",
            duration:1,
        },"anim")
    })

    tl1.from("#video-con",{
        opacity:0,
        duration:1
    },"anim")
    tl1.from("nav div",{
        opacity:0,
        duration:1,
        stagger:0.2
    },"anim")

  

    // lodepageAnim end

    // scrollAnim  page1 start
    let tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#heading-t1",
            scrollers:"#main",
            // markers:true,
            start:"top 35%",
            end:"top 10%",
            scrub:2
        }
    })
    tl2.to("#heading-t1",{
        x:"-30%",
        duration:1.5,
    },"anim1")
    tl2.to("#heading-t2",{
        x:"30%",
        duration:1.5
    },"anim1")
    tl2.to("#video-con",{
        width:"90%",
        duration:1.5,
        ease:"power2.inOut"
    },"anim1")
    // scrollAnim page1 end

    // scrollAnim page2 start
    let tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scrollers:"#main",
            // markers:true,
            start:"top 60%",
            end:"top 70%",
            scrub:2
        }
    })

    tl3.to("body",{
        backgroundColor:"#efeff1",
        color:"#0f0d0e",
        duraion:1
    })
    // scrollAnim page2 end
    
    // scrollAnim page4 start
    let tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".page4",
            scrollers:"#main",
            // markers:true,
            start:"top 65%",
            end:"top 0%",
            scrub:2
        }
    })

    tl4.to(".page4",{
        color:"#efeff1",
        backgroundColor:"#0f0d0e",
        duraion:1
    })
    // scrollAnim page4 end
}



    




lenis()
cursorAnim()
page1loadAnim()