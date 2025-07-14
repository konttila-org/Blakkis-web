import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const JoinGroupPage = () => {
  const { id } = useParams<{ id: string }>();

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
      <h1 className="mb-6 text-3xl font-bold">join group {id}</h1>

      <div className="mx-auto max-w-md space-y-4">
        <p className="text-gray-600">
          We're trying to open the Blakkis app automatically...
        </p>

        <p className="text-sm text-gray-500">
          If the app didn't open automatically, you can try opening it manually:
        </p>

        <button
          onClick={openDeeplink}
          className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Open Blakkis App
        </button>

        <p className="mt-4 text-xs text-gray-400">
          Make sure you have the Blakkis app installed on your device.
        </p>
      </div>
    </div>
  );
};
