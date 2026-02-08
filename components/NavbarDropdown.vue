<template>
  <div ref="wrapper" class="relative inline-block">
    <!-- TRIGGER -->
    <button
      @click.stop="toggle"
      class="flex items-center gap-1
             text-sm font-semibold uppercase
             text-slate-700 hover:text-brand
             transition"
      :aria-expanded="open"
    >
      <span>{{ label }}</span>

      <svg
        class="w-4 h-4 transition-transform"
        :class="{ 'rotate-180': open }"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 9l6 6l6-6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- DROPDOWN -->
    <div
      v-show="open"
      class="absolute top-full mt-3
             left-1/2 -translate-x-1/2
             w-44 bg-white
             rounded-md shadow-lg
             border border-slate-100
             z-50"
    >
      <ul class="py-2">
        <li v-for="item in items" :key="item.label">
          <NuxtLink
            :to="item.to"
            class="block px-5 py-2
                   text-sm text-slate-700
                   hover:bg-slate-100
                   transition"
            @click.stop="close"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  label: { type: String, required: true },
  items: { type: Array, required: true }
})

const open = ref(false)
const wrapper = ref(null)

const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

const onClickOutside = (e) => {
  if (wrapper.value && !wrapper.value.contains(e.target)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>
