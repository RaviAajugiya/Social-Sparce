$(document).ready(function () {
    $(".dropdown").click(function () {
        $(".dropdown-menu").toggleClass("show")
    })
});
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").toggleClass("show")
    })

    $(".share-btn").click(function () {
        $(".modal").show();
    })
    $(".close").click(function () {
        $(".modal").hide();
    })

})

