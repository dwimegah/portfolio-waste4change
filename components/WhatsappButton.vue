<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Waste4Change on WhatsApp"
    class="fixed bottom-6 right-6 z-50
           flex items-center gap-3
           bg-green-500 hover:bg-green-600
           text-white
           px-5 py-3 rounded-full
           shadow-lg
           transition-all duration-300"
  >
    <!-- WhatsApp Icon -->
    <svg
      class="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4c6.6 0 12-5.4 12-12c0-3.2-1.3-6.2-3.5-8.3Zm-8.5 18c-1.9 0-3.7-.5-5.3-1.5l-.4-.2l-3.7 1l1-3.6l-.2-.4c-1-1.6-1.6-3.4-1.6-5.3c0-5.4 4.4-9.8 9.8-9.8c2.6 0 5.1 1 6.9 2.9c1.8 1.8 2.9 4.3 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Zm5.3-7.4c-.3-.1-1.8-.9-2.1-1c-.3-.1-.5-.1-.7.1c-.2.3-.8 1-.9 1.2c-.2.2-.4.2-.7.1c-.3-.1-1.3-.5-2.5-1.6c-.9-.8-1.6-1.8-1.8-2.1c-.2-.3 0-.5.1-.6c.1-.1.3-.4.4-.6c.1-.2.2-.4.3-.6c.1-.2 0-.4 0-.6c0-.1-.7-1.7-.9-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4c-.3.3-1.1 1-1.1 2.5c0 1.5 1.1 2.9 1.3 3.1c.1.2 2.2 3.3 5.4 4.7c.8.3 1.4.5 1.8.6c.8.2 1.6.2 2.2.1c.7-.1 1.8-.7 2-1.4c.2-.7.2-1.3.1-1.4c-.1-.2-.3-.3-.6-.4Z"
      />
    </svg>

    <span class="hidden sm:inline font-semibold text-sm">
      {{t('contact_us')}}
    </span>
  </a>
</template>

<script setup>
const phoneNumber = '628211110170' 
const { locale, t } = useI18n()
const message = encodeURIComponent(
  'Hello Waste4Change, I would like to know more about your services.'
)

const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`
</script>
