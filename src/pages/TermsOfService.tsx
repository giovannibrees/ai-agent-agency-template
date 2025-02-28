
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";

const TermsOfService = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">
      <Header />
      <div className="relative z-10 flex-grow">
        <main className="w-full">
          <Section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center gradient-text">Terms of Service</h1>
              <div className="bg-black/30 p-6 md:p-10 rounded-xl text-white/80 space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-xl md:text-2xl font-semibold text-white">1. Introduction</h2>
                <p>
                  Welcome to AI EMPIRE. These Terms of Service govern your use of our website and services. 
                  By accessing or using our services, you agree to be bound by these Terms of Service.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold text-white">2. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"Service" refers to the AI EMPIRE website and all services provided by AI EMPIRE.</li>
                  <li>"User," "You," and "Your" refers to the individual or entity using our Service.</li>
                  <li>"We," "Us," and "Our" refers to AI EMPIRE.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-white">3. Use of Service</h2>
                <p>
                  Our Service is designed to provide AI solutions for businesses. You agree to use our Service only for 
                  lawful purposes and in accordance with these Terms of Service. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Service in any way that violates any applicable law or regulation.</li>
                  <li>Use the Service to send, upload, or distribute any virus, spyware, or other malicious code.</li>
                  <li>Attempt to gain unauthorized access to any portion of the Service.</li>
                  <li>Use the Service for any purpose that is harmful, threatening, or abusive.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-white">4. Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and functionality are owned by AI EMPIRE and are protected by 
                  international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold text-white">5. Limitation of Liability</h2>
                <p>
                  In no event shall AI EMPIRE be liable for any indirect, incidental, special, consequential or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to or use of or inability to access or use the Service.</li>
                  <li>Any conduct or content of any third party on the Service.</li>
                  <li>Any content obtained from the Service.</li>
                  <li>Unauthorized access, use or alteration of your transmissions or content.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-white">6. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms of Service at any time. It is your responsibility to review 
                  these Terms of Service periodically for changes. Your continued use of the Service following the posting of any 
                  changes to these Terms of Service constitutes acceptance of those changes.
                </p>

                <h2 className="text-xl md:text-2xl font-semibold text-white">7. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="font-semibold mt-2">Email: terms@aiempire.com</p>
              </div>
            </div>
          </Section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
