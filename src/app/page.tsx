'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CalendarDays, Users, BarChart3, Zap } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export function AuthStatus() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (isSignedIn) {
    return (
      <div className="flex items-center gap-4">
        <span>Welcome, {user.firstName || user.emailAddresses[0]?.emailAddress}</span>
        <UserButton afterSignOutUrl="/" />
      </div>
    )
  }
  return (
    <div className="flex items-center gap-4">
      <SignInButton mode="modal">
        <Button variant="outline">Sign In</Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button>Sign Up</Button>
      </SignUpButton>
    </div>
  )
}

const features = [
  {
    title: "Event Management",
    description: "Create and manage events with ease. Track attendance, location, and capacity.",
    icon: CalendarDays
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights into event performance and attendance rates.",
    icon: BarChart3
  },
  {
    title: "User Engagement",
    description: "Connect with attendees through real-time notifications and updates.",
    icon: Users
  },
  {
    title: "Live Updates",
    description: "Stay informed with real-time attendance tracking and instant notifications.",
    icon: Zap
  }
];

export default function LandingPage() {
  const { isSignedIn } = useUser();
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute right-4 top-4 z-50">
        <ThemeToggle />
      </div>
      <div className="absolute left-4 top-4 z-50">
        <AuthStatus />
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Event Management Dashboard
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              A powerful platform for creating, managing, and analyzing events in real-time.
              Streamline your event operations with our comprehensive dashboard.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              {isSignedIn ? (
                <Button size="lg" onClick={() => window.location.href = "/dashboard"}>
                  Go to Dashboard
                </Button>
              ) : (
                <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                  <Button size="lg">Get Started</Button>
                </SignInButton>
              )}
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features for Event Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Analytics Preview Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Real-time Analytics Dashboard
            </h2>
            <p className="text-muted-foreground mb-6">
              Get instant insights into your events' performance. Track attendance,
              monitor engagement, and make data-driven decisions with our comprehensive
              analytics dashboard.
            </p>
            <ul className="space-y-4">
              {[
                "Track attendance rates in real-time",
                "Monitor event registration trends",
                "Analyze user engagement metrics",
                "Generate detailed reports"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Card className="p-6">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <BarChart3 className="w-24 h-24 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to streamline your event management?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of event organizers who are already using our platform
            to create successful events and engage with their attendees.
          </p>
          <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
            <Button size="lg">Start Free Trial</Button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
}