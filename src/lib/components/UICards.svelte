<script lang="ts">
  import TarotCard from '$components/TarotCard.svelte';
  import { canvas } from '$lib/state/canvas.svelte';
  import { deck } from '$lib/state/deck.svelte';
  import { allCards } from '$assets/cards';
  import { fade } from 'svelte/transition';
  import { tick } from 'svelte';
</script>

{#if !canvas.isAnimating && deck.hasDrawn}
  <div class="relative flex-center-col wh-full min-h-fit z-10">
    <div class="flex gap-8 px-16 pt-24 pb-8 m-auto">
      {#each deck.spread as card, index}
        {@const delay = 100 + (200 * index - (index / allCards.length) * (200 * index))}
        {#await tick() then}
          <div class="self-end" in:fade={{ duration: 2000, delay }}>
            <TarotCard {card} {index} />
          </div>
        {/await}
      {/each}
    </div>
  </div>
{/if}
