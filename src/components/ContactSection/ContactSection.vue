<template>
  <section class="contact-section" id="contacto">
    <div class="contact-container">
      <h2 class="section-title">{{ t('contact.title') }}</h2>
      <form class="contact-form" @submit.prevent="onSubmit">
        <div class="form-field">
          <label class="form-label">{{ t('contact.name.label') }}</label>
          <input
            v-model="contactName"
            type="text"
            class="form-input"
            :placeholder="t('contact.name.placeholder')"
          />
          <span v-if="hasSubmitted && contactName.length === 0" class="form-error">
            {{ t('contact.name.error') }}
          </span>
        </div>
        <div class="form-field">
          <label class="form-label">{{ t('contact.email.label') }}</label>
          <input
            v-model="contactEmail"
            type="email"
            class="form-input"
            :placeholder="t('contact.email.placeholder')"
          />
          <span v-if="hasSubmitted && !emailIsValid" class="form-error">
            {{ t('contact.email.error') }}
          </span>
        </div>
        <div class="form-field">
          <label class="form-label">{{ t('contact.message.label') }}</label>
          <textarea
            v-model="contactMessage"
            rows="5"
            class="form-input form-textarea"
            :placeholder="t('contact.message.placeholder')"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn-submit"
          :disabled="!canSubmit"
        >
          {{ t('contact.submit') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script src="./ContactSection.js"></script>

<style src="./ContactSection.css" scoped></style>

