import React from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
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
    {
      service: "FERMINITY REJUVENATE",
      categories: [
        {
          name: "FERTILITY AROMATIC THERAPY",
          description: `If you are a woman has diagnosed female fertility and pinpointed the course, there are the variety of traditional therapy. This therapy begins with herbal sitz bath warm water which help to increase blood flow through out anal tissues. This is followed by classical hot stone compressed (Tungku) on the stomach area to improve blood and lymphatic circulation to the uterus, eggs and surrounding areas . 90 minutes Tradition Malay Full Body Masage  comes after focusing to the specific body part that can stimulate fertility level with traditional womb massage which is done by our expertise therapist. Healing herbal Missvey Steaming (Tangas) with special local herbal plants to rejuvenate your feminity at the end.`,
          price: 259,
          duration: 130,
        },
        {
          name: "PERAWAN REJUVENATE",
          description: `Overcome the unnormal white discharge issues on vaginal by starting the therapy with herbal warm water sitz bath to clean the perineum and provide relief itching in the genital area. Classical hot compressed riverstone wrapped with fresh Mengkudu leaf and smash raw ginger focused on abdominal and pelvic  area come after help to clear the womb of dead skin cell than can lead the infection caused for white discharge. This is followed by traditional vaginal steaming therapy for detoxification of the uterus and traditional malay womb massage to adjust the right position of womb at the end.`,
          price: 139,
          duration: 60,
        },
      ],
    },
    {
      service: "PERAWAN JUWITA SIGNATURE RITUAL",
      categories: [
        {
          name: "SIRIH BANGKIT THERAPY",
          description: `Resorting to a hormone replacement, this ritual begins with refreshing hand pick kaffir lime aura bath to cleanse unwanted energy and find a sense to calm. This is followed by our special malay midwives massage Urutan Asak and Urutan Tasak using specially home made herbal oil with 100% organic, safe yet potent mix of Olive Oil, ginger, star anise, basil seed,and hallow. Herbal smoke sitz bath using heated charcoal coconut and placed on it the specific local herbal to rejuvenate your femininity for ferfility and depression relief come after.  Finally, our floral bath ritual as an especially potent cleansing and nourishing tradition. The following ritual is based on makam name with the specific flower for each individual in our healing ritual practiced in malay traditional ritual. The whole therapy booster with the  home made ‘ubat mentah’ with secret ingredient herbal mixture as a routine supplement. This powerful therapy is the best experienced in a series of treatments, with a notable result.`,
          price: 499,
          duration: 150,
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
