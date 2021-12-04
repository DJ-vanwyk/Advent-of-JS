<script>
    import { cart } from "../stores"

    export let id;
    export let label = "Food"
    export let price = 4.50
    export let image = "images/plate__french-fries.png"
    export let alt = "french fries"

    $: inCart = !($cart.findIndex( n => n.id === id) === -1) ;

    function handelAddToCart() {
        cart.update(value => {
            return value = [...value,{
                id : id,
                label : label,
			    price : price,
			    image : image,
            }]
        })
    }

</script>

<div id="block">
    <img src={image} {alt}/>
    <div id="info">
        <span id="label">{label}</span>
        <span id="price">${price}</span>
        {#if (inCart)}
            <div class="inCart">
                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877104 6.28555C1.65815 5.50451 2.92448 5.50451 3.70553 6.28555L7.94817 10.5282L17.8477 0.6287C18.6287 -0.152349 19.895 -0.152348 20.6761 0.6287C21.4571 1.40975 21.4571 2.67608 20.6761 3.45713L7.94817 16.185L0.877104 9.11398C0.0960556 8.33293 0.0960556 7.0666 0.877104 6.28555Z" fill="white"/>
                </svg>
                 In Cart
            </div>
        {:else}
            <button class="addToCart"on:click={handelAddToCart}>Add to Cart</button>
        {/if}
    </div>
    
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

    #block {
        width: 370.27px;
        height: 152.27px;
        background-color: #e4f0fd;
        border-radius: 20px;
        margin-left: 27.52px;
        display: flex;
        margin-bottom: 40px;
    }

    #info {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-top: 18px;
        width: 158px;
    }

    #label {
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        padding: 0px;
    }

    #price {
        font-size: 32px;
        font-weight: 700;
        line-height: 32px;
    }

    img {
        position: relative;
        width: 148.41px;
        height: 144.64px;
        transform: translate(-15px, -20px);
        font-size: 16px;

    }

    .addToCart {
        width: 130px;
        height: 32px;
        border-radius: 20px;
        background-color: #6b00f5;
        border: none;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        padding: 4px;
    }

    .inCart {
        width: 130px;
        height: 32px;
        border-radius: 20px;
        background-color: #000000;
        border: none;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

</style>