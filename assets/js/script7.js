window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    document.getElementById("movetop").style.display =
        (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}