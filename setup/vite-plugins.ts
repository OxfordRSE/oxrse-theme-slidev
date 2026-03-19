import { defineVitePluginsSetup } from '@slidev/types'
import fs from 'node:fs'
import path from 'node:path'
import { parse as parseYaml } from 'yaml'

export default defineVitePluginsSetup((options) => {
  const training_event = process.env.TRAINING_EVENT
  let schedule = { sessions: [] as Record<string, string>[] }

  if (!training_event) {
    console.info('[slidev-oxrse] TRAINING_EVENT not set — hide the slide with "orientation" layout by "disabled: true" in its frontmatter.')
  } else {
    const event_yaml = path.resolve(options.userWorkspaceRoot, `common/events/${training_event}.yaml`)
    if (!fs.existsSync(event_yaml)) {
      throw new Error(
        `[slidev-oxrse] TRAINING_EVENT="${training_event}" but file not found: ${event_yaml}`
      )
    }
    schedule = parseYaml(fs.readFileSync(event_yaml, 'utf-8'))
  }

  return [{
    name: 'event-schedule',
    config() {
      return {
        define: {
          __EVENT_SCHEDULE__: JSON.stringify(schedule),
        },
      }
    },
  }]
})
