<template>
  <footer
    class="w-full font-body
           bg-gradient-to-r
           from-teal-600
           via-teal-500
           to-emerald-400
           text-white"
  >
    <div
      class="mx-auto max-w-7xl
             px-4 sm:px-6 lg:px-8
             h-14
             flex items-center justify-between
             text-sm"
    >
      <!-- LEFT -->
      <p class="opacity-90">
        © 2022 – All Rights Reserved Waste4Change
      </p>

      <!-- RIGHT -->
      <button
        class="flex items-center gap-2
               hover:opacity-80
               transition"
        aria-label="Change language"
      >
        <!-- globe icon -->
        <svg
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c2.5 2.5 4 6 4 9s-1.5 6.5-4 9m0-18C9.5 5.5 8 9 8 12s1.5 6.5 4 9M3 12h18"
          />
        </svg>

        <span class="uppercase font-medium">
          ID / EN
        </span>
      </button>
    </div>
  </footer>
</template>
