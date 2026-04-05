import DefaultTheme from 'vitepress/theme'
import PasswordGate from './PasswordGate.vue'
import { h } from 'vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(PasswordGate, null, {
      default: () => h(DefaultTheme.Layout),
    })
  },
} satisfies Theme
