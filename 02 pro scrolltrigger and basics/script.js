// gsap.from(".page1 .box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })
// gsap.from(".page2 .box", {
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: ".page2 .box",
//         scroller: "body",
//         markers:true,
//         start:"top 80%"
//     }
// })
// gsap.from(".page3 .box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger:".page3 .box"
// })
// gsap.from(".page2 h1", {
//     opacity: 0,
//     x: 440,
//     y: -30,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".page2 h1",
//         scroller: "body",
//         markers:true,
//         start: "top 60%"
//     }
// })
// gsap.from(".page2 h2", {
//     opacity: 0,
//     x: -440,
//     y: 30,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".page2 h2",
//         scroller: "body",
//         markers:true,
//         start: "top 60%",
//     }
// })
// gsap.from(".page3 h1", {
//     x:300,
//     duration:1,
//     scrollTrigger:{
//         trigger:".page3 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top 10%",
//         scrub:2,
//         pin:true      
//     }
// })
gsap.from(".page2 h3", {
    transform: "translateX(100%)",
    duration:10,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body", 
        markers:true,
        start:"top 30%",
        end:"top -200%",
        scrub:-1,
        pin:true,
   
    }
})
