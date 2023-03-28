import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './translations/en/index.translation'

i18n.use(initReactI18next).init({
  resources: {
    en,
  },
  fallbackLng: 'en',
  lng: 'en',
})

export default i18n
