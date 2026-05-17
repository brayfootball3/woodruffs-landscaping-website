import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, CalendarDays, Leaf, Scissors, Trees, ShieldCheck,
  Sprout, Flower2, CheckCircle2, Star, Droplets, Building2
} from "lucide-react";
import "./style.css";
import landscapeVideo from "./assets/videos/landscape-showcase.mp4";
const WoodruffsLogo = ({ className = "" }) => (
  <svg viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f7e6aa" />
        <stop offset="45%" stopColor="#d6b45a" />
        <stop offset="100%" stopColor="#8d6821" />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="140" height="240" rx="70" stroke="url(#goldGradient)" strokeWidth="8" />
    <path d="M80 39C54 39 33 58 33 84C33 99 40 112 52 120C47 121 42 126 42 132C42 140 49 146 57 144C61 151 69 155 80 155C91 155 99 151 103 144C111 146 118 140 118 132C118 126 113 121 108 120C120 112 127 99 127 84C127 58 106 39 80 39Z" fill="url(#goldGradient)" />
    <circle cx="53" cy="83" r="19" fill="url(#goldGradient)" />
    <circle cx="80" cy="69" r="25" fill="url(#goldGradient)" />
    <circle cx="107" cy="83" r="19" fill="url(#goldGradient)" />
    <circle cx="66" cy="103" r="22" fill="url(#goldGradient)" />
    <circle cx="94" cy="103" r="22" fill="url(#goldGradient)" />
    <path d="M72 118H88V184C88 190 84 194 80 194C76 194 72 190 72 184V118Z" fill="url(#goldGradient)" />
    <path d="M80 182C69 183 60 189 54 199C48 210 40 217 27 214C31 230 44 239 59 237C70 236 76 229 80 219C84 229 90 236 101 237C116 239 129 230 133 214C120 217 112 210 106 199C100 189 91 183 80 182Z" fill="url(#goldGradient)" />
    <path d="M80 184V221" stroke="#d6b45a" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

const services = [
  { icon: Scissors, title: "Lawn Maintenance", text: "Weekly and bi-weekly mowing, trimming, edging, and cleanup for a sharp finished look." },
  { icon: Leaf, title: "Mulch & Bed Edging", text: "Fresh mulch, clean bed lines, weed cleanup, and pre-emergent options." },
  { icon: Sprout, title: "Sod & Lawn Repair", text: "Patch repair, fresh sod installs, and lawn refreshes for worn-out areas." },
  { icon: Flower2, title: "Flower Bed Maintenance", text: "Seasonal cleanup, shrub trimming, plant bed refreshes, and debris haul away." },
  { icon: Droplets, title: "Aeration & Seeding", text: "Core aeration and seeding services to help thicken and improve your lawn." },
  { icon: Building2, title: "Commercial Properties", text: "Dependable maintenance for businesses, rentals, HOAs, and storefronts." },
];

const why = [
  "Free estimates", "Locally owned and operated", "Residential and commercial service",
  "Clean, professional curb appeal", "Reliable scheduling", "Licensed and insured",
];

const process = [
  { step: "01", title: "Request Estimate", text: "Call, text, email, or use the scheduling link to tell us what you need." },
  { step: "02", title: "Walkthrough & Quote", text: "We review the property, answer questions, and give you clear pricing." },
  { step: "03", title: "Professional Service", text: "Our crew shows up ready to work and leaves the property looking clean." },
];

function Button({ children, href, variant = "gold" }) {
  return <a className={`btn ${variant}`} href={href}>{children}</a>;
}

function App() {
  return (
    <div>
      <div className="topbar">Free Estimates • Murfreesboro, TN & Surrounding Areas • Call/Text 615-691-0785</div>

      <header className="header">
        <a href="#home" className="brand">
          <div className="logoBox"><WoodruffsLogo className="logo" /></div>
          <div>
            <p className="brandName">Woodruff's</p>
            <p className="brandSub">Lawn Care & Landscape</p>
          </div>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <Button href="#contact">Get Estimate</Button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="heroBg"></div>
          <div className="container heroGrid">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="pill">Premium Outdoor Services</p>
              <h1>Lawn Care That Makes Your Property Look Expensive.</h1>
              <p className="heroText">Clean lawn maintenance, landscaping, mulch, sod, flower beds, aeration, and commercial property care with a dark gray, black, and gold look that matches your brand.</p>
              <div className="actions">
                <Button href="#contact"><CalendarDays size={20} /> Request Free Estimate</Button>
                <Button href="tel:6156910785" variant="outline"><Phone size={20} /> Call/Text</Button>
              </div>
              <div className="stats">
                <div><b>Local</b><span>Murfreesboro Area</span></div>
                <div><b>Free</b><span>Estimates</span></div>
                <div><b>Clean</b><span>Professional Work</span></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="heroCard">
              <div className="photoPlaceholder">
                <div>
                  <p>Before & After Ready</p>
                  <h3>Replace this with your best yard photo</h3>
                </div>
              </div>
              <div className="checks">
                {why.slice(0, 4).map(item => <div key={item}><CheckCircle2 size={20} /> {item}</div>)}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="lightSection">
          <div className="container">
            <div className="sectionHead">
              <div>
                <p className="label">Our Services</p>
                <h2>Full-Service Lawn Care & Landscaping</h2>
              </div>
              <p>Built like the professional lawn and landscaping websites customers already trust, but styled with your premium black, gray, and gold brand.</p>
            </div>
            <div className="serviceGrid">
              {services.map(service => {
                const Icon = service.icon;
                return (
                  <div className="serviceCard" key={service.title}>
                    <div className="serviceTop"><div className="iconBox"><Icon size={36} /></div></div>
                    <div className="serviceBody">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <a href="#contact">Learn More →</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="darkSection">
          <div className="container aboutGrid">
            <div className="imageBlock">
              <div>
                <p>Image Block</p>
                <h3>Add a crew, truck, or finished job photo here</h3>
              </div>
            </div>
            <div>
              <p className="label gold">About Woodruff's</p>
              <h2>Local Service With Big-Company Presentation.</h2>
              <p className="bodyText">Woodruff's Lawn Care & Landscape serves Murfreesboro and surrounding areas with reliable lawn maintenance and landscaping. The goal is simple: make every property look cleaner, sharper, and better cared for.</p>
              <div className="whyGrid">{why.map(item => <div key={item}><CheckCircle2 size={20} /> {item}</div>)}</div>
            </div>
          </div>
        </section>

        <section className="blackSection">
          <div className="container">
            <div className="centerHead">
              <p className="label gold">How It Works</p>
              <h2>Simple. Clean. Professional.</h2>
            </div>
            <div className="processGrid">
              {process.map(item => (
                <div className="processCard" key={item.step}>
                  <b>{item.step}</b><h3>{item.title}</h3><p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
<section className="bg-[#111] px-5 py-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 text-center">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d6b45a]">
        Featured Work
      </p>
      <h2 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">
        Watch Our Work
      </h2>
    </div>

    <video
      src={landscapeVideo}
      controls
      playsInline
      className="w-full rounded-[2rem] border border-[#d6b45a]/40 shadow-2xl"
    />
  </div>
</section>
        <section id="gallery" className="lightSection">
          <div className="container">
            <div className="sectionHead">
              <div><p className="label">Gallery</p><h2>Show Off The Work</h2></div>
              <Button href="#contact" variant="dark">Book Your Yard</Button>
            </div>
            <div className="galleryGrid">
              {["Lawn Maintenance", "Mulch Installation", "Sod & Lawn Repair", "Commercial Cleanup", "Flower Beds", "Shrub Trimming"].map((item, index) => (
                <div className={index === 0 ? "galleryItem wide" : "galleryItem"} key={item}><span>{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="darkSection">
          <div className="container reviewsGrid">
            <div>
              <p className="label gold">Reviews</p>
              <h2>Customer Trust Section</h2>
              <p className="bodyText">This is where you can add real reviews once customers start leaving them. It gives the site that established-company feel.</p>
            </div>
            <div className="reviewCards">
              {["Great communication and clean work.", "Yard looked brand new after the service."].map(review => (
                <div className="reviewCard" key={review}>
                  <div className="stars">{[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}</div>
                  <p>“{review}”</p>
                  <b>Future Customer Review</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="blackSection">
          <div className="container contactGrid">
            <div>
              <p className="label gold">Get A Free Estimate</p>
              <h2>Ready For A Better Yard?</h2>
              <p className="bodyText">Call, text, email, or schedule online. Send your address, photos, and the service you need.</p>
              <div className="actions"><Button href="tel:6156910785"><Phone size={20} /> 615-691-0785</Button><Button href="mailto:woodruffslawncare@yahoo.com" variant="outline"><Mail size={20} /> Email Us</Button></div>
            </div>
            <div className="contactCard">
              <h3>Woodruff's Lawn Care & Landscape</h3>
              <a href="tel:6156910785"><Phone size={20} /> 615-691-0785</a>
              <a href="mailto:woodruffslawncare@yahoo.com"><Mail size={20} /> woodruffslawncare@yahoo.com</a>
              <a href="https://sites.google.com/view/woodruffslawncarelandscape/" target="_blank"><CalendarDays size={20} /> Schedule Appointment Online</a>
              <p><MapPin size={20} /> Murfreesboro, TN & surrounding areas</p>
            </div>
          </div>
        </section>
      </main>

      <footer><p>Woodruff's Lawn Care & Landscape</p><span>A Well-Kept Yard Makes All the Difference.</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
