

$(".projects_block > a").on("click",
    function () {
        var projectName = $(this).data("project-name");

        var allProjects = $('[data-project]');

        for (var i = 0; i < allProjects.length; i++) {
            var element = allProjects[i];
            $(element).hide("slow");
        }
        $("*").find("[data-project ='" + projectName + "']").show("slow");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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

