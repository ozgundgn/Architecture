// Get the modal
$(function () {

});

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
