import React, { useState, useEffect } from "react"; // { useState, useEffect } // ,
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
// import { useTranslation } from "react-i18next";
import Service from "../../components/ServiceCard";
import "./style.css";
import { Col, Row } from "react-bootstrap";

const Index = () => {
  // const { t } = useTranslation();
  const services = [
    {
      serviceId: "service-1",
      service: "MALAY LEGACY MASSAGE/URUT MELAYU",
      categories: [
        {
          name: "MALAY TRADITIONAL MASSAGE / URUTAN LENA",
          description: `Urut Melayu which is involves soft-tissues and muscle manipulation of the whole body to stimulate
          other systems in the body such as lymphatic, circulatory and nerve systems. Such manoeuvres promote
          therapeutic effects such as increasing blood flow, relieving pain and muscle spasm and rehabilitation of
          the part body.`,
          price: 159,
          duration: 90,
          categoryId: "category-1",
        },
        {
          name: "RELAXING MASSAGE/URUTAN KEHAMILAN",
          description: `Enjoy this 60min full body massage that result in lasting feeling of relaxation, lowered stress and
          improved mood! We use citronella essential oil which is beneficial for a number of conditions, such as
          anxiety, depression, infection, and pain management. Inhaling the sweet aroma can also support
          emotions by creating a calming and grounding effect. The whole treatment includes:
          60min full body massage
          Face Massage using VCO Lavender`,
          price: 119,
          duration: 60,
          categoryId: "category-2",
        },
        {
          name: "PREGNANCY MASSAGE/URUTAN KEHAMILAN",
          description: `Pregnancy massage can work wonders to help soothe and relax the pregnant mom. Soft effleurage of upward strokes on legs and thighs gently boost circulation, relieves, prevents and reduces puffy ankles, muscle cramps and helps with varicose veins.`,
          price: 109,
          duration: 60,
          categoryId: "category-3",
        },
        {
          name: "HEALING MASSAGE/URUTAN ANGIN PEKANG",
          description: `Stress management massage. This massage is the main contribute for upper back pain which is Stiffneck , Vertigo ( E.N.T ), Frozen Shoulder, Bellpalsy, Stress ,Migrain, Depresion.`,
          price: 99,
          duration: 45,
          categoryId: "category-4",
        },
        {
          name: "SPIRITUAL MASSAGE/URUTAN PENGASIH",
          description: `Inspired by malay midwifery massage technique specifically target points for imbalance estrogen hormones and helps to increase female sexuality desire. This therapeutic technique helps to increase the level of women fertility and tighten the pelvic muscles.`,
          price: 179,
          duration: 90,
          categoryId: "category-5",
        },
        {
          name: "YONI MASSAGE/URUTAN MUTIARA",
          description: `The massage is specially focused on the genitals and can stimulate your vagina sexually and can women who have trouble getting aroused during intimate intercourse due to stress. This massage is not only focused on intimate aspects but also on emotions.`,
          price: 199,
          duration: 45,
          categoryId: "category-6",
        },
      ],
    },
    {
      serviceId: "service-2",
      service: "GLOWING CLASSICAL THERAPY/PERAWAN BERSERI",
      categories: [
        {
          name: "SRIKANDI PACKAGE",
          description: `Start the ritual with aromatic herbal hot stone compressed (tungku), followed by 1 hour full body
          relaxing massage with our Coconut Refined Oil mixing with Citronella Essential Oil ensuring reduce
          fatigue and recharge your body sense. Finish with herbal drinks to restore and improve blood
          circulation.`,
          price: 179,
          duration: 90,
          categoryId: "category-1",
        },
        {
          name: "MAHSURI PACKAGE",
          description: `This therapy begins with ‘Boreh’ body scrub using 100% organic mix of exoctic spices also known as
          warmimg herbs and refreshing kaffir lime aura bath. A relaxing botanical facial ends to refreshed new
          you.`,
          price: 209,
          duration: 120,
          categoryId: "category-2",
        },
        {
          name: "DANG ANOM PACKAGE",
          description: `Calm your mind after a long day managing daily activities from the starts relaxing aromatic sauna for
          detoxify your body refreshness followed with our nourish cocoa body mask for smooth and glow your
          skin. Shoulder, neck and head massage will treat your backache and relief yourself from those fatigue
          and stress.`,
          price: 169,
          duration: 90,
          categoryId: "category-3",
        },
      ],
    },
    {
      serviceId: "service-3",
      service: "FERMINITY REJUVENATE",
      categories: [
        {
          name: "FERTILITY AROMATIC THERAPY",
          description: `If you are a woman has diagnosed female fertility and pinpointed the course, 
          there are the variety of traditional therapy. This therapy begins with herbal sitz bath warm water 
          which help to increase blood flow through out anal tissues. This is followed by 
          classical hot stone compressed (Tungku) on the stomach area to improve blood and lymphatic circulation to the uterus, 
          eggs and surrounding areas . 90 minutes Tradition Malay Full Body Masage  comes after focusing to the specific body part that can stimulate fertility level with traditional womb massage which is done by our expertise therapist. Healing herbal Missvey Steaming (Tangas) with special local herbal plants to rejuvenate your feminity at the end.`,
          price: 259,
          duration: 130,
          categoryId: "category-1",
        },
        {
          name: "PERAWAN REJUVENATE",
          description: `Overcome the unnormal white discharge issues on vaginal by starting the therapy with herbal warm water sitz bath to clean the perineum and provide relief itching in the genital area. Classical hot compressed riverstone wrapped with fresh Mengkudu leaf and smash raw ginger focused on abdominal and pelvic  area come after help to clear the womb of dead skin cell than can lead the infection caused for white discharge. This is followed by traditional vaginal steaming therapy for detoxification of the uterus and traditional malay womb massage to adjust the right position of womb at the end.`,
          price: 139,
          duration: 60,
          categoryId: "category-2",
        },
      ],
    },
    {
      serviceId: "service-4",
      service: "PERAWAN JUWITA SIGNATURE RITUAL",
      categories: [
        {
          name: "SIRIH BANGKIT THERAPY",
          description: `Resorting to a hormone replacement, this ritual begins with refreshing hand pick kaffir lime aura bath to cleanse unwanted energy and find a sense to calm. This is followed by our special malay midwives massage Urutan Asak and Urutan Tasak using specially home made herbal oil with 100% organic, safe yet potent mix of Olive Oil, ginger, star anise, basil seed,and hallow. Herbal smoke sitz bath using heated charcoal coconut and placed on it the specific local herbal to rejuvenate your femininity for ferfility and depression relief come after.  Finally, our floral bath ritual as an especially potent cleansing and nourishing tradition. The following ritual is based on makam name with the specific flower for each individual in our healing ritual practiced in malay traditional ritual. The whole therapy booster with the  home made ‘ubat mentah’ with secret ingredient herbal mixture as a routine supplement. This powerful therapy is the best experienced in a series of treatments, with a notable result.`,
          price: 499,
          duration: 150,
          categoryId: "category-1",
        },
      ],
    },
    {
      serviceId: "service-5",
      service: "MALAY POSTNATAL RITUAL",
      categories: [
        {
          name: "CLASSICAL THERAPY",
          description: `•	Leaf herbal bath (Mandian Herba)
          •	Herbal Body Dry Powder (Lulur Bedak)
          •	Hot Compressed (Tungku)
          •	Tasak Massage (Urutan Tasak)
          •	Body Traditional Binding (Bengkung)
          •	Herbal paste (Pilis,Tapel)`,
          price: 229,
          duration: 150,
          categoryId: "category-1",
        },
        {
          name: "BIDAN JAMILAH THERAPY",
          description: `•	Leaf herbal bath (Mandian Herba)
          •	Herbal Body Dry Powder (Lulur Bedak)
          •	Hot Stone Compressed (Tungku)
          •	Tasak Massage (Urutan Tasak)
          •	Smoke Herbal Sitz Bath (Tangas)
          •	Charcoal body warm up (Berdiang)
          •	Body Traditional Binding (Bengkung)
          •	Herbal paste (Pilis,Tapel)
          •	Herbs mixture drinks (Air Akar Kayu)
          •	Lactation Massage (by request)
          •	Baby Therapy (by request)`,
          price: 339,
          duration: 165,
          categoryId: "category-2",
        },
        {
          name: "BIDAN ROMLAH THERAPY",
          description: `•	Leaf herbal bath (Mandian Herba)
          •	Herbal Body Dry Powder (Lulur Bedak)
          •	Hot Compressed (Tungku)
          •	Tasak Massage (Urutan Tasak)
          •	Body Traditional Binding (Bengkung)
          •	Herbal paste (Pilis,Tapel)`,
          price: 379,
          duration: 180,
          categoryId: "category-3",
        },
        {
          name: "CLASSICAL THERAPY",
          description: `•	Leaf herbal bath (Mandian Herba)
          •	Herbal Body Dry Powder (Lulur Bedak)
          •	Hot Stone Compressed (Tungku)
          •	Tasak Massage (Urutan Tasak)
          •	Charcoal body warm up (Berdiang)
          •	Body Traditional Binding (Bengkung)
          •	Herbal sitz bath (Rendaman Faraj)
          •	Smoke Herbal Sitz (Tangas)
          •	Herbal paste (Pilis,Tapel)
          •	Herbs mixture drinks (Air Akar Kayu)
          •	NR Phytonatal Herbs Capsul 
          •	Lactation Massage (by request)
          •	Baby Therapy (by request)`,
          price: 229,
          duration: 150,
          categoryId: "category-4",
        },
        {
          name: "PANTANG FOOD (1pax)",
          description: `Menu 1
          1.	Tenggiri Grilled Ginger
          2.	Herbs Chicken Soup
          3.	Ikan Merah Soup
          4.	Bawal Tamarind Soup
          5.	Tenggiri Mix Herbs
          6.	Salmon Grilled Herbs
          7.	Beef Black Pepper

          Menu 2
          1.	Pak Choy Oyster
          2.	Dried Fish Kailan
          3.	Mix Centella
          4.	Broccoli & Tofu Soup
          5.	Radish Soup
          6.	Stir Fried Mustard & Carrot
          7.	Black Pepper Traditional sambal paste
          8.	Black Pepper Mix Vege
          `,
          price: 40,
          duration: 0,
          categoryId: "category-5",
        },
      ],
    },
  ];

  const [onLoadServiceToShow, setOnLoadServiceToShow] = useState("");
  const [onLoadCategoryToShow, setOnLoadCategoryToShow] = useState("");

  useEffect(() => {
    if (window.location.href.includes("#service-")) {
      let urlKeys = window.location.href.split("#");
      setOnLoadServiceToShow(urlKeys[1]);
      setOnLoadCategoryToShow(urlKeys[2]);
    }
  }, []);

  return (
    <div className="services-main">
      <Navigation navFontColorCode={"#594545"} />
      <div className="d-flex justify-content-center">
        <h1 className="services-h1 ">SERVICES</h1>
      </div>
      <section className="services-header-section">
        <Row className="row">
          <Col className="" md={6} sm={8}>
            <div className="services-header-div">
              <h1>here</h1>
            </div>
          </Col>
        </Row>
      </section>
      <div className="services-div">
        {services.map((service, index) => (
          <Service
            key={index}
            service={service.service}
            categories={service.categories}
            serviceId={service.serviceId}
            onLoadServiceToShow={onLoadServiceToShow}
            onLoadCategoryToShow={onLoadCategoryToShow}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
