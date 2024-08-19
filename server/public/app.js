document.getElementById('createButton').addEventListener('click', function() {
    // Данные для POST-запроса
    const data = { type_name: 'New Type' };

    // Отправка POST-запроса с помощью fetch API
    fetch('/type', {
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
