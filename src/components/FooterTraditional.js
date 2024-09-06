import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const FooterTraditional = () => {
  const { t } = useTranslation();
  const locationData = useSelector((state) => state.host.locationData);

  return (
    <section>
      <div className="home-footer">
        <p>
          ®{new Date().getFullYear()} {locationData.footer_message}
        </p>
        <a
          href={locationData.privacy_policy_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("privacy")}
        </a>
        <div className="line" />
        <a
          href={locationData.cookies_policy_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("cookies")}
        </a>
        <div className="line" />
        <a
          href={locationData.status_page_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("status")}
        </a>
      </div>
    </section>
  );
};

export default FooterTraditional;
