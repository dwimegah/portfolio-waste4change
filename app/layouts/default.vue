<template>
  <div class="flex min-h-screen flex-col">
    <!-- Header -->
    <Header />

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />

    <ScrollToTop />
    <WhatsappButton />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import ScrollToTop from '../components/ScrollToTop.vue'
import WhatsappButton from '../components/WhatsappButton.vue'
</script>
