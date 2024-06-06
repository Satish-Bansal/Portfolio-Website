
// full page js 
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true
});


// custom cursor js 
var body = document.querySelector("#fullpage")
var cursor = document.querySelector(".cursor")

body.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
    })
})  


// svg add 
var initialPath = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector(".string");

string.addEventListener("mousemove", function(dets){
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {
        attr:{d:initialPath},
        duration:0.2,
        ease:"power3.out"
    })
})


string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})



// jqueyr code for navigation 
$(document).ready(function(){

    $(".bx-x").hide()
    $(".menu-bar").hide()

    $(".bx-menu-alt-right").click(function(){
        $(".menu-bar").show()
        $(".bx-x").show()
        $(".bx-menu-alt-right").hide()
    })
    $(".bx-x").click(function(){
        $(".menu-bar").hide()
        $(".bx-x").hide()
        $(".bx-menu-alt-right").show()
    })

})