import { Cpu, Users, Award, Shield } from "lucide-react";
import RevealOnScroll from "../../components/ui/RevealOnScroll";

const About = () => {
  const values = [
    {
      icon: <Cpu className="w-6 h-6 text-[#76b900]" />,
      title: "Performance Obsessed",
      desc: "Every build we make is optimized, benchmarked, and tested for maximum real-world FPS — not just flashy specs.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#76b900]" />,
      title: "Built by Gamers",
      desc: "We're gamers and tech nerds first. We understand what matters — stability, thermals, and that extra frame advantage.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#76b900]" />,
      title: "Trust & Transparency",
      desc: "Every part is genuine, warranty-backed, and clearly listed. No fake pricing or hidden components. Ever.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#76b900]" />,
      title: "Customer First",
      desc: "We're known for fast support, real humans answering, and going beyond expectations with post-build assistance.",
    },
  ];

  return (
    <div className="bg-black text-gray-100">
      {/* Hero Banner */}
      <section className="relative py-24 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll>
            <p className="text-xs uppercase tracking-[0.3em] text-[#76b900] mb-3">
              Who We Are
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              About <span className="text-[#76b900]">NextRig</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              NextRig was born out of frustration with overpriced prebuilt PCs and lazy
              configurations. We decided to change the game — literally — by creating rigs that
              deliver real performance, honest pricing, and clean design.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-black/0 via-black/30 to-black/70">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll delay={0.1}>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                We exist to make high-performance gaming PCs accessible and transparent for
                everyone — from first-time buyers to competitive pros. We're not just building
                machines; we're helping gamers and creators reach their potential without
                compromise.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-4">
                Each rig goes through a multi-stage testing process for performance, stability, and
                thermals. What you get is not just a PC — it's your next upgrade, ready out of the
                box.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-[0_0_35px_rgba(118,185,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1612197527762-9a2e8e62a4de?auto=format&fit=crop&w=800&q=80"
                alt="Custom PC build"
                className="w-full h-80 object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-black/0 via-black/40 to-black/80">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <p className="text-xs uppercase tracking-[0.3em] text-[#76b900] mb-2">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">
              The Core Behind Our Builds
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="border border-white/10 rounded-2xl bg-black/40 p-8 hover:bg-black/60 transition-all">
                  <div className="flex flex-col items-center gap-3">
                    {v.icon}
                    <h3 className="text-lg font-medium text-gray-100">{v.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-black/0 via-black/30 to-black/60">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <p className="text-xs uppercase tracking-[0.3em] text-[#76b900] mb-2">
              The People Behind NextRig
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-10">
              Meet the Team
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Adnan", role: "Founder & Lead Developer" },
              { name: "Shammas", role: "Technical Advisor" },
              { name: "Bridgeon Team", role: "Design & QA Support" },
            ].map((member, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:bg-black/60 transition-all">
                  <div className="w-20 h-20 rounded-full bg-[#76b900]/20 border border-[#76b900]/30 mx-auto mb-4 flex items-center justify-center text-[#76b900] font-semibold text-lg">
                    {member.name[0]}
                  </div>
                  <h3 className="text-gray-100 font-medium">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/5 py-16 text-center">
        <RevealOnScroll>
          <p className="text-xs uppercase tracking-[0.3em] text-[#76b900] mb-3">
            Let's Build Together
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-3">
            Ready to Get Your Dream Rig?
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Check out our builds or reach out to create a fully custom setup.
          </p>
          <a
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#76b900] text-black font-medium text-sm shadow-[0_0_35px_rgba(118,185,0,0.45)] hover:shadow-[0_0_45px_rgba(118,185,0,0.85)] transition-transform hover:-translate-y-0.5"
          >
            Explore Builds
          </a>
        </RevealOnScroll>
      </section>
    </div>
  );
};

export default About;