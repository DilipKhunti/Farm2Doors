const CookiesPolicy = () => {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent h-20">
            Cookies Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              1. What Are Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and to provide information to
              website owners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              2. How We Use Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At BookXChange, we use cookies to enhance your shopping experience,
              remember your preferences, analyze site traffic, and personalize
              content. This allows us to provide you with a smoother, faster,
              and more relevant experience when browsing or purchasing books.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              3. Types of Cookies We Use
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-foreground">
                  Essential Cookies
                </h3>
                <p className="text-muted-foreground text-sm">
                  Required for the website to function properly, including
                  login, shopping cart, and checkout functionality.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  Performance Cookies
                </h3>
                <p className="text-muted-foreground text-sm">
                  Help us understand how visitors interact with BookXChange by
                  collecting anonymous information.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  Functionality Cookies
                </h3>
                <p className="text-muted-foreground text-sm">
                  Remember your preferences and settings (like saved carts or
                  wishlist) to provide a personalized experience.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              4. Third-Party Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services that place cookies on your device.
              These may include analytics providers, payment processors, and
              social media platforms. Each third party has its own privacy and
              cookies policy which governs their use of data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              5. Managing Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You can control and manage cookies through your browser settings.
              Most browsers allow you to block or delete cookies, but please
              note this may affect some functionality (like saving books to your
              cart or completing purchases).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              6. Updates to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookies Policy from time to time. When we do,
              we will post the new version on this page with an updated revision
              date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              7. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies, please contact
              us at privacy@BookXChange.com or by phone at +1 (555) 123-BOOK.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
