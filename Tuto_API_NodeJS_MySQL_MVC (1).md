# 🚀 Créer une API Node.js + MySQL avec architecture MVC (routes, controllers, models)

## 🎯 Objectifs pédagogiques

Ce cours vous guide pas à pas dans la création d’une **API RESTful Node.js** connectée à une base **MySQL**, avec une architecture claire et professionnelle :

- Structurer un projet Node.js avec Express  
- Connecter Node.js à MySQL via le module `mysql2`  
- Séparer le code en **Routes**, **Controllers**, et **Models**  
- Comprendre la logique MVC (Modèle - Vue - Contrôleur) appliquée à une API  
- Tester les endpoints avec Postman ou Thunder Client  

---

## 🧱 1. Préparation du projet

### 1.1 Initialiser le projet

```bash
mkdir api-node-mysql
cd api-node-mysql
npm init -y
```

### 1.2 Installer les dépendances

```bash
npm install express mysql2
npm install --save-dev nodemon
```

### 1.3 Modifier le fichier `package.json`

Ajoutez un script pour le développement :

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Cela vous permettra de lancer le serveur automatiquement à chaque modification grâce à `nodemon`.

---

## 🗂️ 2. Structure du projet

Voici l’arborescence du projet que nous allons construire :

```
api-node-mysql/
│
├── server.js
├── config/
│   └── db.js
├── models/
│   └── productModel.js
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
└── package.json
```

---

## ⚙️ 3. Base de données MySQL

### 3.1 Création de la base et de la table

Connectez-vous à MySQL et exécutez :

```sql
CREATE DATABASE bdd_products;
USE bdd_products;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
```

### 3.2 Exemple de données

```sql
INSERT INTO products (name, price) VALUES
('Café', 3.50),
('Thé', 2.90),
('Chocolat', 4.00);
```

---

## 🔑 4. Configuration de la connexion MySQL (`config/db.js`)

```js
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // à adapter selon votre configuration
  password: "", // à adapter selon votre configuration
  database: "bdd_products", // à adapter selon votre configuration
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion à MySQL :", err.message);
    return;
  }
  console.log("✅ Connecté à la base de données MySQL !");
});

export default db;
```

---

## 🧠 5. Le modèle (`models/productModel.js`)

Le modèle gère toutes les interactions avec la base de données.

```js
import db from "../config/db.js";

const Product = {
  getAll: (callback) => {
    db.query("SELECT * FROM products", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], callback);
  },

  create: (data, callback) => {
    db.query("INSERT INTO products (name, price) VALUES (?, ?)", [data.name, data.price], callback);
  },

  update: (id, data, callback) => {
    db.query("UPDATE products SET name = ?, price = ? WHERE id = ?", [data.name, data.price, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM products WHERE id = ?", [id], callback);
  },
};

export default Product;
```

---

## 🧩 6. Le contrôleur (`controllers/productController.js`)

Le contrôleur contient la logique métier, c’est-à-dire comment réagir à une requête.

```js
import Product from "../models/productModel.js";

export const getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

export const getProductById = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: "Produit non trouvé" });
    res.status(200).json(results[0]);
  });
};

export const createProduct = (req, res) => {
  const data = req.body;
  if (!data.name || !data.price) {
    return res.status(400).json({ message: "Champs manquants" });
  }
  Product.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Produit ajouté", id: result.insertId });
  });
};

export const updateProduct = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Product.update(id, data, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Produit mis à jour" });
  });
};

export const deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Produit supprimé" });
  });
};
```

---

## 🌐 7. Les routes (`routes/productRoutes.js`)

```js
import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
```

---

## 🚀 8. Le serveur principal (`server.js`)

```js
import express from "express";
import productRoutes from "./routes/productRoutes.js";
import "./config/db.js"; // initialisation MySQL

const app = express();
const PORT = 3000;

app.use(express.json()); // Pour lire le JSON du corps des requêtes

// Utilisation des routes
app.use("/api/products", productRoutes);

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
```

---

## 🧪 9. Tests avec Postman ou Thunder Client

### URL de base
```
http://localhost:3000/api/products
```

### Endpoints disponibles

| Méthode | URL | Description | Exemple de corps (JSON) |
|----------|-----|-------------|--------------------------|
| GET | `/api/products` | Liste tous les produits | - |
| GET | `/api/products/:id` | Récupère un produit par son ID | - |
| POST | `/api/products` | Ajoute un produit | `{ "name": "Café", "price": 4.5 }` |
| PUT | `/api/products/:id` | Modifie un produit | `{ "name": "Thé vert", "price": 3.9 }` |
| DELETE | `/api/products/:id` | Supprime un produit | - |

---

## 🧩 10. Résumé de l’architecture MVC

| Couche | Rôle | Fichier |
|--------|------|----------|
| **Model** | Interagit avec la base de données | `models/productModel.js` |
| **Controller** | Contient la logique métier | `controllers/productController.js` |
| **Route** | Définit les endpoints et redirige vers le bon contrôleur | `routes/productRoutes.js` |
| **Server** | Configure Express et lance le serveur | `server.js` |

---

## 🧠 11. Améliorations possibles

- Ajouter une gestion des erreurs centralisée (middleware)
- Utiliser un ORM comme **Sequelize** ou **Prisma**
- Ajouter des tests unitaires (avec **Vitest** et **Supertest**)
- Ajouter une couche **service** si la logique métier devient complexe
- Sécuriser l’accès à l’API avec des **JWT (tokens)**

---

✅ **Félicitations !** Vous venez de construire une API Node.js complète et fonctionnelle avec MySQL, une architecture claire, et des endpoints REST prêts à l’emploi.
