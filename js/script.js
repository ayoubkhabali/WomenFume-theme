window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60) {
        document.querySelector("header").classList.add("sticky");
    }else {
        document.querySelector("header").classList.remove("sticky");
    }
});

const navtoggler = document.querySelector(".nav-toggler");
        navtoggler.addEventListener("click", toggleNav);

function toggleNav() {
    document.querySelector(".navbar").classList.toggle("open");
    document.querySelector(".fa-bars").classList.toggle("fa-times")
}

document.addEventListener('click', function(e){
    if(e.target.closest(".nav-item")) {
        toggleNav()
    }
});