import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Heart,
  Image as ImageIcon,
  Menu,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Mehta’s Dental Care & Cure | Baner-Pashan, Pune" },
      {
        name: "description",
        content:
          "Professional dental and orthodontic clinic offering comprehensive oral healthcare for adults and children on Baner-Pashan Link Road, Pune.",
      },
      { property: "og:title", content: "Dr. Mehta’s Dental Care & Cure" },
      {
        property: "og:description",
        content:
          "Professional dental and orthodontic clinic offering comprehensive oral healthcare for adults and children on Baner-Pashan Link Road, Pune.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const navigation = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#visit" },
];

const patientReviews = [
  {
    initial: "R",
    name: "Rashmi Mantri",
    treatment: "Dental Implant Procedure",
    text: "The doctor is very good in explaining the whole process of implant and also did the implant very calmly and smoothly, checking if I am comfortable every few minutes. They do great updates and follow-ups before and after the procedure.",
  },
  {
    initial: "V",
    name: "Verified Patient",
    treatment: "Family & Senior Dental Care",
    text: "Dr. Ripple Mehta was very genial and patient. She explained everything clearly and made both me and my 82-year-old mom feel at ease about her treatment.",
  },
  {
    initial: "V",
    name: "Verified Patient",
    treatment: "Consultation & Orthodontics",
    text: "Dr. Ripple Mehta was attentive and dedicated, making a great first impression. The doctor explained things well. I was very satisfied with the wait time, staff behavior, and overall value for money.",
  },
];

function PhotoPlaceholder({
  label,
  className = "",
  variant = "soft",
}: {
  label: string;
  className?: string;
  variant?: "soft" | "blue" | "coral";
}) {
  return (
    <div className={`photo-placeholder photo-placeholder--${variant} ${className}`} role="img" aria-label={label}>
      <div className="photo-placeholder__frame">
        <ImageIcon aria-hidden="true" />
        <span>{label}</span>
        <small>Photo to be added</small>
      </div>
      <span className="photo-placeholder__corner" aria-hidden="true" />
    </div>
  );
}

