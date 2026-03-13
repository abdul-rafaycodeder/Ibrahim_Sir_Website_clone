const menuItems = document.querySelectorAll(".menu li");
const sections = document.querySelectorAll(".section");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        sections.forEach(sec => sec.classList.remove("active"));

        item.classList.add("active");

        const target = item.dataset.section;

        document.getElementById(target).classList.add("active");

    });

}); 0