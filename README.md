# 🔐 Password Protected Secrets App

A simple **Node.js + Express** web application that demonstrates password authentication using middleware and environment variables.
Users must enter the correct password to access a secret page.

The project is deployed online using **Render**.

---

## 🚀 Live Demo

Live Website:
https://password-authenticator.onrender.com

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* Middleware
* Environment Variables (.env)
* HTML
* Render (Deployment)

---

## 📂 Project Structure

```
3.5 Secrets Project
│
├── public
│   ├── index.html
│   └── secret.html
│
├── index.js
├── package.json
├── package-lock.json
└── render.yaml
```

---

## ⚙️ How It Works

1. The user opens the website.
2. The user enters a password.
3. A middleware function checks the password.
4. If the password matches the environment variable:

   * The **secret page** is shown.
5. If the password is incorrect:

   * The **login page reloads**.

---

## 🔒 Authentication Logic

The password is stored securely using an environment variable.

Example:

```
PASSWORD=your_password
```

Middleware checks the password:

```javascript
function passwordCheck(req, res, next) {
  const password = req.body.password;

  if (password === process.env.PASSWORD) {
    next();
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
}
```

---

## 🧑‍💻 Running the Project Locally

### 1. Clone the repository

```
git clone https://github.com/yourusername/password-authenticator.git
```

### 2. Navigate to the project

```
cd "3.5 Secrets Project"
```

### 3. Install dependencies

```
npm install
```

### 4. Create `.env` file

```
PASSWORD=yourpassword
```

### 5. Start the server

```
node index.js
```

### 6. Open in browser

```
http://localhost:3000
```

---

## 🌐 Deployment

This application is deployed using **Render**.

Steps:

1. Push the project to GitHub
2. Connect the repository to Render
3. Add environment variable `PASSWORD`
4. Deploy as a Web Service

---

## 📌 Key Concepts Demonstrated

* Express server creation
* Middleware usage
* Password validation
* Environment variables for security
* Deployment of Node.js applications

---

## 📄 License

This project is for educational purposes.

