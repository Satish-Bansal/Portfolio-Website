
// custom cursor js 
var body = document.querySelector(".main")
var cursor = document.querySelector(".cursor")

body.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
    })
})  


// scrolltrigger js start 



var tl = gsap.timeline({scrollTrigger: {
    trigger:".main",
    start: "40% 50%",
    end:"70% 50%",
    scrub:true,
    markers:false,

}})

tl.to("#imgtwo", {
    transform:"rotate(0deg)",
})

tl.to("#imgthree", {
    transform:"rotate(0deg)",
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