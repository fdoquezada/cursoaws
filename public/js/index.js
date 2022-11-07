$(function() {
    $(".toggle").on("click", function() {
        if ($(".nav-item").hasClass("active")) {
            $(".nav-item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".nav-item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});