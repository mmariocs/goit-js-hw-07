// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє
//  його поточне значення в span#name - output як ім’я для привітання.
//     Обов’язково очищай значення в інпуті по краях від пробілів.
//  Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// Знаходимо елементи
const nameInput = document.getElementById('name-input')
const nameOutput = document.getElementById('name-output')

// Додаємо обробник подій
nameInput.addEventListener('input', () => {
    // Очищаємо значення від пробілів
    const trimmedValue = nameInput.value.trim()
    
    // Оновлюємо текст у спані
    nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous'
})