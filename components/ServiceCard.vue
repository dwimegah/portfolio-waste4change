<template>
  <li>
    <article
      class="group h-full rounded-xl
             bg-white
             p-8
             border border-slate-100
             shadow-sm
             transition-all duration-300
             flex flex-col justify-between

             hover:bg-brand
             hover:shadow-lg"
    >
      <!-- Content -->
      <div>
        <!-- Icon -->
        <div
          class="w-12 h-12 rounded-full
                flex items-center justify-center
                bg-slate-50
                border border-brand
                transition-all duration-300
                group-hover:bg-white
                group-hover:scale-110"
        >
            <component
            :is="icon"
            class="w-7 h-7
              text-[#1C9DBD]
              transition-colors duration-300
              group-hover:text-brand"
            />
        </div>

        <!-- Title -->
        <h3
          class="text-lg font-title font-semibold
                 text-slate-800
                 mb-3
                 transition-colors duration-300
                 group-hover:text-white"
        >
          {{ title }}
        </h3>

        <!-- Description -->
        <p
          class="text-sm font-body leading-relaxed
                 text-slate-500
                 transition-colors duration-300

                 group-hover:text-white/90"
        >
          {{ desc }}
        </p>
      </div>

      <!-- Link -->
      <NuxtLink
        :to="link"
        class="mt-8 inline-flex items-center
               text-sm font-semibold
               text-brand
               transition-colors duration-300

               group-hover:text-white"
      >
        {{t('lihatproyek')}}
        <span class="ml-2" aria-hidden="true">→</span>
      </NuxtLink>
    </article>
  </li>
</template>

<script setup>
const { locale, t } = useI18n()

defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  link: { type: String, required: true },
  icon: {
    type: Object,
    required: true,
  },
})
</script>
