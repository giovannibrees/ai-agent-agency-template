
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">
      <Header />
      <div className="relative z-10 flex-grow">
        <main className="w-full">
          <Section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center gradient-text">Privacy Policy</h1>
              <div className="bg-black/30 p-6 md:p-10 rounded-xl text-white/80 space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-xl md:text-2xl font-semibold text-white">1. Introduction</h2>
                <p>
                  AI EMPIRE ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This Privacy Policy will inform you about how we look after your personal data when you visit our website 
                  and tell you about your privacy rights and how the law protects you.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold text-white">2. Data We Collect</h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identity Data: includes first name, last name, username or similar identifier.</li>
                  <li>Contact Data: includes email address and telephone numbers.</li>
                  <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                  <li>Usage Data: includes information about how you use our website and services.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-white">3. How We Use Your Data</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide you with our AI services.</li>
                  <li>To respond to your inquiries and provide customer support.</li>
                  <li>To improve our website and services.</li>
                  <li>To send you marketing communications (if you have opted in).</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-white">4. Data Security</h2>
                <p>
                  We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, 
                  or accessed in an unauthorized way. We limit access to your personal data to those employees, contractors and other 
                  third parties who have a business need to know.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold text-white">5. Your Legal Rights</h2>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to request access to your personal data.</li>
                  <li>The right to request correction of your personal data.</li>
                  <li>The right to request erasure of your personal data.</li>
                  <li>The right to object to processing of your personal data.</li>
                  <li>The right to request restriction of processing your personal data.</li>
                  <li>The right to request transfer of your personal data.</li>
                  <li>The right to withdraw consent.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-white">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p className="font-semibold mt-2">Email: privacy@aiempire.com</p>
              </div>
            </div>
          </Section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
