import { MapPin, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UrlShortener } from '@/components/UrlShortener';

function App() {
  const services = [
    {
      title: 'Ice Cream',
      description: 'Delicious ice cream flavors to cool you down on a hot day',
      icon: '/assets/generated/icecream-icon.dim_200x200.png',
    },
    {
      title: 'Xerox & Print Services',
      description: 'Fast and reliable photocopying and printing services',
      icon: '/assets/generated/printer-icon.dim_200x200.png',
    },
    {
      title: 'Stationary',
      description: 'Complete range of stationary items for all your needs',
      icon: '/assets/generated/stationary-icon.dim_200x200.png',
    },
    {
      title: 'Cold Drinks',
      description: 'Refreshing cold drinks and beverages',
      icon: '/assets/generated/drinks-icon.dim_200x200.png',
    },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918250772309', '_blank', 'noopener,noreferrer');
  };

  const handleLocationClick = () => {
    window.open('https://sandhya-stors.grexa.site/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">Sandhya Stors</h1>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            className="gap-2 bg-whatsapp hover:bg-whatsapp-dark"
            size="sm"
          >
            <SiWhatsapp className="h-4 w-4" />
            <span className="hidden sm:inline">Contact Us</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-hero-start to-hero-end">
          <div className="container py-12 md:py-20">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col gap-6">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
                    Welcome to Sandhya Stors
                  </h2>
                  <p className="text-lg text-muted-foreground md:text-xl max-w-[600px]">
                    Your neighborhood one-stop shop for ice cream, printing services, stationary, and refreshing cold drinks.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white"
                  >
                    <SiWhatsapp className="h-5 w-5" />
                    WhatsApp Us
                  </Button>
                  <Button
                    onClick={handleLocationClick}
                    size="lg"
                    variant="outline"
                    className="gap-2"
                  >
                    <MapPin className="h-5 w-5" />
                    View Location
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[3/1] lg:aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/generated/hero-banner.dim_1200x400.png"
                  alt="Sandhya Stors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                Our Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-[700px]">
                We offer a wide range of services to meet all your daily needs
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                >
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex justify-center">
                      <div className="relative h-32 w-32 rounded-xl overflow-hidden bg-accent/50 p-4 group-hover:bg-accent transition-colors">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-center text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* URL Shortener Section */}
        <UrlShortener />

        {/* Contact Section */}
        <section className="w-full py-16 md:py-24 bg-accent/30">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">Get in Touch</CardTitle>
                  <CardDescription className="text-base">
                    Visit us or reach out for any inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Button
                      onClick={handleWhatsAppClick}
                      size="lg"
                      className="gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white h-auto py-4"
                    >
                      <SiWhatsapp className="h-6 w-6" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs opacity-90">WhatsApp</span>
                        <span className="font-semibold">+91 82507 72309</span>
                      </div>
                    </Button>
                    <Button
                      onClick={handleLocationClick}
                      size="lg"
                      variant="outline"
                      className="gap-3 h-auto py-4 border-2"
                    >
                      <MapPin className="h-6 w-6" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-muted-foreground">Location</span>
                        <span className="font-semibold">View on Map</span>
                      </div>
                    </Button>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      We're here to serve you with quality products and friendly service
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border/40 bg-background py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <p className="text-lg font-semibold text-primary">Sandhya Stors</p>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Your trusted neighborhood store
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Sandhya Stors. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Built with <span className="text-red-500">♥</span> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                    typeof window !== 'undefined' ? window.location.hostname : 'sandhya-stors'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
