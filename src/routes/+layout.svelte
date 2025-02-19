<script lang="ts">
  import type { SlotContent, WithTarget } from '$models/general';
  import DevMenu from '$dev/DevMenu.svelte';
  import '../styles/tailwind.css';
  import '../styles/global.scss';

  let {
    children
  }: {
    children: SlotContent;
  } = $props();

  const on = {
    wheelContainer(e: WithTarget<WheelEvent, HTMLDivElement>) {
      if (!e.deltaY) return;

      const { width } = e.currentTarget.getBoundingClientRect();

      const hasHorizontalScroll = e.currentTarget.scrollWidth > width;
      if (hasHorizontalScroll) {
        e.currentTarget.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }
  };
</script>

<div class="relative wh-full overflow-clip">
  <div class="wh-full overflow-auto flex-justify" onwheel={on.wheelContainer}>
    {@render children()}
  </div>

  <DevMenu />
</div>
