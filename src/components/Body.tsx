import type { components } from "@/schemas/account-api";
import type { Langs } from "container/Langs";
import { useAppSelector } from "container/ReduxActions";
// import type { Service } from "container/compiled-types/src/types/entities";
import { isServiceAvailable } from "container/isServiceAvailable";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import services from "../consts/services";
import arrow from "../images/arrow.svg";
import ibaButton from "../images/ibaButton.svg";

export const Body = () => {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const user = useAppSelector((state) => state.host.user);
	const userInfo = useAppSelector((state) => state.host.userInfo);
	const fullAccountsInfo = useAppSelector(
		(state) => state.host.fullAccountsInfo,
	);
	const locationData = useAppSelector((state) => state.host.locationData);
	const servicesInfo =
		fullAccountsInfo?.[user.account]?.servicesInLocations?.[user.location];

	const itemClick =
		(service: components["schemas"]["Service"]) =>
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.persist();
			if (service.path) {
				navigate(service.path);
			} else {
				window.open(service.url);
			}
		};

	const numberOrLast = (position: number | undefined) =>
		typeof position === "number" ? position : 999;

	const returnLanding = () => {
		if (!user?.account || !servicesInfo)
			return <h1 className="no-accounts">{t("noAccounts")}.</h1>;

		const filteredServices = Object.keys(servicesInfo);

		if (filteredServices.length === 0) return <h1>{t("noServices")}</h1>;

		return (
			<>
				<h1>{t("title")}</h1>
				<div className="home-container">
					{filteredServices
						.filter((serviceName) => isServiceAvailable(serviceName, userInfo))
						.sort(
							(a, b) =>
								numberOrLast(servicesInfo[a].position) -
								numberOrLast(servicesInfo[b].position),
						)
						.map((service) => {
							const currentServiceInfo = servicesInfo[service];

							return services[service] ? (
								<button
									type="button"
									key={service}
									onClick={itemClick(currentServiceInfo)}
									className="item"
								>
									<div className="img-container">
										<img src={services[service].img} alt="Service icon" />
									</div>
									<div className="item-content">
										<h2>{currentServiceInfo.displayName}</h2>
										<p>
											{services[service]?.description
												? services[service].description[i18n.language as Langs]
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
																	currentServiceInfo.name?.toLowerCase() ===
																	"openshift"
																		? route.route
																		: currentServiceInfo.path + route.route
																}
																className="route"
															>
																{route[i18n.language as Langs]}
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
																{route[i18n.language as Langs]}
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
											<img src={arrow} alt="Arrow icon" />
										</div>
									</div>
								</button>
							) : null;
						})}
				</div>
			</>
		);
	};

	const getCloudLandingName = () => {
		if (!locationData.back_to_url) return "ibacloud.by";

		if (locationData.back_to_url.includes("http"))
			return locationData.back_to_url.split("//")[1];

		return locationData.back_to_url;
	};

	return (
		<div className="home-content-container">
			{returnLanding()}
			<div className="landing_link_container">
				<a href={locationData.back_to_url} className="landing_link">
					<button className="iba" type="button">
						<img src={ibaButton} alt="External link icon" />
						<span>{`${t("goTo")} ${getCloudLandingName()}`}</span>
					</button>
				</a>
			</div>
		</div>
	);
};

export default Body;
