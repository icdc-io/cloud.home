import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import language from './currentLang';
import Landing from './components/Landing';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

const Chrome = React.lazy(() => import("microFrontEnd1/MicroFrontEnd1Index"));

const App = () => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState();
  const [services, setServices] = useState();

  return (
    <React.Suspense fallback={
      <div className='ui active centered inline loader' />
    }>
      <Chrome id='home'
        changeUser={userInfo => setUser(userInfo)}
        changeLang={lang => i18n.changeLanguage(lang)}
        language={language()}
        getServicesInfo={services => setServices(services)}
      >
        { services ? <Landing t={t} user={user} services={services} /> : <div className='ui active centered inline loader' /> }
      </Chrome>
    </React.Suspense>
  )
};

export default App;
