
export const Footer = () => {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-sm py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60">
            © {new Date().getFullYear()} AI EMPIRE. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
