const menuItems = document.querySelectorAll('.menu li');
const sections = document.querySelectorAll('.section');

menuItems.forEach(item => {
    item.addEventListener('click', () => {

        const target = item.getAttribute('data-section');
        if (!target) return;

        // Remove active class
        menuItems.forEach(i => i.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        // Add active
        item.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});