import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Truck,
  IndianRupee,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const StartSelling = () => {
  return (
    <div className="container py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent h-20">
          Start Selling on BookXChange
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Join thousands of authors and book sellers who are connecting directly
          with readers and growing their business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">
          Why Sell on BookXChange?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <IndianRupee className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Better Prices</h3>
              <p className="text-sm text-muted-foreground">
                Earn more by selling directly to readers without middlemen
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Direct Readers</h3>
              <p className="text-sm text-muted-foreground">
                Build relationships with readers who love your books
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Easy Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Simple logistics with shipping options to reach your readers
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Easy Setup</h3>
              <p className="text-sm text-muted-foreground">
                Start selling quickly with our simple onboarding process
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How It Works */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-foreground">Sign Up</h3>
            <p className="text-muted-foreground">
              Create your seller account and complete your profile with book
              details
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              List Books
            </h3>
            <p className="text-muted-foreground">
              Upload your book covers, descriptions, and pricing
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Start Selling
            </h3>
            <p className="text-muted-foreground">
              Receive orders, manage shipments, and grow your readership
            </p>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Seller Requirements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">
                Basic Requirements
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Valid author or publisher credentials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  ISBN for books
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  High-quality book images and descriptions
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">What We Provide</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Marketing and promotion support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Customer service assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Secure payment processing
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center space-y-6 bg-gradient-primary/10 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-foreground">Ready to Start?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto pb-8">
          Join the BookXChange community today and start reaching readers who love
          books.
        </p>
        <Link to="/profile">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Create Seller Account <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StartSelling;
