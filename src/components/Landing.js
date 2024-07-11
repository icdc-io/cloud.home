import React from 'react';
import { withRouter } from 'react-router-dom';
import Body from './Body';
import FooterTraditional from './FooterTraditional';

const defaultLocationGeneral = {
    footer_message: 'IBA IT Park. All rights reserved.',
    privacy_policy_url: 'https://ibacloud.by/privacy-policy-en',
    cookies_policy_url: 'https://ibacloud.by/cookies-policy-en',
    status_page_url: 'https://status.ibacloud.by',
    back_to_url: 'https://ibacloud.by'
};

const Landing = ({ t, user, services, publicLocationData }) => {
    const locationData = publicLocationData || defaultLocationGeneral;

    return (
        <>
            <section className='home-content'>
                <Body t={t} user={user} urls={ locationData } services={services} />
            </section>
            <FooterTraditional t={t} urls={ locationData }/>
        </>
    );
};

export default withRouter(Landing);
