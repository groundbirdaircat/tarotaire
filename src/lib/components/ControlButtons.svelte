<script lang="ts">
  import { canvas } from '$lib/state/canvas.svelte';
  import { deck } from '$lib/state/deck.svelte';

  const on = {
    clickDraw1() {
      deck.draw(1);
    },
    clickDraw3() {
      deck.draw(3);
    },
    clickDraw5() {
      deck.draw(5);
    },
    clickReset() {
      deck.reset();
    }
  };
</script>

<div class="w-full h-16 flex relative z-0">
  {#if !canvas.isAnimating}
    <div class="mx-auto flex pt-8 gap-4">
      {#if deck.cardsLeft}
        <button
          onclick={on.clickDraw1}
          class="border border-neutral-500 hover:border-white rounded-xl px-4 active:scale-95 transition-transform"
        >
          draw 1 card
        </button>
      {/if}

      {#if deck.cardsLeft >= 3}
        <button
          onclick={on.clickDraw3}
          class="border border-neutral-500 hover:border-white rounded-xl px-4 active:scale-95 transition-transform"
        >
          draw 3 cards
        </button>
      {/if}

      {#if deck.cardsLeft >= 5}
        <button
          onclick={on.clickDraw5}
          class="border border-neutral-500 hover:border-white rounded-xl px-4 active:scale-95 transition-transform"
        >
          draw 5 cards
        </button>
      {/if}

      {#if deck.hasDrawn}
        <button
          onclick={on.clickReset}
          class="border border-neutral-500 hover:border-white rounded-xl px-4 active:scale-95 transition-transform"
        >
          reset
        </button>
      {/if}
    </div>
  {/if}
</div>
