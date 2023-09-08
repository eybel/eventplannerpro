const Schema = () => {
  const generatedSchema = {
    "@context": "http://schema.org/",
    "@type": "Product",
    name: "Premium Event Planning Service",
    description:
      "We specialize in creating memorable events tailored to your needs.",
    image: "https://www.example.com/event-planner-image.jpg",
    brand: {
      "@type": "Brand",
      name: "EventCo",
    },
    sku: "EVT123",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "249.99",
      availability: "https://schema.org/InStock",
      url: "https://www.example.com/event-planning-service",
    },
  };

  return (
    <script
      id="schemaObject"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(generatedSchema) }}
    />
  );
};

export default Schema;
