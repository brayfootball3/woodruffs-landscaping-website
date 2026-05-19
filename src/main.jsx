
import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CalendarDays, Leaf, Scissors, Sprout, Flower2, CheckCircle2, Star, Droplets, Building2 } from "lucide-react";
import "./style.css";
import logoImage from "./assets/woodruffs-logo.png";
import heroPhoto from "./assets/photos/hero-yard.jpg";
import aboutPhoto from "./assets/photos/about-lawn.jpg";
import commercialPhoto from "./assets/photos/commercial.jpg";
import stripedLawn from "./assets/photos/striped-lawn.jpg";
import mowerPhoto from "./assets/photos/mower.jpg";
import cleanStripes from "./assets/photos/clean-stripes.jpg";
import mulchPhoto from "./assets/photos/mulch.jpg";
import sodPhoto from "./assets/photos/sod.jpg";
import treeJob from "./assets/photos/tree-job.jpg";
import landscapeVideo from "./assets/videos/landscape-showcase.mp4";
const services = [
  { icon: Scissors, title: "Lawn Maintenance", image: stripedLawn, text: "Weekly and bi-weekly mowing, trimming, edging, and cleanup for a sharp finished look." },
  { icon: Leaf, title: "Mulching", image: mulchPhoto, text: "Fresh mulch installs, clean bed lines, weed cleanup, and premium landscape refreshes." },
  { icon: Sprout, title: "Sod", image: sodPhoto, text: "Fresh sod installation and lawn repair to create a thick, healthy, green lawn." },
  { icon: Flower2, title: "Flower Bed Maintenance", image: treeJob, text: "Seasonal cleanup, shrub trimming, plant bed refreshes, and debris haul away." },
  { icon: Droplets, title: "Aeration & Seeding", image: cleanStripes, text: "Core aeration and seeding services to help thicken and improve your lawn." },
  { icon: Building2, title: "Commercial Properties", image: commercialPhoto, text: "Dependable maintenance for businesses, rentals, HOAs, and storefronts." },
];

const why = ["Free estimates", "Locally owned and operated", "Residential and commercial service", "Clean, professional curb appeal", "Reliable scheduling", "Licensed and insured"];

const gallery = [
  { title: "Commercial Property", image: commercialPhoto, wide: true },
  { title: "Lawn Maintenance", image: stripedLawn },
  { title: "Professional Mowing", image: mowerPhoto },
  { title: "Clean Striping", image: cleanStripes },
  { title: "Mulching", image: mulchPhoto },
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
          <img src={logoImage} alt="Woodruff's Lawn Care & Landscape logo" className="brandLogo" />
          <div><p className="brandName">Woodruff's</p><p className="brandSub">Lawn Care & Landscape</p></div>
        </a>
        <nav><a href="#services">Services</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></nav>
        <Button href="#contact">Get Estimate</Button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="heroBg" />
          <div className="container heroGrid">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="pill">Premium Outdoor Services</p>
              <h1>Lawn Care That Makes Your Property Look <span>Sensational.</span></h1>
              <p className="heroText">Clean lawn maintenance, landscaping, mulching, sod, flower beds, aeration, and commercial property care with a premium black, gray, and gold finish.</p>
              <div className="actions"><Button href="#contact"><CalendarDays size={20} /> Request Free Estimate</Button><Button href="tel:6156910785" variant="outline"><Phone size={20} /> Call/Text</Button></div>
              <div className="stats"><div><MapPin size={38}/><b>Local</b><span>Murfreesboro Area</span></div><div><CalendarDays size={38}/><b>Free</b><span>Estimates</span></div><div><Leaf size={38}/><b>Clean</b><span>Professional Work</span></div></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="heroCard">
              <div className="heroPhotoWrap"><img src={heroPhoto} alt="Woodruff's landscape project" className="heroPhoto" /><div className="photoCaption"><p>Before & After Ready</p><h3>Premium Lawn & Landscape Work</h3></div></div>
              <div className="checks">{why.slice(0, 4).map(item => <div key={item}><CheckCircle2 size={20} /> {item}</div>)}</div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="lightSection">
          <div className="container">
            <div className="sectionHead"><div><p className="label">Our Services</p><h2>Full-Service Lawn Care & Landscaping</h2></div><p>Professional lawn and landscape services for residential and commercial properties.</p></div>
            <div className="servicesGrid">
              {services.map(service => { const Icon = service.icon; return (
                <div className="serviceCard" key={service.title}>
                  <div className="serviceImage"><img src={service.image} alt={service.title} /><div className="iconBox"><Icon size={32} /></div></div>
                  <div className="serviceBody"><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Learn More →</a></div>
                </div>
              );})}
            </div>
          </div>
        </section>

        <section id="about" className="darkSection">
          <div className="container aboutGrid">
            <div className="aboutImage"><img src={aboutPhoto} alt="Finished lawn project" /></div>
            <div><p className="label gold">About Woodruff's</p><h2>Local Service With Big-Company Presentation.</h2><p className="bodyText">Woodruff's Lawn Care & Landscape serves Murfreesboro and surrounding areas with reliable lawn maintenance and landscaping. The goal is simple: make every property look cleaner, sharper, and better cared for.</p><div className="whyGrid">{why.map(item => <div key={item}><CheckCircle2 size={20} /> {item}</div>)}</div></div>
          </div>
        </section>

        <section id="gallery" className="lightSection">
          <div className="container">
            <div className="sectionHead"><div><p className="label">Gallery</p><h2>Show Off The Work</h2></div><Button href="#contact" variant="dark">Book Your Yard</Button></div>
            <div className="galleryGrid">{gallery.map(item => <div className={item.wide ? "galleryItem wide" : "galleryItem"} key={item.title}><img src={item.image} alt={item.title} /><span>{item.title}</span></div>)}</div>
          </div>
        </section>

        <section id="reviews" className="darkSection reviews">
          <div className="container reviewsGrid">
            <div><p className="label gold">Reviews</p><h2>Customer Trust Section</h2><p className="bodyText">This is where real customer reviews can be added as your business grows.</p></div>
            <div className="reviewCards">{["Great communication and clean work.", "Yard looked brand new after the service."].map(review => <div className="reviewCard" key={review}><div className="stars">{[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}</div><p>“{review}”</p><b>Future Customer Review</b></div>)}</div>
          </div>
        </section>

        <section id="contact" className="blackSection">
          <div className="container contactGrid">
            <div><p className="label gold">Get A Free Estimate</p><h2>Ready For A Better Yard?</h2><p className="bodyText">Call, text, email, or schedule online. Send your address, photos, and the service you need.</p><div className="actions"><Button href="tel:6156910785"><Phone size={20} /> 615-691-0785</Button><Button href="mailto:woodruffslawncare@yahoo.com" variant="outline"><Mail size={20} /> Email Us</Button></div></div>
            <div className="contactCard"><h3>Woodruff's Lawn Care & Landscape</h3><a href="tel:6156910785"><Phone size={20} /> 615-691-0785</a><a href="mailto:woodruffslawncare@yahoo.com"><Mail size={20} /> woodruffslawncare@yahoo.com</a><a href="https://sites.google.com/view/woodruffslawncarelandscape/" target="_blank" rel="noreferrer"><CalendarDays size={20} /> Schedule Appointment Online</a><p><MapPin size={20} /> Murfreesboro, TN & surrounding areas</p></div>
          </div>
        </section>
      </main>

      <footer><p>Woodruff's Lawn Care & Landscape</p><span>A Well-Kept Yard Makes All the Difference.</span></footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
