import { useLocation } from "react-router-dom";
import { AboutMe } from "../aboutMe/AbouteMe";
import { ServicePage } from "../servicesPage/ServicesPage";
import { Slider } from "../slider/Slider";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./mainPage.scss";

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
        <link rel="canonical" href="https://gabinet.sal-med.pl" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Salmed Adam Salbert",
        "description": "Gabinet lekarski Salmed Adam Salbert - pediatra i internista w Gdańsku",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Szczecińska 23/Gabinet 11",
            "addressLocality": "Gdańsk",
            "postalCode": "80-392",
            "addressCountry": "Polska"
        },
        "telephone": "+48-785-427-424",
        "url": "http://www.gabinet.sal-med.pl",
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
        "medicalSpecialty": ["pediatra", "internista"],
        "founder": {
            "@type": "Person",
            "name": "Adam Salbert",
            "jobTitle": "Lekarz Medycyny",
            "specialty": "Pediatra"
        },
        "medicalService": [
            {
                "@type": "MedicalProcedure",
                "name": "Pediatria wizyta infekcyjna"
            },
            {
                "@type": "MedicalProcedure",
                "name": "Pediatria wizyta dzieci zdrowych"
            },
            {
                "@type": "MedicalProcedure",
                "name": "Internista wizyta infekcyjna"
            },
            {
                "@type": "MedicalProcedure",
                "name": "Internista wizyta bez objawów infekcji"
            }
        ]
      }
    `}
        </script>
      </Helmet>
      <div className="main-page-header">
        <Slider />
      </div>
      <div className="main-page-service" id="serviceSection">
        <ServicePage />
      </div>
      <div className="aboutMe" id="aboutMeSection">
        <AboutMe />
      </div>
    </div>
  );
};
