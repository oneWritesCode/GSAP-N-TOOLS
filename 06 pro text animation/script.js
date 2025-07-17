function breakthetext() {
    var h1 = document.querySelector("h1");
    var h1text = h1.textContent;
    var splittedtext = h1text.split("");
    var halfvalue = splittedtext.length / 2;
    var clutter = "";

    splittedtext.forEach(function (elem, idx) {
        if (idx < halfvalue) {
            clutter += `<span class="a">${elem}</span>`
        }
        else {
            clutter += `<span class="b">${elem}</span>`
        }
    })

    h1.innerHTML = clutter
}
breakthetext();

gsap.from("h1 .a", {
    y: 70,
    duration: 0.8,
    delay: 1,
    stagger: 0.12
})

gsap.from("h1 .b", {
    y: 70,
    duration: 0.8,
    delay: 1,
    stagger: -0.12
})