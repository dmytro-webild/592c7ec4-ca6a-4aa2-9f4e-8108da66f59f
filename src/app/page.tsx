"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import { Zap, Target, TrendingUp } from 'lucide-react';

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
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Our Story", id: "about" },
        { name: "Collection", id: "collection" },
        { name: "Reviews", id: "testimonials" },
      ]}
      brandName="LUXE."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      title="Timeless Elegance, Redefined."
      description="Crafting the foundation of a modern wardrobe with sustainable luxury and precision tailoring."
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2627.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/young-man-shopping-menswear-shop_1303-19869.jpg" },
        { imageSrc: "http://img.b2bpic.net/free-photo/close-up-detail-cozy-clothing-texture_23-2149409163.jpg" }
      ]}
      background={{ variant: "plain" }}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      heading={[{ type: "text", content: "We believe that true style isn't about following trends, but about investing in pieces that tell a story." }]}
      useInvertedBackground={false}
    />
  </div>

  <div id="collection" data-section="collection">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Silk Essential Shirt", price: "$180", variant: "Silk", imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2627.jpg" },
        { id: "2", name: "Tailored Wool Trouser", price: "$240", variant: "Wool", imageSrc: "http://img.b2bpic.net/free-photo/young-man-shopping-menswear-shop_1303-19869.jpg" },
        { id: "3", name: "Cashmere Knit", price: "$320", variant: "Cashmere", imageSrc: "http://img.b2bpic.net/free-photo/close-up-detail-cozy-clothing-texture_23-2149409163.jpg" }
      ]}
      title="The Permanent Collection"
      description="Essential garments designed for longevity and comfort."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      useInvertedBackground={false}
      title="Quality by Design"
      description="Our commitment to excellence defined by core metrics."
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      textboxLayout="default"
      metrics={[
        { id: "m1", value: "100%", title: "Sustainable", description: "Materials used in all garments.", icon: Zap },
        { id: "m2", value: "12", title: "Global", description: "Partners in fair trade practices.", icon: Target },
        { id: "m3", value: "5k+", title: "Curators", description: "Satisfied luxury customers worldwide.", icon: TrendingUp },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      textboxLayout="default"
      animationType="slide-up"
      useInvertedBackground={false}
      title="The LUXE Philosophy"
      description="How we create our garments."
      features={[
        {
          title: "Precision Fit",          description: "Hand-measured for the perfect silhouette.",          media: { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-wearing-minimalist-shirt_23-2149317768.jpg" },
          items: [{ icon: Zap, text: "Custom Tailoring" }, { icon: Target, text: "Perfect Fit" }],
          reverse: false
        }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="In Their Words"
      description="Stories from our community."
      kpiItems={[{ value: "5.0", label: "Avg Rating" }, { value: "1k+", label: "Happy Clients" }, { value: "100%", label: "Sustainable" }]}
      testimonials={[
        { id: "t1", name: "Sarah J.", role: "Creative", company: "Studio X", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/spotlight-portrait-golden-hour_23-2151915132.jpg" },
        { id: "t2", name: "Mark D.", role: "Architect", company: "Urban Build", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-man-posing-indoors-medium-shot_23-2149518280.jpg" }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      useInvertedBackground={false}
      title="Your Questions"
      description="Find answers to our most common inquiries."
      faqsAnimation="blur-reveal"
      textboxLayout="default"
      faqs={[
        { id: "f1", title: "Shipping Info", content: "Worldwide express delivery in 3-5 days." },
        { id: "f2", title: "Returns", content: "Complimentary returns within 30 days." }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      title="Join the Inner Circle"
      description="Get early access to our seasonal drops."
      useInvertedBackground={false}
      inputs={[
        { name: "email", type: "email", placeholder: "Email Address" },
        { name: "name", type: "text", placeholder: "Name" }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Company", items: [{ label: "About" }, { label: "Careers" }] },
        { title: "Support", items: [{ label: "Help" }, { label: "Privacy" }] }
      ]}
      bottomLeftText="© 2025"
      bottomRightText="All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}