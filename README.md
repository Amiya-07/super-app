# Super App

A modern entertainment dashboard built with Next.js, React, Tailwind CSS, Zustand, and multiple external APIs.

## Features

### Authentication & Registration

* User registration form
* Form validation
* Zustand state management
* User data persistence

### Category Selection

* Entertainment category onboarding
* Minimum 3 category validation
* Selected category management

### Dashboard

* User Profile Card
* Live Weather Widget (OpenWeather API)
* Live News Feed (News API)
* Notes Widget with Local Storage
* Countdown Timer

### Entertainment Discovery

* Movie recommendations using OMDb API
* Category-based movie fetching
* Movie cards with hover animations
* Movie details modal popup

## Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### State Management

* Zustand

### APIs

* OpenWeather API
* News API
* OMDb API

### Deployment

* GitHub
* Netlify / Vercel

## Installation

Clone the repository:

```bash
git clone https://github.com/Amiya-07/super-app.git
```

Navigate to project:

```bash
cd super-app
```

Install dependencies:

```bash
npm install
```

Create `.env.local` file:

```env
NEXT_PUBLIC_WEATHER_API_KEY=YOUR_WEATHER_KEY
NEXT_PUBLIC_NEWS_API_KEY=YOUR_NEWS_KEY
NEXT_PUBLIC_OMDB_API_KEY=YOUR_OMDB_KEY
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Project Structure

```text
app/
├── register
├── categories
├── dashboard
├── movies

components/
├── ProfileCard
├── WeatherCard
├── NewsCard
├── NotesCard
├── TimerCard
├── MovieCard
├── MovieModal

services/
├── weather.ts
├── news.ts
├── movies.ts

store/
├── useStore.ts
```

## Author

Amiya Ranjan  Sing Nayak

Full Stack Java Developer

## Future Enhancements

* Authentication with JWT
* User login/logout
* Dark/Light theme
* Advanced movie filtering
* Search functionality
* Favorites & Watchlist
* Responsive mobile dashboard
* PWA support
