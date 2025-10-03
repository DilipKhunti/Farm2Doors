import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SubscriptionModal from "@/components/modals/SubscriptionModal";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Pricing = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [subscriptionPlan, setSubscriptionPlan] = useState("free");

  const handleSubscribe = (plan: string) => {
    setOpen(true);
    setSubscriptionPlan(plan);
  };

  return (
    <div className="container py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent h-20">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Choose the plan that works best for selling your books. No hidden
          fees, no long-term contracts.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <Card className="relative flex flex-col">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl">Basic</CardTitle>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">₹0</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <p className="text-muted-foreground">Perfect for new sellers</p>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow space-y-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">List up to 5 books</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">10% commission per sale</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Basic customer support</span>
              </li>
            </ul>

            <div className="flex-grow" />

            <Button
              variant="outline"
              className="w-full mt-auto bg-accent hover:bg-accent/80 text-white"
              onClick={() =>
                toast({
                  title: "Free plan is already enabled",
                  description: "You are already on the free plan.",
                })
              }
            >
              Choose Free
            </Button>
          </CardContent>
        </Card>

        {/* Professional Plan */}
        <Card className="relative flex flex-col border-primary shadow-lg">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
              <Star className="h-3 w-3 mr-1" />
              Most Popular
            </Badge>
          </div>

          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl">Professional</CardTitle>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">₹299</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <p className="text-muted-foreground">For growing bookstores</p>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow space-y-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Unlimited book listings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">5% commission per sale</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Promoted book listings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Basic marketing tools</span>
              </li>
            </ul>

            <div className="flex-grow" />

            <Button
              className="w-full bg-gradient-primary hover:opacity-90 mt-auto"
              onClick={() => handleSubscribe("professional")}
            >
              Choose Professional
            </Button>
          </CardContent>
        </Card>

        {/* Enterprise Plan */}
        <Card className="relative flex flex-col">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl">Enterprise</CardTitle>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">₹999</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <p className="text-muted-foreground">
              For large sellers & publishers
            </p>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow space-y-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Unlimited everything</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">2% commission per sale</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Custom analytics dashboard</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">API & bulk upload support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Brand promotion & campaigns</span>
              </li>
            </ul>

            <div className="flex-grow" />

            <Button
              variant="outline"
              className="w-full mt-auto bg-accent hover:bg-accent/80 text-white"
              onClick={() => handleSubscribe("enterprise")}
            >
              Choose Enterprise
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="space-y-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              How does commission work?
            </h3>
            <p className="text-muted-foreground text-sm">
              A small commission is deducted from every successful book sale
              depending on your plan.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              Can I change plans anytime?
            </h3>
            <p className="text-muted-foreground text-sm">
              Yes, you can upgrade or downgrade anytime. Changes apply
              immediately.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground text-sm">
              We support UPI, debit/credit cards, PayPal, and net banking.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">
              Is there a free trial?
            </h3>
            <p className="text-muted-foreground text-sm">
              The Basic plan is free forever. Paid plans come with a 30-day
              money-back guarantee.
            </p>
          </div>
        </div>
      </div>

      <SubscriptionModal
        open={open}
        onOpenChange={setOpen}
        subscriptionPlan={subscriptionPlan}
      />
    </div>
  );
};

export default Pricing;
