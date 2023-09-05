

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".dropdown").addEventListener('click', () => {
        document.querySelector(".dropdown-menu").classList.toggle("show")
    })

    document.querySelector(".navbar-toggler").addEventListener('click', () => {
        document.querySelector(".navbar-collapse").classList.toggle("show")
    })

    document.querySelectorAll(".share-btn").forEach((c) => {
        c.addEventListener('click', () => {
            document.querySelector(".modal").hidden = false;
        })
    })

    document.querySelectorAll(".close").forEach((c) => {
        c.addEventListener('click', () => {
            document.querySelector(".modal").hidden = true;
        })
    })




});

