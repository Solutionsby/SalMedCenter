import { Header } from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import icons from "../db/icons.json";
import contact from "../db/contact.json";
import "./contact.scss";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export const Contact = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="contact-wrapper">
      <Helmet>
        <title>{t("Helmet.contactTitle")}</title>
        <meta name="keywords" content={t("Helmet.metaKeywordsContact")}></meta>
        <meta
          name="description"
          content={t("Helmet.metaDescryptionContact")}
        ></meta>
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
      <Header image={"/img/slides/Slider1.jpg"} />
      <div className="contact-description-wrapper">
        <h1>{t("contact.contact")}</h1>
        <h2>{t("contact.telephoneNumber")}</h2>
        <a href={`tel:+48${contact.telephone}`}>
          <FontAwesomeIcon icon={icons.telephone as IconProp} />
          {contact.telephone}
        </a>
        <h2>{t("contact.emailAdress")}</h2>
        <a href={`mailto:${contact.email}`}>
          <FontAwesomeIcon icon={icons.eMail as IconProp} />
          {contact.email}
        </a>
        <h2>{t("contact.adress")}</h2>
        <a href="https://maps.app.goo.gl/nxx9Vd9gyYJ5qo997">
          <FontAwesomeIcon icon={icons.adress as IconProp} />
          {contact.adress}
        </a>
      </div>
    </div>
  );
};
