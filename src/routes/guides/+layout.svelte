<script>
</script>

<header>
	<nav>
		<div class="links">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/guides">Guides</a>
		</div>
	</nav>
</header>
<slot />

<style>
	header {
		text-align: center;
		background: rgba(0, 0, 0, 0.1);
    padding: 1.75rem;
	}

	.links {
		display: flex;
		justify-content: right;
		gap: 1rem;
	}
</style>
