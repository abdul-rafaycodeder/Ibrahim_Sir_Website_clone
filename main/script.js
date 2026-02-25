// Simple dashboard animation counter

function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let obj = document.getElementById(id);
    let timer = setInterval(function () {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Example values
animateValue("total", 0, 12, 800);
animateValue("month", 0, 5, 800);