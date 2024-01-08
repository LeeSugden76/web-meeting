import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import ZataHubTeam2 from "../../../assets/images/zatahub-team-2.jpg";
import LinkedIn from "../../../assets/images/icons/linkedin.svg";

const Team2 = () => {
  return (
    <>
      <div className="team-block">
        <div className="profile-image">
          <Image src={ZataHubTeam2} alt="ZataHub Team" />
          <Link to="https://www.linkedin.com/" target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.6378 0H2.36222C1.73572 0 1.13488 0.248877 0.691879 0.691879C0.248877 1.13488 0 1.73572 0 2.36222V29.6378C0 30.2643 0.248877 30.8651 0.691879 31.3081C1.13488 31.7511 1.73572 32 2.36222 32H29.6378C30.2643 32 30.8651 31.7511 31.3081 31.3081C31.7511 30.8651 32 30.2643 32 29.6378V2.36222C32 1.73572 31.7511 1.13488 31.3081 0.691879C30.8651 0.248877 30.2643 0 29.6378 0ZM9.53778 24.8544C9.53778 26.183 8.46077 27.26 7.13222 27.26C5.80367 27.26 4.72667 26.183 4.72667 24.8544V14.3833C4.72667 13.0548 5.80367 11.9778 7.13222 11.9778C8.46077 11.9778 9.53778 13.0548 9.53778 14.3833V24.8544ZM7.12889 9.86C6.58315 9.85693 6.05055 9.69226 5.59831 9.38678C5.14607 9.08131 4.79445 8.64871 4.58784 8.14359C4.38122 7.63846 4.32886 7.08346 4.43738 6.54861C4.54589 6.01376 4.8104 5.52304 5.19754 5.13838C5.58468 4.75372 6.07709 4.49236 6.61262 4.38728C7.14816 4.28221 7.70282 4.33812 8.2066 4.54798C8.71039 4.75784 9.14072 5.11222 9.44329 5.56642C9.74585 6.02061 9.9071 6.55426 9.90667 7.1C9.91182 7.46538 9.84335 7.82805 9.70535 8.16641C9.56735 8.50476 9.36264 8.81187 9.10343 9.06942C8.84421 9.32698 8.5358 9.52971 8.19657 9.66553C7.85733 9.80136 7.49423 9.86749 7.12889 9.86ZM27.2717 24.8692C27.2714 26.197 26.1948 27.2733 24.867 27.2733C23.5389 27.2733 22.4622 26.1967 22.4622 24.8686V18.9244C22.4622 16.4622 21.4156 15.7022 20.0644 15.7022C18.6378 15.7022 17.2378 16.7778 17.2378 18.9867V24.8678C17.2378 26.1963 16.1608 27.2733 14.8322 27.2733C13.5037 27.2733 12.4267 26.1963 12.4267 24.8678V14.3022C12.4267 13.0246 13.4624 11.9889 14.74 11.9889H15.9944C16.5793 11.9889 17.0533 12.463 17.0533 13.0478V14.0683C17.0533 14.0895 17.0705 14.1067 17.0917 14.1067C17.1063 14.1067 17.1194 14.0989 17.126 14.0859C17.6039 13.1432 19.2249 11.56 21.6889 11.56C24.3733 11.56 27.2733 13.1533 27.2733 17.82L27.2717 24.8692Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
        <div className="team-detail">
          <h3>anne hathaway</h3>
          <p>CTO</p>
          {/* <div className="p-3">
            <img src={LinkedIn} alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Team2;
