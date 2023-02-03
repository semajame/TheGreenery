  /**
    const menu = document.querySelector(".menu");
    const navmenu = document.querySelector(".nav_menu");

    menu.addEventListener("click", () => {
        navmenu.classList.toggle("active");
    })
    */
    
    menu = document.querySelector(".menu");

    menu.onclick = function(){
        navmenu = document.querySelector(".nav_menu");

        navmenu.classList.toggle("active");
   }