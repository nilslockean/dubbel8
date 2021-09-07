<script lang="ts">
	export let name: string;
	export let fill = '#000';
	export let baseline = false;
	let clazz = '';
	export { clazz as class };
</script>

<span class={'svg-icon ' + clazz} class:baseline>
	<svg>
		<use xlink:href="#{name}" {fill} />
	</svg>
</span>

<style>
	.svg-icon {
		display: inline-flex;
		align-self: center;
	}
	.svg-icon svg {
		height: 1em;
		width: 1em;
	}
	.svg-icon.baseline svg {
		top: 0.125em;
		position: relative;
		transform: scale(1.5);
		margin: 0 0.25rem;
	}
</style>
