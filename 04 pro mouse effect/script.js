let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");
let imagediv = document.querySelector(".image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,

  });
});

imagediv.addEventListener("mouseenter", function(){
    cursor.innerHTML="view"
    gsap.to(cursor, {
       scale:4,
       backgroundColor:"#2222227e",
    })
})

imagediv.addEventListener("mouseleave", function(){
    cursor.innerHTML=""
    gsap.to(cursor, {
       scale:1,
       backgroundColor:"blue",
    })
})