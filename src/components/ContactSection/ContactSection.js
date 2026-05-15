import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'ContactSection',
  setup() {
    const { t } = useI18n({ useScope: 'global' })

    const contactName = ref('')
    const contactEmail = ref('')
    const contactMessage = ref('')
    const hasSubmitted = ref(false)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const emailIsValid = computed(() => emailRegex.test(contactEmail.value))
    const canSubmit = computed(() => {
      return contactName.value.length > 0 && emailIsValid.value && contactMessage.value.length > 0
    })

    async function onSubmit() {
      hasSubmitted.value = true
      if (!canSubmit.value) return
      try {
        const emailjsModule = await import('@emailjs/browser')
        const emailjs = emailjsModule.default || emailjsModule
        await emailjs.send('service_8z4yvrk', 'template_muervr3', {
          from_name: contactName.value,
          from_email: contactEmail.value,
          message: contactMessage.value
        }, '6RLuwrQZ4Qh9K4vh4')
        contactName.value = ''
        contactEmail.value = ''
        contactMessage.value = ''
        hasSubmitted.value = false
      } catch (err) {
        console.error('Error enviando email:', err)
      }
    }

    return {
      t,
      contactName,
      contactEmail,
      contactMessage,
      hasSubmitted,
      emailIsValid,
      canSubmit,
      onSubmit
    }
  }
}
