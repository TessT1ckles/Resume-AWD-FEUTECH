function colorChange() {
    const colorChange = document.getElementById('bg-change');
    const textChange = window.getComputedStyle(colorChange).color;
    const borderChange = document.getElementById('border-change');
    const TextB = 'rgb(0, 0, 0)';
    const TextW = 'rgb(0, 80, 17)'; 

    colorChange.classList.toggle("resume-bgcolor");

    if (textChange == TextB) {
        colorChange.style.color = TextW;
        borderChange.style.borderColor = TextW;
    } else {
        colorChange.style.color = TextB;
        borderChange.style.borderColor = TextB;
    }
}