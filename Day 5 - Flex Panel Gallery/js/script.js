let panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", (e) => {
        if(e.target.style.flexGrow){
            panel.style.removeProperty("flex-grow");
            panel.classList.remove("open");
            panel.children[0].style.transform = "translateY(-400px)";
            panel.children[2].style.transform = "translateY(400px)";
        }
        else{
            panel.style.flexGrow = 5;
            panel.classList.add("open");
            panel.children[0].style.transform = "translateY(-130px)";
            panel.children[2].style.transform = "translateY(130px)";
        }
    })
})

