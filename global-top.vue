<script setup>
import logo from '../img/logos/2024_oxrse_next_to_oxford.svg'
</script>

<template>
  <div v-if="$nav.currentLayout !== 'cover'" class="oxrse-header">
    <span class="oxrse-header-title">
      {{ $nav.currentSlideRoute.meta?.slide?.title || '' }}
    </span>
    <img :src="logo" alt="Oxford and OxRSE" class="oxrse-header-logo" />
  </div>
</template>

<style>
.oxrse-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--oxrse-header-height);
  background: var(--oxrse-bg-colour);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 10;
}
.oxrse-header-title {
  color: white;
  font-size: 1.75rem;
  font-weight: 400;
}
.oxrse-header-logo {
  height: var(--oxrse-logo-height);
}
</style>
