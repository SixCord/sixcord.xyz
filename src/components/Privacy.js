import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

export default function Privacy(props) {
  console.log(props.match.params);
  return (
    <div>
    <div className="privacy">
  <div className="document-header">
    <div className="document-name">
      <h1>Privacy Policy</h1></div>
    <div className="document-subtitle">
      <h3>Last updated and effective: February 12, 2021</h3></div></div>
  <div className="document-paragraph">
    <p>SixCord ("us", "we", or "our") operates the https://sixcord.xyz website (hereinafter referred to as the "Service").</p>
    <p>This page informs you of our policies regarding the collection, use, and disclosure of Personal Data when you use our Service and the choices you have associated with that data.</p>
    <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://sixcord.xyz</p>
  </div>
  <div className="document-title">
    <h2>Information Collection and Use</h2>
  </div>
  <div className="document-paragraph">
    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
    <h3>Types of Data collected</h3>
    <div className="document-subparagraph">
      <h4>Personal Data</h4>
    </div>
    <div className="document-paragraph">
      <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
      <div className="document-items">
        <ul>
          <li>Email address</li>
          <li>Your IP address</li>
          <li>Cookies and Usage Data</li>
        </ul>
      </div>
    </div>
    <div className="document-subparagraph">
      <h4>Tracking &amp; Cookies Data</h4>
    </div>
    <div className="document-paragraph">
      <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
      <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
      <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
      <p>Example of Cookies we use:</p>
      <li><b>Session Cookies.</b>  We use Session Cookies to operate our Service. We also use Google Analytics, which uses cookies for general statistical data to make a better user experience.</li>
    </div>
    <div className="document-subparagraph">
      <h4>Usage Data</h4>
    </div>
    <div className="document-paragraph">
      <p>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
    </div>
    <div className="document-title">
      <h2>Use of Data</h2>
    </div>
    <div className="document-paragraph">
      <p>SixCord uses the collected data for various purposes:</p>
    </div>
    <div className="document-items">
      <ul>
        <li>To provide and maintain the Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer care and support</li>
        <li>To provide analysis or valuable information so that we can improve the Service</li>
        <li>To monitor the usage of the Service</li>
      </ul>
    </div>
    <div className="document-title">
      <h2>Transfer of Data</h2>
    </div>
    <div className="document-paragraph">
      <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
      <p>If you are located outside Spain and choose to provide information to us, please note that we transfer the data, including Personal Data, to Spain and process it there.</p>
      <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
      <p>SixCord will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
    </div>
    <div className="document-title">
      <h2>Disclosure of Data</h2>
    </div>
    <div className="document-subparagaprh">
      <h3>Legal Requirements</h3>
    </div>
    <div className="document-paragraph">
      <p>SixCord may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
    </div>
    <div className="document-items">
      <ul>
        <li>To comply with a legal obligation</li>
        <li>To protect and defend the rights or property of SixCord</li>
        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>To protect the personal safety of users of the Service or the public</li>
        <li>To protect against legal liability</li>
      </ul>
    </div>
    <div className="document-title">
      <h2>Security of Data</h2>
    </div>
    <div className="document-paragraph">
      <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
    </div>
    <div className="document-title">
      <h2>Your Data Protection Rights under the General Data Protection Regulation (GDPR)</h2>
    </div>
    <div className="document-paragraph">
      <p>If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>
      <p>In certain circumstances, you have the following data protection rights:</p>
    </div>
    <div className="document-items">
      <ul>
        <li><b>The rights to access, update, or delete information we have on you.</b> Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If your unable to perfom these actions yourself, please contact us to assist you.</li>
        <li><b>The right to rectification.</b> You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
        <li><b>The right to object.</b> You have the right to object to our processing of your Personal Data</li>
        <li><b>The right of restriction.</b> You have the right to request that we restrict the processing of your personal information.</li>
        <li><b>The right to data portability.</b> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li>
      </ul>
    </div>
    <div className="document-paragraph">
      <p>Please note that we may ask you to verify your identity before responding to such requests.</p>
    </div>
    <div className="document-title">
      <h2>Service Providers</h2>
    </div>
    <div className="document-paragraph">
      <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
      <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
    </div>
    <div className="document-subparagrah">
      <h3>Analytics</h3>
    </div>
    <div className="document-paragraph">
      <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
    </div>
    <div className="document-items">
      <ul>
        <li><b>Google Analytics</b>
          <div className="document-paragraph">
            <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>
            <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.</p>
            <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page:
              <a href="https://policies.google.com/privacy?hl=en" target="_blank">https://policies.google.com/privacy?hl=en <i className="fas fa-external-link-alt" /></a></p>
          </div></li>
      </ul>
    </div>
    <div className="document-title">
      <h2>Links to Other Sites</h2>
    </div>
    <div className="document-paragraph">
      <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
      <p>We have no control over and assume no responsibility for the content, privacy policies or practicies of any third party sites or services.</p>
    </div>
    <div className="document-title">
      <h2>Children's Privacy</h2>
    </div>
    <div className="document-paragraph">
      <p>Our service does not address anyone under the age of 13 ("Children").</p>
      <p>We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Child has provided us with Persoanl Data, please contact us. If we become aware that was collecred Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
    </div>
    <div className="document-title">
      <h2>Changes to this Privacy Policy</h2>
    </div>
    <div className="document-paragraph">
      <p>We may update our Privacy Policy from the time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "Last updated and effective" at the top of this Privacy Policy</p>
      <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
    </div>
    <div className="document-title">
      <h2>Contact Us</h2>
    </div>
    <div className="document-paragraph">
      <p>Please also feel free to contact us if you have any questions about this Privacy Policy. You may contact us as follows: <a href="mailto:privacy@sixcord.xyz">privacy@sixcord.xyz</a>.</p>
    </div>
  </div>
</div>
</div>
  );
}
