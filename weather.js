// Weather.js
 
class Weather {
    constructor(city, country) {
        this.apiKey = '383bdf7466d0fd3c0f726678ea884959';
        this.city = city;
        this.country = country;
 
    }
 
    // Fetch weather from API
    async getWeather() {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
            
        );
     
        const localWeather = await response.json();
     
        return localWeather;
      }
    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
 
    }
}