# Cinema Booking API

A learning project to gain hands-on backend development experience with Express.js, building a cinema booking API.

## 🎯 Learning Objectives

- Create RESTful API endpoints
- Implement proper error handling (HTTP vs Server errors)
- Understand separation of concerns (Routes, Services, Data)
- Learn security best practices
- Practice Express.js patterns

## 🚀 Getting Started

### Prerequisites

- Node.js installed

### Installation

```bash
npm install
```

### Running the Server

```bash
npm start
```

The server will run on `http://localhost:3000`

## 📚 API Endpoints

### Get All Movies

```http
GET /movies
```

### Get Movie by ID

```http
GET /movieById/:id
```

**Example:**

```bash
curl -X GET http://localhost:3000/movies
curl -X GET http://localhost:3000/movieById/1
```

## 🏗️ Project Structure

```
src/
├── app.js              # Express app setup
├── server.js           # Server entry point
├── data/
│   └── movies.js       # Movie data
├── services/
│   ├── helloService.js
│   └── movieListService.js
├── routes/
│   ├── helloRoutes.js
│   └── moviesListRoutes.js
└── middleware/
    └── errorHandler.js
```

## 🧠 Key Concepts Learned

- **Route Handlers**: Handle HTTP requests and responses
- **Service Layer**: Business logic separation
- **Error Handling**: 404 (client) vs 500 (server) errors
- **Security**: Generic error messages to prevent information leakage
- **Express Middleware**: Error handling middleware pattern

## 🎬 Sample Movie Data

The API includes 100 sample movies with:

- ID, Name, Description
- Genre, IMDB Rating, Price

## 🔧 Development Notes

- Uses CommonJS module system
- Follows RESTful API conventions
- Implements proper HTTP status codes
- Includes try-catch blocks for error handling

---

**Built with ❤️ for learning backend development**
