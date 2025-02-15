<script lang="ts">
  import TarotCard from '$components/TarotCard.svelte';
  import type { WithTarget } from '$models/general';
  import { allCards } from '$assets/cards';

  const on = {
    wheelContainer(e: WithTarget<WheelEvent, HTMLDivElement>) {
      if (!e.deltaY) return;

      e.currentTarget.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };
</script>

<div class="flex wh-full overflow-auto" onwheel={on.wheelContainer}>
  <div class="flex gap-8 px-16 py-8 m-auto">
    {#each allCards as card, i}
      <div class="self-end">
        <TarotCard {card} isReversed={Boolean(i % 2)} />

        <div class="flex-justify pt-6">
          <div
            class="flex-center text-xs text-neutral-300 font-bold border-2 border-neutral-800 rounded-full w-8 h-8 ps-[.25ch]"
          >
            {i + 1}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
