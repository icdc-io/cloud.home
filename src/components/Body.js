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

const adminServicesOnly = ['admin', 'billing'];

export const Body = ({ user, urls, services: servicesInfo }) => {
    const { t, i18n } = useTranslation();

    const token = window.insights.getUserInfo();

    const itemClick = (e, service) => {
        e.persist();
        if (service.path) {
            if (e.button < 2 && e.target.tagName !== 'A') { window.location.href = window.location.origin + service.path; }
        } else {
            e.button < 2 && e.target.tagName !== 'A' && window.open(service.url);
        }
    };

    const isVisible = (service) => adminServicesOnly.includes(service) ? token.groups.some(group => /.cloud$/.test(group)) : servicesRoles[service] ?
        servicesRoles[service].some(role => token.external.accounts[user.account].roles.indexOf(role) !== -1) : true;

    const numberOrLast = (position) => typeof position === 'number' ? position : 999;

    const returnLanding = () => {
        if (!user?.account || !servicesInfo[user.location]) return <h1 className='no-accounts'>{ t('noAccounts') }.</h1>;

        const filteredServices = servicesInfo[user.location];

        if (filteredServices.length === 0) return <h1>{ t('noServices') }</h1>;

        return (
            <>
                <h1>{ t('title') }</h1>
                <div className='container'>
                    {
                        filteredServices.sort((a, b) => numberOrLast(a.position) - numberOrLast(b.position)).map(service => {
                            return services[service.name] && isVisible(service.name) ?
                            <div key={ service.name } onMouseDown={ e => itemClick(e, service) } className='item'>
                                <img src={ services[service.name].img } />
                                <div className='item-content'>
                                    <h2>{ service.displayName }</h2>
                                    <p>{ services[service.name] && services[service.name].description ? services[service.name].description[i18n.language] : service.description }</p>
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
                            </div> : null
                        })
                    }
                </div>
            </>
        );
    };

    return (
        <div>
            { returnLanding() }
            <a href={ urls.back_to_url }>
                <button className='iba'>
                    <img src={ ibaButton } />
                    { `${t('goTo')} ${ urls.back_to_url ? urls.back_to_url.includes('http') ? urls.back_to_url.split('//')[1] || 'ibacloud.by' : urls.back_to_url : 'ibacloud.by' }`  }
                </button>
            </a>
        </div>
    );
};

export default withRouter(Body);
