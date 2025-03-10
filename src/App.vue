<template>
	<div>
	  <header>
		<img src="ecom_logo.png" alt="LOGO">
		<h1>Les Bonnes Pièces</h1>
	  </header>
	  <main>
		<!-- Menu de recherche -->
		<section class="filtres">
		  <h3>Filtres</h3>
		  <input type="text" v-model="searchQuery" placeholder="Rechercher une pièce..." /><br><br><br>
		  <select v-model="selectedCategory">
			<option value="">Toutes les catégories</option>
			<option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
		  </select>
		  <br><br><br><br>
		  <label>
			<input type="checkbox" v-model="showAvailableOnly" /> Afficher uniquement les pièces disponibles
		  </label>
		  <br><br><br>
		  <button @click="sortByPrice('asc')">Trier par prix croissant</button> <br><br>
		  <button @click="sortByPrice('desc')">Trier par prix décroissant</button>
		</section>
  
		<!-- Fiches produits -->
		<section class="fiches">
		  <div v-for="p in filteredProducts" :key="p.id" class="fiche">
			<img :src="p.image" :alt="p.nom" />
			<h3>{{ p.nom }}</h3>
			<p>{{ p.prix }} €</p>
			<p>{{ p.categorie }}</p>
			<p v-if="p.disponible" class="available">Disponible</p>
			<p v-else class="unavailable">Indisponible</p>
			<button @click="addToCart(p)" :disabled="!p.disponible">Ajouter au panier</button>
		  </div>
		</section>
  
		<!-- Panier -->
		<section class="panier">
		  <h3>Panier</h3>
		  <ul>
			<li v-for="item in cart" :key="item.id">
			  {{ item.nom }} - {{ item.prix }} €
			</li>
		  </ul>
		  <p>Total: {{ totalPrice }} €</p>
		</section>
	  </main>
	</div>
  </template>
  
  <script>
  export default {
	name: 'App',
	data() {
	  return {
		products: [],
		searchQuery: '',
		selectedCategory: '',
		showAvailableOnly: false,
		cart: []
	  };
	},
	computed: {
	  categories() {
		return [...new Set(this.products.map(p => p.categorie))];
	  },
	  filteredProducts() {
		let filtered = this.products;
  
		// Filter by search query
		if (this.searchQuery) {
		  filtered = filtered.filter(p => p.nom.toLowerCase().includes(this.searchQuery.toLowerCase()));
		}
  
		// Filter by category
		if (this.selectedCategory) {
		  filtered = filtered.filter(p => p.categorie === this.selectedCategory);
		}
  
		// Filter by availability
		if (this.showAvailableOnly) {
		  filtered = filtered.filter(p => p.disponible);
		}
  
		return filtered;
	  },
	  totalPrice() {
		return this.cart.reduce((total, item) => total + item.prix, 0);
	  }
	},
	mounted(){
	fetch('/pieces-autos.json').then(response => response.json()).then(data => this.products = data).catch(err =>
    console.log(err))

    },
	methods: {
	  sortByPrice(order) {
		this.products.sort((a, b) => order === 'asc' ? a.prix - b.prix : b.prix - a.prix);
	  },
	  addToCart(product) {
		if (product.disponible) {
		  this.cart.push(product);
		}
	  }
	}
  };
  </script>
  
  <style>
  .fiche {
    
	border: 1px solid #ccc;
	padding: 10px;
	margin: 10px;
	text-align: center;
  }
  .available {
	color: green;
  }
  .unavailable {
	color: red;
  }
  .panier {
	margin-top: 20px;
	border-top: 2px solid #000;
	padding-top: 10px;
  }
  </style>


