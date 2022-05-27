const currentLang = () => {
  const language = localStorage.getItem('icdc-lang');
  const currentLang = ['en', 'ru'].includes(language) ? language :  'en';

  return currentLang;
};

export default currentLang;
