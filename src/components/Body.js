import React from "react";
import services from "../consts/services";
import ibaButton from "../images/ibaButton.svg";
import arrow from "../images/arrow.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { isServiceAvailable } from "container/isServiceAvailable";
import { useNavigate } from "react-router-dom";

export const Body = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.host.user);
  const userInfo = useSelector((state) => state.host.userInfo);
  const fullAccountsInfo = useSelector((state) => state.host.fullAccountsInfo);
  const locationData = useSelector((state) => state.host.locationData);
  const servicesInfo =
    fullAccountsInfo[user.account].servicesInLocations[user.location];

  const itemClick = (service) => (e) => {
    e.persist();
    console.log(service);
    if (service.path) {
      navigate(service.path);
    } else {
      window.open(service.url);
    }
  };

  const numberOrLast = (position) =>
    typeof position === "number" ? position : 999;

  const returnLanding = () => {
    if (!user?.account || !servicesInfo)
      return <h1 className="no-accounts">{t("noAccounts")}.</h1>;

    const filteredServices = Object.keys(servicesInfo);

    if (filteredServices.length === 0) return <h1>{t("noServices")}</h1>;

    return (
      <>
        <h1>{t("title")}</h1>
        <div className="container">
          {filteredServices
            .filter((serivceName) =>
              isServiceAvailable(serivceName, user.account, userInfo),
            )
            .sort(
              (a, b) =>
                numberOrLast(servicesInfo[a].position) -
                numberOrLast(servicesInfo[b].position),
            )
            .map((service) => {
              const currentServiceInfo = servicesInfo[service];

              return services[service] ? (
                <button
                  key={service}
                  onClick={itemClick(currentServiceInfo)}
                  className="item"
                >
                  <div className="img-container">
                    <img src={services[service].img} />
                  </div>
                  <div className="item-content">
                    <h2>{currentServiceInfo.displayName}</h2>
                    <p>
                      {services[service] && services[service].description
                        ? services[service].description[i18n.language]
                        : currentServiceInfo.description}
                    </p>
                    <div>
                      {services[service].routes(user.location)[user.role] &&
                        services[service]
                          .routes(user.location)
                          [user.role].map((route, key) => {
                            return currentServiceInfo.path ? (
                              <a
                                key={key}
                                rel="noopener noreferrer"
                                href={
                                  currentServiceInfo.name.toLowerCase() ===
                                  "openshift"
                                    ? route.route
                                    : currentServiceInfo.path + route.route
                                }
                                className="route"
                              >
                                {route[i18n.language]}
                              </a>
                            ) : (
                              <a
                                key={key}
                                rel="noopener noreferrer"
                                className="route"
                                href={
                                  service.toLowerCase() === "openshift"
                                    ? route.route
                                    : currentServiceInfo.url + route.route
                                }
                                target="_blank"
                              >
                                {route[i18n.language]}
                              </a>
                            );
                          })}
                      {currentServiceInfo.path ? (
                        <a
                          href={
                            window.location.origin + currentServiceInfo.path
                          }
                          className="open"
                        >
                          {t("open")}
                        </a>
                      ) : (
                        <a
                          className="open"
                          href={currentServiceInfo.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {t("open")}
                        </a>
                      )}
                      <img src={arrow} />
                    </div>
                  </div>
                </button>
              ) : null;
            })}
        </div>
      </>
    );
  };

  return (
    <div>
      {returnLanding()}
      <a href={locationData.back_to_url}>
        <button className="iba">
          <img src={ibaButton} />
          {`${t("goTo")} ${locationData.back_to_url ? (locationData.back_to_url.includes("http") ? locationData.back_to_url.split("//")[1] || "ibacloud.by" : locationData.back_to_url) : "ibacloud.by"}`}
        </button>
      </a>
    </div>
  );
};

export default Body;
