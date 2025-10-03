const TermsOfService = () => {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent h-20">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using BookXChange, you accept and agree to be bound
              by the terms and provisions of this agreement. These terms apply
              to all visitors, users, and others who access or use the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              2. Description of Service
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              BookXChange is an online marketplace connecting authors, publishers,
              and book sellers with readers looking to purchase books. We
              facilitate transactions between buyers and sellers but are not a
              party to these transactions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              3. User Accounts
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To use certain features of our service, you must register for an
              account. You are responsible for maintaining the confidentiality
              of your account credentials and for all activities that occur
              under your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              4. Seller Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sellers are responsible for the accuracy of book listings, quality
              of books, timely delivery, and compliance with all applicable laws
              and regulations. Sellers must provide accurate information about
              their books, authorship, and editions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              5. Buyer Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Buyers are responsible for providing accurate shipping
              information, making timely payments, and handling books carefully
              upon delivery. Buyers should inspect books promptly upon receipt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              6. Prohibited Activities
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Users may not use the service for any unlawful purpose, post false
              or misleading information, attempt to defraud other users, or
              engage in any activity that interferes with the proper functioning
              of the platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              BookXChange shall not be liable for any direct, indirect, incidental,
              special, or consequential damages resulting from the use or
              inability to use the service, including damages from book quality
              issues or delivery problems.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              8. Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at
              legal@buybooks.com or by phone at +1 (555) 123-BOOK.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
