<template>
	<div class="footer">
		<p>Réalisé en Vue.js</p>
    <p>Code source disponible à l'URL: <a href="https://github.com/Equinoz/pendu">github.com/Equinoz/pendu</a></p>
	</div>
</template>

<script>
	export default {
		name: "Footer",
	};
</script>

<style lang="scss">
	.footer {
		background-color: #efefef;
		padding: 15px;

		:first-child {
			font-size: 25px;
		}

		:last-child {
			font-size: 20px;
		}
	}
</style>