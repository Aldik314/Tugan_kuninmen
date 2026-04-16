let page;

let pageWidth = 800;
let pageHeight = 550;

let context;

window.onload = function() {
    page = document.getElementById("page");
    page.height = pageHeight;
    page.width = pageWidth;
    context = page.getContext("2d"); //used for drawing
}