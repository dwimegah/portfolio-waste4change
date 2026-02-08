<template>
  <button
    v-show="visible"
    @click="scrollTop"
    aria-label="Scroll to top"
    class="fixed bottom-6 left-6 z-50
           w-12 h-12 rounded-full
           bg-white
           shadow-lg
           flex items-center justify-center
           transition-all duration-300
           hover:bg-brand"
  >
    <!-- Scroll Icon -->
    <svg
      class="w-6 h-6 text-brand"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 19V5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M6 11l6-6l6 6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const onScroll = () => {
  visible.value = window.scrollY > 300
}

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
