<template>
  <div
    class="relative bg-gradient-to-r
           from-sky-500 via-teal-500 to-green-400
           text-white"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">
      Footer Navigation
    </h2>

    <div
      class="max-w-7xl mx-auto
             px-6 py-16"
    >
      <div
        class="grid gap-12
               grid-cols-1
               sm:grid-cols-2
               lg:grid-cols-3"
      >
        <!-- COLUMN 1 -->
        <nav aria-label="Footer Navigation">
          <h3 class="text-sm font-semibold uppercase mb-6">
            Waste4Change
          </h3>

          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/services" class="hover:underline">{{t('semualayanan')}}</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:underline">{{t('product')}}</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:underline">{{t('tentangkami')}}</NuxtLink></li>
            <li><NuxtLink to="/research" class="hover:underline">{{t('riset')}}</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink></li>
            <li><NuxtLink to="/media" class="hover:underline">Media</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="hover:underline">{{t('portfolio')}}</NuxtLink></li>
            <li><NuxtLink to="/career/full-time" class="hover:underline">Full-time</NuxtLink></li>
            <li><NuxtLink to="/career/internship" class="hover:underline">Internship</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:underline">{{t('contact')}}</NuxtLink></li>
          </ul>
        </nav>

        <!-- COLUMN 2 -->
        <nav aria-label="For Company">
          <h3 class="text-sm font-semibold uppercase mb-6">
            {{t('perusahaan')}}
          </h3>

          <ul class="space-y-3 text-sm">
            <li>Reduce Waste to Landfill</li>
            <li>Material &amp; Document Destruction</li>
            <li>Event Waste Management</li>
            <li>In-Store Recycling</li>
            <li>Digital EPR</li>
            <li>Waste Credit</li>
            <li>Solid Waste Management Research</li>
            <li>Community-Based Implementation</li>
            <li>3R School Program</li>
            <li>AKABIS (Waste Management Academy)</li>
            <li>AKABIS Black Soldier Fly</li>
            <li>Engineering, Procurement &amp; Construction</li>
          </ul>
        </nav>

        <!-- COLUMN 3 -->
        <div>
          <h3 class="text-sm font-semibold uppercase mb-6">
            Connect With Us
          </h3>

          <address class="not-italic text-sm space-y-4">
            <p>
              Kantor Waste4Change, Vida Bumipala<br>
              Jl. Alun Alun Utara, RT.002/RW.001,<br>
              Padurenan, Mustika Jaya, Kota Bekasi,<br>
              Jawa Barat 17156
            </p>

            <p>
              <a href="tel:+628211110170" class="hover:underline">
                +62 821 1110 0170
              </a>
            </p>

            <p>
              <a href="mailto:contact@waste4change.com" class="hover:underline">
                contact@waste4change.com
              </a>
            </p>
          </address>

          <!-- SOCIAL MEDIA -->
          <div class="flex gap-4 mt-6">
            <SocialIcon type="instagram" href="https://instagram.com/waste4change" />
            <SocialIcon type="facebook" href="https://facebook.com/waste4change" />
            <SocialIcon type="twitter" href="https://twitter.com/waste4change" />
            <SocialIcon type="linkedin" href="https://linkedin.com/company/waste4change" />
            <SocialIcon type="youtube" href="https://youtube.com/@waste4change" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialIcon from '../components/SocialIcon.vue'

const { locale, t } = useI18n()
</script>