import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/mainPage/MainPage";
import { MainNavigation } from "./components/navigation/MainNavigation";
import { PrivacyPolicy } from "./components/policy/PrivacyPolicy";
import { Footer } from "./components/footer/Footer";
import { PriceList } from "./components/ priceList/PriceList";
import { Contact } from "./components/ contact/Contact";
import { PrivacyPolicyText } from "./components/policy/privacy-policy-text/PrivacyPolicyText";
import { ServicesPages } from "./components/servicesPage/servicesPages/ServicesPages";
import { NotFound } from "./components/notFound/NotFound";
import { serviceContent } from "./components/db/services.json";
import { useEffect, useState } from "react";
import { initGA, logPageView } from "./components/googleAnalitik/gtag";
import ScrollToTopEffect from "./assets/ScrollToTop";
import { Indications } from "./components/treatment/indicationsForTreatment/IndicationsForTreatment";
import { DisasesPage } from "./components/treatment/indicationsForTreatment/disasesPages/DisasesPage";
import { Contraindications } from "./components/treatment/contraindications/Contraindications";
import "./fontAwsome/ImportsFontAwsome";
import "./App.css";

function App() {
	const [privacAccepted, setPrivacyAccepted] = useState<boolean | null>(null);
	useEffect(() => {
		if (privacAccepted) {
			logPageView(window.location.pathname);
		}
		checkPrivacyAccepted();
	}, [privacAccepted, window.location.pathname]);

	const handlePrivacy = (decision: boolean) => {
		setPrivacyAccepted(decision);
		if (decision === true) {
			const expirationDate = new Date();
			expirationDate.setMonth(expirationDate.getMonth() + 2);
			document.cookie = `privacyAccepted=true; expires=${expirationDate.toUTCString()}; path=/`;
			initGA();
		}
	};
	const checkPrivacyAccepted = () => {
		const cookies = document.cookie.split(";");
		for (const cookie of cookies) {
			const [name, value] = cookie.split("=");
			if (name.trim() === "privacyAccepted") {
				setPrivacyAccepted(value === "true");
				initGA();
				break;
			}
		}
	};
	return (
		<Router>
			<div className="app-wrapper">
				<MainNavigation />
				<ScrollToTopEffect />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="priceList" element={<PriceList />} />
					<Route path="contact" element={<Contact />} />
					<Route path="privacy-policy" element={<PrivacyPolicyText />} />

					<Route
						path="first-consultation"
						element={
							<ServicesPages
								content={serviceContent[0]}
								isFirstService={true}
							/>
						}
					/>
					<Route
						path="follow-up-appointment"
						element={<ServicesPages content={serviceContent[1]} />}
					/>
					{/* <Route
            path="pedriatic-healthy"
            element={
              <ServicesPages
                content={serviceContent[1]}
              />
            }
          /> */}
					{/* <Route
            path="internist-indection"
            element={
              <ServicesPages
                content={serviceContent[2]}
              />
            }
          /> */}
					{/* <Route
            path="internist"
            element={
              <ServicesPages
                content={serviceContent[4]}
              />
            }
          /> */}
					<Route path="neoplasm" element={<DisasesPage id={0} />} />
					<Route path="degenerative" element={<DisasesPage id={1} />} />
					<Route path="Neurodegenerative" element={<DisasesPage id={2} />} />
					<Route path="SM" element={<DisasesPage id={3} />} />
					<Route path="Epilepsy" element={<DisasesPage id={4} />} />
					<Route path="Glaucoma" element={<DisasesPage id={5} />} />
					<Route path="Endometriosis" element={<DisasesPage id={6} />} />
					<Route path="Depression" element={<DisasesPage id={7} />} />
					<Route path="Insomnia" element={<DisasesPage id={8} />} />
					<Route path="PTSD" element={<DisasesPage id={9} />} />
					<Route path="Dementia" element={<DisasesPage id={10} />} />
					<Route path="IBS" element={<DisasesPage id={11} />} />

					<Route path="indications" element={<Indications />} />
					<Route path="contraindications" element={<Contraindications />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
				<PrivacyPolicy
					privacAccepted={privacAccepted}
					handlePrivacy={handlePrivacy}
				/>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
