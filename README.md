# 🌤️ React Weather Dashboard - Qodex.ai Assignment

A responsive React.js weather dashboard that displays real-time weather information using the OpenWeatherMap API, built as part of the Qodex.ai frontend developer assignment.

---

## 🚀 Features

- 🔍 Search for any city and get current weather
- 🌡️ View temperature, humidity, wind speed, and condition icons
- 🔁 Auto-refresh weather data every 30 seconds
- 💾 Remembers last searched city using localStorage
- 📦 Global state management using React Context API
- 🧩 Modular components (Search, WeatherDisplay, ErrorDisplay)
- ✅ Graceful error handling for bad inputs and API failures
- 🌐 Switch between Celsius and Fahrenheit
- 📆 Bonus: 5-day forecast with condition icons (optional)
- 📡 API integration using Axios

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── SearchBar.js
│   ├── WeatherDisplay.js
│   ├── ErrorDisplay.js
│   └── ForecastDisplay.js
├── context/
│   └── WeatherContext.js
├── utils/
│   └── api.js
├── App.js
├── index.js
├── styles.js
└── .env
```

---

## 🛠️ Tech Stack

- React.js (Functional components)
- React Context API
- Axios for API calls
- Styled Components for styling
- OpenWeatherMap API

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up `.env` file

Create a `.env` file in the root of the project and add your API key:

```
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
```

You can get a free API key from: https://openweathermap.org/api

### 4. Run the app

```bash
npm start
```

The app will open at `http://localhost:3000`.

---

## 🔒 Environment Variables

| Variable Name                | Description                   |
|-----------------------------|-------------------------------|
| REACT_APP_WEATHER_API_KEY   | Your OpenWeatherMap API key   |

---

## 🖼️ Screenshots

> Add screenshots here if required by the submission.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
