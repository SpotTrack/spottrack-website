<template>
  <div class="lang-switcher">
    <button
      v-for="lang in languages"
      :key="lang"
      class="lang-btn"
      :class="{ active: currentLang === lang }"
      @click="switchLang(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script src="LanguageSwitcher.js"></script>

<style src="./LanguageSwitcher.css" scoped></style>

