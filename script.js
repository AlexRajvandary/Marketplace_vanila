let currentIndex = 0;
function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
document.addEventListener("DOMContentLoaded", function () {
const categories = document.querySelectorAll(".category"); // Находим ВСЕ кнопки

categories.forEach(category => {
const categoryTitle = category.querySelector(".category-title"); // Находим заголовок внутри кнопки
const hoverContainer = category.querySelector(".hover-container"); // Находим подкатегории внутри кнопки

let showTimeout, hideTimeout;

// Функция для показа подкатегорий с задержкой
function showSubcategories() {
    clearTimeout(hideTimeout);
    showTimeout = setTimeout(() => {
        hoverContainer.style.display = "block";
        hoverContainer.style.opacity = "1";
        hoverContainer.style.visibility = "visible";
    }, 300); // 300 мс задержка перед появлением
}

// Функция для скрытия подкатегорий
function hideSubcategories() {
    clearTimeout(showTimeout);
    hideTimeout = setTimeout(() => {
        hoverContainer.style.opacity = "0";
        hoverContainer.style.visibility = "hidden";
        setTimeout(() => {
            hoverContainer.style.display = "none";
        }, 200);
    }, 200);
}

// Наведение на кнопку (меняем цвет сразу, но подкатегории показываем с задержкой)
category.addEventListener("mouseenter", function () {
    category.style.backgroundColor = "black";
    category.style.color = "white";
    if (categoryTitle) categoryTitle.style.color = "white"; // Делаем category-title белым
    showSubcategories();
});

// Уход курсора с кнопки (но не сразу)
category.addEventListener("mouseleave", function () {
    category.style.backgroundColor = "";
    category.style.color = "";
    if (categoryTitle) categoryTitle.style.color = ""; // Возвращаем category-title к стандартному цвету
    hideSubcategories();
});

// Наведение на подкатегории предотвращает их скрытие
hoverContainer.addEventListener("mouseenter", function () {
    clearTimeout(hideTimeout);
});

// Уход с подкатегорий запускает скрытие
hoverContainer.addEventListener("mouseleave", hideSubcategories);
});
});
