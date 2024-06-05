import React from "react";
import Banner from "../../../Components/utils/Banner/Banner";
import "./style.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Banner
        subtitle="Privacy Policy"
        // para="Lorem Ispum is a dummy text."
        style={{ height: "400px" }}
      />
      <section className="privacy-section pt-5 pb-5 ">
        <div className="container pt-5 pb-5 ">
          <div className="row">
            <div className="col-12">
              <p>
                <b>Techxerro </b>
                ("we," "us," or "our") is committed to protecting the privacy of
                our clients and website visitors. This Privacy Policy explains
                what information we collect, how we use it, and under what
                circumstances we may disclose it.
              </p>

              <h5>Information We Collect</h5>
              <p>
                We collect information from users in two ways: (1) through our
                website and (2) through direct communication with us.
              </p>
              <ul>
                <li>
                  <b>Website Visitors:</b>

                  <ul>
                    <li>
                      <b>For visitors who do not sign up or contact us: </b>
                      We collect:
                      <ol type="1">
                        <li>IP Address</li>
                        <li>
                          Anonymous tracking data (pages viewed, time on site,
                          etc.)
                        </li>
                        <li>
                          Basic demographic data (browser, location, etc.)
                        </li>
                      </ol>
                    </li>
                    <li>
                      <b>For visitors contacting us via forms or email: </b>
                      We collect the above plus any information provided, such
                      as:
                      <ol type="1">
                        <li>Name</li>
                        <li>Email address </li>
                        <li>Phone number</li>
                      </ol>
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Users of Our Services:</b>
                  <ul>
                    <li>
                      We collect:
                      <ol type="1">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Billing address (if invoicing is required)</li>
                      </ol>
                    </li>
                  </ul>
                </li>
              </ul>

              <h5>Use of Information</h5>
              <p>We use the information we collect to:</p>

              <ul>
                <li>Provide and improve our website and services</li>
                <li>Respond to inquiries and requests</li>
                <li>
                  Send marketing and promotional communications (with consent)
                </li>
                <li>Analyze website traffic and user behaviour</li>
                <li>Improve the effectiveness of our marketing campaigns</li>
                <li>Fulfill our contractual obligations with clients</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>

              <h5>Data Sharing and Disclosure</h5>
              <p>
                We may share your information with third-party service providers
                who help us operate our website, analysis, payments and deliver
                our services. These service providers are contractually
                obligated to keep your information confidential and secure.
              </p>

              <p>
                We may disclose your information if we are required to do so by
                law, in response to a legal process, or to protect the rights or
                safety of ourselves or others.
              </p>
              <p>
                We will not sell or transfer your personal information to any
                third party without your consent, except as described in this
                Privacy Policy.
              </p>

              <h5>Data Retention </h5>
              <p>
                We will only keep your personal data for as long as necessary to
                fulfil the purposes outlined here, typically no longer than 1
                year after the last consent. We will then delete your
                information in a secure manner.
              </p>

              <h5>International Data Transfer</h5>
              <p>
                As a company operating in India, we may transfer your
                information to countries outside of India, including the United
                States, Europe, and Canada. These countries may have different
                data protection laws than India. However, we will take steps to
                ensure that your information is treated in accordance with this
                Privacy Policy and applicable law.
              </p>

              <h5>Your Rights</h5>
              <p>
                You have certain rights with respect to your personal
                information. These rights may vary depending on the applicable
                law. These rights may include:
              </p>

              <ul>
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate personal information</li>
                <li>
                  The right to request the erasure of your personal information
                </li>
                <li>
                  The right to object to the processing of your personal
                  information
                </li>
                <li>
                  The right to withdraw your consent to the processing of your
                  personal information (where applicable)
                </li>
              </ul>

              <h5>Children's Privacy</h5>
              <p>
                Our website and services are not directed to children under the
                age of 18. We do not knowingly collect personal information from
                children under 18. If you are a parent or guardian and you
                believe that your child has provided us with personal
                information, please contact us.
              </p>

              <h5>Cookies</h5>
              <p>
                We use cookies on our website. Cookies are small text files that
                are stored on your computer or mobile device when you visit a
                website. They allow us to recognize your device and preferences
                on subsequent visits. You can choose to disable cookies through
                your browser settings. However, this may limit your ability to
                use certain features of our website
              </p>
              <h5>Security</h5>
              <p>
                We have implemented security measures to protect your
                information from unauthorized access, disclosure, alteration, or
                destruction. However, no website or internet transmission is
                completely secure. We cannot guarantee the security of your
                information.
              </p>

              <h5>Changes to this Privacy Policy</h5>
              <p>
                We may update this Privacy Policy from time to time. We will
                post any changes on our website. We encourage you to review this
                Privacy Policy periodically for the latest information on our
                privacy practices.
              </p>
              <h5>Contact Us</h5>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at [solutions@techxerro.com].
              </p>
              <p>
                Techxerro Inc.
                <br />
                A28 ,Sector 4<br />
                Noida 201301
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PrivacyPolicy;
