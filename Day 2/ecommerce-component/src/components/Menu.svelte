<script>
    import MenuItem from "./MenuItem.svelte";

    export let menu
</script>


<div id="menu">
    <h2>To Go Menu</h2>
    {#each menu as item }
        <MenuItem {...item}/>
    {/each}

</div>

<style>

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

	div {
		width: 375px;
		height: 812px;
		border-radius: 25px;
		box-shadow: 0 0 70px #C7CBE3;
		padding-top: 49.1px;
        overflow: hidden;
	}

	h2 {
		font-size: 32px;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		margin-left: 37.26px;
	}

</style>