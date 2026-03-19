<script setup>
import { computed } from 'vue'
import logo from '../../img/logos/2024_oxrse_next_to_oxford.svg'

const schedule = __EVENT_SCHEDULE__
const props = defineProps({
  date: { type: String, default: '' },
  sessions: { type: Array, default: null },
  frontmatter: { type: Object, default: () => ({}) },
})

const sessions = props.sessions || schedule.sessions

const cover_date = computed(() => {
  if (props.date)
    return props.date

  const title = props.frontmatter.title || ''
  const match = sessions.find(s => s.topic === title)
  if (match) {
    const year = props.frontmatter.year || schedule.year || new Date().getFullYear()
    return `${match.date} ${year}`
  }

  return new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
})
</script>

<template>
  <div class="slidev-layout cover oxrse-cover">
    <div class="oxrse-cover-logo">
      <img :src="logo" alt="Oxford and OxRSE" />
    </div>
    <div class="oxrse-cover-content">
      <h1>{{ $slidev.configs.title }}</h1>
      <p class="oxrse-cover-group">Oxford Research Software Engineering Group</p>
      <p class="oxrse-cover-email">rse-training@dtc.ox.ac.uk</p>
      <p class="oxrse-cover-date">{{ cover_date }}</p>
    </div>
    <slot />
  </div>
</template>

<style>
.oxrse-cover {
  background: var(--oxrse-bg-colour);
  color: white;
  padding: 0 2rem 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.oxrse-cover-logo {
  height: var(--oxrse-header-height);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.oxrse-cover-logo img {
  height: var(--oxrse-logo-height);
}
.oxrse-cover-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.oxrse-cover h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.oxrse-cover-group {
  font-size: 1.25rem;
  opacity: 0.9;
}
.oxrse-cover-email,
.oxrse-cover-date {
  font-size: 1rem;
  opacity: 0.7;
}
</style>
