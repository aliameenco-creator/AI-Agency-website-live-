import { motion } from 'motion/react';
import { ArrowRight, Bot, Zap, BarChart3 } from 'lucide-react';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)] font-sans relative overflow-hidden flex flex-col selection:bg-[var(--color-accent)]/30">
      {/* Background Visual */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none z-[1]"></div>
      
      {/* Navbar */}
      <nav className="w-full z-40 px-6 md:px-16 py-10 flex items-center justify-between relative">
        <div className="flex items-center gap-2 font-[900] text-2xl tracking-[-1px] text-white">
          <div className="w-4 h-4 bg-[var(--color-accent)] rounded-full"></div>
          AETHER AI
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-[12px] uppercase tracking-[2px] font-[600] text-white hover:text-[var(--color-accent)] transition-colors">Services</a>
          <a href="#case-studies" className="text-[12px] uppercase tracking-[2px] font-[600] text-[var(--color-muted)] hover:text-white transition-colors">Case Studies</a>
          <a href="#infrastructure" className="text-[12px] uppercase tracking-[2px] font-[600] text-[var(--color-muted)] hover:text-white transition-colors">Infrastructure</a>
          <a href="#company" className="text-[12px] uppercase tracking-[2px] font-[600] text-[var(--color-muted)] hover:text-white transition-colors">Company</a>
        </div>
        <button className="bg-transparent border border-[var(--color-border)] text-white px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[1px] cursor-pointer hover:bg-white hover:text-black transition-colors font-bold">
          Get Access
        </button>
      </nav>

      <main className="flex-1 flex flex-col self-stretch px-6 md:px-16 relative z-10 w-full max-w-[1400px] mx-auto pb-32">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center min-h-[70vh] py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[14px] text-[var(--color-accent)] uppercase tracking-[4px] font-[700] mb-6"
          >
            Autonomous Intelligence for Enterprise
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[70px] md:text-[130px] font-[800] leading-[0.85] tracking-[-3px] md:tracking-[-6px] uppercase mb-10 text-white"
          >
            SCALABLE<br/>AUTO&shy;MATION
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-10 md:gap-20 items-start"
          >
            <p className="max-w-[400px] text-[18px] text-[var(--color-muted)] leading-[1.5]">
              We design bespoke AI agents that handle complex operational workflows, reducing overhead by up to 85% with zero human intervention.
            </p>
            <button className="bg-white text-black px-12 py-6 font-[800] uppercase tracking-[1px] text-[16px] cursor-pointer flex items-center gap-3 hover:bg-gray-200 transition-colors">
              Deploy Agent <ArrowRight className="w-5 h-5 stroke-[3px]" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex gap-[60px] border-t border-[var(--color-border)] pt-[30px] w-full max-w-[600px] mt-24 text-white"
          >
            <div className="flex flex-col">
              <div className="text-[24px] font-[700] mb-1">2.4ms</div>
              <div className="text-[11px] text-[var(--color-muted)] uppercase tracking-[1px]">Avg Latency</div>
            </div>
            <div className="flex flex-col">
              <div className="text-[24px] font-[700] mb-1">99.9%</div>
              <div className="text-[11px] text-[var(--color-muted)] uppercase tracking-[1px]">Accuracy Rate</div>
            </div>
            <div className="flex flex-col">
              <div className="text-[24px] font-[700] mb-1">140+</div>
              <div className="text-[11px] text-[var(--color-muted)] uppercase tracking-[1px]">API Integrations</div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 border-t border-[var(--color-border)] mt-10 text-white">
          <div className="mb-16 md:mb-24">
            <h2 className="text-[40px] md:text-[80px] font-[800] leading-[0.85] tracking-[-2px] md:tracking-[-4px] uppercase mb-6 text-white">
              INTELLIGENT<br/>SOLUTIONS
            </h2>
            <p className="text-[var(--color-muted)] max-w-xl text-[18px] leading-[1.5]">
              We don't just implement tools; we engineer systems that think, learn, and execute autonomously.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot className="w-6 h-6 text-[var(--color-accent)]" />,
                title: "Custom AI Agents",
                desc: "Intelligent chatbots and virtual assistants trained on your company data to handle customer support and sales 24/7."
              },
              {
                icon: <Zap className="w-6 h-6 text-[#0075FF]" />,
                title: "Workflow Automation",
                desc: "Connect your existing tools and automate repetitive tasks, from lead generation to invoice processing."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-white" />,
                title: "Predictive Analytics",
                desc: "Leverage machine learning to forecast trends, optimize pricing, and make data-driven decisions."
              }
            ].map((service, i) => (
              <div key={i} className="p-8 border border-[var(--color-border)] bg-[var(--color-glass)] hover:bg-[rgba(255,255,255,0.08)] transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-[800] uppercase tracking-[1px] mb-3">{service.title}</h3>
                <p className="text-[13px] text-[var(--color-muted)] leading-[1.5]">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 border-t border-[var(--color-border)] text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[40px] md:text-[80px] font-[800] leading-[0.85] tracking-[-2px] md:tracking-[-4px] uppercase mb-6 text-white">
                HOW WE<br/>WORK
              </h2>
              <p className="text-[var(--color-muted)] text-[18px] mb-12 max-w-[400px] leading-[1.5]">
                A streamlined process designed to deliver ROI from day one. We handle the complexity so you can focus on growth.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Discovery & Audit", desc: "We analyze your current workflows to identify high-impact automation opportunities." },
                  { step: "02", title: "Strategy & Design", desc: "We architect a custom AI solution tailored to your specific business goals." },
                  { step: "03", title: "Implementation", desc: "Seamless integration of AI agents and automated workflows into your existing tech stack." },
                  { step: "04", title: "Optimization", desc: "Continuous monitoring and refinement to ensure maximum efficiency and ROI." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 border-b border-[var(--color-border)] pb-8 last:border-0 last:pb-0">
                    <div className="font-[800] text-[24px] text-[var(--color-accent)]">{item.step}</div>
                    <div>
                      <h4 className="text-[16px] font-[800] uppercase tracking-[1px] mb-2">{item.title}</h4>
                      <p className="text-[13px] text-[var(--color-muted)] leading-[1.5] max-w-[300px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[var(--color-glass)] border border-[var(--color-border)] p-10 mt-10 lg:mt-0 relative overflow-hidden backdrop-blur-[10px]">
              <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(0,117,255,0.15)_0%,transparent_70%)] pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[var(--color-muted)]" />
                  <div className="w-3 h-3 bg-[var(--color-muted)]" />
                  <div className="w-3 h-3 bg-[#00F0FF]" />
                </div>
                <div className="text-[10px] uppercase tracking-[2px] text-[var(--color-muted)] font-[800]">System Shell</div>
              </div>
              
              <div className="space-y-4 font-mono text-[13px] tracking-tight">
                <div className="flex gap-4"><span className="text-[#00F0FF]">~</span><span className="text-[var(--color-muted)]">Initializing AI core...</span></div>
                <div className="flex gap-4"><span className="text-[#00F0FF]">~</span><span className="text-[var(--color-muted)]">Connecting data sources...</span><span className="text-[#00F0FF] ml-auto">OK</span></div>
                <div className="flex gap-4"><span className="text-[#00F0FF]">~</span><span className="text-[var(--color-muted)]">Training neural network...</span><span className="text-[#00F0FF] ml-auto">100%</span></div>
                <div className="flex gap-4"><span className="text-[#00F0FF]">~</span><span className="text-[var(--color-muted)]">Deploying agents...</span><span className="text-[#00F0FF] ml-auto">ACTIVE</span></div>
                <div className="flex gap-4 mt-8 pt-4 border-t border-[var(--color-border)]"><span className="text-white font-[800]">&gt;</span><span className="text-white font-[600]">SYSTEM_OPERATIONAL</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 border-t border-[var(--color-border)] flex flex-col items-center justify-center text-center">
          <h2 className="text-[50px] md:text-[100px] font-[800] leading-[0.85] tracking-[-3px] md:tracking-[-5px] uppercase mb-8 text-white max-w-4xl">
            READY TO<br/>AUTOMATE?
          </h2>
          <p className="text-[18px] text-[var(--color-muted)] mb-12 max-w-[400px] leading-[1.5]">
            Join forward-thinking companies that are leveraging AI to scale faster and work smarter.
          </p>
          <button className="bg-white text-black px-12 py-6 font-[800] uppercase tracking-[1px] text-[16px] cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
            Schedule Consultation <ArrowRight className="w-5 h-5 stroke-[3px]" />
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[var(--color-border)] pt-12 pb-6 px-6 md:px-16 text-[11px] font-[600] uppercase tracking-[2px] text-[var(--color-muted)] bg-[var(--color-bg)] z-20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></div>
            <span className="font-[900] text-[14px] tracking-[-0.5px]">AETHER AI</span>
          </div>
          <p>© {new Date().getFullYear()} AETHER AI AUTOMATION. ENTERPRISE GRADE.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}
