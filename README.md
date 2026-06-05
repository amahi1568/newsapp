# 📰 NewsApp

A modern news application built with **React**, **Vite**, and **NewsAPI** that allows users to browse the latest headlines across multiple categories with an infinite scrolling experience.

## 🚀 Features

* 📰 Latest news headlines
* 📂 Category-wise news browsing

  * General
  * Business
  * Entertainment
  * Health
  * Science
  * Sports
  * Technology
* ♾️ Infinite scrolling
* ⚡ Loading progress bar
* 📱 Responsive design
* 🔄 Dynamic routing using React Router

## 🛠️ Tech Stack

* React
* Vite
* React Router DOM
* Bootstrap
* React Infinite Scroll Component
* React Top Loading Bar
* NewsAPI

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── NavBar.jsx
│   ├── News.jsx
│   ├── NewsItem.jsx
│   └── Spinner.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/amahi1568/newsapp.git
```

### 2. Navigate to the project directory

```bash
cd newsapp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create an environment file

Create a `.env` file in the root directory and add:

```env
VITE_NEWS_API_KEY=your_newsapi_key
```

### 5. Start the development server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

## 🔑 Environment Variables

| Variable            | Description          |
| ------------------- | -------------------- |
| `VITE_NEWS_API_KEY` | Your NewsAPI API key |

