const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#A633FF",
    "#33FFF5", "#F5FF33", "#FF8C33", "#33FF9F", "#FF5733",
    "#C70039", "#900C3F", "#FFC300", "#DAF7A6", "#581845",
    "#6C3483", "#2980B9", "#239B56", "#D68910", "#CB4335",
    "#7D3C98", "#AF7AC5", "#F39C12", "#E74C3C", "#1ABC9C",
    "#3498DB", "#9B59B6", "#34495E", "#16A085", "#27AE60",
    "#F1C40F", "#E67E22", "#E74C3C", "#9B59B6", "#8E44AD",
    "#2980B9", "#1ABC9C", "#27AE60", "#F39C12", "#D35400",
    "#34495E", "#2C3E50", "#EC7063", "#A569BD", "#F1948A",
    "#45B39D", "#58D68D", "#DFFF00", "#FFBF00", "#FF7F50"
];

let currentColorIndex = 0;

function changeColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Change color when the spacebar is pressed
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        changeColor();
    }
});

// Change color on screen touch
document.addEventListener('touchstart', () => {
    changeColor();
});
