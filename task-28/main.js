document.addEventListener("scroll",function () {
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if(scrollValue>=1500){
        navbar.classList.remove("bg-danger");
        navbar.classList.add("bg-success");
    }else{
        navbar.classList.add("bg-danger");
    }
})