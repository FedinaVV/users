userDetails = document.getElementById('userDetails');
const idFromUrl = window.location.search.slice(4);

fetch('https://jsonplaceholder.typicode.com/users/' + idFromUrl)
    .then(response => response.json())
    .then(user => {

        const li = document.createElement('li');
        li.innerHTML = `
            <div class="user__name">${user.name}</div>
            <div class="user__username">${user.username}</div>
            <div class="user__email">Электронная почта: <span>${user.email}</span></div>
            <div class="user__address">Адрес: 
                <div>${user.address.street}</div>
                <div>${user.address.suite}</div>
                <div>${user.address.city}</div>
                <div>${user.address.zipcode}</div>
                <div>${user.address.geo.lat}</div>
                <div>${user.address.geo.lng}</div>
            </div>
            <div class="user__phone">Телефон: <span>${user.phone}</span></div>
            <div class="user__website">Сайт: <span>${user.website}</span></div>
            <div class="user__company">Компания: 
                <div>${user.company.name}</div>
                <div>${user.company.catchPhrase}</div>
                <div>${user.company.bs}</div>
            </div>
          `;
        userDetails.appendChild(li);
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);
    });