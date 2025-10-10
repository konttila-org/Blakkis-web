import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const JoinGroupPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const openDeeplink = () => {
    if (id) {
      window.location.href = `blakkis://join/${id}`;
    }
  };

  useEffect(() => {
    // Automatically try to open the deeplink when the page loads
    openDeeplink();
  }, [id]);

  return (
    <div className="p-8 text-center">
      <h1 className="mb-6 text-3xl font-bold">{t('joinGroup.title')}</h1>

      <div className="mx-auto max-w-md space-y-4">
        <p className="text-gray-600">{t('joinGroup.autoOpening')}</p>

        <p className="text-sm text-gray-500">
          {t('joinGroup.manualInstructions')}
        </p>

        <button
          onClick={openDeeplink}
          className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600"
        >
          {t('joinGroup.openAppButton')}
        </button>

        <p className="mt-4 text-xs text-gray-400">
          {t('joinGroup.installNote')}
        </p>
      </div>
    </div>
  );
};
