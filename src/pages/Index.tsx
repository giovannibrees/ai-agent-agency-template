import { useState } from "react";
import { SplineSceneBasic } from "@/components/ui/code.demo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainFeatures } from "@/components/sections/MainFeatures";
import { Section } from "@/components/layout/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { StepCard } from "@/components/cards/StepCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { 
  ArrowRight, 
  Sparkles, 
  Rocket, 
  Clock, 
  MessageCircle, 
  Zap, 
  Target, 
  Users, 
  Calendar,
  FileText,
  Mail,
  Receipt,
  BellRing,
  LineChart
} from "lucide-react";
import { fadeUpVariants } from "@/utils/animations";

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("Get Started Free");

  const openContactForm = (title = "Get Started Free") => {
    setFormTitle(title);
    setIsContactFormOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">
      <Header />
      <div className="relative z-10 flex-grow">
        <main className="w-full">
          {/* Hide the 3D robot scene on mobile devices */}
          <div className="hidden sm:block">
            <SplineSceneBasic />
          </div>
          
          {/* What Is an AI Agent Section */}
          <Section className="section-gradient pt-20 md:pt-36">
            <div className="max-w-4xl mx-auto px-4">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-center gradient-text"
              >
                What Is an AI Agent?
              </motion.h2>
              <motion.p
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-white/90 text-center mb-8 md:mb-12 leading-relaxed"
              >
                An AI Agent is like a virtual employee that automates tasks you don't have time for—without needing a salary, breaks, or training.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <FeatureCard
                  icon={MessageCircle}
                  title="Lead Follow-Up"
                  description="Follow up with leads instantly via email, chat, and SMS"
                />
                <FeatureCard
                  icon={Clock}
                  title="Payment Tracking"
                  description="Track and remind customers about late payments automatically"
                />
                <FeatureCard
                  icon={Sparkles}
                  title="Social Media"
                  description="Post and schedule content on social media without manual effort"
                />
                <FeatureCard
                  icon={Users}
                  title="Customer Support"
                  description="Answer customer questions and improve response times"
                />
              </div>
              <div className="text-center mt-8 md:mt-12">
                <Button 
                  size="lg"
                  className="button-gradient text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto"
                  onClick={() => openContactForm("Book Your Free Call")}
                >
                  Let's Talk – Book Your Free Call
                  <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </div>
            </div>
          </Section>

          <MainFeatures />

          {/* Why Your Business Needs AI Section */}
          <Section className="section-gradient py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center gradient-text"
              >
                Why Your Business Needs AI Right Now
              </motion.h2>
              <motion.p 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-2xl text-white/90 text-center mb-16 leading-relaxed"
              >
                Every day you're losing time, leads, and revenue on tasks that AI could handle.
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {[
                  {
                    icon: Target,
                    title: "Close 30% more deals",
                    description: "AI follows up before leads go cold"
                  },
                  {
                    icon: Clock,
                    title: "Reduce unpaid invoices",
                    description: "AI reminders mean faster payments"
                  },
                  {
                    icon: Zap,
                    title: "Save 10+ hours per week",
                    description: "AI handles admin while you focus on growth"
                  },
                  {
                    icon: Rocket,
                    title: "Scale without hiring",
                    description: "AI runs in the background, 24/7"
                  }
                ].map((feature, i) => (
                  <FeatureCard
                    key={i}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              <div className="text-center">
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  AI isn't just for big corporations. Small and mid-sized businesses are using it to grow faster and stay ahead.
                </p>
                <Button 
                  size="lg"
                  className="button-gradient text-lg px-8 py-6"
                  onClick={() => openContactForm("Book a Free Call")}
                >
                  See AI in Action – Book a Free Call
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>
          </Section>

          {/* How It Works Section */}
          <Section className="section-gradient py-24">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-4xl font-bold mb-16 text-center gradient-text"
              >
                How It Works
              </motion.h2>
              <div className="space-y-12">
                <StepCard
                  number="1️⃣"
                  title="Tell Us Your Biggest Bottleneck"
                  description="Leads slipping through the cracks? Slow payments? Too much admin? We'll find the right AI Agent for you."
                />
                <StepCard
                  number="2️⃣"
                  title="Plug It In & Let AI Do the Work"
                  description="Our AI Agents are ready to go. No coding. No complicated setup. Just instant automation."
                />
                <StepCard
                  number="3️⃣"
                  title="Watch Your Business Run on Autopilot"
                  description="More leads. More revenue. Less work. You focus on growth—AI handles the rest."
                />
              </div>
              <div className="text-center mt-16">
                <Button 
                  size="lg"
                  className="button-gradient text-lg px-8 py-6"
                  onClick={() => openContactForm("Let's Talk About Your AI Solution")}
                >
                  Find Your AI Solution – Let's Talk
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>
          </Section>

          {/* What Can an AI Agent Do Section */}
          <Section className="section-gradient py-24">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-4xl font-bold mb-16 text-center gradient-text"
              >
                What Can an AI Agent Do for You?
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <FeatureCard
                  icon={MessageCircle}
                  title="Lead Follow-Up"
                  description="AI contacts leads instantly, increasing your chances of closing deals."
                />
                <FeatureCard
                  icon={Sparkles}
                  title="Social Media Management"
                  description="AI writes and posts for you, keeping your brand active while you focus on business."
                />
                <FeatureCard
                  icon={Clock}
                  title="Payment Reminders"
                  description="AI chases overdue invoices and reminds customers to pay on time."
                />
                <FeatureCard
                  icon={Users}
                  title="Customer Support"
                  description="AI handles FAQs and customer requests 24/7, freeing up your team."
                />
                <FeatureCard
                  icon={Calendar}
                  title="Meeting Scheduling"
                  description="AI manages your calendar, schedules meetings, and sends reminders automatically."
                />
                <FeatureCard
                  icon={FileText}
                  title="Document Processing"
                  description="AI extracts data from invoices, contracts, and forms, saving hours of manual work."
                />
                <FeatureCard
                  icon={Mail}
                  title="Email Management"
                  description="AI sorts, prioritizes, and drafts responses to emails based on your preferences."
                />
                <FeatureCard
                  icon={Receipt}
                  title="Expense Tracking"
                  description="AI categorizes expenses, flags irregularities, and prepares expense reports."
                />
                <FeatureCard
                  icon={BellRing}
                  title="Market Monitoring"
                  description="AI tracks competitors, industry news, and trends, keeping you informed."
                />
                <FeatureCard
                  icon={LineChart}
                  title="Performance Analytics"
                  description="AI analyzes your business data and provides actionable insights."
                />
              </div>
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="business-card p-12 rounded-2xl text-center mb-16"
              >
                <h3 className="text-2xl font-semibold text-gradient-blue mb-6">And Much More...</h3>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Every business is unique. Our AI agents can be customized to automate your specific workflows and challenges.
                </p>
                <Button 
                  size="lg"
                  className="button-gradient text-lg px-8 py-6"
                  onClick={() => openContactForm("Custom Solution Inquiry")}
                >
                  Contact Us for a Custom Solution
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </motion.div>
            </div>
          </Section>

          {/* Testimonials Section */}
          <Section className="section-gradient py-24">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-4xl font-bold mb-16 text-center gradient-text"
              >
                Real Businesses. Real Results.
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <TestimonialCard
                  quote="Before AI, we lost leads constantly. Now, AI follows up instantly, and our sales increased by 30%."
                  author="James W."
                  role="SaaS Founder"
                />
                <TestimonialCard
                  quote="We used to waste hours chasing invoices. AI sends reminders for us, and late payments dropped by 50%."
                  author="Lisa M."
                  role="E-Commerce CEO"
                />
                <TestimonialCard
                  quote="Posting on social media felt impossible. AI now handles it daily—our engagement doubled overnight."
                  author="Tom R."
                  role="Marketing Director"
                />
              </div>
            </div>
          </Section>

          {/* Why Now Section */}
          <Section className="section-gradient py-24">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-4xl font-bold mb-8 text-center gradient-text"
              >
                Why Now? AI Adoption Is Exploding.
              </motion.h2>
              <p className="text-2xl text-white/90 text-center mb-16 leading-relaxed">
                Businesses that automate now gain a massive advantage over those still doing things manually.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: Rocket,
                    title: "Demand is skyrocketing",
                    description: "Early adopters are scaling fast."
                  },
                  {
                    icon: Target,
                    title: "Best solutions are underpriced",
                    description: "Costs will go up."
                  },
                  {
                    icon: Zap,
                    title: "Competitors are exploring",
                    description: "Don't wait until you're playing catch-up."
                  }
                ].map((feature, i) => (
                  <FeatureCard
                    key={i}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </Section>

          {/* Final CTA Section */}
          <Section className="py-16 md:py-32">
            <div className="max-w-3xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 md:p-16 rounded-2xl md:rounded-[32px] bg-[#0A0A16] border border-white/[0.05]"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center gradient-text">
                  Limited Spots Available
                </h2>
                <div className="space-y-6 md:space-y-8">
                  <p className="text-lg md:text-xl text-white/90 text-center leading-relaxed">
                    We work one-on-one with businesses to deploy the right AI solution. Spots are limited.
                  </p>
                  <p className="text-lg md:text-xl text-white/90 text-center leading-relaxed">
                    Let's talk and see if AI is right for your business. No pressure. Just solutions.
                  </p>
                  <p className="text-lg md:text-xl text-white/90 text-center leading-relaxed">
                    Grab your free AI consultation before slots fill up.
                  </p>
                </div>
                <div className="text-center mt-8 md:mt-16">
                  <Button 
                    size="lg"
                    className="button-gradient text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto"
                    onClick={() => openContactForm("Book Your Spot Now")}
                  >
                    Claim Your Spot – Book Now
                    <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </Section>
        </main>
      </div>
      <Footer />
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
        title={formTitle}
      />
    </div>
  );
};

export default Index;
