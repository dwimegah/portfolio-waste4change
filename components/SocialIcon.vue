<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`Waste4Change on ${type}`"
    class="group w-11 h-11 rounded-full
           bg-white/20
           flex items-center justify-center
           transition-all duration-300
           hover:bg-white/30"
  >
    <!-- Instagram -->
    <svg
      v-if="type === 'instagram'"
      class="w-5 h-5 text-white transition-transform group-hover:scale-110"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5"
            stroke="currentColor" stroke-width="2" />
      <circle cx="12" cy="12" r="4"
              stroke="currentColor" stroke-width="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>

    <!-- Facebook -->
    <svg
      v-else-if="type === 'facebook'"
      class="w-5 h-5 text-white transition-transform group-hover:scale-110"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M13 9h3V6h-3c-2.8 0-4 1.7-4 4v3H6v3h3v6h3v-6h3l1-3h-4v-3c0-.8.2-1 1-1Z"
      />
    </svg>

    <!-- X / Twitter -->
    <svg
      v-else-if="type === 'twitter'"
      class="w-5 h-5 text-white transition-transform group-hover:scale-110"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M18.9 2H22l-7.6 8.7L23 22h-6.6l-5.2-6.8L5.3 22H2l8.1-9.3L1 2h6.7l4.7 6.2L18.9 2Z"
      />
    </svg>

    <!-- LinkedIn -->
    <svg
      v-else-if="type === 'linkedin'"
      class="w-5 h-5 text-white transition-transform group-hover:scale-110"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M4 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm0 6h4v12H4V9Zm6 0h4v2h.1c.6-1 2-2 4-2c4.3 0 5 2.8 5 6.4V21h-4v-5.4c0-1.3 0-3-2-3s-2.3 1.5-2.3 2.9V21h-4V9Z"
      />
    </svg>

    <!-- YouTube -->
    <svg
      v-else-if="type === 'youtube'"
      class="w-5 h-5 text-white transition-transform group-hover:scale-110"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.2 5 12 5 12 5s-4.2 0-7 .1c-.4.1-1.2.1-2 .9c-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9c1.7.2 6.6.2 6.6.2s4.2 0 7-.1c.4-.1 1.2-.1 2-.9c.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 9.6 21.8 8 21.8 8ZM10 15V9l5 3l-5 3Z"
      />
    </svg>
  </a>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
})
</script>
