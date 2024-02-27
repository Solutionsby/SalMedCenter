import "./priceList.scss";
import { useTranslation } from "react-i18next";
import {serviceContent} from "../db/services.json"
import { Header } from "../header/Header";
import { Helmet } from "react-helmet";

export const PriceList: React.FC = () => {
  const { t } = useTranslation("serviceSection");
  return (
    <div>
      <Helmet>
        <title>{t("Helmet.priceListTitle")}</title>
        <meta
          name="keywords"
          content={t("Helmet.metaKeyWordsPriceList")}
        ></meta>
        <meta
          name="description"
          content={t("Helmet.metaDescryptionPriceList")}
        ></meta>
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
        "url": "http://centrum.sal-med.pl",
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
        "medicalSpecialty": ["Marihuana Lecznicza", "Leczenie alternatywne"],
        "founder": {
            "@type": "Person",
            "name": "Adam Salbert",
            "jobTitle": "Lekarz Medycyny",
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

      <div className="price-list-wrapper">
        <Header image={"/img/slides/Slider2.jpg"} />
        <div className="price-list-pediatric-indection price-list">
          {serviceContent.map(
            ({
              id,
              visitHeader,
              price
            }) => (
              <div className="price-component-wrapper" key={id}>
                <div className="price-list-content">
                  <p>{t(visitHeader)}</p>
                  <div className="line"></div>
                  <p>{price} zł</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
