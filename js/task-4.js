document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form')

    form.addEventListener('submit', function(event) {
        event.preventDefault() // Зупиняємо перезавантаження сторінки при сабміті форми

        // Отримуємо значення полів форми
        const emailValue = form.elements['email'].value.trim()
        const passwordValue = form.elements['password'].value.trim()

        // Перевірка на заповненість полів
        if (emailValue === '' || passwordValue === '') {
            alert('All form fields must be filled in')
            return // Зупиняємо відправку форми, якщо є незаповнені поля
        }

        // Формуємо об'єкт зі зібраними значеннями полів
        const formData = {
            email: emailValue,
            password: passwordValue
        }

        // Виводимо об'єкт зі зібраними даними в консоль
        console.log(formData)

        // Очищаємо значення полів форми
        form.reset()
    })
})