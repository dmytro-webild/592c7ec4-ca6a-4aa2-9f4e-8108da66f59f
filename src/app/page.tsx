"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Our Story",
          id: "about",
        },
        {
          name: "Collection",
          id: "collection",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
      ]}
      brandName="LUXE."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Timeless Elegance, Redefined."
      description="Crafting the foundation of a modern wardrobe with sustainable luxury and precision tailoring."
      testimonials={[
        {
          name: "Elena V.",
          handle: "@elena_style",
          testimonial: "The fabric quality is simply unmatched.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-posing-studio-front-view_23-2149424942.jpg",
        },
        {
          name: "Marc L.",
          handle: "@marc_design",
          testimonial: "Understated luxury at its very best.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/spotlight-portrait-golden-hour_23-2151915110.jpg",
        },
        {
          name: "Sophie K.",
          handle: "@sophie_lux",
          testimonial: "My new go-to for essential pieces.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-shooting-with-projector_23-2149424926.jpg",
        },
        {
          name: "David R.",
          handle: "@david_styles",
          testimonial: "Exceptional fit and timeless aesthetic.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-young-woman-shooting-with-projector_23-2149424927.jpg",
        },
        {
          name: "Mia S.",
          handle: "@mia_luxury",
          testimonial: "Simply the best investment in my wardrobe.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-indoors_23-2148718069.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021795.jpg"
      imageAlt="Fashion Model Editorial"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/corporate-specialist-reviewing-financial-charts-kpi-dashboards-ensuring-business-innovation_482257-136149.jpg",
          alt: "Avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5124.jpg",
          alt: "Avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5103.jpg",
          alt: "Avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67066.jpg",
          alt: "Avatar 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-young-man-posing-studio_23-2149411430.jpg",
          alt: "Avatar 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Sustainable",
        },
        {
          type: "text",
          text: "Handcrafted",
        },
        {
          type: "text",
          text: "Minimalist",
        },
        {
          type: "text",
          text: "Timeless",
        },
        {
          type: "text",
          text: "Premium",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="We believe that true style isn't about following trends, but about investing in pieces that tell a story."
    />
  </div>

  <div id="collection" data-section="collection">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Silk Essential Shirt",
          price: "$180",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2627.jpg",
        },
        {
          id: "2",
          name: "Tailored Wool Trouser",
          price: "$240",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-shopping-menswear-shop_1303-19869.jpg",
        },
        {
          id: "3",
          name: "Cashmere Knit",
          price: "$320",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-detail-cozy-clothing-texture_23-2149409163.jpg",
        },
        {
          id: "4",
          name: "Signature Blazer",
          price: "$450",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-blonde-woman-blue-light_23-2149478941.jpg",
        },
        {
          id: "5",
          name: "Silk Foulard",
          price: "$90",
          imageSrc: "http://img.b2bpic.net/free-photo/knitting-products-ready-use_23-2149397717.jpg",
        },
        {
          id: "6",
          name: "Leather Heritage Belt",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-tailor-working-leather-fabric_1303-23393.jpg",
        },
      ]}
      title="The Permanent Collection"
      description="Essential garments designed for longevity and comfort."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Quality by Design"
      tag="Our Impact"
      metrics={[
        {
          id: "m1",
          value: "100%",
          description: "Sustainable Materials",
        },
        {
          id: "m2",
          value: "12",
          description: "Global Crafting Partners",
        },
        {
          id: "m3",
          value: "5k+",
          description: "Satisfied Curators",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Fit",
          description: "Each piece is hand-measured for the perfect silhouette.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-wearing-minimalist-shirt_23-2149317768.jpg",
        },
        {
          title: "Artisan Fabrics",
          description: "Sourced from the finest mills worldwide.",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-details-woman-walking-outdoor_273443-768.jpg",
        },
        {
          title: "Enduring Design",
          description: "Timeless silhouettes that bridge seasons.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-say-no-fast-fashion_23-2149669563.jpg",
        },
      ]}
      title="The LUXE Philosophy"
      description="How we create our garments."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Creative",
          company: "Studio X",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/spotlight-portrait-golden-hour_23-2151915132.jpg",
        },
        {
          id: "t2",
          name: "Mark D.",
          role: "Architect",
          company: "Urban Build",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-posing-indoors-medium-shot_23-2149518280.jpg",
        },
        {
          id: "t3",
          name: "Anna P.",
          role: "Director",
          company: "Film Lab",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-4107.jpg",
        },
        {
          id: "t4",
          name: "Leo K.",
          role: "Writer",
          company: "Arts Daily",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-senior-woman-portrait-formal-clothes_23-2148891738.jpg",
        },
        {
          id: "t5",
          name: "Claire R.",
          role: "Designer",
          company: "Vogue",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-posing-with-mirror-reflection_23-2149409075.jpg",
        },
      ]}
      title="In Their Words"
      description="Stories from our community."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Shipping Info",
          content: "Worldwide express delivery in 3-5 days.",
        },
        {
          id: "f2",
          title: "Returns",
          content: "Complimentary returns within 30 days.",
        },
        {
          id: "f3",
          title: "Sizing",
          content: "Consult our detailed size guides for fit.",
        },
      ]}
      sideTitle="Your Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Stay Updated"
      title="Join the Inner Circle"
      description="Get early access to our seasonal drops."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="LUXE."
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Sustainability",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Returns",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
