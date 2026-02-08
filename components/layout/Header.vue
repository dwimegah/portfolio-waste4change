<template>
  <header class="w-full bg-white border-b border-slate-200">
    <!-- HEADER BAR -->
    <div
      class="mx-auto max-w-7xl
             h-16 px-4 sm:px-6 lg:px-8
             flex items-center justify-between"
    >
      <!-- LEFT: LOGO -->
      <NuxtLink to="/" class="flex items-center">
        <img
          src="/waste4change.png"
          alt="Waste4Change Logo"
          class="h-8 w-auto"
        />
      </NuxtLink>

      <!-- CENTER: DESKTOP NAV -->
      <nav
        class="hidden lg:flex items-center gap-8
               text-sm font-semibold text-slate-700"
        aria-label="Main navigation"
      >
        <NavbarDropdown
          :label="t('services_text')"
          :items="[
            { label: 'FOR COMPANY', to: '/' },
            { label: 'FOR INDIVIDU', to: '/' },
            { label: 'MITRA', to: '/' },
            { label: 'PERUMAHAN & KAWASAN', to: '/' }
          ]"
        />
        <NuxtLink class="hover:text-indigo-500" to="/products">{{t('produk')}}</NuxtLink>
        <NuxtLink class="hover:text-indigo-500" to="/about">{{t('tentang')}}</NuxtLink>
        <NuxtLink class="hover:text-indigo-500" to="/research">{{t('riset')}}</NuxtLink>

        <NavbarDropdown
          label="BLOG & MEDIA"
          :items="[
            { label: 'BLOG', to: '/' },
            { label: 'MEDIA KIT', to: '/' }
          ]"
        />

        <NavbarDropdown
          :label="t('portfolio')"
          :items="[
            { label: 'PORTFOLIO', to: '/' },
            { label: 'LAUT YANG TENANG', to: '/' }
          ]"
        />

        <NavbarDropdown
          :label="t('karir')"
          :items="[
            { label: 'FULL-TIME', to: '/' },
            { label: 'INTERNSHIP', to: '/' }
          ]"
        />

        <NuxtLink class="hover:text-indigo-500" to="/contact">{{t('kontak')}}</NuxtLink>
      </nav>

      <!-- RIGHT: LANGUAGE + MOBILE MENU -->
      <div class="flex items-center gap-3">
        <!-- LANGUAGE DROPDOWN -->
        <div ref="dropdown" class="relative">
          <button
            @click.stop="toggle"
            class="flex items-center gap-2 px-2 py-1 rounded
                   text-sm font-medium uppercase
                   hover:bg-slate-100"
            :aria-expanded="open"
            aria-haspopup="listbox"
          >
            <img :src="current.flag" class="w-5 h-5 rounded-sm" />
            <span>{{ current.code }}</span>
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" />
            </svg>
          </button>

          <ul
            v-show="open"
            class="absolute right-0 mt-2 w-28
                   bg-white border border-slate-200
                   rounded-md shadow-lg text-sm z-50"
          >
            <li v-for="lang in languages" :key="lang.code">
              <button
                class="w-full flex items-center gap-2 px-3 py-2
                       hover:bg-slate-100"
                @click="changeLanguage(lang)"
              >
                <img :src="lang.flag" class="w-5 h-5 rounded-sm" />
                {{ lang.code }}
              </button>
            </li>
          </ul>
        </div>

        <!-- MOBILE MENU BUTTON -->
        <button
          class="lg:hidden p-2 rounded hover:bg-slate-100"
          aria-label="Open menu"
          @click="mobileOpen = !mobileOpen"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- MOBILE NAV -->
    <nav
      v-if="mobileOpen"
      class="lg:hidden border-t border-slate-200 bg-white"
    >
      <ul class="flex flex-col p-4 space-y-4 text-sm font-semibold">
        <NavbarDropdown
          :label="serviceslabel"
          :items="[
            { label: 'FOR COMPANY', to: '/' },
            { label: 'FOR INDIVIDU', to: '/' },
            { label: 'MITRA', to: '/' },
            { label: 'PERUMAHAN & KAWASAN', to: '/' }
          ]"
        />
        <NuxtLink to="/products">PRODUK</NuxtLink>
        <NuxtLink to="/about">TENTANG</NuxtLink>
        <NuxtLink to="/research">RISET</NuxtLink>

        <NavbarDropdown
          label="BLOG & MEDIA"
          :items="[
            { label: 'BLOG', to: '/' },
            { label: 'MEDIA KIT', to: '/' }
          ]"
        />

        <NavbarDropdown
          label="PORTFOLIO"
          :items="[
            { label: 'PORTFOLIO', to: '/' },
            { label: 'LAUT YANG TENANG', to: '/' }
          ]"
        />

        <NavbarDropdown
          label="CAREER"
          :items="[
            { label: 'FULL-TIME', to: '/' },
            { label: 'INTERNSHIP', to: '/' }
          ]"
        />

        <NuxtLink to="/contact">KONTAK</NuxtLink>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useI18n, useRouter, useSwitchLocalePath } from '#imports'
import NavbarDropdown from '../NavbarDropdown.vue'

const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const open = ref(false)
const mobileOpen = ref(false)
const dropdown = ref<HTMLElement | null>(null)

const languages = [
  { code: 'ID', locale: 'id', flag: '/ID.png' },
  { code: 'EN', locale: 'en', flag: '/EN.png' }
]

const current = computed(() => {
  return (
    languages.find(l => l.locale === locale.value) || languages[0]
  )
})

function toggle() {
  open.value = !open.value
}

function changeLanguage(lang: typeof languages[number]) {
  current.value = lang
  const path = switchLocalePath(lang.locale)
  open.value = false
  router.push(path)
}

function handleClickOutside(e: MouseEvent) {
  if (dropdown.value && !dropdown.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
