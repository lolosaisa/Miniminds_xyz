"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Code, FlaskRoundIcon as Flask, LineChart, Microscope, Star, Trophy, Users, School, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateDashboardTransform = () => {
    if (!heroRef.current) return {};

    const heroHeight = heroRef.current.offsetHeight;
    const scrollProgress = Math.min(scrollY / heroHeight, 1);

    return {
      transform: `translateY(${scrollProgress * -30}px)`,
      opacity: 1 - scrollProgress * 0.3,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-purple-900 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl">
              MiniMinds<span className="text-orange-500">Learning</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
            <Link href="#features" className="font-medium transition-colors hover:text-orange-500">
              Features
            </Link>
            <Link href="#how-it-works" className="font-medium transition-colors hover:text-orange-500">
              How It Works
            </Link>
            <Link href="#join" className="font-medium transition-colors hover:text-orange-500">
              Join
            </Link>
            <Link href="#faq" className="font-medium transition-colors hover:text-orange-500">
              FAQ
            </Link>
          </nav>

          <Button asChild className="bg-orange-500 text-white hover:bg-orange-500/90 cursor-pointer text-sm py-1 px-3 sm:px-4">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-purple-900 text-white py-12 sm:py-16 flex-grow flex items-center" ref={heroRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            Welcome to MiniMinds! 🎉
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-200 max-w-xl sm:max-w-2xl">
            Join our magical learning adventure! 🚀 Explore exciting lessons in math, science, and coding while earning rewards along the way!
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" asChild className="bg-orange-500 text-white hover:bg-orange-500/90 cursor-pointer text-sm sm:text-base">
              <Link href="/signup">Start Learning</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 cursor-pointer text-sm sm:text-base">
              <Link href="/signup">Become a Teacher</Link>
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mx-auto mt-8 sm:mt-12 max-w-full sm:max-w-4xl lg:max-w-5xl" style={calculateDashboardTransform()}>
            <div className="relative rounded-t-xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="bg-purple-700 text-white p-2 sm:p-3 flex items-center gap-2">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs sm:text-sm ml-2">MiniMinds Learning Dashboard</div>
              </div>
              <div className="bg-white">
                <img src="/placeholder.svg?height=300&width=600" alt="MiniMinds Dashboard" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 text-orange-500">
          <BookOpen className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-10 sm:w-12 h-10 sm:h-12 text-yellow-400">
          <Flask className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 right-4 sm:right-10 w-12 sm:w-14 h-12 sm:h-14 text-blue-300">
          <Code className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 sm:bottom-40 right-1/4 w-8 sm:w-10 h-8 sm:h-10 text-cyan-300">
          <LineChart className="w-full h-full" />
        </div>
      </section>

      {/* Why Kids Love MiniMinds */}
      <section id="features" className="py-12 sm:py-20 bg-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Why Kids Love MiniMinds ❤️</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
              Discover why children everywhere are excited to learn with our platform!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Interactive Learning",
                description: "Engaging activities and games make learning fun and exciting for kids of all ages.",
                icon: <Microscope className="h-8 sm:h-10 w-8 sm:w-10 text-orange-500" />,
              },
              {
                title: "Social Collaboration",
                description: "Connect with friends and learn together in a safe, supportive environment.",
                icon: <Users className="h-8 sm:h-10 w-8 sm:w-10 text-orange-500" />,
              },
              {
                title: "Personalized Experience",
                description: "Content adapts to your child's unique learning style and pace.",
                icon: <Heart className="h-8 sm:h-10 w-8 sm:w-10 text-orange-500" />,
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6 bg-purple-50 rounded-xl">
                <div className="mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                <Button variant="link" asChild className="mt-3 sm:mt-4 text-orange-500 hover:text-orange-600 cursor-pointer text-sm sm:text-base">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What MiniMinds Does */}
      <section id="how-it-works" className="py-12 sm:py-20 bg-purple-50 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">What MiniMinds Does 🚀</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
              A journey through impact for institutions, teachers, students, and parents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Institutions",
                description: "Register your school, add streams, assign teachers, and view real-time dashboards.",
                icon: <School className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />,
                cta: "Partner Now",
                link: "/institutions/register",
              },
              {
                title: "Teachers",
                description: "Manage classrooms, assign tasks, and get AI-powered support for engaging lessons.",
                icon: <BookOpen className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />,
                cta: "Join as Teacher",
                link: "/signup",
              },
              {
                title: "Students",
                description: "Access lessons, track progress, earn badges, and get personalized suggestions.",
                icon: <Star className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />,
                cta: "Start Learning",
                link: "/signup",
              },
              {
                title: "Parents",
                description: "View real-time reports, receive alerts, and engage with your child’s learning.",
                icon: <Users className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />,
                cta: "Get Started",
                link: "/signup",
              },
            ].map((role, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
                <div className="mb-3 sm:mb-4">{role.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{role.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{role.description}</p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-sm sm:text-base">
                  <Link href={role.link}>{role.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Features */}
      <section className="py-12 sm:py-20 bg-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Explore Our Features ✨</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
              Discover how MiniMinds is revolutionizing education through innovative features!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Decentralization",
                description: "Tutors control content; students access transparent, personalized materials.",
                icon: <Code className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500" />,
              },
              {
                title: "Personalized Learning",
                description: "Tailored plans based on each child’s strengths and improvement areas.",
                icon: <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500" />,
              },
              {
                title: "Token-Based Rewards",
                description: "Earn tokens for efforts, redeemable for education or community contributions.",
                icon: <Trophy className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500" />,
              },
              {
                title: "Crowdfunding for Schools",
                description: "Raise funds for gadgets and infrastructure in rural schools.",
                icon: <School className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500" />,
              },
              {
                title: "Progress Tracking",
                description: "Detailed reports and dashboards for teachers and parents.",
                icon: <LineChart className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500" />,
              },
              {
                title: "Peer-to-Peer Learning",
                description: "Collaborate and learn in a supportive community-driven environment.",
                icon: <Users className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500" />,
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6">
                <div className="mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Learning Journey */}
      <section id="join" className="py-12 sm:py-20 bg-purple-100 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Start Your Learning Journey Today! 🎯</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
              Choose your path and begin your learning adventure with MiniMinds!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Students Start Here! 📚",
                description: "Jump into exciting lessons, earn rewards, and learn with friends!",
                cta: "Start Learning",
                link: "/signup",
              },
              {
                title: "Teachers Start Here! 🎓",
                description: "Create engaging lessons, track progress, and inspire young minds.",
                cta: "Join as Teacher",
                link: "/signup",
              },
              {
                title: "Institutions Start Here! 🏫",
                description: "Partner to bring innovative learning solutions to your organization.",
                cta: "Partner Now",
                link: "/institutions/register",
              },
            ].map((path, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{path.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{path.description}</p>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-sm sm:text-base">
                  <Link href={path.link}>{path.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Us Make Learning Fun */}
      <section className="py-12 sm:py-20 bg-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Help Us Make Learning Fun! 🌟</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
              Your support helps us create magical learning experiences for children worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Support Education",
                description: "Help us create more interactive lessons and learning materials.",
                cta: "Donate Now",
                link: "/donate",
              },
              {
                title: "Sponsor a School",
                description: "Partner with us to bring MiniMinds to schools in need.",
                cta: "Sponsor Now",
                link: "/donate",
              },
              {
                title: "Fund Scholarships",
                description: "Help talented students access premium educational content.",
                cta: "Fund Now",
                link: "/donate",
              },
            ].map((support, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6 bg-purple-50 rounded-xl">
                <h3 className="text-base sm:text-lg font-bold mb-2">{support.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{support.description}</p>
                <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 cursor-pointer text-sm sm:text-base">
                  <Link href={support.link}>{support.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 sm:py-20 bg-purple-50 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
              Got questions? We’ve got answers! Here are some common questions about MiniMinds.
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-full sm:max-w-3xl mx-auto">
            {[
              { q: "What age groups is MiniMinds suitable for?", a: "MiniMinds is designed for children aged 6-18, with content tailored to different age groups." },
              { q: "How does the AI-powered learning work?", a: "Our AI analyzes student performance to provide personalized lesson recommendations and adaptive challenges." },
              { q: "What subjects are available on MiniMinds?", a: "We offer math, science, coding, and more, with expanding subject areas." },
              { q: "How does the reward system work?", a: "Students earn tokens for completing lessons and tasks, redeemable for educational content or community perks." },
              { q: "Is MiniMinds safe for children?", a: "Yes, we prioritize safety with secure logins, moderated content, and parental controls." },
              { q: "Can MiniMinds be used by parents who homeschool?", a: "Absolutely! Parents can access curricula, track progress, and customize learning plans." },
              { q: "Do I need internet access to use MiniMinds?", a: "An internet connection is required for most features, but some offline activities are available." },
              { q: "Can I track my child’s progress as a parent?", a: "Yes, parents get real-time reports and alerts via a dedicated dashboard." },
              { q: "How do institutions integrate with MiniMinds?", a: "Schools register to manage streams, assign teachers, and access analytics dashboards." },
              { q: "Can teachers join without an institution?", a: "Yes, independent teachers can sign up and create classrooms." },
              { q: "How does MiniMinds ensure transparency for donors?", a: "Donations are tracked on a blockchain, with public reports on fund usage." },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm sm:text-base">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div classvlaname="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg sm:text-xl">
                  MiniMinds<span className="text-orange-500">Learning</span>
                </span>
              </div>
              <div className="mb-4 sm:mb-6">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Subscribe to our newsletter</h3>
                <div className="flex gap-2 max-w-xs">
                  <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white text-sm" />
                  <Button size="icon" className="bg-orange-500 text-white hover:bg-orange-500/90 cursor-pointer">
                    →
                  </Button>
                </div>
              </div>
              <Button asChild variant="link" className="text-orange-500 hover:text-orange-400 cursor-pointer text-sm sm:text-base">
                <Link href="/institutions/register">Are you a school or institution? Partner with us →</Link>
              </Button>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Community</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><Link href="/login" className="hover:text-orange-500">Sign In</Link></li>
                <li><Link href="/signup" className="hover:text-orange-500">Create Account</Link></li>
                <li><Link href="/donate" className="hover:text-orange-500">Support Education</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Features</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><Link href="#features" className="hover:text-orange-500">Personalized Learning</Link></li>
                <li><Link href="#features" className="hover:text-orange-500">Token Rewards</Link></li>
                <li><Link href="#features" className="hover:text-orange-500">Progress Tracking</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><Link href="#faq" className="hover:text-orange-500">FAQs</Link></li>
                <li><Link href="/contact" className="hover:text-orange-500">Contact Us</Link></li>
                <li><Link href="/about" className="hover:text-orange-500">About MiniMinds</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-gray-700">
            <p className="text-xs sm:text-sm text-gray-400">© All rights reserved MiniMinds 2025</p>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 sm:h-6 w-5 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">X</span>
                <svg className="h-5 sm:h-6 w-5 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6823 10.6218ZM11.5542 13.0956L10.8578 12.0991L5.31391 4.16975H7.70053L12.1742 10.5689L12.8706 11.5655L18.6861 19.8835H16.2995L11.5542 13.0956Z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 sm:h-6 w-5 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <particulars
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}