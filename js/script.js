
const usersList = document.getElementById('usersList');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const li = document.createElement('li');
            li.classList.add('user__item');
            li.innerHTML = `
            <div class="title">${user.name}</div>
            <div>${user.username}</div>
            <div>${user.email}</div>
            <a href="user.html?id=${user.id}" class="user__detailsBtn">Подробнее</a>
          `;
            usersList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);
    });