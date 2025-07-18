export const PrivacyPolicyPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="prose prose-lg mx-auto">
        <p className="mb-6 text-sm text-gray-600">
          <strong>Last updated:</strong> 18 of July 2025
        </p>

        <p className="mb-6 text-lg">
          Blakkis 🐐 ("we", "our", or "us") is committed to protecting your
          privacy. This Privacy Policy describes how we collect, use, and
          protect your information when you use the Blakkis mobile application
          ("the App").
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          App Purpose and Limitations
        </h2>

        <p className="mb-4">
          Blakkis is specifically designed as a social drink tracking
          application, not a Blood Alcohol Content (BAC) calculator. Our app:
        </p>

        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>
            <strong>Does NOT calculate Blood Alcohol Content</strong>: Blakkis
            does not attempt to measure or calculate your actual blood alcohol
            concentration.
          </li>
          <li>
            <strong>Does NOT provide medical measurements</strong>: The
            visualizations and data presented in the app are not clinical
            measurements and should not be treated as such.
          </li>
          <li>
            <strong>Does NOT indicate fitness to drive</strong>: Never use
            Blakkis to determine whether you are fit to drive, operate
            machinery, or engage in any activity that requires sobriety.
          </li>
          <li>
            <strong>Does NOT replace professional medical advice</strong>: The
            app cannot and does not attempt to predict your actual level of
            impairment.
          </li>
        </ul>

        <p className="mb-4">
          Blakkis is intended solely for{' '}
          <strong>
            personal tracking and social sharing of drink consumption patterns
          </strong>
          . The impact visualizations in the app are rough approximations based
          on self-reported data and general population models, which{' '}
          <strong>
            cannot account for individual physiological differences
          </strong>
          that affect how alcohol is processed by your body.
        </p>

        <p className="mb-6">
          For accurate information about alcohol's effects, please consult
          medical professionals. Never make health or safety decisions based on
          information provided by this app.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          1. Information We Collect
        </h2>

        <h3 className="mb-3 text-xl font-semibold text-gray-800">
          a. Personal Information (User-Provided)
        </h3>
        <p className="mb-4">
          When you use the app, you may provide limited personal data used for
          visualizing your drink consumption patterns and enabling group
          functionality:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            <strong>Nickname</strong> (user-chosen; no real name required)
          </li>
          <li>
            <strong>Birth year</strong>
          </li>
          <li>
            <strong>Biological sex/gender</strong>
          </li>
          <li>
            <strong>Weight and height</strong>
          </li>
        </ul>
        <p className="mb-6">
          This data is stored securely on our{' '}
          <strong>cloud-hosted backend</strong>.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-gray-800">
          b. Drink Tracking Data
        </h3>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Drink logs</li>
          <li>Drink impact visualization data</li>
          <li>Group participation data (if applicable)</li>
        </ul>
        <p className="mb-6">
          These are also stored in the cloud to enable syncing across devices
          and group sharing features.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          2. How We Use Your Information
        </h2>

        <p className="mb-4">We use your data only to:</p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Display visualizations of your drink consumption patterns</li>
          <li>Show your drinking history and consumption trends</li>
          <li>Enable group sharing and comparisons (if opted in)</li>
          <li>Maintain your user profile for use across sessions or devices</li>
        </ul>

        <p className="mb-6">
          We{' '}
          <strong>
            do not use your data for advertising, third-party analytics, or any
            other commercial purposes
          </strong>
          .
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          3. Data Storage and Security
        </h2>

        <p className="mb-4">
          All user data is securely stored on our cloud backend with appropriate
          technical and organizational safeguards to protect against
          unauthorized access.
        </p>

        <p className="mb-6">
          While we don't collect real names, email addresses, or phone numbers,
          we still treat your nickname and related data with care, using
          encryption and secure connections (e.g., HTTPS) at all times.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          4. Data Sharing
        </h2>

        <p className="mb-4">
          We do{' '}
          <strong>not sell, rent, or share your data with third parties</strong>
          .
        </p>

        <p className="mb-4">
          If you choose to join or create a group, only the following
          information is shared and visible to other group members:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            <strong>Your nickname</strong>
          </li>
          <li>
            <strong>Your drink consumption visualizations</strong>
          </li>
        </ul>

        <p className="mb-4">
          <strong>
            Your gender, weight, height, birth year, or any other personal
            attributes are never visible to others.
          </strong>{' '}
          This sensitive information is used only for internal visualization
          calculations and is stored securely.
        </p>

        <p className="mb-6">
          You may leave a group at any time to stop sharing data with other
          members.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          5. User-Generated Content & Groups
        </h2>

        <p className="mb-4">
          Blakkis includes optional group functionality, allowing users to
          compare their drinking logs and consumption visualizations with
          friends or others.
        </p>

        <p className="mb-4">Within a group, members will only see:</p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            Your <strong>nickname</strong>
          </li>
          <li>
            Your <strong>logged drinks</strong>
          </li>
          <li>
            Your <strong>drink consumption visualizations</strong>
          </li>
        </ul>

        <p className="mb-4">
          We intentionally limit visibility to protect your privacy. Personal
          characteristics such as{' '}
          <strong>weight, height, gender, and birth year</strong>
          are <strong>never shown</strong> to other users.
        </p>

        <p className="mb-6">
          We encourage respectful participation in groups. If inappropriate
          behavior occurs, please report it by contacting us at
          info@blakkis.com.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          6. Your Rights
        </h2>

        <p className="mb-4">You have the right to:</p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>View your stored data</li>
          <li>Delete your account and all associated data upon request</li>
          <li>Contact us with questions or concerns</li>
        </ul>

        <p className="mb-6">
          You can request data deletion by emailing us at{' '}
          <strong>info@blakkis.com</strong>.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          7. Children's Privacy
        </h2>

        <p className="mb-6">
          Blakkis is intended for users <strong>17 years and older</strong>. We
          do not knowingly collect information from individuals under 17. If we
          learn that someone under 17 has provided data, we will delete it
          immediately.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          8. Changes to This Policy
        </h2>

        <p className="mb-6">
          We may update this Privacy Policy from time to time. When we do, we'll
          revise the "Last updated" date above. We encourage you to review this
          page periodically.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Contact Us</h2>

        <p className="mb-6">
          If you have any questions or concerns about this Privacy Policy,
          please contact us:
        </p>

        <p className="text-lg font-medium">
          📧 <strong>info@blakkis.com</strong>
        </p>
      </div>
    </div>
  );
};
