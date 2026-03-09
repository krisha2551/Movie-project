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

<img width="1919" height="1015" alt="Screenshot 2026-03-09 212835" src="https://github.com/user-attachments/assets/b38e394c-2cbb-4641-95f0-728417e0e9c0" />


**Add Movie**

<img width="1919" height="1018" alt="Screenshot 2026-03-09 212902" src="https://github.com/user-attachments/assets/37dbc1cc-2304-4769-a248-71bc282db458" />

**Get All Movies**

<img width="1919" height="1020" alt="Screenshot 2026-03-09 212932" src="https://github.com/user-attachments/assets/45848820-8ad6-4e59-94f0-f91046d35076" />


**Get Single Movie**

<img width="1919" height="1019" alt="Screenshot 2026-03-09 213007" src="https://github.com/user-attachments/assets/59a9281c-3da5-40d7-9fd0-d1a59f25fc56" />


**Update Movie**

<img width="1919" height="1022" alt="Screenshot 2026-03-09 213039" src="https://github.com/user-attachments/assets/b1d0ada2-f0fd-43ae-9f13-03008b9ab5c0" />


**Delete Movie**

<img width="1919" height="1023" alt="Screenshot 2026-03-09 213103" src="https://github.com/user-attachments/assets/a0da86aa-8522-4385-b2d3-e7ee01f78643" />


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

