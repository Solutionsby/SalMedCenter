import { Link } from "react-router-dom";
import "./privacyPolicy.scss";
import { useTranslation } from "react-i18next";

interface PrivatyPolicy {
  privacAccepted: boolean | null;
  handlePrivacy: (decision: boolean) => void;
}

export const PrivacyPolicy: React.FC<PrivatyPolicy> = ({
  privacAccepted,
  handlePrivacy,
}) => {
  const { t } = useTranslation("translation");
  if (privacAccepted === null) {
    return (
      <div className="privacy-policy-wrapper">
        <div className="privacy-policy-content">
          <p>{t("privatyPolicy.popUpText")}</p>
          <div className="privacy-policy-button">
            <span onClick={() => handlePrivacy(true)}>
              {t("privatyPolicy.accept")}
            </span>
            <span onClick={() => handlePrivacy(false)}>
              {t("privatyPolicy.denial")}
            </span>
          </div>
          <Link
            to="privacy-policy"
            onClick={() => handlePrivacy(false)}
            className="privaty-policy-link"
          >
            {t("privatyPolicy.more")}
          </Link>
        </div>
      </div>
    );
  } else {
    return <div id="policy" className="privacy-policy-wrapper close"></div>;
  }
};
