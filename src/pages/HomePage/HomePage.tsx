export const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold" style={{ color: '#20C997' }}>
                🐐
              </span>
              <h1 className="text-2xl font-bold text-gray-900">Blakkis</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Social Drinking
            <span className="block" style={{ color: '#20C997' }}>
              Companion
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Track your drinks and connect with friends in real-time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* Google Play Button */}
            <a href="#" className="transition-opacity hover:opacity-90">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-20"
              />
            </a>

            {/* App Store Button */}
            <a href="#" className="transition-opacity hover:opacity-90">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2024 Blakkis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
