
        function getWeather() {
            const city = document.getElementById('cityInput').value;
            const apiKey = '4481ef1ff16e0c18d9e3daf04a1275bc';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const weatherData = document.getElementById('weatherData');
                    if (data.cod === 200) {
                        const { name, main, weather } = data;
                        const temperature = main.temp;
                        const weatherDescription = weather[0].description;
                        weatherData.innerHTML = `<h2>${name}</h2>
                                                  <p>Temperature: ${temperature}°C</p>
                                                  <p>Description: ${weatherDescription}</p>`;
                    } else {
                        weatherData.innerHTML = `<p>City not found!</p>`;
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        }
