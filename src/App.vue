<template>
		<header>
			<img src="images/logo-les-bonnes-pieces.png" alt="LOGO">
			<h1>Les Bonnes Pièces</h1>
		</header>
		<main>
			<!-- Menu de recherche -->
			<section class="filtres">
				<h3>Filtres</h3>
			</section>

			<!-- Fiches produits -->
			<section class="fiches">
				<div v-for="p in products"><p>{{ p }}</p></div>
			</section>
		</main>
</template>

<script>


export default {
  name: 'App',
  data(){
    return { 
	  products:[]
   
     
    

	}
  },
  
  mounted(){
	fetch('/pieces-autos.json').then(response => response.json()).then(data => this.products = data).catch(err =>
    console.log(err))

  }
  	

}
</script>

<style>

</style>
