import React from "react";

const bestCertificates = [
  {
    src: "/assets/certificates/accenture-forage.jpg",
    alt: "Accenture Forage",
  },
  {
    src: "/assets/certificates/deloitte-forage.jpg",
    alt: "Deloitte Forage",
  },
  // add more best certificates
];

const otherCertificates = [
  {
    src: "/assets/certificates/genai-saksham.jpg",
    alt: "GenAI Saksham",
  },
  {
    src: "/assets/certificates/generative-ai-thoughful-search.jpg",
    alt: "Generative AI Thoughtful Search",
  },
  {
    src: "/assets/certificates/what-is-generative-ai.jpg",
    alt: "What is Generative AI",
  },
  {
    src: "/assets/certificates/ui-ux-certificate.jpg",
    alt: "UI-UX Certificate",
  },
  {
    src: "/assets/certificates/figma-training.jpg",
    alt: "Figma Training",
  },
];

const CertificateGallery = () => {
  return (
    <section className="py-8 space-y-12">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-heading mb-4">My Certificates</h2>
        {/* best certificates carousel */}
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {bestCertificates.map((cert, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                w-[90%] 
                sm:w-[300px]
                rounded-xl overflow-hidden shadow
                hover:scale-105
                transition-transform duration-300
              "
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* smaller certificates carousel */}
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {otherCertificates.map((cert, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                w-[70%]
                sm:w-[200px]
                rounded-xl overflow-hidden shadow
                hover:scale-105
                transition-transform duration-300
              "
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateGallery;
