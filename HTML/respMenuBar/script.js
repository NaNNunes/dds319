document.querySelector(".menu-toggle").addEventListener("click", function(){
    document.querySelector(".nav-list").classList.toggle("active");
})

// document.querySelector(".menu-toggle"): select menu button
// .addEventListenner("click", function(){...}): add a click button event
// document.querySelector(".nav-list").classList.toggle("active"): switch class active in nav list, showing or hiding the menu