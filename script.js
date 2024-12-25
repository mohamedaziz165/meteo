// Clé API et URL de l'API
const apiKey = 'votre_cle_api'; // Remplacez par votre clé API.
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeather(location = 'Tunis') {
    try {
        // Requête à l'API
        const response = await fetch(`${apiUrl}?q=${location}&units=metric&appid=${apiKey}`);
        if (!response.ok) throw new Error('Erreur lors de la récupération des données.');

        const weatherData = await response.json();
        // Mise à jour du contenu HTML avec les données météo
        document.getElementById('location').textContent = `Location: ${weatherData.name}`;
        document.getElementById('temperature').textContent = `Temperature: ${weatherData.main.temp}°C`;
        document.getElementById('description').textContent = `Condition: ${weatherData.weather[0].description}`;
    } catch (error) {
        alert('Impossible de récupérer les données météo : ' + error.message);
    }
}

// Gestionnaire pour le bouton "Refresh Weather"
document.getElementById('refresh-btn').addEventListener('click', () => {
    fetchWeather();
});

// Récupération initiale des données météo
fetchWeather();
