import { z } from "zod";

const LogoSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

const NavItemSchema = z.object({
  id: z.number(),
  label: z.string(),
  link: z.string(),
});

const ContactButtonSchema = z.object({
  label: z.string(),
  link: z.string(),
});

const SocialLinksSchema = z.object({
  facebook: z.string(),
  twitter: z.string(),
  instagram: z.string(),
});

const HeaderSchema = z.object({
  topBar: z.object({
    heading: z.string(),
    socialLinks: z.string(),
  }),
  navbar: z.object({
    logo: LogoSchema,
    companyName: z.string(),
    navItems: z.array(NavItemSchema),
    contactButton: ContactButtonSchema,
  }),
});

const CallToActionSchema = z.object({
  label: z.string(),
  link: z.string(),
  phone: z.string().optional(),
});

const RatingSchema = z.object({
  title: z.string(),
  stars: z.number(),
  users: z.array(z.string()),
});

const ImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

const HeroSectionSchema = z.object({
  id: z.string(),
  label: z.string(),
  heading: z.string(),
  subheading: z.string(),
  callToAction: CallToActionSchema,
  rating: RatingSchema,
  heroImage: ImageSchema,
});

const ServiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  subtitle: z.string(),
  image: z.string(),
});

const ServicesSectionSchema = z.object({
  id: z.string(),
  label: z.string(),
  heading: z.string(),
  services: z.array(ServiceSchema),
  callToAction: CallToActionSchema,
});

const AboutSectionSchema = z.object({
  id: z.string(),
  label: z.string(),
  heading: z.string(),
  info: z.string(),
  callToAction: CallToActionSchema,
  aboutImage: ImageSchema,
});

const QuoteSectionSchema = z.object({
  id: z.string(),
  heading: z.string(),
  subheading: z.string(),
  callToAction: CallToActionSchema,
});

const GallerySectionSchema = z.object({
  id: z.string(),
  label: z.string(),
  heading: z.string(),
  subheading: z.string(),
  images: z.array(ImageSchema),
});

const StatsSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const StatsSectionSchema = z.object({
  id: z.string(),
  heading: z.string(),
  subheading: z.string(),
  stats: z.array(StatsSchema),
});

const TestimonialSchema = z.object({
  author: z.string(),
  image: z.string(),
  detail: z.string(),
  companyName: z.string(),
});

const TestimonialsSectionSchema = z.object({
  id: z.string(),
  heading: z.string(),
  testimonials: z.array(TestimonialSchema),
});

const FAQSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const FAQSectionSchema = z.object({
  id: z.string(),
  heading: z.string(),
  subheading: z.string(),
  faqs: z.array(FAQSchema),
});

const LocationSchema = z.object({
  name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

const LocationsSectionSchema = z.object({
  id: z.string(),
  label: z.string(),
  heading: z.string(),
  subheading: z.string(),
  locations: z.array(LocationSchema),
});

const CompanyInfoSchema = z.object({
  name: z.string(),
  address: z.string(),
  phone: z.string(),
  email: z.string(),
});

const QuickLinkSchema = z.object({
  id: z.number(),
  label: z.string(),
  link: z.string(),
});

const NewsletterSchema = z.object({
  heading: z.string(),
  placeholder: z.string(),
  button: z.object({
    label: z.string(),
    action: z.string(),
  }),
});

const ContactSectionSchema = z.object({
  id: z.string(),
  heading: z.string(),
  subheading: z.string(),
  callToAction: CallToActionSchema,
});

const FooterSchema = z.object({
  id: z.string(),
  companyName: z.string(),
  companyInfo: CompanyInfoSchema,
  quickLinks: z.array(QuickLinkSchema),
  socialLinks: SocialLinksSchema,
  newsletter: NewsletterSchema,
  logo: ImageSchema,
  copyright: z.string(),
  info: z.string(),
  backgroundImage: z.string(),
});

const ConfigSchema = z.object({
  header: HeaderSchema,
  heroSection: HeroSectionSchema,
  servicesSection: ServicesSectionSchema,
  aboutSection: AboutSectionSchema,
  quoteSection: QuoteSectionSchema,
  gallerySection: GallerySectionSchema,
  statsSection: StatsSectionSchema,
  testimonialsSection: TestimonialsSectionSchema,
  contactSection: ContactSectionSchema,
  faqSection: FAQSectionSchema,
  locationsSection: LocationsSectionSchema,
  footer: FooterSchema,
});

export { ConfigSchema, HeroSectionSchema };
