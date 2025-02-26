
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Rocket, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 * i,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`py-24 ${className}`}>
    <div className="container mx-auto px-4 max-w-6xl">{children}</div>
  </div>
);

const TestimonialCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
  <motion.div 
    variants={fadeUpVariants}
    className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
  >
    <p className="text-white/80 mb-4">{quote}</p>
    <div className="text-white/60">
      <p className="font-semibold">{author}</p>
      <p className="text-sm">{role}</p>
    </div>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    variants={fadeUpVariants}
    className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
  >
    <Icon className="w-10 h-10 text-indigo-400 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/60">{description}</p>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroGeometric 
        badge="AI Automation"
        title1="AI That Works"
        title2="for You"
      />

      {/* Main Value Proposition */}
      <Section className="bg-black/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Your Own AI Assistant to Handle Leads, Payments & Social Media – 24/7
          </h2>
          <div className="space-y-4 mb-8">
            {[
              "Follow up with leads automatically – never miss a sale",
              "Get paid faster – AI sends reminders for overdue invoices",
              "Post to social media without lifting a finger – stay visible effortlessly"
            ].map((text, i) => (
              <motion.div 
                key={i}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                className="flex items-center gap-3 text-lg text-white/80"
              >
                <CheckCircle2 className="text-green-400 w-6 h-6 flex-shrink-0" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          >
            Get a Free AI Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </Section>

      {/* What Is an AI Agent */}
      <Section className="bg-gradient-to-b from-black/90 to-black/95">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-center"
          >
            What Is an AI Agent?
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-12 text-center"
          >
            An AI Agent is like a virtual employee that automates tasks you don't have time for—without needing a salary, breaks, or training.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
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
              icon={Rocket}
              title="Customer Support"
              description="Answer customer questions and improve response times"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-black/95">
        <h2 className="text-3xl font-bold mb-12 text-center">Real Businesses. Real Results.</h2>
        <div className="grid md:grid-cols-3 gap-6">
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
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-t from-black to-black/90">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/[0.05]"
          >
            <h2 className="text-3xl font-bold mb-4">📍 Limited Spots Available</h2>
            <p className="text-white/80 mb-8">
              We work one-on-one with businesses to deploy the right AI solution. Spots are limited.
              Let's talk and see if AI is right for your business. No pressure. Just solutions.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
            >
              Claim Your Spot – Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Index;
