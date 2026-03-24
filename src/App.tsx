/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Clock, 
  CheckCircle, 
  Star, 
  Droplets, 
  BookOpen, 
  Briefcase, 
  Search, 
  Pipette as Pipe, 
  Flame, 
  ClipboardCheck, 
  ArrowUpCircle,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = [
    {
      title: "24/7 Emergency Plumbing and Frozen Pipe Repair",
      description: "We provide top-rated Emergency Plumbing Services and round-the-clock 24/7 assistance throughout Miami. Our immediate response team handles critical issues like burst and frozen pipes efficiently.",
      icon: <Clock className="w-7 h-7 text-accent-gold" />
    },
    {
      title: "Drain Cleaning, Jetting, and Main Sewer Line Services",
      description: "We deliver definitive Drain Cleaning Service for all blockages. Utilizing advanced jetting technology, our expertise covers Water Pipe Unclogging, Floor Drain Cleaning, and expert Main Sewer Line Repair and cleanout.",
      icon: <BookOpen className="w-7 h-7 text-accent-gold" />
    },
    {
      title: "Water Heater Service, Repair, and Replacement",
      description: "Ensure seamless hot water access with our professional water heater services. We provide precision repair, proactive maintenance, and efficient installation of all standard and modern tankless systems.",
      icon: <Briefcase className="w-7 h-7 text-accent-gold" />
    },
    {
      title: "Expert Leak Detection, Slab Leak Repair & Gas Leak Services",
      description: "Our skilled technicians employ non-invasive methods for accurate Leak Detection Services, including detailed Water Leak Detection and specialized solutions for challenging Slab Leak Services and Gas Leak Service.",
      icon: <Search className="w-7 h-7 text-accent-gold" />
    },
    {
      title: "Whole House Repiping & Trenchless Pipe Lining Services",
      description: "Secure your property's infrastructure with our expert Piping & Repiping Services. We manage complete Whole House Repiping, precision Pipe Repair, and modern trenchless options like Pipe Lining and Pipe Bursting Services.",
      icon: <Pipe className="w-7 h-7 text-accent-gold" />
    },
    {
      title: "Gas Line Installation, Repair, and Backflow Testing",
      description: "We ensure the integrity of your utility systems through comprehensive Gas Lines Repair, professional Gas Line Installation, and mandatory Backflow Testing and prevention services.",
      icon: <Flame className="w-7 h-7 text-accent-gold" />
    },
    {
      title: "Toilet Repair, Installation, and Sump Pump Replacement",
      description: "Trust our specialists for meticulous Toilet Repair, including swiftly addressing running or clogged toilets. Services extend to new Toilet Installation, full Sump Pump Repair and Replacement, and fixture installations.",
      icon: <ArrowUpCircle className="w-7 h-7 text-accent-gold" />
    },
    {
      title: "Faucet, Fixture, Sink, and Garbage Disposal Repair",
      description: "We expertly manage all Plumbing Fixture Installation, Faucet Repairs, Faucet Replacement, Sink Repair, and both Garbage Disposal Repair and Replacement for kitchens and baths.",
      icon: <Droplets className="w-7 h-7 text-accent-gold" />
    },
    {
      title: "Bathroom Remodel, Inspection & Gutter Services",
      description: "We execute complete Remodel Plumbing Services, comprehensive Bathroom Installation Service, and expert Shower Installation. We also offer essential Gutter and Downspout Services for total home water management.",
      icon: <ClipboardCheck className="w-7 h-7 text-accent-gold" />
    }
  ];

  const reviews = [
    {
      name: "David R.",
      location: "Coral Gables",
      text: "Miguel Plumbing's emergency response for my burst pipe was incredibly fast. They handled the leak detection and subsequent pipe repair with expertise. Truly a 24/7 service you can trust in Miami."
    },
    {
      name: "Sofia M.",
      location: "Brickell",
      text: "Had major issues with my Main Sewer Line. The Miguel team used video pipe inspection and performed a seamless sewer cleanout and main sewer line repair. Their drain cleaning service is unmatched."
    },
    {
      name: "Thomas K.",
      location: "Kendall",
      text: "I used them for a Whole House Repiping project. The Gas Line Installation was flawless, and they provided great backflow testing. The quality of work and professionalism from Miguel Plumbing exceeded my expectations."
    }
  ];

  const areas = [
    "Miami-Dade County", "Miami Beach", "Coral Gables", "Doral", "Hialeah", "Kendall", "Homestead"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-accent-gold selection:text-primary-bg">
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-secondary-dark z-50 p-6 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white hover:text-accent-gold">
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col space-y-6 text-center">
              {['Why Choose Us', 'All Services', 'Our Story', 'Areas Served', 'Reviews'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  onClick={toggleMenu} 
                  className="text-3xl font-bold text-white hover:text-accent-gold transition duration-150"
                >
                  {item}
                </a>
              ))}
            </nav>
            <a href="tel:+12397346839" className="cta-button mt-8 px-10 py-4 rounded-xl text-xl shadow-lg">
              Call Now: (239) 734-6839
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-primary-bg shadow-lg sticky top-0 z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <a href="#" className="inline-flex items-center">
            <span className="text-xl sm:text-2xl font-black uppercase text-accent-gold tracking-wider leading-none">
              MIGUEL PLUMBING
            </span>
          </a>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {['Why Choose Us', 'All Services', 'Our Story', 'Areas Served', 'Reviews'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-white text-sm hover:text-accent-gold transition duration-150"
              >
                {item}
              </a>
            ))}
            <a href="tel:+12397346839" className="cta-button px-4 py-2 rounded-lg text-sm ml-4 shadow-md">
              Call Now
            </a>
          </nav>

          <button onClick={toggleMenu} className="md:hidden text-white hover:text-accent-gold focus:outline-none">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-24 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://miguelplumbinggas.com/wp-content/uploads/2025/10/Plumber-Team-min.jpg" 
            alt="Plumber Team" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight"
          >
            Trusted <span className="text-accent-gold">Plumbing Service</span> by Miguel Plumbing Experts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            24/7 Emergency Service, Water Heater Repair, and Expert Drain Cleaning across Miami-Dade County.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a href="tel:+12397346839" className="cta-button inline-flex items-center justify-center px-8 py-4 text-lg rounded-xl shadow-2xl w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Call Miguel Plumbing: (239) 734-6839
            </a>
            <a href="#reviews" className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-xl border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-bg transition duration-300 w-full sm:w-auto">
              See Our Reviews
            </a>
          </motion.div>
          <p className="mt-6 text-sm text-gray-400">Same-Day Service Available for Most Miami-Dade Locations.</p>
        </div>
      </section>

      {/* Value Props */}
      <section id="why-choose-us" className="py-16 sm:py-24 bg-primary-bg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold inline-block pb-2 border-b-2 border-accent-gold">
              Why Miami Chooses Miguel Plumbing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Emergency Response",
                desc: "Burst pipes and major clogs can't wait. Our certified Miami emergency plumbers are available 24/7 for rapid response and urgent repairs.",
                icon: <Clock className="w-8 h-8 text-accent-gold" />
              },
              {
                title: "Licensed and Trusted Team",
                desc: "Every plumber is fully licensed, insured, and background-checked, ensuring you receive secure, professional service from experts.",
                icon: <CheckCircle className="w-8 h-8 text-accent-gold" />
              },
              {
                title: "Guaranteed Satisfaction",
                desc: "We stand behind our work. If you are not completely satisfied with your plumbing service, we promise to make it right.",
                icon: <Star className="w-8 h-8 text-accent-gold" />
              }
            ].map((prop, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 bg-[#282828] rounded-xl shadow-xl hover:shadow-accent-gold/10 transition duration-300"
              >
                <div className="mb-4">{prop.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{prop.title}</h3>
                <p className="text-gray-400 text-sm">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="all-services" 
        className="relative py-16 sm:py-24 border-b border-gray-800"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://miguelplumbinggas.com/wp-content/uploads/2025/10/Plumbing-Services-min.jpg" 
            alt="Plumbing Services" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-secondary-dark/90 to-secondary-dark/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold inline-block pb-2 border-b-2 border-accent-gold">
              Comprehensive Plumbing Services
            </h2>
            <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
              Miguel Plumbing offers a complete range of residential and commercial plumbing solutions, each backed by our commitment to quality and rapid response in Miami.
            </p>
          </div>

          <div className="bg-accent-gold text-black p-6 sm:p-8 rounded-xl shadow-2xl mb-12 text-center">
            <h3 className="text-2xl font-extrabold mb-4">Need Service Now? Don't Wait!</h3>
            <a href="tel:+12397346839" className="bg-primary-bg text-accent-gold hover:bg-black inline-flex items-center justify-center px-8 py-3 text-xl rounded-lg font-bold transition duration-300">
              <Phone className="w-6 h-6 mr-3" />
              Call (239) 734-6839 for Immediate Assistance
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, i) => (
              <div key={i} className="p-6 bg-[#282828] rounded-xl shadow-xl hover:shadow-accent-gold/10 transition duration-300 flex flex-col justify-between border border-gray-800">
                <div>
                  <div className="mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                </div>
                <a href="tel:+12397346839" className="quote-button inline-flex items-center justify-center px-4 py-2 text-base rounded-lg mt-4 font-semibold">
                  Get A Quote
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="tel:+12397346839" className="cta-button inline-flex items-center justify-center px-10 py-4 text-xl rounded-xl shadow-2xl">
              <Phone className="w-6 h-6 mr-3" />
              Get Services Now: (239) 734-6839
            </a>
            <p className="mt-4 text-sm text-gray-400">Tap to call Miguel Plumbing's licensed Miami team instantly.</p>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-secondary-dark border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold inline-block pb-2 border-b-2 border-accent-gold">
              Current Specials and Exclusive Offers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://miguelplumbinggas.com/wp-content/uploads/2025/10/1-min.png", label: "Claim Offer Today" },
              { img: "https://miguelplumbinggas.com/wp-content/uploads/2025/10/2.png", label: "Free Quote" },
              { img: "https://miguelplumbinggas.com/wp-content/uploads/2025/10/3.png", label: "View Details" }
            ].map((offer, i) => (
              <div key={i} className="bg-primary-bg p-4 rounded-xl shadow-lg border-2 border-gray-700 hover:shadow-xl transition duration-300 flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-lg mb-4 aspect-video">
                  <img 
                    src={offer.img} 
                    alt={`Offer ${i+1}`} 
                    className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <a href="tel:+12397346839" className="cta-button inline-flex items-center justify-center px-8 py-3 text-lg rounded-xl shadow-2xl w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  <strong>{offer.label}</strong>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="our-story" className="py-16 sm:py-24 bg-primary-bg border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-accent-gold uppercase tracking-widest font-semibold text-sm mb-3">Our Mission & History</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                The <span className="text-accent-gold">Miguel Plumbing</span> Commitment
              </h2>
              <p className="text-gray-300 mb-6 text-base lg:text-lg leading-relaxed">
                Miguel Plumbing is a proud, locally-rooted business committed to excellence. We are dedicated to providing the kind of service that builds lasting trust within the Miami community, upholding a strong tradition of honesty, reliability, and expert craftsmanship.
              </p>
              <p className="text-gray-400 mb-8 text-sm lg:text-base leading-relaxed">
                From tackling minor leaks to executing comprehensive system overhauls, our dedicated team brings professional integrity and a personal touch to every project. We are fully licensed, insured, and focused entirely on achieving your complete satisfaction and peace of mind.
              </p>
              <a href="tel:+12397346839" className="cta-button inline-flex items-center justify-center px-8 py-4 text-lg rounded-xl shadow-2xl w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                <strong>Schedule Your Service</strong>
              </a>
            </div>

            <div className="order-1 md:order-2">
              <div className="image-border-wrap">
                <img 
                  src="https://miguelplumbinggas.com/wp-content/uploads/2025/10/About-Us-Plumber-Man.jpg" 
                  alt="Miguel Plumbing Professional" 
                  className="w-full h-auto object-cover rounded-md shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-center text-xs text-gray-500 mt-3 italic">Licensed, Insured, and Trusted Professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section id="areas-served" className="bg-secondary-dark py-16 sm:py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] rounded-xl shadow-2xl overflow-hidden border-4 border-accent-gold lg:order-1 order-2">
              <iframe 
                src="https://maps.google.com/maps?q=Miami+Beach&t=&z=12&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Miami Beach Service Area Map"
              ></iframe>
            </div>
            <div className="lg:order-2 order-1">
              <p className="text-sm font-semibold tracking-wider text-accent-gold mb-2">AREAS WE SERVE</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                Your Local Emergency Plumbing Provider in Miami Beach
              </h2>
              <p className="text-lg mb-8 text-gray-400">
                Miguel Plumbing provides rapid and reliable emergency plumbing services across the entire Miami-Dade County area.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 mb-10 text-base font-medium">
                {areas.map((area) => (
                  <span key={area} className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-accent-gold" />
                    <span className="text-white">{area}</span>
                  </span>
                ))}
              </div>
              <a href="tel:+12397346839" className="inline-block px-8 py-3 text-lg font-bold rounded-lg border-2 border-accent-gold bg-accent-gold text-primary-bg hover:bg-white hover:border-white transition duration-300">
                CALL US FOR SERVICE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section 
        id="reviews" 
        className="relative py-16 sm:py-24 border-t border-gray-800"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://miguelplumbinggas.com/wp-content/uploads/2025/10/Plumber-Review.webp" 
            alt="Reviews Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary-bg/90 to-primary-bg/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold inline-block pb-2 border-b-2 border-accent-gold">
              What Our Miguel Plumbing Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-[#282828] p-6 rounded-xl shadow-xl border border-gray-700">
                <div className="flex items-center mb-4 text-accent-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-300 italic text-sm mb-4">"{review.text}"</p>
                <p className="text-sm font-semibold text-accent-gold">- {review.name}, {review.location}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="tel:+12397346839" className="cta-button inline-flex items-center justify-center px-8 py-4 text-lg rounded-xl shadow-2xl">
              <Phone className="w-5 h-5 mr-2" />
              <strong>Book Same-Day Service</strong>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-secondary-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-accent-gold">
            Why Miguel Plumbing is Miami's Trusted Choice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 leading-relaxed">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Precision Leak Detection & Emergency Plumbing</h3>
                <p>
                  In Miami's unique climate, plumbing emergencies require a fast, specialized response. At Miguel Plumbing, we understand the urgency of a burst pipe or severe leak. We offer rapid 24/7 Emergency Plumbing Services to mitigate water damage immediately.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Comprehensive Care for Drains & Sewers</h3>
                <p>
                  From the smallest sink blockage to the largest sewer issue, we keep your water flowing smoothly. Our definitive Drain Cleaning Service includes powerful hydro-jetting to clear stubborn clogs.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Upgrading Your Home: Repiping & Gas Services</h3>
                <p>
                  Modernizing your plumbing is a smart investment. Miguel Plumbing is the local authority for Whole House Repiping. We specialize in upgrading older homes and performing complex Pipe Repair using innovative techniques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Trust, Transparency & Total Solutions</h3>
                <p>
                  Choosing Miguel Plumbing means choosing a partner committed to honesty. We provide upfront pricing and operate only with fully licensed and insured professionals, offering a 100% satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-bg text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-gray-700 pb-10">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-accent-gold uppercase tracking-widest">
                Miguel Plumbing
              </h2>
              <p className="text-gray-400 text-sm">
                Providing trusted, expert plumbing and water system solutions for over 20 years. We are your reliable local pros, committed to quality service and customer satisfaction.
              </p>
              <a href="tel:+12397346839" className="cta-button inline-block px-4 py-2 rounded-lg text-sm shadow-xl">
                EMERGENCY CALL: (239) 734-6839
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent-gold uppercase mb-5 tracking-wider border-b-2 border-accent-gold inline-block pb-1">Quick Links</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#our-story" className="hover:text-accent-gold transition">Our Company History</a></li>
                <li><a href="#reviews" className="hover:text-accent-gold transition">Client Testimonials</a></li>
                <li><a href="#" className="hover:text-accent-gold transition">FAQs & Support</a></li>
                <li><a href="#" className="hover:text-accent-gold transition">Careers</a></li>
                <li><a href="tel:+12397346839" className="hover:text-accent-gold transition">Get a Free Estimate</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent-gold uppercase mb-5 tracking-wider border-b-2 border-accent-gold inline-block pb-1">Our Services</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#all-services" className="hover:text-accent-gold transition">Drain Cleaning</a></li>
                <li><a href="#all-services" className="hover:text-accent-gold transition">Water Heater Repair</a></li>
                <li><a href="#all-services" className="hover:text-accent-gold transition">Whole House Repiping</a></li>
                <li><a href="#all-services" className="hover:text-accent-gold transition">Leak Detection</a></li>
                <li><a href="#all-services" className="hover:text-accent-gold transition">Sewer Line Repair</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent-gold uppercase mb-5 tracking-wider border-b-2 border-accent-gold inline-block pb-1">Contact & Hours</h3>
              <div className="space-y-4 text-gray-400 text-sm">
                <p className="flex items-start">
                  <MapPin className="w-4 h-4 text-accent-gold mr-2 mt-1 shrink-0" />
                  <span>Serving all Miami-Dade County, FL</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 text-accent-gold mr-2 shrink-0" />
                  <a href="tel:+12397346839" className="hover:text-accent-gold transition">(239) 734-6839</a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 text-accent-gold mr-2 shrink-0" />
                  <span>info@miguelplumbinggas.com</span>
                </p>
                <div className="pt-2">
                  <p className="font-semibold text-white mb-1">Operating Hours:</p>
                  <p className="font-semibold text-accent-gold">24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left pt-4">
            <p className="text-gray-500 text-xs order-2 sm:order-1 mt-4 sm:mt-0">
              &copy; 2026 Miguel Plumbing Experts. All rights reserved. | <a href="#" className="hover:text-accent-gold transition">Privacy Policy</a>
            </p>
            <div className="flex space-x-4 order-1 sm:order-2">
              <a href="#" className="text-gray-400 hover:text-accent-gold transition transform hover:scale-110"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent-gold transition transform hover:scale-110"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent-gold transition transform hover:scale-110"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent-gold transition transform hover:scale-110"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
