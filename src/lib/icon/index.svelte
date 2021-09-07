<script lang="ts">
	export let name: string;
	export let fill = '#000';
	export let baseline = false;
</script>

<span class="svg-icon" class:baseline>
	<svg>
		<use xlink:href="#{name}" {fill} />
	</svg>
</span>

<style>
	svg {
		width: inherit;
		height: inherit;
	}
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
	}
</style>
