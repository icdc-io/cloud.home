import type { Langs } from "container/Langs";
import { useAppSelector } from "container/ReduxActions";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import services from "../consts/services";
import arrow from "../images/arrow.svg";
import ibaButton from "../images/ibaButton.svg";
import type { components } from "../schemas/account-api";

export const Body = () => {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const user = useAppSelector((state) => state.host.user);
	const remotes = useAppSelector((state) => state.host.remotes);
	const locationData = useAppSelector((state) => state.host.locationData);

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
		if (!user?.account || !remotes)
			return <h1 className="no-accounts">{t("noAccounts")}.</h1>;

		if (remotes.length === 0) return <h1>{t("noServices")}</h1>;

		return (
			<>
				<h1>{t("home_title")}</h1>
				<div className="home-container">
					{[...remotes]
						.filter((service) => services[service.name])
						.sort((a, b) => numberOrLast(a.position) - numberOrLast(b.position))
						.map((service) => {
							const staticServiceInfo = services[service.name];
							return (
								<button
									type="button"
									key={service.name}
									onClick={itemClick(service)}
									className="item"
								>
									<div className="img-container">
										<img src={staticServiceInfo.img} alt="Service icon" />
									</div>
									<div className="item-content">
										<h2>{service.display_name}</h2>
										<p>
											{staticServiceInfo.description[i18n.language as Langs]}
										</p>
										<div>
											{staticServiceInfo.routes(user.location)[user.role] &&
												staticServiceInfo
													.routes(user.location)
													[user.role].map((route, key) => {
														return service.path ? (
															<a
																key={key}
																rel="noopener noreferrer"
																href={
																	// service.name?.toLowerCase() === "openshift"
																	// 	? route.route
																	// 	:
																	service.path + route.route
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
																	// service.toLowerCase() === "openshift"
																	// 	? route.route
																	// 	:
																	service.url + route.route
																}
																target="_blank"
															>
																{route[i18n.language as Langs]}
															</a>
														);
													})}
											{service.path ? (
												<a
													href={window.location.origin + service.path}
													className="open"
												>
													{t("open")}
												</a>
											) : (
												<a
													className="open"
													href={service.url}
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
							);
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
