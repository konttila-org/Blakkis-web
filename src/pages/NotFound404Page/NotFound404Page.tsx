import { Link } from 'react-router-dom';

export const NotFound404Page = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">
              Page Not Found
            </h2>
            <p className="mb-8 text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
