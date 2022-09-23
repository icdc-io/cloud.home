import React from 'react';
import services from '../consts/services';
import { withRouter } from 'react-router-dom';
import ibaButton from '../images/ibaButton.svg';
import arrow from '../images/arrow.svg';
import { useTranslation } from "react-i18next";

const servicesRoles = {
    openshift: [ 'member' ],
    devops: [ 'member' ],
    projects: [ 'admin', 'billing', 'manager' ]

};

export const Body = ({ user, urls, services: servicesInfo }) => {
    const { t, i18n } = useTranslation();

    // const [ token, setToken ] = useState(0);

    // const changeUrl = () => {
    //     if (document.referrer.includes('login.icdc.io')) {
    //         history.goBack(-2);
    //     } else {
    //         history.goBack(-1);
    //     }
    // };

    // const onClick = () => {
    //     insights.chrome.auth.getToken().then((token) => {
    //         Promise.resolve(token).then(function(value) {
    //             localStorage.setItem('support-token', value);
    //             window.icdcHelpdeskWidget.reloadIframe();
    //         });
    //     });
    // };

    const token = window.insights.getUserInfo();

    const itemClick = (e, service) => {
        e.persist();
        if (service.path) {
            if (e.button < 2 && e.target.tagName !== 'A') { window.location.href = window.location.origin + service.path; }
        } else {
            e.button < 2 && e.target.tagName !== 'A' && window.open(service.url);
        }
    };

    const isVisible = (service) => service === 'admin' ? token.groups.some(group => /.cloud$/.test(group)) : servicesRoles[service] ?
        servicesRoles[service].some(role => token.external.accounts[user.account].roles.indexOf(role) !== -1) : true;

    const returnLanding = () => {
        if (user && user.account) {
            return servicesInfo[user.location].length ? <>
                <h1>{ t('title') }</h1>
                <div className='container'>
                    { servicesInfo[user.location].sort((a, b) => (a.position || 999) - (b.position || 999)).map(service => {
                        return services[service.name] && isVisible(service.name) ?
                            <div key={ service.name } onMouseDown={ e => itemClick(e, service) } className='item'>
                                <img src={ services[service.name].img } />
                                <div className='item-content'>
                                    <h2>{ service.displayName }</h2>
                                    <p>{ service.description || services[service.name].description[i18n.language] }</p>
                                    <div>
                                        { services[service.name].routes(user.location)[user.role] &&
                                            services[service.name].routes(user.location)[user.role].map((route, key) => {
                                                return service.path ? <a key={ key }
                                                    rel='noopener noreferrer'
                                                    href={ service.name.toLowerCase() === 'openshift' ? route.route : service.path + route.route }
                                                    className='route'>
                                                    { route[i18n.language] }
                                                </a> :
                                                    <a key={ key }
                                                        rel='noopener noreferrer'
                                                        className='route'
                                                        href={ service.name.toLowerCase() === 'openshift' ? route.route : service.url + route.route }
                                                        target='_blank'>
                                                        { route[i18n.language] }
                                                    </a>; }) }
                                        { service.path ? <a href={ window.location.origin + service.path } className='open'>
                                            { t('open') }
                                        </a> :
                                            <a className='open' href={ service.url } rel='noopener noreferrer' target='_blank'>
                                                { t('open') }
                                            </a> }
                                        <img src={ arrow } />
                                    </div>
                                </div>
                            </div> : null; })
                    }
                </div>
            </> : <h1>{ t('noServices') }</h1>;
        } else {
            return <h1 className='no-accounts'>
                { t('noAccounts') } <font className='support' color='#1e27ff' onClick={ onClick }>
                    { t('support') }
                </font>.</h1>;
        }
    };

    return <section className='home-content'>
        <div>
            { returnLanding() }
            <a href={ urls.back_to_url }>
                <button className='iba'>
                    <img src={ ibaButton } />
                    { `${t('goTo')} ${ urls.back_to_url ? urls.back_to_url.includes('http') ? urls.back_to_url.split('//')[1] || 'ibacloud.by' : urls.back_to_url : 'ibacloud.by' }`  }
                </button>
            </a>
        </div>
    </section>;
};

export default withRouter(Body);
