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
          "A calm, gentle dental and orthodontic clinic for adults and children on Baner-Pashan Link Road, Pune.",
      },
      { property: "og:title", content: "Dr. Mehta’s Dental Care & Cure" },
      {
        property: "og:description",
        content:
          "A calm, gentle dental and orthodontic clinic for adults and children on Baner-Pashan Link Road, Pune.",
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
              <span>Thoughtful dental care in Pune</span>
            </div>
            <h1 id="hero-heading">
              A gentler kind of
              <span> dental visit.</span>
            </h1>
            <p className="hero__description">
              At Dr. Mehta’s Dental Care &amp; Cure, your comfort comes first. We’re here for the
              little ones finding their way to braces, and the grown-ups who need a little more
              reassurance.
            </p>
            <div className="hero__actions">
              <Button asChild variant="cta" size="lg">
                <a href="#visit">
                  Book Appointment <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <a className="text-link" href="#doctors">
                Meet your doctors <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="hero__address">
              <MapPin aria-hidden="true" />
              <span>Baner–Pashan Link Road, Pune</span>
            </div>
          </div>

          <div className="hero__visual">
            <PhotoPlaceholder label="Clinic welcome photo" className="hero__photo" variant="blue" />
            <div className="hero-note">
              <span className="hero-note__icon"><Heart aria-hidden="true" /></span>
              <span>
                <strong>Take your time.</strong>
                <small>We’re here to listen.</small>
              </span>
            </div>
            <span className="hero__vertical-label">YOUR COMFORT MATTERS</span>
          </div>
          <a className="hero__scroll" href="#about" aria-label="Scroll to learn about the clinic">
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="trust-strip" id="about" aria-label="About the clinic">
          <div className="trust-strip__inner">
            <div className="trust-item">
              <Heart aria-hidden="true" />
              <span>Gentle, reassuring care</span>
            </div>
            <span className="trust-separator" aria-hidden="true" />
            <div className="trust-item">
              <Sparkles aria-hidden="true" />
              <span>A calm, spotless clinic</span>
            </div>
            <span className="trust-separator" aria-hidden="true" />
            <div className="trust-item">
              <Smile aria-hidden="true" />
              <span>Dental &amp; orthodontic care</span>
            </div>
            <span className="trust-separator" aria-hidden="true" />
            <div className="trust-item">
              <MapPin aria-hidden="true" />
              <span>Baner–Pashan, Pune</span>
            </div>
          </div>
        </section>

        <section className="treatments section-wrap" id="treatments" aria-labelledby="treatments-heading">
          <div className="section-topline">
            <SectionHeading
              eyebrow="Care that meets you where you are"
              title="What brings you in?"
              description="A few things about our care will be added here. For now, let us know what you’re looking for."
              id="treatments-heading"
            />
            <a className="text-link section-topline__link" href="#visit">
              Ask us a question <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="treatment-grid">
            {[
              { title: "Dental care", icon: ShieldCheck, variant: "blue" as const },
              { title: "Orthodontic care", icon: Smile, variant: "coral" as const },
              { title: "Other specialities", icon: Sparkles, variant: "soft" as const },
            ].map((service, index) => (
              <article className="treatment-item" key={service.title}>
                <PhotoPlaceholder label={`${service.title} photo placeholder`} variant={service.variant} />
                <div className="treatment-item__body">
                  <span className="treatment-item__number">0{index + 1}</span>
                  <service.icon aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>Treatment details will be added here.</p>
                  <a href="#visit" aria-label={`Ask about ${service.title}`}>
                    <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="content-placeholder"><span /> A complete list of treatments is coming soon.</p>
        </section>

        <section className="doctors section-wrap" id="doctors" aria-labelledby="doctors-heading">
          <div className="doctors__intro">
            <SectionHeading
              eyebrow="Meet the doctors"
              title="Here to make it easier."
              description="Get to know the people who’ll be by your side. Doctor profiles are being prepared."
              id="doctors-heading"
            />
            <div className="doctors__line" aria-hidden="true" />
            <span className="doctors__note"><Heart aria-hidden="true" /> A visit, at your pace.</span>
          </div>
          <div className="doctor-grid">
            {[
              { name: "Dr. Kunal Mehta", variant: "blue" as const },
              { name: "Dr. Ripple Mehta", variant: "coral" as const },
            ].map((doctor) => (
              <article className="doctor-item" key={doctor.name}>
                <PhotoPlaceholder label={`${doctor.name} portrait placeholder`} variant={doctor.variant} />
                <div className="doctor-item__caption">
                  <div>
                    <h3>{doctor.name}</h3>
                    <p>Doctor profile details to be added.</p>
                  </div>
                  <ArrowRight aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reassurance" aria-labelledby="reassurance-heading">
          <div className="reassurance__visual">
            <PhotoPlaceholder label="Reassuring clinic visit photo" className="reassurance__photo" variant="soft" />
            <div className="reassurance__badge"><Heart aria-hidden="true" /> You set the pace</div>
          </div>
          <div className="reassurance__copy">
            <span className="eyebrow">A little reassurance</span>
            <h2 id="reassurance-heading">Nervous about the dentist?</h2>
            <p>
              You’re not alone, and you don’t have to pretend you’re not nervous. Tell us what’s
              on your mind. We’ll listen, explain what to expect, and take things one step at a time.
            </p>
            <ul className="reassurance__list">
              <li><Check aria-hidden="true" /> It’s okay to ask questions.</li>
              <li><Check aria-hidden="true" /> We can talk through things first.</li>
              <li><Check aria-hidden="true" /> Your comfort matters.</li>
            </ul>
            <Button asChild variant="cta" size="lg">
              <a href="#visit">Let’s talk before you visit <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
        </section>

        <section className="reviews section-wrap" id="reviews" aria-labelledby="reviews-heading">
          <div className="reviews__top">
            <SectionHeading
              eyebrow="Words from our patients"
              title="Experiences, in their own words."
              description="Patient feedback will be added here when it’s ready to share."
              id="reviews-heading"
            />
            <div className="reviews__placeholder-note">
              <span className="reviews__quote-mark">“</span>
              <p>Patient review placeholder.<br />To be replaced with a real review.</p>
              <span className="reviews__source">REVIEW PLACEHOLDER</span>
            </div>
          </div>
          <div className="reviews__bottom">
            <span><MessageCircle aria-hidden="true" /> No reviews have been added yet.</span>
            <a className="text-link" href="#visit">Have a question? <ArrowRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="gallery section-wrap" id="gallery" aria-labelledby="gallery-heading">
          <div className="section-topline">
            <SectionHeading
              eyebrow="Take a look around"
              title="A place to feel at ease."
              description="We’re getting the clinic photos ready."
              id="gallery-heading"
            />
            <span className="gallery__counter">01 <span /> 04</span>
          </div>
          <div className="gallery-grid">
            <PhotoPlaceholder label="Clinic gallery photo 1 placeholder" className="gallery__photo gallery__photo--large" variant="blue" />
            <PhotoPlaceholder label="Clinic gallery photo 2 placeholder" className="gallery__photo" variant="soft" />
            <PhotoPlaceholder label="Clinic gallery photo 3 placeholder" className="gallery__photo" variant="coral" />
            <PhotoPlaceholder label="Clinic gallery photo 4 placeholder" className="gallery__photo gallery__photo--wide" variant="blue" />
          </div>
          <div className="gallery__caption"><span>CLINIC PHOTOS</span><span>To be added</span></div>
        </section>

        <section className="visit" id="visit" aria-labelledby="visit-heading">
          <div className="visit__inner">
            <div className="visit__details">
              <SectionHeading
                eyebrow="Find us in Pune"
                title="We’re here when you’re ready."
                description="If you’d like to book a visit, reach out to the clinic. Contact details will be added here."
                id="visit-heading"
              />
              <div className="visit__fact">
                <span className="visit__fact-icon"><MapPin aria-hidden="true" /></span>
                <span><small>VISIT US</small><strong>Baner–Pashan Link Road, Pune</strong></span>
              </div>
              <div className="visit__fact">
                <span className="visit__fact-icon"><Phone aria-hidden="true" /></span>
                <span><small>CALL THE CLINIC</small><strong>Phone number to be added</strong></span>
              </div>
              <div className="visit__fact">
                <span className="visit__fact-icon"><Clock3 aria-hidden="true" /></span>
                <span><small>CLINIC HOURS</small><strong>Hours to be added</strong></span>
              </div>
              <div className="visit__actions">
                <Button variant="cta" size="lg" disabled title="Booking details to be added">
                  <CalendarDays aria-hidden="true" /> Booking details to be added
                </Button>
                <span>We’ll add appointment and contact details soon.</span>
              </div>
            </div>
            <PhotoPlaceholder label="Clinic location or map placeholder" className="visit__map" variant="soft" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__main">
          <a className="brand brand--footer" href="#home" aria-label="Dr. Mehta’s Dental Care & Cure — home">
            <span className="brand__mark" aria-hidden="true"><Heart /></span>
            <span className="brand__text"><strong>Dr. Mehta’s</strong><span>Dental Care &amp; Cure</span></span>
          </a>
          <p>A little more ease in every visit.</p>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <div className="site-footer__bottom">
          <span>© Dr. Mehta’s Dental Care &amp; Cure</span>
          <span>Baner–Pashan Link Road, Pune</span>
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