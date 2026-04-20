# Cinema Booking API

A learning project to gain hands-on backend development experience with Express.js, building a cinema booking API.

## 🎯 Learning Objectives

- Create RESTful API endpoints
- Implement proper error handling (HTTP vs Server errors)
- Understand separation of concerns (Routes, Services, Data)
- Learn query parameters and filtering
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

### Filter Movies by Genre

```http
GET /movieByGenre?genre=Action
```

Genre matching is case-insensitive.

### Search Movies by Name

```http
GET /movieByName?name=the
```

Supports partial matching (beginning, middle, or end of the movie name). Case-insensitive.

### Filter Movies by Price Range

```http
GET /movieByPrice?minPrice=10&maxPrice=13
```

| Query Param | Type   | Description              |
| ----------- | ------ | ------------------------ |
| `minPrice`  | number | Minimum ticket price (≥) |
| `maxPrice`  | number | Maximum ticket price (≤) |

**Examples:**

```bash
curl "http://localhost:3000/movies"
curl "http://localhost:3000/movieById/1"
curl "http://localhost:3000/movieByGenre?genre=Horror"
curl "http://localhost:3000/movieByName?name=code"
curl "http://localhost:3000/movieByName?name=ZONE"
curl "http://localhost:3000/movieByPrice?minPrice=10&maxPrice=13"
```

### Get All Showtimes

```http
GET /showtimes
```

### Get Showtime by ID

```http
GET /showtimeById/:id
```

### Search Showtimes for a Movie

```http
GET /showtimeByMovieId?movieId=2
```

### Search Showtimes by Date

```http
GET /showtimeByDate?date=2026-04-25
```

**Examples:**

```bash
curl "http://localhost:3000/showtimes"
curl "http://localhost:3000/showtimeById/1"
curl "http://localhost:3000/showtimeByMovieId?movieId=2"
curl "http://localhost:3000/showtimeByDate?date=2026-04-25"
```

## 🏗️ Project Structure

```
src/
├── app.js              # Express app setup
├── server.js           # Server entry point
├── data/
│   └── movies.js       # Movie data (100 movies)
│   └── showtimes.js       # Showtimes data (100 movies)
├── services/
│   ├── helloService.js
│   └── movieServices.js  # Movie business logic (get, filter, search)
│   └── showtimeServices.js  # Showtimes business logic (get, filter, search)
├── routes/
│   ├── helloRoutes.js
│   └── moviesListRoutes.js
│   └── showtimesListRoutes.js
├── middleware/
│   └── errorHandler.js
│   └── priceValidator.js
└── tests/
    └── hello.test.js
```

## 🧠 Key Concepts Learned

- **Route Handlers**: Handle HTTP requests and responses
- **Service Layer**: Business logic separation
- **Error Handling**: 404 (client) vs 500 (server) errors
- **Security**: Generic error messages to prevent information leakage
- **Express Middleware**: Error handling middleware pattern
- **Query Parameters**: Using `req.query` to accept filter/search criteria
- **Array.filter()**: Filtering arrays based on conditions
- **String.includes()**: Partial/fuzzy string matching
- **Case-Insensitive Matching**: Using `.toLowerCase()` on both sides of a comparison
- **parseFloat()**: Converting string query params to numbers
- **Related Data**: showtimes reference movieId from movies (foreign key concept)
- **.find() vs .filter()**: single result vs multiple results
- **Pure Function Validation**: validating input without coupling to Express (priceValidator.js)
- **parseInt()**: converting string query/route params to integers

## 🎬 Sample Movie Data

The API includes 100 sample movies with:

- ID, Name, Description
- Genre, IMDB Rating, Price

## 🔧 Development Notes

- Uses CommonJS module system
- Follows RESTful API conventions
- Implements proper HTTP status codes
- Includes try-catch blocks for error handling

## 🗺️ Roadmap

### Phase 1: Showtimes -- DONE

Add screening data so users can see when movies are playing.

- [x] Create `data/showtimes.js` — showtime data (id, movieId, date, time, screen, totalSeats, availableSeats)
- [x] Create `services/showtimeServices.js` — get showtimes by movieId, by date
- [x] Create `routes/showtimeRoutes.js`
  - [x] `GET /showtimeById?movieId=1` — all showtimes for a movie
  - [x] `GET /showtimeByDate?date=2026-04-01` — all showtimes on a date
  - [x] `GET /showtimeById/:id` — single showtime details

### Phase 2: Booking System (TDD Approach)

The core feature — built using Test-Driven Development: write a failing test first, then write the code to make it pass, then refactor.

- [ ] Set up Jest testing framework
- [ ] **TDD Cycle for each feature below:**
  1. Write a test that describes what the feature should do (RED — test fails)
  2. Write the minimum code to make the test pass (GREEN — test passes)
  3. Clean up the code without changing behaviour (REFACTOR)
- [ ] Create `data/bookings.js` — in-memory bookings store
- [ ] Create `services/bookingServices.js` — create, retrieve, cancel bookings
- [ ] Create `routes/bookingRoutes.js`
  - [ ] `POST /bookings` — create a booking (showtimeId, customerName, numberOfSeats)
  - [ ] `GET /bookings/:id` — view a booking by its ID
  - [ ] `DELETE /bookings/:id` — cancel a booking
- [ ] Reduce available seats when a booking is made
- [ ] Restore available seats when a booking is cancelled
- [ ] Prevent overbooking (reject if not enough seats)

### Phase 3: Input Validation

Protect the API from bad requests.

- [ ] Create `middleware/validateBooking.js` — check required fields, valid data types
- [ ] Validate showtimeId exists before booking
- [ ] Validate numberOfSeats is a positive number
- [ ] Return clear 400 error messages for invalid requests

### Phase 4: Security

Harden the API against common threats.

- [ ] **Helmet** — Set secure HTTP headers (prevents clickjacking, XSS, etc.)
- [ ] **Rate Limiting** — Limit requests per IP to prevent abuse (e.g. express-rate-limit)
- [ ] **Input Sanitization** — Strip malicious content from user input
- [ ] **Error Message Security** — Never leak stack traces or internal details to clients (already started with errorHandler.js)
- [ ] **CORS Setup** — Control which origins can access the API

### Phase 5: API Infrastructure

Production-readiness and developer experience.

- [ ] **Request Logging** — Add Morgan for logging incoming requests
- [ ] **Environment Variables** — Use dotenv for config (PORT, etc.)
- [ ] **API Versioning** — Prefix routes with `/api/v1`

---

**Built with ❤️ for learning backend development**
