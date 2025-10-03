import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Truck,
  Shield,
  Star,
  Users,
  Package,
  HelpingHand,
  PhoneCall,
  BookOpenCheck,
  BarChart2,
  UploadCloud,
  ShieldCheck,
  LibraryBig,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Wide Collection",
      description:
        "From academic to fiction, find books across every genre and interest.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick and reliable book delivery to your doorstep within 2–5 days.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every book is verified for quality before reaching you.",
    },
  ];

  const sellGrowFeatures = [
    {
      icon: UploadCloud,
      title: "Easy Book Upload",
      desc: "List your books with simple steps and reach thousands of readers.",
    },
    {
      icon: BarChart2,
      title: "Grow Your Reach",
      desc: "Access a large community of book lovers across the country.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      desc: "Get paid on time with our safe and transparent payment system.",
    },
    {
      icon: Package,
      title: "Hassle-Free Shipping",
      desc: "We help you manage delivery so you can focus on selling.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Books Available" },
    { number: "5,000+", label: "Happy Readers" },
    { number: "1,000+", label: "Active Sellers" },
    { number: "4.9", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("./images/hero.webp")` }}
        ></div>
        <div className="relative container py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <LibraryBig className="w-4 h-4 mr-2" />
                  Your Online Bookstore
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Discover,{" "}
                  <span className="sm:text-accent text-primary">Read</span> &{" "}
                  <span className="text-accent">Collect</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  BookXChange connects readers and sellers in one trusted
                  marketplace. Explore thousands of books and grow your personal
                  library.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent/70 hover:bg-accent text-accent-foreground"
                >
                  <Link to="/shop">
                    Browse Books
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-primary bg-white/70 hover:bg-white hover:text-primary"
                >
                  <Link to="/profile">Sell Your Books</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current text-yellow-400" />
                  <span className="text-white/90">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-white/90" />
                  <span className="text-white/90">5,000+ Readers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose BookXChange?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A trusted platform where readers discover books and sellers find
              their audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-medium transition-smooth"
              >
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're here to find your next great read or to sell your
              collection, BookXChange has you covered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="p-6 hover:shadow-medium transition-smooth">
                <div className="space-y-4">
                  <BookOpen className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">For Readers</h3>
                  <p className="text-muted-foreground">
                    Explore thousands of titles and find books you’ll love.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-gradient-primary hover:bg-gradient-primary/80"
                  >
                    <Link to="/shop">Start Browsing</Link>
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-smooth">
                <div className="space-y-4">
                  <Package className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">For Sellers</h3>
                  <p className="text-muted-foreground">
                    Upload and sell your books to a wide audience of readers.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-accent text-white"
                  >
                    <Link to="/profile">Sell Books</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-12 bg-muted/40">
        <div className="container space-y-24">
          {/* About Us */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <Users className="text-primary w-8 h-8" />
                <h2 className="text-3xl font-bold">Who We Are</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-4">
                At <span className="font-semibold">BookXChange</span>, we’re
                passionate about connecting readers with the stories they love.
                Our mission is to make books more accessible while empowering
                independent sellers.
              </p>
              <p className="text-muted-foreground text-lg">
                From students to book collectors, we serve everyone who believes
                in the power of reading.
              </p>
              <div className="flex justify-start mt-6">
                <Button className="bg-gradient-primary hover:bg-gradient-primary/80 min-w-[150px] text-sm md:text-base">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <img
              src="./images/about.webp"
              alt="About BookXChange"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Sell & Grow */}
          <div className="space-y-6">
            <div className="flex items-center mb-2 space-x-2">
              <Package className="text-primary w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wide text-primary">
                For Sellers
              </span>
            </div>
            <h2 className="text-3xl font-bold">Sell & Grow with BookXChange</h2>
            <p className="text-muted-foreground text-lg">
              List your books, connect with readers, and expand your reach with
              our easy tools.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {sellGrowFeatures.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white shadow p-5 rounded-xl flex space-x-4 items-start"
                  >
                    <Icon className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
              <Button
                asChild
                className="bg-gradient-primary hover:bg-gradient-primary/80 min-w-[150px] text-sm md:text-base"
              >
                <Link to="/start-selling">Start Selling</Link>
              </Button>
              <Button
                asChild
                className="bg-accent hover:bg-accent/80 min-w-[150px] text-sm md:text-base"
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>

          {/* Support & Resources */}
          <div className="relative bg-muted/30 rounded-xl py-6 space-y-6">
            <div className="flex items-center mb-2 space-x-2">
              <HelpingHand className="text-primary w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wide text-primary">
                Help at Every Step
              </span>
            </div>
            <h2 className="text-3xl font-bold">Reader & Seller Support</h2>
            <p className="text-muted-foreground text-lg">
              Whether you’re buying your first book or selling your collection,
              we’re here to support you.
            </p>

            <div className="space-y-6 mt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-2 rounded-full">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">
                    24/7 Dedicated Support
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Call, chat, or email — our team is always here to help.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-2 rounded-full">
                  <BookOpenCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">
                    Knowledge Hub
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Access guides, FAQs, and tips to make the most out of
                    BookXChange.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background border-l-4 border-primary p-4 mt-8 rounded-md shadow-sm">
              <p className="italic text-muted-foreground text-sm">
                “I sold my old collection easily and connected with readers who
                truly valued them.” —{" "}
                <span className="font-semibold">Ravi, Seller from Delhi</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">
              <Button
                asChild
                className="bg-gradient-primary hover:bg-gradient-primary/80 min-w-[150px] text-sm md:text-base"
              >
                <Link to="/support">Get Support</Link>
              </Button>
              <Button
                asChild
                className="bg-accent hover:bg-accent/80 min-w-[150px] text-sm md:text-base"
              >
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
