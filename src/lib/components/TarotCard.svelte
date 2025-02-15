<script lang="ts">
  import { elementColorMap, getImageUrl } from '$assets/cards';
  import { stopPropagation } from '$actions/events';
  import { type Icons } from '$models/icon';
  import type { Card } from '$models/cards';
  import Icon from './general/Icon.svelte';
  import { Color } from '$classes/color';

  let {
    isReversed,
    card
  }: {
    card: Card;
    isReversed: boolean;
  } = $props();

  let { description, meanings, element, planet, image, sign, name, suit } = $derived(card);
  let currentMeanings = $derived(isReversed ? meanings.reversed : meanings.upright);
  let imgUrl = $derived(getImageUrl(image));

  const fn = {
    formatIcon(prefix: string, value: string) {
      return (prefix + value[0].toUpperCase() + value.substring(1)) as Icons;
    }
  };

  let secondaryIcon = $derived(
    planet ? fn.formatIcon('planet', planet) : fn.formatIcon('card', suit)
  );
</script>

<div
  class="min-w-80 max-w-80 border-4 border-neutral-800 rounded-2xl p-4 pb-6 relative bg-black hover:scale-105 transition-all duration-700 hover:z-10"
>
  <div class="absolute wh-full left-0 top-0 overflow-clip rounded-2xl">
    <img
      src={imgUrl}
      alt={name}
      class="object-center object-cover scale-150 saturate-0 opacity-10 no-select"
      class:rotate-180={isReversed}
    />
  </div>

  <div class="flex-center-col h-16">
    <div class="text-2xl font-bold">
      {name}
    </div>
    {#if isReversed}
      <div class="font-light text-xs ps-2">(reversed)</div>
    {/if}
  </div>

  <div class="flex-center pt-4 pb-6 justify-between">
    <div class="flex-col gap-4">
      <div class="flex-center-col gap-2 text-xs w-16">
        <div class="flex-center h-12 w-12 rounded-full border border-neutral-700 overflow-clip">
          <Icon
            class="h-8 {planet ? '' : 'scale-[400%]'}"
            type={secondaryIcon}
            color={Color.neutral200}
          />
        </div>
        {planet || suit}
      </div>

      <div class="flex-center-col gap-2 text-xs">
        <div class="flex-center h-12 w-12 rounded-full border border-neutral-700">
          <Icon class="h-8" type={element} color={elementColorMap.get(element)} />
        </div>
        {element}
      </div>
    </div>

    <div
      class="border-2 border-neutral-400 hover:border-white rounded-lg overflow-clip w-24 min-w-24 hover:scale-[350%] transition-all duration-300 relative z-20"
      class:-rotate-5={!isReversed}
      class:hover:rotate-5={!isReversed}
      class:rotate-5={isReversed}
      class:hover:-rotate-5={isReversed}
    >
      <img
        src={imgUrl}
        alt={name}
        class:rotate-180={isReversed}
        class="invert saturate-50 hover:saturate-200 -hue-rotate-180 hover:hue-rotate-180 transition-all duration-500"
      />
    </div>

    <div class="flex-center-col gap-4 pb-4 w-16">
      {#if sign.length}
        {#each sign as s}
          <div class="flex-center-col gap-1 w-20">
            <Icon class="h-6" type={fn.formatIcon('sign', s)} color={Color.neutral400} />
            <div class="text-xs">{s}</div>
          </div>
        {/each}
      {/if}
    </div>
  </div>

  <div class="flex-center pb-4 gap-1 flex-wrap">
    {#each currentMeanings as meaning}
      <div class="bg-neutral-900 whitespace-nowrap px-2 rounded-full text-xs">{meaning}</div>
    {/each}
  </div>

  <div
    class="gray-drop-shadow max-h-48 overflow-auto text-balance text-center px-4 py-2 border border-neutral-800 bg-black/50 rounded-xl z-10 relative text-xs"
    use:stopPropagation={'wheel'}
  >
    <div class="wh-full fading-container">
      {description}
    </div>
  </div>
</div>

<style lang="scss">
  .gray-drop-shadow {
    filter: drop-shadow(0 0 0.5rem #333);
  }
</style>
