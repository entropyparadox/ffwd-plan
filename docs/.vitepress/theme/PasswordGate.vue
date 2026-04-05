<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
const error = ref(false)
const authenticated = ref(false)

const CORRECT_PASSWORD = 'aktus12!'
const STORAGE_KEY = 'ffwd_auth'

// Check localStorage on mount
if (typeof window !== 'undefined') {
  authenticated.value = localStorage.getItem(STORAGE_KEY) === 'true'
}

function submit() {
  if (password.value === CORRECT_PASSWORD) {
    authenticated.value = true
    error.value = false
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true')
    }
  } else {
    error.value = true
    password.value = ''
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter') submit()
}
</script>

<template>
  <slot v-if="authenticated" />
  <div v-else class="gate">
    <div class="gate-content">
      <div class="logo">⏸</div>
      <h1 class="title">FFWD</h1>
      <p class="tagline">The Pause Paradox.</p>
      <p class="subtitle">모두가 빨리감기할 때, 우리는 멈춘다.</p>
      <div class="input-group">
        <input
          v-model="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          :class="{ 'input-error': error }"
          @keydown="onKeydown"
          autofocus
        />
        <button @click="submit">입장</button>
      </div>
      <p v-if="error" class="error-msg">비밀번호가 올바르지 않습니다.</p>
      <p class="footer-text">© 2026 FFWD (이정재 × 키넥션 JV)</p>
    </div>
  </div>
</template>

<style scoped>
.gate {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.gate-content {
  text-align: center;
  max-width: 400px;
  padding: 2rem;
}

.logo {
  font-size: 3rem;
  color: #c8a96e;
  margin-bottom: 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  color: #f5f5f5;
  margin: 0 0 0.5rem 0;
}

.tagline {
  color: #c8a96e;
  font-style: italic;
  font-size: 1rem;
  margin: 0 0 0.25rem 0;
}

.subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  margin: 0 0 2rem 0;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.input-group input {
  background: #1a1a2e;
  border: 1px solid rgba(200, 169, 110, 0.3);
  color: #f5f5f5;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  outline: none;
  width: 220px;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #c8a96e;
}

.input-group input.input-error {
  border-color: #e74c3c;
}

.input-group button {
  background: #c8a96e;
  color: #0a0a0a;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.input-group button:hover {
  opacity: 0.9;
}

.error-msg {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.75rem;
}

.footer-text {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
  margin-top: 3rem;
}
</style>
