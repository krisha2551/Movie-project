# 🎬 Movie Management API

A RESTful Movie Management API built with Node.js, Express.js, MongoDB, Multer, and Cloudinary.
This API allows users to add, view, update, and delete movies, including movie poster upload.

The project demonstrates CRUD operations, image upload using Multer, cloud storage with Cloudinary, and centralized error handling.

# 🚀 Features

🎬 Add new movie with poster image

📄 Get all movies

🔍 Get single movie by ID

✏️ Update movie details

❌ Delete movie

☁️ Image upload using Cloudinary

📦 File upload using Multer

⚠️ Centralized error handling

🗄️ MongoDB database integration


# 🛠️ Tech Stack

| Category                 | Technology |
| ------------------------ | ---------- |
| ⚙️ Runtime               | Node.js    |
| 🚀 Framework             | Express.js |
| 🗄️ Database             | MongoDB    |
| 🔗 ODM                   | Mongoose   |
| 📤 File Upload           | Multer     |
| ☁️ Cloud Storage         | Cloudinary |
| 🔑 Environment Variables | dotenv     |
| 🧪 API Testing           | Postman    |
| 🛠️ Development Tool     | Nodemon    |


# 📁 Project Structure

MOVIE-PROJECT <br>

├── config <br>
│   ├── cloudinary.js <br>
│   └── db.js <br>
│
├── controllers <br>
│   └── movieController.js <br>
│
├── middleware <br>
│   ├── httpError.js <br>
│   └── upload.js <br>
│
├── model <br>
│   └── Movie.js <br>
│
├── routes <br>
│   └── movieRoutes.js <br>
│
├── .env <br>
├── app.js <br>
├── package.json <br>
└── README.md

# 🌐 Live API

https://movie-project-n1g5.onrender.com


# 📦 Dependencies

✅ express

✅ mongoose

✅ multer

✅ cloudinary

✅ dotenv

✅ cors

✅ nodemon


# 📌 API Endpoints

🏠 Check Server

GET /

Response

{
  "message": "Movie API is running successfully"
}

# 🎬 Add Movie

POST /movies/add

Body (form-data)

| Field       | Type   |
| ----------- | ------ |
| title       | text   |
| description | text   |
| genre       | text   |
| rating      | number |
| releaseYear | number |
| image       | file   |

# 📄 Get All Movies

GET /movies/allMovies

🔍 Get Single Movie

GET /movies/:id

✏️ Update Movie

PATCH /movies/update/:id

❌ Delete Movie

DELETE /movies/delete/:id


# 🧪 API Testing (Postman)

📸 Screenshots

**Server Check**


**Add Movie**


**Get All Movies**


**Get Single Movie**


**Update Movie**


**Delete Movie**


# ⚙️ Installation

1️⃣ Clone Repository

git clone https://github.com/yourusername/movie-project.git

2️⃣ Go to Project Folder

cd movie-project

3️⃣ Install Dependencies

npm install

4️⃣ Create .env File

PORT=5000

MONGO_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloud_name

CLOUD_API_KEY=your_api_key

CLOUD_API_SECRET=your_api_secret

5️⃣ Run Server

npm run dev

Server will run on:

http://localhost:5000
