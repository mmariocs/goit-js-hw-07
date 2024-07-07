const categories = document.querySelectorAll(`#categories .item`)
console.log(`Кількість категорій:`, categories.length)
categories.forEach(category => {
    const title = category.querySelector(`h2`).textContent
    console.log(`Категорія: ${title}`)
    const itemsCount = category.querySelectorAll(`ul li`).length
    console.log(itemsCount)
})

// Знайти всі елементи li з класом "item" 
// Вивести кількість категорій на консоль
// Запустити цикл
// Знайти заголовок категорії (тег h2) і виводимо його текст
// Знайти всі елементи li всередині поточної категорії та порахувати їх
// Вивести  консоль інфор  по категоріям