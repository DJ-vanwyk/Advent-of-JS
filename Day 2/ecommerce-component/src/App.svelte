<script>

	import Menu from './components/Menu.svelte'
	import Cart from './components/Cart.svelte'

	const menu = [
		{
			label : 'Frech Fries with Ketchup',
			price : 2.23,
			image : 'images/plate__french-fries.png'
		},
		{
			label : 'Salmon and Vegetables',
			price : 5.12,
			image : 'images/plate__salmon-vegetables.png'
		},
		{
			label : 'Spaghetti with Sauce',
			price : 7.82,
			image : 'images/plate__spaghetti-meat-sauce.png'
		},
		{
			label : 'Spaghetti with Sauce',
			price : 7.82,
			image : 'images/plate__spaghetti-meat-sauce.png'
		},
	]

	
</script>

<main>
	<Menu {menu}/>
	<Cart />
</main>

<style>

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

	:root{
		background-color: #EFF0F6;
	}

	main {
		display: flex;
		justify-content: center;
		gap: 50px;
		margin-top: 20px;
		flex-wrap: wrap;
		padding: 20px;
	}

</style>