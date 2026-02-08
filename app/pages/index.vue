<template>
  <section
    class="relative w-full flex items-center
           min-h-[70vh] lg:min-h-[100vh]"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center
             blur-[1.5px]
             brightness-75 contrast-110 saturate-75"
      style="background-image: url('/truksampah.jpeg')"
      aria-hidden="true"
    />

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50" aria-hidden="true" />

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0
             bg-gradient-to-t
             from-black/70
             via-black/40
             to-black/20"
      aria-hidden="true"
    />

    <!-- Content -->
    <div
      <div
        class="relative z-10
              max-w-7xl mx-auto
              px-6
              pt-20
              text-white"
    >
      <!-- Breadcrumb -->
      <nav
        class="text-sm mb-3 opacity-90"
        aria-label="Breadcrumb"
      >
        <ol class="flex items-center gap-2">
          <li>
            <NuxtLink to="/" class="hover:underline">
              {{t('beranda')}}
            </NuxtLink>
          </li>
          <li aria-hidden="true">›</li>
          <li class="opacity-80">{{t('portofolio')}}</li>
        </ol>
      </nav>

      <!-- Heading -->
      <h1
        class="font-heading font-bold
         text-3xl sm:text-4xl lg:text-5xl max-w-3xl
         leading-tight
         text-white"
      >
        {{t('solusi')}}
      </h1>

      <!-- Description -->
      <p
        class="font-body mt-4 max-w-2xl
               text-white/90
               text-base sm:text-lg"
      >
        {{t('solusi_description')}}
      </p>

      <!-- CTA -->
      <NuxtLink
        to="/contact"
        class="inline-flex items-center
                mt-6 px-6 py-3
                bg-brand hover:bg-brand
                text-white text-sm font-semibold
                rounded-full
                shadow-md shadow-brand/30
                transition-all duration-200
                hover:-translate-y-0.5"
      >
        WORK WITH US
      </NuxtLink>
    </div>
  </section>

  <section
    class="bg-white py-20"
    aria-labelledby="business-help-heading"
  >
    <div class="max-w-7xl mx-auto px-6">

      <!-- Section Header -->
      <header class="text-center max-w-3xl mx-auto">
        <h2
          id="business-help-heading"
          class="text-xl sm:text-2xl
                 font-title font-semibold tracking-wide
                 text-slate-800 uppercase"
        >
          {{t('bantu')}}
        </h2>

        <!-- Decorative Divider -->
        <div
          class="w-20 h-1 bg-brand mx-auto my-4"
          aria-hidden="true"
        ></div>

        <p class="text-slate-500 text-sm sm:text-base">
          {{t('layanan')}}
        </p>
        <p class="font-body"><b>Consult, Campaign, Collect, Create.</b></p>
      </header>

      <!-- Cards Grid -->
      <ul
        class="mt-14 grid gap-6
               grid-cols-1
               sm:grid-cols-2
               lg:grid-cols-4"
        role="list"
      >
        <ServiceCard
          title="Consult"
          :desc="t('consult')"
          link="/portfolio/campaign"
          :icon="IconConsult"
        />

        <ServiceCard
          title="Campaign"
          :desc="t('campaign')"
          link="/portfolio/campaign"
          :icon="IconCampaign"
        />

        <ServiceCard
          title="Collect"
          :desc="t('collect')"
          link="/portfolio/collect"
          :icon="IconCollect"
        />

        <ServiceCard
          title="Create"
          :desc="t('create')"
          link="/portfolio/create"
          :icon="IconCreate"
        />
      </ul>
    </div>
  </section>
  <Bottom />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
import Bottom from '../components/Bottom.vue'
import IconConsult from '../components/icons/IconConsult.vue'
import IconCampaign from '../components/icons/IconCampaign.vue'
import IconCollect from '../components/icons/IconCollect.vue'
import IconCreate from '../components/icons/IconCreate.vue'

const { locale, t } = useI18n()

useHead({
  title: 'Portofolio | Waste4Change',
  meta: [
    {
      name: 'description',
      content:
        'Solusi pengelolaan limbah yang bertanggung jawab oleh PT Waste4Change Alam Indonesia.'
    },
    {
      property: 'og:title',
      content: 'Solusi Pengelolaan Limbah yang Bertanggung Jawab'
    },
    {
      property: 'og:description',
      content:
        'Penyedia layanan pengelolaan limbah holistik berbasis di Bekasi, Indonesia.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>
