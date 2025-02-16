<script lang="ts">
  import { canvas } from '$lib/state/canvas.svelte';
  import { browser } from '$app/environment';

  let canvasRef: HTMLCanvasElement;

  let innerWidth = $state(0);
  let innerHeight = $state(0);
  $inspect(innerWidth, innerHeight);

  $effect(() => {
    browser && canvas.start(canvasRef);
    return () => canvas.cancel();
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<canvas
  bind:this={canvasRef}
  width={innerWidth}
  height={innerHeight}
  class="absolute wh-full top-0 left-0 z-0 invert hue-rotate-180 no-select"
></canvas>
