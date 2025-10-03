const PrivacyPolicy = () => {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent h-20">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us, such as when
              you create an account, list or purchase a book, or contact us.
              This may include your name, email address, phone number,
              billing/shipping address, and payment information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to provide, maintain, and
              improve our platform, process book transactions, manage orders,
              send you notifications and support messages, and communicate with
              you about new books, offers, and events on BookXChange.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              3. Information Sharing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell or trade your personal information to third
              parties. However, we may share your information with trusted
              service providers who help us operate our platform (such as
              payment processors, delivery partners, and analytics services).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              4. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use appropriate security measures to protect your personal
              information against unauthorized access, alteration, or
              disclosure. However, no method of transmission over the internet
              or electronic storage is completely secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              5. Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal
              information. You may also request data portability or object to
              certain uses of your data. To exercise these rights, please reach
              out to us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              6. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <span className="font-medium text-foreground">
                privacy@buybooks.com
              </span>{" "}
              or by phone at{" "}
              <span className="font-medium text-foreground">
                +1 (555) 123-BOOK
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
