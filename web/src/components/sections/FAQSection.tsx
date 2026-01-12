const faqs = [
  {
    question: "Does the paint fade?",
    answer:
      "Under normal interior conditions, our finishes are designed to remain stable for many years. We use high-quality, artist-grade acrylic pigments and protective finishing techniques suited to premium interior wall coverings. As with any artwork, we recommend avoiding prolonged direct UV exposure and following our care guidance for best longevity.",
  },
  {
    question: "Can you see the seams of the paper joint?",
    answer:
      "No. Seam placement is planned during the design process, and brushwork is composed to avoid harsh edges that would draw attention. Our dedicated installation team aligns and handles panels with extreme care so the final wall reads as one continuous artwork.",
  },
  {
    question: "If there are scratches, what do we do?",
    answer:
      "We can help. If damage occurs, we can assess the area and arrange a professional touch-up/repair. In many cases, small marks can be patched seamlessly by a painter familiar with the original finish and technique.",
  },
  {
    question: "Can I use my own installers?",
    answer:
      "You can, but we strongly recommend our installers. They have specific experience with these materials and the precision required for premium panel alignment and finishing. Using our team helps ensure the final result matches the standard we intend.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-stone-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">FAQ</h2>
          <div className="w-24 h-px bg-gray-900 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Answers to common questions about our hand-painted wallpapers, materials, installation, and care.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white border border-gray-200 p-8">
              <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}


