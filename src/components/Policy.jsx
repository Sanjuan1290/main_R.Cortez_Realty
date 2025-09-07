const Policy = () => {
  return (
    <div className="px-6 md:px-12 mt-14 py-12 max-w-5xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Privacy Policy</h1>
      <p className="mb-4">
        R. Cortez Realty (hereinafter referred to as “the Company”) values and
        respects your right to privacy. We are committed to protect the privacy
        of our website visitors. We will only collect, record, store, process,
        and use your personal information in accordance with the Data Privacy
        Act of 2012, its Implementing Rules and Regulations, the issuances by
        the National Privacy Commission, and other pertinent laws.
      </p>
      <p className="mb-4">
        This Privacy Policy informs you of updates in our corporate policies
        regarding the collection, use, storage, disclosure, and disposal of
        personal information we receive and collect from any individual who
        communicates or transacts with us through our authorized
        representatives.
      </p>
      <p className="mb-6">
        We will only use your data based on the limitations set by this policy.
        The outline below provides the manner by which we manage the personal
        information that we will obtain from you if you visit our website.
      </p>

      {/* Personal Information */}
      <h2 className="text-2xl font-semibold text-green-900 mb-4">
        Personal Information
      </h2>
      <p className="mb-4">
        Personal Information refers to any information, whether recorded in a
        material form or not, from which the identity of an individual is
        apparent or can be reasonably and directly ascertained by the entity
        holding the information, or when put together with other information
        would directly and certainly identify an individual. Sensitive Personal
        Information is any attribute of your personal information that can
        discriminate, qualify, or classify you such as your age, date of birth,
        marital status, government-issued identification numbers, account
        numbers, and financial information. Privileged Information is any and
        all forms of information which, under the Rules of Court and other
        pertinent laws, constitute privileged communication.
      </p>

      <h3 className="text-xl font-medium text-green-800 mb-3">
        Under the Data Privacy Act of 2012, you have the following rights:
      </h3>
      <ol className="list-decimal ml-6 space-y-2 mb-6">
        <li>Right to be informed – request details on how your data is processed.</li>
        <li>Right to access – demand reasonable access to your personal data.</li>
        <li>Right to dispute – correct inaccuracies or errors in your data.</li>
        <li>Right to object – suspend, withdraw, or remove your data from processing.</li>
        <li>Right to data erasure – order blocking, removal, or destruction of your data.</li>
        <li>Right to secure data portability – obtain your data in electronic format.</li>
        <li>Right to be indemnified for damages – compensation for violations of privacy.</li>
        <li>
          Right to file a complaint – send concerns to{" "}
          <span className="text-blue-700">rcortezrealty.official@gmail.com</span>.
        </li>
      </ol>

      {/* Use of Personal Data */}
      <h2 className="text-2xl font-semibold text-green-900 mb-4">
        Use of Personal Data
      </h2>
      <p className="mb-4">
        The purposes for which we use Personal Data are as follows:
      </p>
      <ol className="list-decimal ml-6 space-y-2 mb-6">
        <li>To provide consultation advice and respond to inquiries.</li>
        <li>To manage business operations, the website, and client relationships.</li>
        <li>To improve site usability and provide better services.</li>
        <li>To protect the security and effective functioning of our systems.</li>
        <li>To provide relevant marketing and event information.</li>
        <li>To address compliance and legal obligations, such as identity checks and anti-fraud measures.</li>
      </ol>

      {/* Data Retention */}
      <h2 className="text-2xl font-semibold text-green-900 mb-4">
        Data Retention and Disposal
      </h2>
      <p className="mb-6">
        We retain Personal Data for as long as necessary to fulfill its purpose.
        Data related to marketing is stored until you opt out. You may request
        deletion at any time, and data will be securely disposed of in
        accordance with applicable laws.
      </p>

      {/* Terms of Use */}
      <h1 className="text-3xl font-bold text-green-900 mb-6">Terms of Use</h1>
      <p className="mb-4">
        By accessing this site, you agree to the following terms and conditions:
        R. Cortez Realty maintains this Site to provide information about its
        services and to facilitate communication with affiliate companies and
        service providers.
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-6">
        <li>By accessing the Site you acknowledge and accept these terms.</li>
        <li>Services described on the site may not be available in all areas of the Philippines.</li>
        <li>
          While we make efforts to provide accurate and up-to-date information,
          we make no warranties as to its accuracy. Use of the Site is at your
          own risk.
        </li>
      </ul>
    </div>
  );
};

export default Policy;
