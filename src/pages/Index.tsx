
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
import { ArrowRight, Sparkles, Rocket, Clock, MessageCircle, Zap, Target, Users } from "lucide-react";
import { fadeUpVariants } from "@/components/animation/variants";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] flex flex-col">
      <Header />
      <div className="relative z-10 flex-grow">
        <main className="w-full">
          <SplineSceneBasic />
          <MainFeatures />

          {/* What Is an AI Agent Section */}
          <Section className="bg-gradient-to-b from-[#0A0A0A]/90 to-[#0A0A0A]/95">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 gradient-text">What Is an AI Agent?</h2>
                <p className="text-xl text-[#E5E7EB] leading-relaxed">
                  An AI Agent is like a virtual employee that automates tasks you don't have time for—without needing a salary, breaks, or training.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
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
              <div className="text-center mt-12">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                >
                  Let's Talk – Book Your Free Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Section>

          {/* Why Your Business Needs AI Section */}
          <Section className="bg-gradient-to-b from-[#0A0A0A]/95 to-[#0A0A0A]/90">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6 text-center"
              >
                Why Your Business Needs AI Right Now
              </motion.h2>
              <motion.p 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl text-white/80 text-center mb-12"
              >
                Every day you're losing time, leads, and revenue on tasks that AI could handle.
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                <p className="text-white/80 mb-8">
                  AI isn't just for big corporations. Small and mid-sized businesses are using it to grow faster and stay ahead.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                >
                  See AI in Action – Book a Free Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Section>

          {/* How It Works Section */}
          <Section className="bg-black/90">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center"
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
              <div className="text-center mt-12">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                >
                  Find Your AI Solution – Let's Talk
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
