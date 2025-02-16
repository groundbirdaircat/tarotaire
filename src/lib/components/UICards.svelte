<script lang="ts">
  import TarotCard from '$components/TarotCard.svelte';
  import type { WithTarget } from '$models/general';
  import { canvas } from '$lib/state/canvas.svelte';
  import { deck } from '$lib/state/deck.svelte';
  import { fade } from 'svelte/transition';
  import { tick } from 'svelte';

  const on = {
    wheelContainer(e: WithTarget<WheelEvent, HTMLDivElement>) {
      if (!e.deltaY) return;

      e.currentTarget.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };
</script>

{#if !canvas.isAnimating}
  <div
    class="relative flex w-full h-[calc(100%-4rem)] overflow-auto z-10"
    onwheel={on.wheelContainer}
  >
    <div class="flex gap-8 px-16 py-8 m-auto">
      {#each deck.spread as card, index}
        {#await tick() then}
          <div class="self-end" in:fade={{ duration: 2000, delay: 100 + 200 * index }}>
            <TarotCard {card} />

            <div class="flex-justify pt-6">
              <div
                class="flex-center text-xs bg-black text-neutral-300 font-bold border-2 border-neutral-800 rounded-full w-8 h-8 ps-[.25ch]"
              >
                {index + 1}
              </div>
            </div>
          </div>
        {/await}
      {/each}
    </div>
  </div>
{/if}