function ClinicPhoto({
  src,
  alt,
  className = "",
  corner = true,
}: {
  src: string;
  alt: string;
  className?: string;
  corner?: boolean;
}) {
  return (
    <div className={`clinic-photo-card ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      {corner && <span className="photo-placeholder__corner" aria-hidden="true" />}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  id?: string;
}) {
  return (
    <div className={`section-heading${centered ? " section-heading--centered" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="clinic-site">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Dr. Mehta’s Dental Care & Cure — home">
          <span className="brand__mark" aria-hidden="true">
            <Heart />
          </span>
          <span className="brand__text">
            <strong>Dr. Mehta’s</strong>
            <span>Dental Care &amp; Cure</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild variant="cta" size="lg" className="header-book">
          <a href="#visit">
            <CalendarDays aria-hidden="true" />
            Book Appointment
          </a>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>

        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
            <Button asChild variant="cta" size="lg" onClick={() => setMenuOpen(false)}>
              <a href="#visit">
                <CalendarDays aria-hidden="true" />
                Book Appointment
              </a>
            </Button>
          </nav>
        )}
      </header>

      <main>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-heading">
          <div className="hero__copy">
            <div className="hero__welcome">
              <span className="hero__welcome-icon"><Sparkles aria-hidden="true" /></span>
              <span>Advanced Dental &amp; Orthodontic Clinic in Pune</span>
            </div>
            <h1 id="hero-heading">
              Comprehensive dental care
              <span> for your family.</span>
            </h1>
            <p className="hero__description">
              Dr. Mehta’s Dental Care &amp; Cure provides professional oral healthcare, preventive treatments,
              and advanced orthodontic solutions using modern clinical equipment and evidence-based practices.
            </p>
            <div className="hero__actions">
              <Button asChild variant="cta" size="lg">
                <a href="#visit">
                  Book Appointment <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <a className="text-link" href="#doctors">
                Our Specialists <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="hero__address">
              <MapPin aria-hidden="true" />
              <span>402, 18 High Street, Baner–Pashan Link Road, Pune</span>
            </div>
          </div>

          <div className="hero__visual">
            <ClinicPhoto
              src="/images/clinic-hero.jpg"
              alt="Dr. Mehta’s Dental Care & Cure modern dental operatory facility"
              className="hero__photo"
            />
            <div className="hero-note">
              <span className="hero-note__icon"><ShieldCheck aria-hidden="true" /></span>
              <span>
                <strong>Experienced Specialists</strong>
                <small>Comprehensive oral healthcare</small>
              </span>
            </div>
            <span className="hero__vertical-label">PROFESSIONAL DENTAL CARE</span>
          </div>
          <a className="hero__scroll" href="#about" aria-label="Scroll to clinic overview">
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="trust-strip" id="about" aria-label="About the clinic">
          <div className="trust-strip__inner">
            <div className="trust-item">
              <ShieldCheck aria-hidden="true" />
              <span>Experienced dental specialists</span>
            </div>
            <span className="trust-separator" aria-hidden="true" />
            <div className="trust-item">
              <Sparkles aria-hidden="true" />
              <span>Modern &amp; sterile facility</span>
            </div>
            <span className="trust-separator" aria-hidden="true" />
            <div className="trust-item">
              <Smile aria-hidden="true" />
              <span>Dental &amp; orthodontic care</span>
            </div>
            <span className="trust-separator" aria-hidden="true" />
            <div className="trust-item">
              <MapPin aria-hidden="true" />
              <span>18 High Street, Baner–Pashan</span>
            </div>
          </div>
        </section>

        <section className="treatments section-wrap" id="treatments" aria-labelledby="treatments-heading">
          <div className="section-topline">
            <SectionHeading
              eyebrow="Clinical Specialities"
              title="Comprehensive Dental Services"
              description="A full spectrum of preventive, restorative, corrective, and aesthetic dental treatments."
              id="treatments-heading"
            />
            <a className="text-link section-topline__link" href="#visit">
              Inquire about services <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="treatment-grid">
            {[
              {
                title: "General & Restorative Care",
                description: "Routine checkups, digital diagnostics, root canal therapy, and composite restorations.",
                icon: ShieldCheck,
                variant: "blue" as const,
              },
              {
                title: "Orthodontics & Aligners",
                description: "Metal and ceramic braces, clear aligners, and bite correction for teens and adults.",
                icon: Smile,
                variant: "coral" as const,
              },
              {
                title: "Advanced & Cosmetic Dentistry",
                description: "Teeth whitening, dental crowns and bridges, implants, and periodontal treatments.",
                icon: Sparkles,
                variant: "soft" as const,
              },
            ].map((service, index) => (
              <article className="treatment-item" key={service.title}>
                <PhotoPlaceholder label={`${service.title} photo placeholder`} variant={service.variant} />
                <div className="treatment-item__body">
                  <span className="treatment-item__number">0{index + 1}</span>
                  <service.icon aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#visit" aria-label={`Inquire about ${service.title}`}>
                    <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="content-placeholder"><span /> Detailed treatment evaluations and custom treatment plans available.</p>
        </section>

        <section className="doctors section-wrap" id="doctors" aria-labelledby="doctors-heading">
          <div className="doctors__intro">
            <SectionHeading
              eyebrow="Our Medical Team"
              title="Qualified Dental Specialists"
              description="Meet our practitioners committed to precise clinical diagnosis, evidence-based care, and patient wellness."
              id="doctors-heading"
            />
            <div className="doctors__line" aria-hidden="true" />
            <span className="doctors__note"><ShieldCheck aria-hidden="true" /> Dedicated to clinical excellence.</span>
          </div>
          <div className="doctor-grid">
            {[
              {
                name: "Dr. Kunal Mehta",
                specialty: "Dental Surgeon & Implant Specialist",
                variant: "blue" as const,
              },
              {
                name: "Dr. Ripple Mehta",
                specialty: "Orthodontist & Dentofacial Orthopedics",
                variant: "coral" as const,
              },
            ].map((doctor) => (
              <article className="doctor-item" key={doctor.name}>
                <PhotoPlaceholder label={`${doctor.name} portrait placeholder`} variant={doctor.variant} />
                <div className="doctor-item__caption">
                  <div>
                    <h3>{doctor.name}</h3>
                    <p>{doctor.specialty}</p>
                  </div>
                  <ArrowRight aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reassurance" aria-labelledby="reassurance-heading">
          <div className="reassurance__visual">
            <ClinicPhoto
              src="/images/clinic-reception-tall.jpg"
              alt="Dr. Mehta’s Dental Care & Cure consultation desk and reception area"
              className="reassurance__photo"
            />
            <div className="reassurance__badge"><ShieldCheck aria-hidden="true" /> Certified Clinical Hygiene</div>
          </div>
          <div className="reassurance__copy">
            <span className="eyebrow">Clinical Standards</span>
            <h2 id="reassurance-heading">High Standards in Patient Care</h2>
            <p>
              We maintain rigorous clinical standards across every dental and orthodontic procedure.
              From thorough diagnostic assessments to transparent treatment timelines, our focus is on
              long-term oral health and patient safety.
            </p>
            <ul className="reassurance__list">
              <li><Check aria-hidden="true" /> Thorough digital diagnostics and transparent consultations.</li>
              <li><Check aria-hidden="true" /> Multi-tier autoclave sterilization and infection control.</li>
              <li><Check aria-hidden="true" /> Evidence-based techniques for reliable, lasting results.</li>
            </ul>
            <Button asChild variant="cta" size="lg">
              <a href="#visit">Schedule a Consultation <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
        </section>

        <section className="reviews section-wrap" id="reviews" aria-labelledby="reviews-heading">
          <div className="section-topline">
            <SectionHeading
              eyebrow="Patient Feedback"
              title="Verified Patient Experiences"
              description="Real testimonials from patients treated for dental implants, orthodontics, and comprehensive oral care at our clinic."
              id="reviews-heading"
            />
            <div className="reviews-summary-badge">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" aria-hidden="true" />
                ))}
              </div>
              <span className="text-xs font-semibold text-foreground">5.0 Star Patient Rating</span>
            </div>
          </div>

          <div className="reviews-grid">
            {patientReviews.map((review, idx) => (
              <article className="review-card" key={idx}>
                <div className="review-card__stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} aria-hidden="true" />
                  ))}
                </div>
                <p className="review-card__text">“{review.text}”</p>
                <div className="review-card__footer">
                  <div className="review-card__avatar">{review.initial}</div>
                  <div className="review-card__info">
                    <span className="review-card__name">{review.name}</span>
                    <span className="review-card__meta">{review.treatment}</span>
                    <span className="review-card__badge">
                      <ShieldCheck className="w-3 h-3" aria-hidden="true" />
                      Verified Patient
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reviews__bottom">
            <span>
              <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
              100% Recommended by verified patients for gentle treatment, clarity, and follow-up care.
            </span>
            <a className="text-link" href="#visit">Schedule your visit <ArrowRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="gallery section-wrap" id="gallery" aria-labelledby="gallery-heading">
          <div className="section-topline">
            <SectionHeading
              eyebrow="Our Clinic"
              title="Modern Clinical Facility"
              description="A preview of our clinical operatories, diagnostic suites, and patient facilities."
              id="gallery-heading"
            />
            <span className="gallery__counter">01 <span /> 04</span>
          </div>
          <div className="gallery-grid">
            <ClinicPhoto
              src="/images/clinic-reception-tall.jpg"
              alt="Consultation desk and clinic reception at Dr. Mehta’s Dental Care & Cure"
              className="gallery__photo gallery__photo--large"
            />
            <ClinicPhoto
              src="/images/clinic-operatory.jpg"
              alt="Dental operatory and treatment unit at Dr. Mehta’s Dental Care & Cure"
              className="gallery__photo"
            />
            <PhotoPlaceholder label="Diagnostic & imaging suite" className="gallery__photo" variant="coral" />
            <ClinicPhoto
              src="/images/clinic-reception.jpg"
              alt="Clinic reception and patient waiting area at Dr. Mehta’s Dental Care & Cure"
              className="gallery__photo gallery__photo--wide"
            />
          </div>
          <div className="gallery__caption"><span>CLINIC FACILITIES</span><span>Baner–Pashan, Pune</span></div>
        </section>

        <section className="visit" id="visit" aria-labelledby="visit-heading">
          <div className="visit__inner">
            <div className="visit__details">
              <SectionHeading
                eyebrow="Clinic Information"
                title="Location & Appointments"
                description="Conveniently situated at 402, 18 High Street, Baner–Pashan Link Road (Near Regent Plaza), Pune."
                id="visit-heading"
              />
              <div className="visit__fact">
                <span className="visit__fact-icon"><MapPin aria-hidden="true" /></span>
                <span>
                  <small>CLINIC ADDRESS</small>
                  <strong>402, 18 High Street, Baner–Pashan Link Road</strong>
                  <span className="text-xs text-muted-foreground">Landmark: Near Regent Plaza, Pune</span>
                </span>
              </div>
              <div className="visit__fact">
                <span className="visit__fact-icon"><Phone aria-hidden="true" /></span>
                <span><small>TELEPHONE</small><strong>Phone number to be added</strong></span>
              </div>
              <div className="visit__fact">
                <span className="visit__fact-icon"><Clock3 aria-hidden="true" /></span>
                <span>
                  <small>CONSULTATION HOURS</small>
                  <strong>Mon – Fri: 11:00 AM – 07:00 PM</strong>
                  <strong>Sat: 09:00 AM – 05:00 PM</strong>
                  <span className="text-xs text-muted-foreground">Sunday: Closed</span>
                </span>
              </div>
              <div className="visit__actions">
                <Button variant="cta" size="lg" disabled title="Appointment booking to be enabled">
                  <CalendarDays aria-hidden="true" /> Book Appointment
                </Button>
                <span>Online appointment scheduling will be available shortly.</span>
              </div>
            </div>
            <div className="visit__map-card">
              <div className="visit__map-content">
                <MapPin className="visit__map-pin" aria-hidden="true" />
                <h3>Dr. Mehta’s Dental Care &amp; Cure</h3>
                <p>
                  402, 18 High Street, Baner–Pashan Link Road,<br />
                  Near Regent Plaza, Pune
                </p>
                <div className="visit__map-timings">
                  <div><span>Mon – Fri</span> <span>11:00 AM – 07:00 PM</span></div>
                  <div><span>Saturday</span> <span>09:00 AM – 05:00 PM</span></div>
                  <div><span>Sunday</span> <span>Closed</span></div>
                </div>
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=18+High+Street+Baner+Pashan+Link+Road+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin aria-hidden="true" /> View on Google Maps
                  </a>
                </Button>
              </div>
              <span className="photo-placeholder__corner" aria-hidden="true" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__main">
          <a className="brand brand--footer" href="#home" aria-label="Dr. Mehta’s Dental Care & Cure — home">
            <span className="brand__mark" aria-hidden="true"><Heart /></span>
            <span className="brand__text"><strong>Dr. Mehta’s</strong><span>Dental Care &amp; Cure</span></span>
          </a>
          <p>Comprehensive dental and orthodontic care in Baner–Pashan, Pune.</p>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <div className="site-footer__bottom">
          <span>© Dr. Mehta’s Dental Care &amp; Cure</span>
          <span>402, 18 High Street, Baner–Pashan Link Road, Pune</span>
          <a href="#home">Back to top <ChevronDown aria-hidden="true" /></a>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Quick contact">
        <Button variant="mobile-action" size="sm" disabled title="Clinic phone number to be added">
          <Phone aria-hidden="true" /><span>Call</span>
        </Button>
        <Button variant="mobile-action" size="sm" disabled title="WhatsApp number to be added">
          <MessageCircle aria-hidden="true" /><span>WhatsApp</span>
        </Button>
        <Button asChild variant="cta" size="sm" className="mobile-action-bar__book">
          <a href="#visit"><CalendarDays aria-hidden="true" /><span>Book</span></a>
        </Button>
      </nav>
    </div>
  );
}