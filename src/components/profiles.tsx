// Gatsby supports TypeScript natively!
import React, { useState, useEffect } from "react"
import { PageProps, Link } from "gatsby"



import ImageFred from 'images/ff.jpg';
import ImageGreg from 'images/gk.jpg';


/*

Fred Forster
Co-Founder
Email: Fred@youareuncommon.com
LinkedIn: https://www.linkedin.com/in/fredforster/
Github: https://github.com/FredUncommon

Greg Kalym
Co-Founder
Email : Greg@youareuncommon.com
LinkedIn : https://www.linkedin.com/in/greg-kalym-1567652/
Github : https://github.com/GregUncommon

*/


// TODO - Array of profile information for team growth
const Greg = () => (
  <div className={`profile profile-greg`}>
    <div className={`profile-container`}>
      <div className={`profile-image`} style={{ backgroundImage: `url(${ImageGreg})` }} title="Photo of Greg Kalym"></div>
      <h4>Greg Kalym</h4>
      <h5>Co-Founder</h5>
      <div className={`social-icon-container`}>
        <a className={`social-icon social-icon-linkedin`} href="https://www.linkedin.com/in/greg-kalym-1567652/" target="_blank">LinkedIn</a>
        <a className={`social-icon social-icon-github`} href="https://github.com/GregUncommon" target="_blank">GitHub</a>
        <a className={`social-icon social-icon-email`} href="mailto:greg@youareuncommon.com">greg@youareuncommon.com</a>
      </div>
    </div>
  </div>
);

const Fred = () => (
  <div className={`profile profile-fred`}>
    <div className={`profile-container`}>
      <div className={`profile-image`} style={{ backgroundImage: `url(${ImageFred})` }} title="Photo of Fred Forster"></div>
      <h4>Fred Forster</h4>
      <h5>Co-Founder</h5>
      <div className={`social-icon-container`}>
        <a className={`social-icon social-icon-linkedin`} href="https://www.linkedin.com/in/fredforster/" target="_blank">LinkedIn</a>
        <a className={`social-icon social-icon-github`} href="https://github.com/FredUncommon" target="_blank">GitHub</a>
        <a className={`social-icon social-icon-email`}  href="mailto:fred@youareuncommon.com">fred@youareuncommon.com</a>
      </div>
    </div>
  </div>
)

const Profiles = () => {
  return (
    <div className={`profiles`}>
      {/* { [ <Fred key="0" />, <Greg key="1" /> ].sort(() => Math.random() - 0.2 ) } */}
      <Greg />
      <Fred />
    </div>
  );
};



export default Profiles;
