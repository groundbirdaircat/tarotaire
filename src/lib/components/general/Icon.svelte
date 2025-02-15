<script lang="ts">
  import { Icon } from '$assets/icon';
  import type { Icons } from '$models/icon';

  let {
    color,
    type,
    class: iconClass = ''
  }: {
    color?: string;
    type: Icons;
    class?: string;
  } = $props();

  let iconType = $derived(Icon[type]);

  // svelte-ignore state_referenced_locally
  if (!iconType) throw new Error(`missing icon type: ${type}`);

  const replaceContent = `<svg xmlns="http://www.w3.org/2000/svg" class="${iconClass}"`;
  const svgContent = $derived(iconType.replace('<svg', replaceContent));

  let svgColored = $derived(
    color ? svgContent.replaceAll(/fill="(?!none")[^"]+"/gi, `fill="${color}"`) : svgContent
  );
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
{@html svgColored}
