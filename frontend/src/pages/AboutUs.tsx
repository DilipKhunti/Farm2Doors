import { BookOpen, Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="container py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent h-20">
          About BookXChange
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          BookXChange is your trusted marketplace to buy and sell books online. 
          Whether you’re a reader searching for your next favorite book or a seller looking to share knowledge, 
          we make the process simple, safe, and convenient.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground text-center lg">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            BookXChange was created to bring readers and sellers together on one platform. 
            We aim to make books accessible, affordable, and available to everyone while 
            providing sellers with the right audience for their collections.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our platform is more than just a bookstore—it’s a community of book lovers 
            who believe in sharing stories, knowledge, and learning opportunities across the globe.
          </p>
        </div>
        <div className="flex justify-center rounded-lg overflow-hidden ">
          <img src="./images/about.webp" alt="about books" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Values */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Making books affordable and accessible for everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Community</h3>
              <p className="text-sm text-muted-foreground">
                Bringing together readers, authors, and sellers in one place.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Knowledge Sharing</h3>
              <p className="text-sm text-muted-foreground">
                Encouraging the spread of knowledge through books.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Ensuring that every book listed meets our quality standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          BookXChange is built by a passionate team of readers, tech enthusiasts, 
          and knowledge seekers who believe in the power of books to change lives.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
