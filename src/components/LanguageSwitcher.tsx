import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">
        {t('languageSwitcher.language')}:
      </span>
      <div className="flex space-x-1">
        <button
          onClick={() => changeLanguage('en')}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            i18n.language === 'en'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {t('languageSwitcher.english')}
        </button>
        <button
          onClick={() => changeLanguage('fi')}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            i18n.language === 'fi'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {t('languageSwitcher.finnish')}
        </button>
      </div>
    </div>
  );
};

