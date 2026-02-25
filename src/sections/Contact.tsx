import { Link } from 'react-router-dom';
import { Mail, Instagram, ArrowLeft } from 'lucide-react';

export function Contact() {
  
  // ADDED: This function catches the submit, stops the page reload, and sends the data to Netlify silently.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => alert("Message sent successfully! We will be in touch."))
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <div className="min-h-screen bg-forest-dark text-white flex flex-col">
      <nav className="p-6 md:px-12 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-body font-medium">Back to Home</span>
        </Link>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6 md:p-12">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold mb-6 tracking-tight text-balance leading-tight">
              Let's create something <span className="font-serif italic font-normal text-white/80">extraordinary.</span>
            </h1>
            <p className="text-white/60 font-body text-lg mb-12 max-w-md leading-relaxed">
              Whether you need a complete brand overhaul, a new website, or eye-catching graphics, Creatify is ready to bring your vision to life.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:phillipinem@creatifystudios.co.za" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-forest-dark transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-body uppercase tracking-widest mb-1">Email Us</p>
                  <p className="font-sans font-semibold text-lg hover:text-white/80 transition-colors">phillipinem@creatifystudios.co.za</p>
                </div>
              </a>

              <a href="https://www.instagram.com/creatify_za" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-forest-dark transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-body uppercase tracking-widest mb-1">Follow on Instagram</p>
                  <p className="font-sans font-semibold text-lg hover:text-white/80 transition-colors">@creatify_za</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            
            <h2 className="text-2xl font-sans font-bold mb-8 relative z-10">Send us a message</h2>
            
            {/* UPDATED: Added onSubmit={handleSubmit} right here */}
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label className="block text-sm font-body text-white/70 mb-2">Name</label>
                <input type="text" name="name" required placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-body text-white/70 mb-2">Email</label>
                <input type="email" name="email" required placeholder="hello@example.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-body text-white/70 mb-2">Project Details</label>
                <textarea name="message" required placeholder="Tell us about your timeline and goals..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-forest-dark font-sans font-bold py-4 rounded-lg hover:bg-white/90 transition-transform active:scale-[0.98] mt-4">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
