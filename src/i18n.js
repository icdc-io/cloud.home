import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import language from './currentLang';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: 'Discover our cloud services',
          goTo: 'Go to',
          open: 'Open',
          noServices: 'There are no available services in this location',
          _404Title: '404: It\'s true. We\'ve lost it.',
          _404Description: 'Sorry, we couldn\'t find what you were looking for. The page you requested may have been changed or moved.',
          _404Button: 'Return to homepage',
          noAccounts: 'There are no available accounts for you.',
          support: 'support',
          privacy: 'Privacy Policy',
          cookies: 'Cookies Policy',
          status: 'Status Page',
          rights: 'All rights reserved.'
        },
      },
      ru: {
        translation: {
          "title": "Наши облачные сервисы",
          "goTo": "Перейти к",
          "open": "Открыть",
          "noServices": "В этой локации нет доступных сервисов",
          "_404Title": "404: Страница не найдена.",
          "_404Description": "К сожалению, мы не смогли найти то, что вы искали. Запрошенная вами страница могла быть изменена или перемещена.",
          "_404Button": "Вернуться на главную страницу",
          "noAccounts": "У вас нет доступных аккаунтов.",
          "support": "службу поддержки",
          "privacy": "Конфиденциальность",
          "cookies": "Политика использования сookies",
          "status": "Статус системы",
          "rights": "Все права защищены."
        },
      },
    },
    lng: language(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;
