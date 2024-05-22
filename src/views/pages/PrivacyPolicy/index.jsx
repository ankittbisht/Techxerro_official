import React from "react";
import Banner from "../../../Components/utils/Banner/Banner";
import './style.scss';

const PrivacyPolicy =()=>{
    return(
        <>
        <Banner
            subtitle="Privacy Policy"
            // para="Lorem Ispum is a dummy text."
        style={{height: '400px'}}/>
        <section className="privacy-section pt-5 pb-5 ">
            <div className="container pt-5 pb-5 ">
                <div className="row">
                    <div className="col-12">
                        <p>
                            At Techxerro, accessible from https://www.techxerro.com/, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document outlines the types of information that are collected and recorded by Techxerro and how we use it.
                        </p>
                        <p> If you have any questions or require further information about our Privacy Policy, please contact us.<br/></p>

                        <h5>Consent</h5>
                        <p>By using our website and services, you hereby consent to our Privacy Policy and agree to its terms.</p>

                        <h5>Information We Collect</h5>
                        <p>The information we collect depends on your interaction with us.</p>

                        <p>For website visitors who do not sign up or contact us, we collect:</p>
                        <ul>
                            <li>IP Address</li>
                            <li>Anonymous tracking data (pages viewed, time on site, etc.)</li>
                            <li>Basic demographic data (browser, location, etc.)</li>
                        </ul>

                        <p>For visitors contacting us via forms or email, we collect the above plus any information provided, such as:</p>
                        <ul>
                            <li>Name</li>
                            <li>Email address </li>
                            <li>Phone number</li>
                        </ul>

                        <p>For users of our services, we collect:</p>
                        <ul>
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Billing address (if invoicing is required)</li>
                        </ul>

                        <h5>How We Use Your Information</h5>
                        <p>We may process or share data for legitimate business interests, fulfillment of contracts, legal obligations, or vital interests as described in detail below:</p>

                        <ul>
                            <li>With service providers performing services on our behalf </li>
                            <li>For business transfers/acquisitions</li>
                            <li>For marketing and promotional communications (which you can opt-out of)</li>
                            <li>To provide, operate, analyze, and improve our services</li>
                            <li>To communicate with you and provide customer support</li>
                            <li>To detect and prevent fraud</li>
                        </ul>

                        <p>We will only keep your personal data for as long as necessary to fulfill the purposes outlined here, typically no longer than 1 year after last consent.</p>

                        <h5>Your Privacy Rights</h5>
                        <p>Depending on your region, you may have certain data protection rights, such as the right to access, rectify, erase, restrict processing, port data, or object to processing of your personal information. To exercise these rights, please contact us.</p>

                        <p>We comply with the EU General Data Protection Regulation (GDPR) requirements, as well as providing rights under CCPA for California residents to access, delete, or opt-out of sale of their personal information.</p>

                        <h5>Third Parties </h5>
                        <p>We may use third-party service providers to facilitate our services, analysis, payments, etc. These providers have access only as needed to perform their services for us and cannot use your data for other purposes. Refer to their privacy policies: Google Analytics, Facebook Ads, CCAvenue.</p>

                        <h5>Your Privacy Controls</h5>
                        <p>You can control tracking and targeted advertising cookies via your browser settings. Our website may contain third-party links we don't operate or control.</p>

                        <h5>Children's Information</h5>
                        <p>We do not knowingly collect personal information from children under 13. If you believe we have collected your child's information, please contact us.</p>

                        <h5>Privacy Policy Updates</h5>
                        <p>We may update this policy with material changes that will be effective upon posting the updated policy on this page.</p>

                        <h5>Contact Us</h5>
                        <p>For any questions or concerns about this Privacy Policy and your data rights, please email: solutions@techxerro.com</p>

                        <p>Techxerro Inc.<br/>
                        A28 ,Sector 4<br/>
                        Noida 201301
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}
export default PrivacyPolicy 