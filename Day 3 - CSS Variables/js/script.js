let r =  document.querySelector(":root");

document.querySelector(".controls").addEventListener("input", (e) => {
    console.log(this)
    switch(e.target.id) {
        case "spacing":
            r.style.setProperty("--spacing", `${e.target.value}${e.target.dataset.sizing}`)
            break;
        case "blur":
            r.style.setProperty("--blur", `${e.target.value}${e.target.dataset.sizing}`)
            break;
        case "base":
            r.style.setProperty("--base", `${e.target.value}`)
            break;
    }
})
