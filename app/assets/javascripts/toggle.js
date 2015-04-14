$(".menuToggle").click(function(e) {
    e.preventDefault();
    $("#content-wrapper").toggleClass("toggled");
    $("#sidebar-wrapper").toggleClass("toggled");
    $("#overlay").toggleClass("toggled");
});
