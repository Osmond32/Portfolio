# Guide complet : Utilisation de Nodemailer avec Node.js et Express

## 1. Introduction

Nodemailer est une librairie Node.js permettant d'envoyer des emails
facilement depuis une application backend. Il est très utilisé pour : -
Confirmation d'inscription - Réinitialisation de mot de passe -
Notifications (commandes, réservations, etc.)

------------------------------------------------------------------------

## 2. Prérequis

-   Node.js \>= 18
-   Express
-   Connaissances de base en JavaScript backend
-   Un compte email (Gmail, Outlook, Mailtrap, etc.)

------------------------------------------------------------------------

## 3. Installation du projet

### 3.1 Initialisation

``` bash
npm init -y
```

### 3.2 Installation des dépendances

``` bash
npm install express nodemailer dotenv
npm install --save-dev nodemon
```

------------------------------------------------------------------------

## 4. Structure du projet (bonne pratique DWWM)

    project/
    │
    ├── src/
    │   ├── app.js
    │   ├── server.js
    │   ├── routes/
    │   │   └── mail.routes.js
    │   ├── controllers/
    │   │   └── mail.controller.js
    │   ├── services/
    │   │   └── mail.service.js
    │   └── config/
    │       └── mail.config.js
    │
    ├── .env
    ├── .gitignore
    └── package.json

------------------------------------------------------------------------

## 5. Configuration des variables d'environnement

### 5.1 Fichier `.env`

``` env
PORT=3000
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=example@gmail.com
MAIL_PASS=mot_de_passe_application
```

> ⚠️ Pour Gmail, utilisez un **mot de passe d'application**

------------------------------------------------------------------------

## 6. Configuration Nodemailer

### 6.1 `config/mail.config.js`

``` js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

module.exports = transporter;
```

------------------------------------------------------------------------

## 7. Service d'envoi d'email

### 7.1 `services/mail.service.js`

``` js
const transporter = require("../config/mail.config");

const sendMail = async ({ to, subject, html }) => {
  return transporter.sendMail({
    from: `"DWWM App" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html
  });
};

module.exports = { sendMail };
```

------------------------------------------------------------------------

## 8. Contrôleur

### 8.1 `controllers/mail.controller.js`

``` js
const { sendMail } = require("../services/mail.service");

exports.sendTestMail = async (req, res) => {
  try {
    const { email } = req.body;

    await sendMail({
      to: email,
      subject: "Test Nodemailer",
      html: "<h1>Email envoyé avec succès</h1>"
    });

    res.status(200).json({ message: "Email envoyé" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

------------------------------------------------------------------------

## 9. Route Express

### 9.1 `routes/mail.routes.js`

``` js
const express = require("express");
const router = express.Router();
const { sendTestMail } = require("../controllers/mail.controller");

router.post("/send", sendTestMail);

module.exports = router;
```

------------------------------------------------------------------------

## 10. Intégration dans l'application

### 10.1 `app.js`

``` js
require("dotenv").config();
const express = require("express");

const mailRoutes = require("./routes/mail.routes");

const app = express();
app.use(express.json());

app.use("/api/mail", mailRoutes);

module.exports = app;
```

### 10.2 `server.js`

``` js
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("Serveur lancé sur le port " + process.env.PORT);
});
```

------------------------------------------------------------------------

## 11. Test avec Postman

-   Méthode : POST
-   URL : `http://localhost:3000/api/mail/send`
-   Body (JSON) :

``` json
{
  "email": "test@example.com"
}
```

------------------------------------------------------------------------

## 12. Gestion des erreurs courantes

-   Mauvais mot de passe SMTP
-   Port bloqué
-   Email en spam
-   Variables `.env` non chargées


**Auteur : Pierre -- Formateur DWWM**
