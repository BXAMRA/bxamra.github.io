<!-- docs/.vitepress/theme/MyLayout.vue -->
<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import AdSenseAside from "./components/AdSenseAside.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-ads-after>
      <AdSenseAside />
    </template>
  </Layout>
</template>
