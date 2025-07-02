
# MERN Stack Todo Application

A full-stack todo application built with MongoDB, Express.js, React, and Node.js.

## 🚀 Technologies Used

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Shadcn/ui Components
- React Router DOM
- Vite (Build tool)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS enabled

## 📁 Project Structure

```
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   npm install
   ```

2. Create a `.env` file in the client directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Full Stack Development
Run both frontend and backend simultaneously:
```bash
# From root directory
npm run install-all  # Install dependencies for both client and server
npm run dev          # Run both client and server
```

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the client:
   ```bash
   cd client && npm run build
   ```
2. Deploy the `dist` folder to Vercel or Netlify
3. Set environment variables in deployment platform

### Backend Deployment (Render/Railway/Heroku)
1. Deploy the server folder to your preferred platform
2. Set environment variables (MONGODB_URI, JWT_SECRET, PORT)
3. Ensure CORS is configured for your frontend domain

## 🎯 Features

- ✅ User Authentication (Sign up/Sign in)
- ✅ Create, Read, Update, Delete Todos
- ✅ Priority levels (Low, Medium, High)
- ✅ Responsive design
- ✅ JWT-based authentication
- ✅ MongoDB data persistence

## 🧪 API Testing

Use Postman to test the following endpoints:

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Todos
- `GET /api/todos` - Get user todos (requires auth)
- `POST /api/todos` - Create new todo (requires auth)
- `PUT /api/todos/:id` - Update todo (requires auth)
- `DELETE /api/todos/:id` - Delete todo (requires auth)

## 📱 Demo Video

Create a 2-3 minute demo video showing:
1. App walkthrough and UI
2. Add/Edit/Delete todo functionality
3. User authentication flow
4. Both deployed frontend and backend working
5. Brief code overview

Upload to YouTube or Google Drive with public sharing.

## 🔗 Live Deployment URLs

- **Frontend URL**: [Add your Vercel/Netlify URL here]
- **Backend URL**: [Add your Render/Railway URL here]

## 👨‍💻 Development

### Environment Variables
Ensure you have the following environment variables set:

**Server (.env)**:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
NODE_ENV=production
```

**Client (.env)**:
```env
VITE_API_URL=https://your-backend-url.com/api
```

### CORS Configuration
The backend is configured to allow requests from your frontend domain. Update the CORS settings in `server/server.js` for production.

## 📝 Commit Guidelines

Follow meaningful commit messages:
- `feat: add user authentication`
- `fix: resolve todo deletion bug`
- `docs: update README with deployment instructions`
- `style: improve responsive design`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
