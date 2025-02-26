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
import { fadeUpVariants } from "@/utils/animations";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">
      <Header />
      <div className="relative z-10 flex-grow">
        <main className="w-full">
          <SplineSceneBasic />
          
          {/* What Is an AI Agent Section - Moved up and reduced spacing */}
          <Section className="bg-gradient-to-b from-black/90 to-black/95 -mt-24">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4 text-center"
              >
                What Is an AI Agent?
              </motion.h2>
              <motion.p
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl text-white/80 text-center mb-8"
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
                  icon={Users}
                  title="Customer Support"
                  description="Answer customer questions and improve response times"
                />
              </div>
              <div className="text-center mt-8">
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

          <MainFeatures />

          {/* Why Your Business Needs AI Section */}
          <Section className="bg-gradient-to-b from-black/95 to-black/90">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-3xl font-bold mb-6 text-center"
              >
                Why Your Business Needs AI Right Now
              </motion.h2>
              <motion.p 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
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

          {/* What Can an AI Agent Do Section */}
          <Section className="bg-gradient-to-b from-black/90 to-black/95">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-3xl font-bold mb-12 text-center"
              >
                What Can an AI Agent Do for You?
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
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
              </div>
              <div className="text-center">
                <p className="text-xl text-white/80 mb-8">
                  💡 Not sure what to automate? Let's discuss your business and find the best AI Agent for you.
                </p>
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

          {/* Testimonials Section */}
          <Section className="bg-black/95">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-3xl font-bold mb-12 text-center"
              >
                Real Businesses. Real Results.
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
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
              <div className="text-center">
                <p className="text-xl text-white/80 mb-8">Want to see what AI can do for you?</p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                >
                  Get a Free AI Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Section>

          {/* Why Now Section */}
          <Section className="bg-gradient-to-b from-black/95 to-black/90">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                className="text-3xl font-bold mb-8 text-center"
              >
                Why Now? AI Adoption Is Exploding.
              </motion.h2>
              <p className="text-xl text-white/80 text-center mb-12">
                Businesses that automate now gain a massive advantage over those still doing things manually.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
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
              <div className="text-center">
                <p className="text-white/80 mb-8">
                  This is your chance to automate, scale, and dominate your industry.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                >
                  Let's Talk – Get Your AI Strategy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Section>

          {/* Final CTA Section */}
          <Section className="bg-gradient-to-t from-black to-black/90">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-12 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/[0.05]"
              >
                <h2 className="text-3xl font-bold mb-6 text-center">📍 Limited Spots Available</h2>
                <p className="text-white/80 text-center mb-8">
                  We work one-on-one with businesses to deploy the right AI solution. Spots are limited.<br /><br />
                  💡 Let's talk and see if AI is right for your business. No pressure. Just solutions.<br /><br />
                  ⚡ Grab your free AI consultation before slots fill up.
                </p>
                <div className="text-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                  >
                    Claim Your Spot – Book Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </Section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
