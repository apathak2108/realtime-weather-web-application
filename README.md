
# Weather Tracking System - Frontend

## Overview
This is the frontend of a weather tracking system that provides real-time weather data for various cities. Users can search for weather conditions based on city names or geographical coordinates (latitude and longitude). The application fetches data from a backend API and displays weather information along with alerts based on predefined temperature thresholds.

## Features
- **Search for Weather by City:** Users can input a city name to fetch its current weather conditions.
- **Location-Based Weather:** Users can retrieve weather data based on their geographical coordinates.
- **Real-Time Data Updates:** Weather data is updated regularly to provide users with the latest information.
- **Temperature Alerts:** The system checks for temperature alerts and sends notifications if the temperature exceeds predefined thresholds.
- **User-Friendly UI:** The frontend is designed for ease of use and provides a responsive experience across devices.
- **Redux for State Management:** The application uses Redux to manage state efficiently across components.

## Technologies Used
- **React:** For building the user interface.
- **Redux:** For state management across the application.
- **Axios:** For making API requests to the backend.
- **React Toastify:** For displaying notifications to the user.
- **React Loading Skeleton:** For loading placeholders while data is being fetched.
- **Responsive Design:** The UI is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

## Installation

1. Clone the repository:
   ```bash
   git clone <YOUR_FRONTEND_REPOSITORY_URL>
   cd <YOUR_FRONTEND_DIRECTORY>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## API Integration
The frontend interacts with a backend API that provides weather data. The API can be accessed through the following endpoints:

- **Fetch Weather by City:**
  - URL: `http://localhost:5000/api/weather?city=<CITY_NAME>`

- **Fetch Weather by Coordinates:**
  - URL: `http://localhost:5000/api/weather?lat=<LATITUDE>&lon=<LONGITUDE>`

## How to Use
1. Upon loading the application, the user will see a search bar to enter a city name.
2. Enter the city name and press Enter or click the search button to retrieve the weather data.
3. To use location-based weather, the user can enable location services, and the app will fetch the weather based on the current geographical coordinates.
4. The application will display the current temperature, weather conditions, and any alerts if the temperature exceeds the threshold.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.
