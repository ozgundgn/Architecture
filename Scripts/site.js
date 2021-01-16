// Get the modal

function loadZoomImageModel(el) {

    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    //var img = document.getElementsByClassName("img-fluid");
    console.log(el);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    //img.onclick = function () {

    modal.style.display = "block";
    modalImg.src = el.src;
    captionText.innerHTML = el.alt;
    //}

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}

$(".projects_block > a").on("click",
    function () {
        var projectName = $(this).data("project-name");

        var allProjects = $('[data-project]');

        for (var i = 0; i < allProjects.length; i++) {
            var element = allProjects[i];
            $(element).hide("slow");
        }
        $("*").find("[data-project ='" + projectName + "']").show("slow");
    });

function projeTuruSec(el) {
    console.log(el);
    var menuProje = $(el).data("menu-sec");
    var tumMenuler = $("[data-menu]");
    for (var i = 0; i < tumMenuler.length; i++) {
        $(tumMenuler[i]).hide("slow");
    }
    $("*").find("[data-menu='" + menuProje + "']").show("slow");
}

function altMenuleriGizle() {
    var tumMenuler = $("[data-menu]");
    for (var i = 0; i < tumMenuler.length; i++) {
        $(tumMenuler[i]).hide("slow");
    }
}


