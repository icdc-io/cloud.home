import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Body from './Body';
import FooterTraditional from './FooterTraditional';
import { fetchLocationData } from '../AppActions';

const defaultLocationGeneral = {
    footerMessage: 'IBA IT Park. All rights reserved.',
    privacyPolicyUrl: 'https://ibacloud.by/privacy-policy-en',
    cookiesPolicyUrl: 'https://ibacloud.by/cookies-policy-en',
    statusPageUrl: 'https://status.ibacloud.by',
    backToUrl: 'https://ibacloud.by'
};

const Landing = ({ t, user, services }) => {
    const [ urls, setUrls ] = useState(defaultLocationGeneral);

    useEffect(() => {
        fetchLocationData(user.location).then(
            (responce) => {
                const data = responce;
                const urlData = {
                    footerMessage: data.footer_message || defaultLocationGeneral.footerMessage,
                    privacyPolicyUrl: data.privacy_policy_url || defaultLocationGeneral.privacyPolicyUrl,
                    cookiesPolicyUrl: data.cookies_policy_url || defaultLocationGeneral.cookiesPolicyUrl,
                    statusPageUrl: data.status_page_url || defaultLocationGeneral.statusPageUrl,
                    backToUrl: data.back_to_url || defaultLocationGeneral.backToUrl
                };
                setUrls(urlData);
            }
        );
    }, [ user ]);

    return (
        <>
            <Body t={t} user={user} urls={ urls } services={services} />
            <FooterTraditional t={t} urls={ urls }/>
        </>
    );
};

export default withRouter(Landing);
