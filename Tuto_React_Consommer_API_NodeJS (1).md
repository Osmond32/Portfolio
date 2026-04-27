# ⚛️ Consommer une API Node.js avec React et Axios
## Architecture : components / pages / services

---

## 🎯 Objectifs pédagogiques

Ce tutoriel vous guide pas à pas dans la création d’une **application React** consommant une **API Node.js** (comme celle créée dans le cours précédent), en suivant une **architecture claire et professionnelle** :

- Organisation du code en **components**, **pages**, et **services**
- Utilisation d’**Axios** pour effectuer des requêtes HTTP
- Gestion des états et effets avec **useState** et **useEffect**
- Affichage dynamique des données récupérées depuis une API REST

---

## 🧱 1. Création du projet React

### 1.1 Initialiser le projet

```bash
npx create-react-app react-api-client
cd react-api-client
npm install axios react-router-dom
```

### 1.2 Lancer le serveur React

```bash
npm start
```

Par défaut, l’application sera disponible sur :  
👉 http://localhost:3000

---

## 🗂️ 2. Structure du projet

Voici la structure de l’application React :

```
react-api-client/
│
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductList.jsx
│   │   └── ProductDetails.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── index.js
│
└── package.json
```

---

## 🔑 3. Configuration du service API (`src/services/api.js`)

Le dossier `services` contient les appels HTTP centralisés.  
Cela permet de garder un code propre et réutilisable.

```js
import axios from "axios";

const API_URL = "http://localhost:3000/api/products"; // URL de votre API Node.js

export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createProduct = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateProduct = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
```

---

## 🧩 4. Composants réutilisables (`src/components/`)

### 4.1 Composant `Navbar.jsx`

```jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#222", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "10px" }}>Accueil</Link>
      <Link to="/products" style={{ color: "white" }}>Produits</Link>
    </nav>
  );
};

export default Navbar;
```

### 4.2 Composant `ProductCard.jsx`

```jsx
const ProductCard = ({ product, onDelete }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>Prix : {product.price} €</p>
      {onDelete && (
        <button onClick={() => onDelete(product.id)} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }}>
          Supprimer
        </button>
      )}
    </div>
  );
};

export default ProductCard;
```

---

## 📄 5. Les pages (`src/pages/`)

### 5.1 Page d’accueil (`Home.jsx`)

```jsx
const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Bienvenue sur notre application React + Node.js</h1>
      <p>Utilisez la navigation pour consulter la liste des produits.</p>
    </div>
  );
};

export default Home;
```

### 5.2 Page `ProductList.jsx`

Cette page affiche la liste des produits et permet de les supprimer.

```jsx
import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../services/api";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts(); // rafraîchir la liste
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Liste des produits</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
```

### 5.3 Page `ProductDetails.jsx`

```jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchData();
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Détails du produit</h2>
      <h3>{product.name}</h3>
      <p>Prix : {product.price} €</p>
    </div>
  );
};

export default ProductDetails;
```

---

## 🌐 6. Fichier principal (`src/App.jsx`)

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
```

---

## 🚀 7. Lancer le projet

### Démarrer le backend Node.js (dans un autre terminal)

```bash
cd ../api-node-mysql
npm run dev
```

### Démarrer le frontend React

```bash
cd ../react-api-client
npm start
```

Ensuite, ouvrez le navigateur sur :  
👉 **http://localhost:3000**

---

## 🧩 8. Architecture Résumée

| Couche | Rôle | Exemple |
|---------|------|----------|
| **services** | Gère les appels API avec Axios | `src/services/api.js` |
| **components** | Composants réutilisables | `ProductCard.jsx`, `Navbar.jsx` |
| **pages** | Pages principales / vues | `Home.jsx`, `ProductList.jsx`, `ProductDetails.jsx` |
| **App.jsx** | Gère la navigation et structure globale | `src/App.jsx` |

---

## 💡 9. Améliorations possibles

- Ajouter un composant `ProductForm.jsx` pour créer ou modifier un produit  
- Ajouter une gestion des erreurs (`try/catch`) autour des appels Axios  
- Mettre en place un système de **toast notifications** (ex : react-toastify)  
- Utiliser **Context API** ou **Redux Toolkit** pour gérer un état global  
- Ajouter une pagination ou une recherche

---

✅ **Félicitations !** Vous venez de créer une application React complète consommant une API Node.js avec une architecture claire et modulaire.
