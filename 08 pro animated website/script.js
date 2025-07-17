function page1animation() {
    var tl = gsap.timeline();

    tl.from("nav h1,nav h4,nav button", {
        y: -40,
        opacity: 0,
        duartion: 1,
        stagger: 0.2,
    })

    tl.from(".center h1,.center p ,.center button", {
        x: -200,
        opacity: 0,
        duaration: 0.4,
        stagger: 0.2
    })

    tl.from(".center img", {
        x: 200,
        opacity: 0,
        duaration: 0.4,
    }, "-=1")

    tl.from(".section1 .bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duartion: 1
    })
}
page1animation();

function page2animation() {

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            scroller: "body",
            start: "top 40%",
            end: "top -50%",
            scrub: 2,
        }
    })
    tl2.from(".services", {
        y: 30,
        duartion: 0.5,
        opacity: 0,
    })

    // line1

    tl2.from(".elem.line1.left", {
        opacity: 0,
        x: -300,
        duartion: 1,
    }, "anim")

    tl2.from(".elem.line1.right", {
        opacity: 0,
        x: 300,
        duartion: 1,
    }, "anim")

    // line 2

    tl2.from(".elem.line2.left", {
        opacity: 0,
        x: -300,
        duartion: 1,
    }, "anim2")
    tl2.from(".elem.line2.right", {
        opacity: 0,
        x: 300,
        duartion: 1,
    }, "anim2")
}
page2animation();