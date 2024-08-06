function toggleThemeSelector() {
    const themeSelector = document.getElementById('theme-selector');
    themeSelector.style.display = themeSelector.style.display === 'block' ? 'none' : 'block';
}

function changeTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    changeTheme(savedTheme);
    document.getElementById('theme-selector').value = savedTheme;
});

document.getElementById('theme-selector').addEventListener('change', function () {
    changeTheme(this.value);
});

document.getElementById('showAlert').addEventListener('click', function() {
    document.getElementById('customAlert').style.display = 'flex';
});

document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('customAlert').style.display = 'none';
});

document.getElementById('customAlert').addEventListener('click', function(e) {
    if (e.target === document.getElementById('customAlert')) {
        document.getElementById('customAlert').style.display = 'none';
    }
});

function updateDateTime() {
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleTimeString('fr-FR', options);
    dateTimeElement.textContent = formattedTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();