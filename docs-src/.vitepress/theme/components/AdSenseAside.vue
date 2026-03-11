<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";

const adEl = ref<HTMLElement | null>(null);

onMounted(async () => {
  await nextTick();

  if (!adEl.value) return;
  if (adEl.value.getAttribute("data-adsbygoogle-status")) return;

  try {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  } catch (err) {
    console.error("AdSense error:", err);
  }
});
</script>

<template>
  <ins
    ref="adEl"
    class="adsbygoogle"
    style="display: block"
    data-ad-client="ca-pub-3391196216969529"
    data-ad-slot="9960520269"
    data-ad-format="auto"
    data-full-width-responsive="true"
  />
</template>
