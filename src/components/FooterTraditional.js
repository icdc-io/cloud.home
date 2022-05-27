import React from 'react';

const FooterTraditional = ({ t, urls }) => {
    return (
        <section>
            <div className='footer'>
                <p>®{ new Date().getFullYear() } { urls.footerMessage }</p>
                <a href={ urls.privacyPolicyUrl } rel='noopener noreferrer' target='_blank'>{ t('privacy') }</a>
                <div className='line' />
                <a href={ urls.cookiesPolicyUrl } rel='noopener noreferrer' target='_blank'>{ t('cookies') }</a>
                <div className='line' />
                <a href={ urls.statusPageUrl } rel='noopener noreferrer' target='_blank'>{ t('status') }</a>
            </div>
        </section>
    );
};

export default FooterTraditional;
