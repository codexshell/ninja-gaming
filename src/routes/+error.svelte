<script>
	import { page } from '$app/stores';
</script>

<div class="error">
	<h2>Ooops</h2>
	<p>{$page.status}: {$page.error.message}</p>
	<p>
		Click <a href="/guides">here</a> to view all guides...
	</p>
</div>
