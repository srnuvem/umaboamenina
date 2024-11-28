// Define the start date directly in the script
const startDate = new Date("2024-11-22"); // Defina sua data inicial
const currentDate = new Date();

// Calculate the difference in time (in milliseconds)
const diffTime = currentDate - startDate;

// Convert the difference to days
const diffDays = diffTime >= 0 ? Math.floor(diffTime / (1000 * 60 * 60 * 24)) : 0;

// Select elements
const container = document.getElementById('main-container');
const statusText = document.getElementById('status-text');
const daysCount = document.getElementById('days-count');
const kittyStatus = document.getElementById('kitty-status');
const daysMessage = document.getElementById('days-message');
const boa = document.getElementById('boa');
const ma = document.getElementById('ma');

// Update UI based on days
if (diffDays > 0) {
    // Kitty is being a good girl
    container.classList.add('green');
    container.classList.remove('red');
    statusText.textContent = 'BOA MENINA';
    statusText.classList.add('green');
    statusText.classList.remove('red');
    daysCount.classList.add('green');
    ma.classList.add('esconder');
    daysCount.classList.remove('red');
    kittyStatus.textContent = 'Kitty está sendo uma ';
    daysMessage.innerHTML = `Ela está se comportando bem há <span id="days-count">${diffDays}</span> dias. 🎉`;
} else {
    // Kitty is not being a good girl
    container.classList.add('red');
    container.classList.remove('green');
    statusText.textContent = 'NÃO É UMA BOA MENINA';
    statusText.classList.add('red');
    statusText.classList.remove('green');
    daysCount.classList.add('red');
    boa.classList.add('esconder');
    daysCount.classList.remove('green');
    kittyStatus.textContent = 'Kitty ';
    daysMessage.innerHTML = `Ela não está sendo uma boa menina. 😔`;
}
