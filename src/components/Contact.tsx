import { Mail, PhoneCall, Linkedin, Github, MapPin } from 'lucide-react';
import RevealAnimation from './RevealAnimation';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-secondary/30 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation>
            <h2 className="section-title">Get In Touch</h2>
          </RevealAnimation>
          <RevealAnimation delay={100}>
            <p className="section-subtitle mx-auto">
              Feel free to reach out for collaboration, opportunities, or just to say hello.
            </p>
          </RevealAnimation>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <RevealAnimation direction="left">
            <div className="glass-panel p-8 h-full">
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:abhishek.bijalwan@example.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      abhishekbijalwan45@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+918439545891" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 (843) 954-5891
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                     Rishikesh, Uttarakhand, India
                    </p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="font-medium mb-3">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/abhishek-bijalwan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-xl text-primary hover:bg-primary/20 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://github.com/abhishek-bijalwan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary/10 p-3 rounded-xl text-primary hover:bg-primary/20 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          
          <RevealAnimation direction="right">
            <div className="glass-panel p-8 h-full">
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-8">
                Send a Message
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/70 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
