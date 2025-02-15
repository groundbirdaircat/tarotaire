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

  let { description2, description, meanings, element, planet, image, sign, name, suit } =
    $derived(card);

  let currentMeanings = $derived(isReversed ? meanings.reversed : meanings.upright);

  let isShortDescription = $state(true);

  let descriptionRef: HTMLDivElement;

  const fn = {
    formatIcon(prefix: string, value: string) {
      return (prefix + value[0].toUpperCase() + value.substring(1)) as Icons;
    }
  };

  let imgUrl = $derived(getImageUrl(image));

  let secondaryIcon = $derived(
    planet ? fn.formatIcon('planet', planet) : fn.formatIcon('card', suit)!
  );

  let [shortDescription, longDescription] = $derived(
    description.length < description2.length
      ? [description, description2]
      : [description2, description]
  );

  const on = {
    clickShortDescription() {
      if (isShortDescription) return;

      isShortDescription = true;
      descriptionRef.scroll(0, 0);
    },
    clickLongDescription() {
      if (!isShortDescription) return;

      isShortDescription = false;
      descriptionRef.scroll(0, 0);
    }
  };
</script>

<div
  class="whitespace-pre-line min-w-96 max-w-96 border-4 border-neutral-800 rounded-2xl p-4 relative overflow-clip bg-black hover:scale-105 transition-all duration-700"
>
  <img
    src={imgUrl}
    alt={name}
    class="absolute wh-full left-0 top-0 object-center object-cover scale-150 saturate-0 opacity-10 no-select"
  />

  <div class="flex-center-col text-xl h-16 font-bold">
    <div>
      {name}
    </div>
    {#if isReversed}
      <div class="font-light text-xs ps-2">(reversed)</div>
    {/if}
  </div>

  <div class="flex-center pt-8 pb-6 gap-8">
    <div class="flex-center-col gap-2 text-xs">
      <div class="flex-center h-20 w-20 rounded-full border border-neutral-700">
        <Icon class="h-12" type={element} color={elementColorMap.get(element)} />
      </div>
      {element}
    </div>

    <div
      class="border-2 border-neutral-400 hover:border-white rounded-lg overflow-clip w-24 hover:scale-[250%] hover:translate-y-16 transition-all duration-300 relative z-20"
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

    <div class="flex-center-col gap-2 text-xs">
      <div class="flex-center h-20 w-20 p-4 rounded-full border border-neutral-700">
        <Icon
          class="h-12 {planet ? '' : 'scale-200'}"
          type={secondaryIcon}
          color={Color.neutral400}
        />
      </div>
      {planet || suit}
    </div>
  </div>

  <div class="flex-center pb-4">
    {#if sign.length}
      {#each sign as s}
        <div class="flex-center-col gap-1 w-20">
          <Icon class="h-8" type={fn.formatIcon('sign', s)} color={Color.neutral400} />
          <div class="text-xs">{s}</div>
        </div>
      {/each}
    {/if}
  </div>

  <div class="flex-center pb-4 gap-1 flex-wrap">
    {#each currentMeanings as meaning}
      <div class="bg-neutral-900 whitespace-nowrap px-2 rounded-full text-sm">{meaning}</div>
    {/each}
  </div>

  <div
    bind:this={descriptionRef}
    class="gray-drop-shadow max-h-48 overflow-auto text-balance text-center px-4 py-2 border border-neutral-800 bg-black/50 rounded-xl z-10 relative text-sm initial-letter"
    use:stopPropagation={'wheel'}
  >
    {#if isShortDescription}
      {shortDescription}
    {:else}
      {longDescription}
    {/if}
  </div>

  <div class="flex-center gap-2 pt-6 pb-4">
    description
    <button
      class="border border-neutral-500 px-2 rounded text-sm"
      class:hover:border-neutral-100={!isShortDescription}
      class:bg-neutral-700={isShortDescription}
      class:text-neutral-400={!isShortDescription}
      onclick={on.clickShortDescription}>short</button
    >
    <button
      class="border border-neutral-500 px-2 rounded text-sm"
      class:hover:border-neutral-100={isShortDescription}
      class:bg-neutral-700={!isShortDescription}
      class:text-neutral-400={isShortDescription}
      onclick={on.clickLongDescription}>long</button
    >
  </div>
</div>

<style lang="scss">
  .gray-drop-shadow {
    filter: drop-shadow(0 0 0.5rem #333);
  }
</style>
