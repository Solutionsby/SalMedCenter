import { useLocation } from "react-router-dom";
import { AboutMe } from "../aboutMe/AboutMe";
import { ServicePage } from "../servicesPage/ServicesPage";
import { Slider } from "../slider/Slider";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./mainPage.scss";
import { AboutMarijuana } from "../aboutMarijuana/AboutMarijuana";
import { Treatment } from "../treatment/Treatment"

export const MainPage: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation("translation");

  useEffect(() => {
    const sectionId = location.hash;
    if (sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>{t("Helmet.mainPageTitle")}</title>
        <meta name="keywords" content={t("Helmet.metaKeywords")}></meta>
        <meta name="description" content={t("Helmet.metaDescryption")}></meta>
        <link rel="canonical" href="https://centrum.sal-med.pl" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Salmed Adam Salbert",
        "description": "Centrum Salmed w Gdańsku, specjalizujących się w terapii medycznej z użyciem marihuany leczniczej. Znajdź szczegóły naszych usług i cennik terapii. Zdobądź nowe spojrzenie na leczenie już dziś!",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Szczecińska 23/Gabinet 11",
            "addressLocality": "Gdańsk",
            "postalCode": "80-392",
            "addressCountry": "Polska"
        },
        "telephone": "+48-785-427-424",
        "url": "https://centrum.sal-med.pl"",
        "openingHours": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Monday",
                "opens": "17:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Tuesday",
                "opens": "17:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Wednesday",
                "opens": "17:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Thursday",
                "opens": "17:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "17:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "12:00",
                "closes": "15:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "closes": "closed"
            }
        ],
        "medicalSpecialty": ["Lekarz", "Marichuana Lecznicza"],
        "founder": {
            "@type": "Person",
            "name": "Adam Salbert",
            "jobTitle": "Lekarz Medycyny",
            "specialty": "Leczenie Marihuana leczniczą"
        },
        "medicalService": [
          {
              "@type": "MedicalProcedure",
              "name": "Wizyta pierwszorazowa"
          },
          {
              "@type": "MedicalProcedure",
              "name": "Wizyta recepturowa"
          },
          {
              "@type": "MedicalProcedure",
              "name": "Druga wizyta"
          },
          {
              "@type": "MedicalProcedure",
              "name": "Kolejna wizyta"
          }
      ]
      }
    `}
        </script>
      </Helmet>
      <div className="main-page-header">
        <Slider />
      </div>
      <div className="main-info-medicinal-marijuana">
        <AboutMarijuana />
      </div>
      <div className="main-page-service" id="serviceSection">
        <ServicePage />
      </div>
      <div className="aboutMe" id="aboutMeSection">
        <AboutMe />
      </div>
      <div className="treatment">
      <Treatment />
      </div>
    </div>
  );
};
