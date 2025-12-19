# Fullstack Assignment – Admin & Landing Page

This project is a fullstack web application.  
It includes a public landing page and an admin dashboard to manage content.

---

## 🔗 Live Demo
- Frontend: https://assignment-brown-pi.vercel.app/
- Backend: https://assignment-backend-9y1c.onrender.com

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## ✨ Features

### Landing Page
- Projects section (dynamic from API)
- Happy Clients section
- Contact form (data stored in DB)
- Newsletter subscription

### Admin Panel
- Add & View Projects
- Add & View Clients
- View Contact Form Submissions
- View Newsletter Subscribers

---

## 📂 Project Structure

### Frontend
- `/` → Public landing page
- `/admin` → Admin dashboard
  - `/admin/projects/add`
  - `/admin/projects/view`
  - `/admin/clients/add`
  - `/admin/clients/view`
  - `/admin/contacts`
  - `/admin/newsletter`

### Backend APIs
- `POST /api/project`
- `GET /api/project`
- `POST /api/client`
- `GET /api/client`
- `POST /api/contact`
- `GET /api/contact`
- `POST /api/newsletter`
- `GET /api/newsletter`

---

## 🖼 Image Handling
Images are handled using image URLs for simplicity.  
In a production setup, image uploads can be managed using Multer and Cloudinary.

---

## 🚀 How to Run Locally

### Backend/Frontend
```bash
npm install
npm run dev

