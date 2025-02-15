<script lang="ts">
  import TarotCard from '$components/TarotCard.svelte';
  import { allCards } from '$assets/cards';
  import type { WheelEventWithTarget } from '$models/general';

  const on = {
    wheelContainer(e: WheelEventWithTarget<HTMLDivElement>) {
      if (e.deltaY != 0) {
        e.currentTarget.scrollLeft += e.deltaY;
      }
    }
  };
</script>

<div class="wh-full flex-center px-16">
  <div
    class="flex gap-8 max-w-full overflow-auto px-16 py-8 fading-container"
    onwheel={on.wheelContainer}
  >
    {#each allCards as card, i}
      <div class="flex-center-col gap-8">
        <div class="my-auto">
          <TarotCard {card} isReversed={Boolean(i % 2)} />
        </div>

        <div
          class="text-xs text-neutral-300 font-bold border border-neutral-500 rounded-full flex-center w-8 h-8 ps-[.25ch]"
        >
          {i + 1}
        </div>
      </div>
    {/each}
  </div>
</div>
