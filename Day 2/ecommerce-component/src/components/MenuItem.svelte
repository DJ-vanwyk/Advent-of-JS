<script>
    import { cart } from "../stores"

    export let label = "Food"
    export let price = 4.50
    export let image = "images/plate__french-fries.png"
    export let alt = "french fries"

    function handelAddToCart() {
        cart.update(value => {
            return value = [...value,{
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
        <button on:click={handelAddToCart}>Add to Cart</button>
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

    button {
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
</style>