import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // Automatically open email app when component mounts
    window.location.href =
      'mailto:info@blakkis.com?subject=Contact%20from%20Blakkis%20Web';
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 text-center">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          {t('contact.title')}
        </h1>
        <p className="mb-6 text-lg text-gray-600">{t('contact.opening')}</p>
      </div>

      <div className="mb-6 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">
          {t('contact.troubleTitle')}
        </h2>
        <p className="mb-4 text-gray-600">{t('contact.troubleDescription')}</p>
        <a
          href="mailto:info@blakkis.com?subject=Contact%20from%20Blakkis%20Web"
          className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
        >
          📧 {t('common.email')}
        </a>
      </div>

      <div className="text-sm text-gray-500">
        <p>{t('contact.responseTime')}</p>
      </div>
    </div>
  );
};
