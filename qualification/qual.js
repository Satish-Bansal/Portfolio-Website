
// custom cursor js 
var body = document.querySelector(".main")
var cursor = document.querySelector(".cursor")

body.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
    })
})  



// gsap scrolltriger js satrt 
var tl = gsap.timeline({scrollTrigger:{
    trigger:".college",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    markers:false,

}})


tl.to("#scroll-img", {
    top:"125%",
    right:"65%",
})



// second page pe jane ke liye scrolltriger 
var xy = gsap.timeline({scrollTrigger:{
    trigger:".udemy",
    start:"0% 80%",
    end:"50% 50%",
    scrub:true,
    markers:false,

}})


xy.to("#scroll-img", {
    top:"225%",
    left:"40%",
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
