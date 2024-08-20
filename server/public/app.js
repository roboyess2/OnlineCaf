document.getElementById('createButton').addEventListener('click', function() {
    console.log('Button clicked!'); // Эта строка должна появиться в консоли при клике
    // Данные для POST-запроса
    const data = { type_name: 'New Type' };

    // Отправка POST-запроса с помощью fetch API
    fetch('/api/type', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
