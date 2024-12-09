document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiKey = 'f488310099bf7bc61f43a24165649d0d'; // Your new API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById('output').innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
            <p><strong>Feels Like:</strong> ${data.main.feels_like}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
          `;
        } else {
          document.getElementById('output').innerHTML = `<p style="color: #ff5757;">City not found. Please try again.</p>`;
        }
      })
      .catch(error => {
        document.getElementById('output').innerHTML = `<p style="color: #ff5757;">Error fetching data. Please try again later.</p>`;
        console.error('Error:', error);
      });
  });
  