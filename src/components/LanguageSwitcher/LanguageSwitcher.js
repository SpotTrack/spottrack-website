import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const languages = ['en', 'es']
    const currentLang = ref(locale.value)

    function switchLang(lang) {
      locale.value = lang
      currentLang.value = lang
    }

    return { languages, currentLang, switchLang }
  }
}
