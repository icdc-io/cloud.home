import React from 'react';

const FooterTraditional = ({ t, urls }) => {
    return (
        <section>
            <div className='footer'>
                <p>®{ new Date().getFullYear() } { urls.footer_message }</p>
                <a href={ urls.privacy_policy_url } rel='noopener noreferrer' target='_blank'>{ t('privacy') }</a>
                <div className='line' />
                <a href={ urls.cookies_policy_url } rel='noopener noreferrer' target='_blank'>{ t('cookies') }</a>
                <div className='line' />
                <a href={ urls.status_page_url } rel='noopener noreferrer' target='_blank'>{ t('status') }</a>
            </div>
        </section>
    );
};

export default FooterTraditional;
