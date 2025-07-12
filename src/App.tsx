import React from 'react';
import { Mail, ArrowRight, Zap, Shield, Globe, Palette, Smartphone, TrendingUp, Server, MessageSquare, Cloud, BarChart3 } from 'lucide-react';

function App() {
  const services = [
    { name: 'Web Development', icon: Globe },
    { name: 'E-commerce Solutions', icon: BarChart3 },
    { name: 'Graphic Design & Branding', icon: Palette },
    { name: 'UI/UX Design', icon: Smartphone },
    { name: 'Cybersecurity Services', icon: Shield },
    { name: 'Digital Marketing', icon: TrendingUp },
    { name: 'Email & Domain Setup', icon: Mail },
    { name: 'Tech Consultation', icon: MessageSquare },
    { name: 'Hosting & Infrastructure', icon: Server },
    { name: 'Inventory Management SaaS', icon: Cloud }
  ];

  const leftServices = services.slice(0, 5);
  const rightServices = services.slice(5, 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400 to-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Lenzro
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Lenzro is Coming Soon!
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering small and medium businesses with cutting-edge digital solutions. 
            We're crafting powerful tools and services to accelerate your growth, 
            streamline operations, and unlock your business potential in the digital age.
          </p>
        </header>

        {/* Services Section */}
        <section className="mb-16 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Our Digital Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4">
              {leftServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16 lg:mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl p-8 lg:p-12 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join our journey and be the first to experience next-generation digital solutions.
            </p>
            
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700">
              Follow Our Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Contact Footer */}
        <footer className="text-center">
          <div className="bg-gradient-to-r from-blue-900/5 to-purple-600/5 border border-blue-200/30 rounded-2xl p-6 lg:p-8 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-medium text-gray-900">Get in Touch</span>
            </div>
            <p className="text-gray-600">
              For inquiries: <a href="mailto:team@lenzro.com" className="text-blue-600 hover:text-purple-600 font-semibold transition-colors">team@lenzro.com</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;