$(document).ready(function() {

    // father 
    $("#father-img").mouseenter(function(){
        $(".f-cont").show(1000)
    })
   
    // mother 
    $("#mother-img").mouseenter(function(){
        $(".m-cont").show(1000)
    })

 
    // sister 
    $("#sister-img").mouseenter(function(){
        $(".s-cont").show(1000)
    })

    // borther 
    $("#brother-img").mouseenter(function(){
        $(".b-cont").show(1000)
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


// custom cursor js 
var body = document.querySelector(".main")
var cursor = document.querySelector(".cursor")

body.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
    })
})  

