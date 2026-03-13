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

function showImage(img) {
    document.getElementById("previewImage").src = img;
}

function generateArticle() {
    let topic = document.getElementById("articleTopic").value;
    if (topic === '') {
        alert('Enter Article topic')
    }
}

function generateArticle2() {
    let topic2 = document.getElementById("articleTopic").value;
    if (topic2 === '') {
        alert('Enter Blog  topic')
    }
}



