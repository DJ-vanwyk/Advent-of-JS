<script>
    import { onMount } from 'svelte';
    import { subtotal } from "../stores"


    export let label = 'French Fries with Ketchup';
    export let image;
    export let price;
    let quantity = 1;
    $: itemTotal = Math.round((price * quantity + Number.EPSILON) * 100) / 100;

    onMount( () => {
        subtotal.update(n => n + itemTotal)
    })

    function addQuantity() {
        quantity ++
    }

    function decreaseQuantity() {
        quantity --
    }

</script>

<div class="container">
    <img src={image} alt/>
    <div class="info">
        <span class="label">{label}</span>
        <span class="price">${price}</span>
        <div class="info-bottom" >
            <div class="quantity">
                {#if quantity <= 1}
                    <div class="remove">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3126_99)">
                            <path d="M2.5 1C2.23478 1 1.98043 1.10536 1.79289 1.29289C1.60536 1.48043 1.5 1.73478 1.5 2V3C1.5 3.26522 1.60536 3.51957 1.79289 3.70711C1.98043 3.89464 2.23478 4 2.5 4H3V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H11C11.5304 15 12.0391 14.7893 12.4142 14.4142C12.7893 14.0391 13 13.5304 13 13V4H13.5C13.7652 4 14.0196 3.89464 14.2071 3.70711C14.3946 3.51957 14.5 3.26522 14.5 3V2C14.5 1.73478 14.3946 1.48043 14.2071 1.29289C14.0196 1.10536 13.7652 1 13.5 1H10C10 0.734784 9.89464 0.48043 9.70711 0.292893C9.51957 0.105357 9.26522 0 9 0L7 0C6.73478 0 6.48043 0.105357 6.29289 0.292893C6.10536 0.48043 6 0.734784 6 1H2.5ZM5.5 5C5.63261 5 5.75979 5.05268 5.85355 5.14645C5.94732 5.24021 6 5.36739 6 5.5V12.5C6 12.6326 5.94732 12.7598 5.85355 12.8536C5.75979 12.9473 5.63261 13 5.5 13C5.36739 13 5.24021 12.9473 5.14645 12.8536C5.05268 12.7598 5 12.6326 5 12.5V5.5C5 5.36739 5.05268 5.24021 5.14645 5.14645C5.24021 5.05268 5.36739 5 5.5 5V5ZM8 5C8.13261 5 8.25979 5.05268 8.35355 5.14645C8.44732 5.24021 8.5 5.36739 8.5 5.5V12.5C8.5 12.6326 8.44732 12.7598 8.35355 12.8536C8.25979 12.9473 8.13261 13 8 13C7.86739 13 7.74021 12.9473 7.64645 12.8536C7.55268 12.7598 7.5 12.6326 7.5 12.5V5.5C7.5 5.36739 7.55268 5.24021 7.64645 5.14645C7.74021 5.05268 7.86739 5 8 5V5ZM11 5.5V12.5C11 12.6326 10.9473 12.7598 10.8536 12.8536C10.7598 12.9473 10.6326 13 10.5 13C10.3674 13 10.2402 12.9473 10.1464 12.8536C10.0527 12.7598 10 12.6326 10 12.5V5.5C10 5.36739 10.0527 5.24021 10.1464 5.14645C10.2402 5.05268 10.3674 5 10.5 5C10.6326 5 10.7598 5.05268 10.8536 5.14645C10.9473 5.24021 11 5.36739 11 5.5V5.5Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_3126_99">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                            
                    </div>
                {:else}
                    <div class="button" on:click={decreaseQuantity}>
                        <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9228 0.844515C10.1417 0.063466 8.87538 0.0634658 8.09433 0.844514L1.13116 7.80769C0.756085 8.18276 0.545372 8.69147 0.545372 9.2219C0.545372 9.75233 0.756085 10.261 1.13116 10.6361L8.09433 17.5993C8.87538 18.3803 10.1417 18.3803 10.9228 17.5993C11.7038 16.8182 11.7038 15.5519 10.9228 14.7709L5.3738 9.2219L10.9228 3.67294C11.7038 2.89189 11.7038 1.62556 10.9228 0.844515Z" fill="white"/>
                        </svg>
                    </div>
                {/if}
                <span>{quantity}</span>
                <div class="button right" on:click={addQuantity}>
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9228 0.844515C10.1417 0.063466 8.87538 0.0634658 8.09433 0.844514L1.13116 7.80769C0.756085 8.18276 0.545372 8.69147 0.545372 9.2219C0.545372 9.75233 0.756085 10.261 1.13116 10.6361L8.09433 17.5993C8.87538 18.3803 10.1417 18.3803 10.9228 17.5993C11.7038 16.8182 11.7038 15.5519 10.9228 14.7709L5.3738 9.2219L10.9228 3.67294C11.7038 2.89189 11.7038 1.62556 10.9228 0.844515Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <span class="total">${itemTotal}</span>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

    .container {
        display: flex;
        gap: 18px;
        margin-left: 24.72px;
        margin-bottom: 43px;
        font-family: 'Poppins', sans-serif;

    }

    img {
        width: 64.46px ;
        height: 62.82px;
    }

    .button {
        display: flex;
        width: 32px;
        height: 32px;
        background-color: #6B00F5;
        border-radius: 50%;
    }

    svg {
        margin: auto;
    }

    .quantity {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .right {
        transform: scale(-1,1);
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    .info-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
    }

    .label {
        font-size: 18px;
        line-height: 20px;
    }

    .price {
        font-size: 16px ;
        font-weight: 700;
        line-height: 32px;
    }

    .total {
        font-size: 32px;
        font-weight: 700;
        line-height: 32px;
        text-align: right;
    }

    .remove {
        display: flex;
        width: 32px;
        height: 32px;
        background-color: rgb(255, 0, 0);
        border-radius: 50%;
    }
</style>