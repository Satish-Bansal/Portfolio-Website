
// custom cursor js 
var body = document.querySelector(".main")
var cursor = document.querySelector(".cursor")

body.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
    })
})



// jquery js start 
$(document).ready(function () {

    $("#proj-img-1").show()
    $("#proj-img-2").hide()
    $("#proj-img-3").hide()
    $("#proj-img-4").hide()
    $("#proj-img-5").hide()
    $("#proj-img-6").hide()
    $("#proj-img-7").hide()
    $("#proj-img-8").hide()

    $("#proj-head-1").click(function () {
        $("#proj-img-1").show()
        $("#proj-img-2").hide()
        $("#proj-img-3").hide()
        $("#proj-img-4").hide()
        $("#proj-img-5").hide()
        $("#proj-img-6").hide()
        $("#proj-img-7").hide()
        $("#proj-img-8").hide()

    })

    $("#proj-head-2").click(function () {
        $("#proj-img-1").hide()
        $("#proj-img-2").show()
        $("#proj-img-3").hide()
        $("#proj-img-4").hide()
        $("#proj-img-5").hide()
        $("#proj-img-6").hide()
        $("#proj-img-7").hide()
        $("#proj-img-8").hide()

    })

    $("#proj-head-3").click(function () {
        $("#proj-img-1").hide()
        $("#proj-img-2").hide()
        $("#proj-img-3").show()
        $("#proj-img-4").hide()
        $("#proj-img-5").hide()
        $("#proj-img-6").hide()
        $("#proj-img-7").hide()
        $("#proj-img-8").hide()

    })

    $("#proj-head-4").click(function () {
        $("#proj-img-1").hide()
        $("#proj-img-2").hide()
        $("#proj-img-3").hide()
        $("#proj-img-4").show()
        $("#proj-img-5").hide()
        $("#proj-img-6").hide()
        $("#proj-img-7").hide()
        $("#proj-img-8").hide()

    })

    $("#proj-head-5").click(function () {
        $("#proj-img-1").hide()
        $("#proj-img-2").hide()
        $("#proj-img-3").hide()
        $("#proj-img-4").hide()
        $("#proj-img-5").show()
        $("#proj-img-6").hide()
        $("#proj-img-7").hide()
        $("#proj-img-8").hide()

    })

    $("#proj-head-6").click(function () {
        $("#proj-img-1").hide()
        $("#proj-img-2").hide()
        $("#proj-img-3").hide()
        $("#proj-img-4").hide()
        $("#proj-img-5").hide()
        $("#proj-img-6").show()
        $("#proj-img-7").hide()
        $("#proj-img-8").hide()

    })

    $("#proj-head-7").click(function () {
        $("#proj-img-1").hide()
        $("#proj-img-2").hide()
        $("#proj-img-3").hide()
        $("#proj-img-4").hide()
        $("#proj-img-5").hide()
        $("#proj-img-6").hide()
        $("#proj-img-7").show()
        $("#proj-img-8").hide()

    })

    $("#proj-head-8").click(function () {
        $("#proj-img-1").hide()
        $("#proj-img-2").hide()
        $("#proj-img-3").hide()
        $("#proj-img-4").hide()
        $("#proj-img-5").hide()
        $("#proj-img-6").hide()
        $("#proj-img-7").hide()
        $("#proj-img-8").show()

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
