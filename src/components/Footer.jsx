import React from 'react'
import { ExternalLink } from 'react-external-link'

const Footer = () =>
{
    return (
        <div id="footer">
            <p style={{ fontSize: '14px', padding: '1em 0', opacity: '.8' }}>No Rights Reserved. This is just a personal project for my Portfolio.</p>
            <ExternalLink href="https://www.slbenfica.pt/en-us/" target="_blank">
                Credits: Visit Official Sport Lisboa e Benfica website here.
            </ExternalLink>
        </div>
    )
}

export default Footer