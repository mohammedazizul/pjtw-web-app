import React from "react";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
// import { useTranslation } from "react-i18next";
import Service from "../../components/ServiceCard";
import "./style.css";

const Index = () => {
  // const { t } = useTranslation();
  const services = [
    {
      service: "MALAY LEGACY MASSAGE",
      categories: [
        {
          name: "MALAY TRADITIONAL MASSAGE",
          description: `Urut Melayu which is involves soft-tissues and muscle manipulation of the whole body to stimulate
          other systems in the body such as lymphatic, circulatory and nerve systems. Such manoeuvres promote
          therapeutic effects such as increasing blood flow, relieving pain and muscle spasm and rehabilitation of
          the part body.`,
          price: 159,
          duration: 90,
        },
        {
          name: "RELAXING MASSAGE",
          description: `Enjoy this 60min full body massage that result in lasting feeling of relaxation, lowered stress and
          improved mood! We use citronella essential oil which is beneficial for a number of conditions, such as
          anxiety, depression, infection, and pain management. Inhaling the sweet aroma can also support
          emotions by creating a calming and grounding effect. The whole treatment includes:
          60min full body massage
          Face Massage using VCO Lavender`,
          price: 119,
          duration: 60,
        },
      ],
    },
    {
      service: "GLOWING CLASSICAL THERAPY",
      categories: [
        {
          name: "SRIKANDI PACKAGE",
          description: `Start the ritual with aromatic herbal hot stone compressed (tungku), followed by 1 hour full body
          relaxing massage with our Coconut Refined Oil mixing with Citronella Essential Oil ensuring reduce
          fatigue and recharge your body sense. Finish with herbal drinks to restore and improve blood
          circulation.`,
          price: 179,
          duration: 90,
        },
        {
          name: "MAHSURI PACKAGE",
          description: `This therapy begins with ‘Boreh’ body scrub using 100% organic mix of exoctic spices also known as
          warmimg herbs and refreshing kaffir lime aura bath. A relaxing botanical facial ends to refreshed new
          you.`,
          price: 209,
          duration: 120,
        },
      ],
    },
  ];
  return (
    <>
      <Navigation />
      <div className="services-div">
        {services.map((service, index) => (
          <Service
            key={index}
            service={service.service}
            categories={service.categories}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Index;
