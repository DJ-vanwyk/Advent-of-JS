<script>
	import { cart, subtotal } from "../stores"
	import CartItem from "./CartItem.svelte";

	$: tax = Math.round(($subtotal * 0.0975 + Number.EPSILON) * 100) / 100;
	$: total = $subtotal + tax;
</script>

<div id="cart">
    <h2>Your Cart</h2>
	{#if !$cart.length}
		<p>Your cart is empty</p>
	{:else}
		{#each $cart as item (item.id) }
			<CartItem {...item} />
		{/each}
		<hr />
		<table>
			<tr>
				<td>Subtotal:</td>
				<td>$ {Math.round(($subtotal + Number.EPSILON) * 100) / 100}</td>
			</tr>
			<tr>
				<td>Tax:</td>
				<td>$ {tax}</td>
			</tr>
			<tr>
				<td>Total:</td>
				<td>$ {Math.round((total + Number.EPSILON) * 100) / 100}</td>
			</tr>
		</table>
	{/if}
    
	
	

</div>

<style>

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

	#cart {
		width: 375px;
		height: 812px;
		border-radius: 25px;
		box-shadow: 0 0 70px #C7CBE3;
		padding-top: 49.1px;
	}

	h2 {
		font-size: 32px;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		margin-left: 37.26px;
	}

    p {
        font-size: 16px;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		margin-left: 37.26px; 
    }

	hr {
		border-top: 5px solid #D7D7F9;
		margin-inline: 24.72px;
		margin-bottom: 36px;
	}

	table {
		margin-left: auto;
		margin-right: 24.72px;
		text-align: right;
	}
	
	table > tr > td:nth-child(1) {
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 16px;
		line-height: 32px;
		padding-bottom: 24px ;
	}

	table > tr > td:nth-child(2) {
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 32px;
		line-height: 32px;
		padding-left: 26px;
		padding-bottom: 24px ;
	}

	table > tr:nth-child(3) > td:nth-child(2) {
		color: #6B00F5;
	}
    
</style>