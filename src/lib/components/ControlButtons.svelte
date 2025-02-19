<script lang="ts">
  import TarotaireLogo from '$assets/tarotaire-logo.svg';
  import { canvas } from '$lib/state/canvas.svelte';
  import { fade, fly } from 'svelte/transition';
  import { deck } from '$lib/state/deck.svelte';
  import { quadInOut } from 'svelte/easing';
  import { allCards } from '$assets/cards';
  import { timeout } from '$utils/general';
  import { tick } from 'svelte';

  let cardCount = $state(3);

  let currentLoopId = $state('');

  const fn = {
    async loopPlus(count: number, id: string) {
      if (id != currentLoopId || cardCount == allCards.length) {
        return;
      }

      cardCount++;

      let waitTime = 300;
      if (count > 5 && count < 15) {
        waitTime = 100;
      } else if (count >= 15) {
        waitTime = 50;
      }

      await timeout(waitTime);

      fn.loopPlus(++count, id);
    },
    async loopMinus(count: number, id: string) {
      if (id != currentLoopId || cardCount == 1) {
        return;
      }

      cardCount--;

      let waitTime = 300;
      if (count > 5 && count < 15) {
        waitTime = 100;
      } else if (count >= 15) {
        waitTime = 50;
      }

      await timeout(waitTime);

      fn.loopMinus(++count, id);
    },
    clearLoopId() {
      currentLoopId = '';
    }
  };

  const on = {
    async clickDraw() {
      deck.draw(cardCount);
    },
    async clickReset() {
      deck.reset();
    },
    mousedownPlus() {
      currentLoopId = crypto.randomUUID();
      fn.loopPlus(0, currentLoopId);
    },
    mousedownMinus() {
      currentLoopId = crypto.randomUUID();
      fn.loopMinus(0, currentLoopId);
    },
    mouseupPlus() {
      fn.clearLoopId();
    },
    mouseupMinus() {
      fn.clearLoopId();
    },
    mouseleavePlus() {
      fn.clearLoopId();
    },
    mouseleaveMinus() {
      fn.clearLoopId();
    }
  };
</script>

{#if deck.hasDrawn && !canvas.isAnimating}
  {#await tick() then}
    <div
      in:fly={{ y: -300, duration: 1000, delay: 2000 }}
      out:fly|global={{ y: -100, duration: 1000 }}
      class="absolute top-0 rounded-full bg-neutral-950 flex-justify border-4 border-neutral-900 h-56 w-56 -translate-y-40 pt-44 z-20"
    >
      <button
        onclick={on.clickReset}
        class="border border-neutral-500 hover:border-white rounded-xl px-4 active:scale-95 transition-transform h-fit text-sm"
      >
        reset
      </button>
    </div>
  {/await}
{:else if !canvas.isAnimating}
  {#await tick() then}
    <div
      in:fly={{ y: -50, duration: 3000, easing: quadInOut }}
      out:fade|global={{ duration: 2000, easing: quadInOut }}
      class="w-full flex-col pt-24 z-0"
    >
      <div class="mx-auto max-w-[40rem]">
        <img src={TarotaireLogo} alt="Tarotaire" />
      </div>

      <div class="mx-auto pt-4">how many from the deck shall fate unveil</div>

      <div class="mx-auto pt-8">
        <div
          class="border border-neutral-700 flex-align-col w-24 rounded-xl text-neutral-400 bg-neutral-950"
        >
          <div class="h-28 flex-center text-5xl">{cardCount}</div>
          <div class="flex border-t border-neutral-700 w-full h-12 text-3xl">
            <button
              class="hover:text-white pb-1 flex-center flex-1 border-r border-neutral-700 hover:bg-neutral-900"
              onmousedown={on.mousedownMinus}
              onmouseup={on.mouseupMinus}
              onmouseleave={on.mouseleaveMinus}
            >
              -
            </button>
            <button
              class="hover:text-white pb-1 flex-center flex-1 hover:bg-neutral-900"
              onmousedown={on.mousedownPlus}
              onmouseup={on.mouseupPlus}
              onmouseleave={on.mouseleavePlus}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div class="mx-auto pt-6 pb-24">
        <button
          class="border border-neutral-500 hover:border-white rounded-xl px-4 active:scale-95 transition-transform h-fit text-sm"
          onclick={on.clickDraw}
        >
          draw
        </button>
      </div>
    </div>
  {/await}
{/if}
