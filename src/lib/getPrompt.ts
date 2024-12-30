import { ImageData } from '~/app/register/page';

export interface CompanyInfo {
  name: string;
  serviceType: string;
  description?: string;
  phone?: string;
  email: string;
  imageData: ImageData[];
}

const getPrompt = (companyInfo: CompanyInfo) => {
  return `

    Generate a comprehensive JSON configuration for a website based on the following company information:
           Company Info: ${JSON.stringify(companyInfo)}

           Replace all image paths in the JSON provided below with the following images by matching the image descriptions to the relevant sections. Duplicate images if necessary to ensure every image path is filled including services. Place each image in its correct section based on its description
    
          
          - heroSection's label should be something meaningful about the service
          - servicesSection's services should at least 3 items and the services    description should be at least 25+ words
          - gallerySection (with images and descriptions) at least 6 items
          - statsSection (relevant company stats)
          - testimonialsSection (with detailed customer feedback) at least 5 items
          - faqSection (common questions and answers) at least 5 items
          `;
};

export default getPrompt;
