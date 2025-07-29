# 🧠 NestJS Library API – RESTful CRUD API with JWT Authentication

This is a full-featured backend project for a library system I built using **NestJS** and **MongoDB**.  
The goal was to develop a modern, modular, and scalable **REST API** that supports **authentication, authorization**, and full **CRUD** operations – while following best practices of the NestJS framework.

---

🚀 Features

✅ Modular RESTful API built with NestJS  
🔐 User authentication & authorization using JWT (Bearer Tokens)  
🗃️ MongoDB with Mongoose for data modeling  
🧱 CRUD operations for **users** and **books**  
🔐 Passwords are securely hashed using **bcrypt**  
🧩 AuthGuard & middleware-based route protection  
📄 API documentation via Swagger (OpenAPI)  
🧹 Robust validation using class-validator  
🧾 Request logging via custom middleware (`RequestLogger`)  
⚙️ Configuration via `.env` (JWT secret, DB connection, etc.)

---

📦 Tech Stack

- **NestJS** (TypeScript, Modular Architecture)
- **MongoDB** with **Mongoose**
- **JWT** for stateless authentication
- **bcryptjs** for password hashing
- **class-validator** for input validation
- **Swagger (OpenAPI)** for API documentation
- **Express** under the hood via NestJS
- **dotenv** for environment configuration

---

📄 What I Built & Learned

🧱 Created reusable modules (Users, Auth, Books) using NestJS conventions  
🔐 Built a secure authentication system with Guards and JWT  
🛠 Integrated middleware for logging every incoming request  
📚 Modeled Users and Books using clean Mongoose schemas  
🧼 Applied DTOs and class-based validation to sanitize inputs  
🔍 Implemented clean RESTful routes for full CRUD on both resources  
🧠 Gained deep understanding of NestJS decorators, lifecycle, and architecture

---

🌍 Environment Configuration

This project uses a `.env` file to store sensitive configuration values like JWT secrets and database URLs.  
This keeps secrets out of the codebase and allows flexible configuration for different environments.

### 🛠 Required Environment Variables

Create a `.env` file in the project root with the following content:

PORT=3000
JWT_SECRET=your-very-secret-key
JWT_EXPIRES_IN=1h

| Variable         | Description                                    |
| ---------------- | ---------------------------------------------- |
| `PORT`           | Port the app runs on (optional, default: 3000) |
| `JWT_SECRET`     | Secret key used to sign JWTs                   |
| `JWT_EXPIRES_IN` | Token lifetime (e.g., `1h`, `30m`, `7d`)       |

### 🚫 Do Not Commit Secrets

Make sure your `.gitignore` includes: .env

---

🧪 Example Endpoints

> 📘 All protected routes require a valid JWT in the header:  
> `Authorization: Bearer <token>`

### 🧑 User Routes

- `POST /auth/register` – Register a new user
- `POST /auth/login` – Login and receive a JWT
- `GET /users` – Get all users (protected)
- `GET /users/:id` – Get user by ID (protected)
- `PATCH /users/:id` – Update user by ID (protected)
- `DELETE /users/:id` – Delete user by ID (protected)

### 📚 Book Routes

- `POST /books` – Create a new book (protected)
- `GET /books` – Get all books (protected)
- `GET /books/:id` – Get a specific book (protected)
- `PATCH /books/:id` – Update book info (protected)
- `DELETE /books/:id` – Delete a book (protected)

---

📘 API Documentation – Swagger UI

This API is fully documented using **Swagger (OpenAPI 3)**, with live documentation and interactive testing available in your browser.

🔗 **Swagger UI Access:**  
http://localhost:3000/api

Features:

- 📖 Full documentation for all endpoints, methods, and DTOs
- 🔐 JWT Authentication via Swagger's "Authorize" button
- 🧾 Live examples for request bodies and responses
- 💬 Clear separation by modules/tags (`auth`, `users`, `books`)
- 📦 Schemas generated from class-based DTOs

---

🛡️ Security

- All passwords are securely hashed before being saved
- JWTs are verified and decoded via a custom `AuthGuard`
- Unauthorized requests receive clear `401` or `403` responses
- Middleware ensures logging of all requests (method, path, duration)

---

👨‍💻 Author

Mika Mielinski  
📫 Contact info coming soon

---

📌 Note

This is a **backend-only project**, focused on clean API design, architecture, and authentication using NestJS.  
A matching frontend (e.g. with Angular or React) may follow later.
