function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}


// Код для зміни кольору фону і оновлення тексту
document.addEventListener('DOMContentLoaded', function() {
  // Знаходимо кнопку і span для відображення кольору
  const changeColorButton = document.querySelector('.change-color')
  const colorSpan = document.querySelector('.color')

  // Додаємо обробник події для кнопки
  changeColorButton.addEventListener('click', function() {
    // Генеруємо новий випадковий колір
    const newColor = getRandomHexColor()

    // Змінюємо колір фону body
    document.body.style.backgroundColor = newColor

    // Оновлюємо текст span із новим кольором
    colorSpan.textContent = newColor
  })
})