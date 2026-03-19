<script setup>
const schedule = __EVENT_SCHEDULE__
const props = defineProps({
  highlight: { type: String, default: '' },
  sessions: { type: Array, default: null },
})

const sessions_shown = props.sessions || schedule.sessions
</script>

<template>
  <div class="slidev-layout orientation">
    <table v-if="sessions_shown.length" class="schedule-table">
      <tbody>
        <tr
          v-for="(s, i) in sessions_shown"
          :key="i"
          :class="{ highlighted: s.topic === props.highlight }"
        >
          <td class="session-time">{{ s.date }} ({{ s.slot }})</td>
          <td class="session-topic">{{ s.topic }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.orientation {
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  padding-right: 4rem;
}

.schedule-table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.schedule-table tr {
  border-bottom: 1px solid #e0e0e0;
}

.schedule-table tr:first-child {
  border-top: 1px solid #e0e0e0;
}

.schedule-table td {
  padding: 0.45rem 1.5rem;
}

.session-time {
  width: 35%;
  color: #444;
}

.session-topic {
  color: #222;
}

.highlighted {
  outline: 2.5px solid #e8a735;
  outline-offset: -1px;
}
</style>
