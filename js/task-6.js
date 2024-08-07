function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

document.addEventListener('DOMContentLoaded', function() {
  const controls = document.getElementById('controls')
  const inputField = controls.querySelector('input[type="number"]')
  const createButton = controls.querySelector('[data-create]')
  const destroyButton = controls.querySelector('[data-destroy]')
  const boxesContainer = document.getElementById('boxes')

  // Функція для створення коробок
  function createBoxes(amount) {
    boxesContainer.innerHTML = '' // Очищуємо попередню колекцію перед створенням нової
    let size = 30
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.width = `${size}px`
      box.style.height = `${size}px`
      box.style.backgroundColor = getRandomHexColor()
      fragment.appendChild(box)
      size += 10 // Збільшуємо розмір кожного наступного елемента
    }
    boxesContainer.appendChild(fragment) // Додаємо всі елементи за один раз
  }

  // Функція для очищення коробок
  function destroyBoxes() {
    boxesContainer.innerHTML = '' // Очищаємо всі елементи з контейнера
  }

  // Обробник події для створення коробок
  createButton.addEventListener('click', function() {
    const amount = Number(inputField.value)
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount)
      inputField.value = '' // Очищуємо значення інпута після створення
    } else {
      alert('Please enter a number between 1 and 100.')
    }
  })

  // Обробник події для знищення коробок
  destroyButton.addEventListener('click', destroyBoxes)
})