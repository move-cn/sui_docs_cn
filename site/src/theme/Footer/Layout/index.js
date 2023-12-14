// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect } from "react";
import Link from "@docusaurus/Link";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import * as amplitude from "@amplitude/analytics-browser";

export default function FooterLayout({ style, links, logo, copyright }) {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    amplitude.init(siteConfig.customFields.amplitudeKey, {
      defaultTracking: true,
    });
  }, [siteConfig.customFields.amplitudeKey]);


  return (
    <footer className="px-2 pb-2 bg-sui-black">
      <div className="bg-sui-card-dark text-white rounded-sui flex flex-row flex-wrap-reverse">
        <div className="flex-0 lg:w-1/3 pl-8 pb-8 lg:pt-12 pt-0 lg:text-left">
          <div className="discord-icon inline p-2">
            <Link to="https://discord.gg/Sui">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="35.4762"
                  height="35.4762"
                  rx="17.7381"
                  fill="#4CA2FF"
                />
                <path
                  d="M35.4762 17.7381C35.4762 27.5384 27.5384 35.4762 17.7381 35.4762C7.9378 35.4762 0 27.5384 0 17.7381C0 7.9378 7.9378 0 17.7381 0C27.5384 0 35.4762 7.9378 35.4762 17.7381ZM14.492 27.0949C22.3589 27.0949 26.6604 20.5762 26.6604 14.9266C26.6604 14.7404 26.6604 14.5541 26.6515 14.3767C27.4852 13.7736 28.2124 13.0198 28.7889 12.1595C28.0262 12.4965 27.2014 12.7271 26.3322 12.8335C27.2191 12.3014 27.8932 11.4677 28.2124 10.4655C27.3876 10.9533 26.4741 11.308 25.4985 11.5032C24.718 10.6695 23.6094 10.1551 22.3766 10.1551C20.0174 10.1551 18.1017 12.0708 18.1017 14.4299C18.1017 14.767 18.1372 15.0951 18.217 15.4055C14.6605 15.2282 11.512 13.5253 9.40119 10.9355C9.03756 11.5652 8.8247 12.3014 8.8247 13.0818C8.8247 14.563 9.57857 15.8756 10.7315 16.6383C10.0309 16.6206 9.37458 16.4255 8.79809 16.1062C8.79809 16.1239 8.79809 16.1417 8.79809 16.1594C8.79809 18.2348 10.2704 19.9554 12.2304 20.3545C11.8757 20.452 11.4943 20.5052 11.104 20.5052C10.8291 20.5052 10.563 20.4786 10.297 20.4254C10.838 22.1283 12.4167 23.3611 14.288 23.3965C12.8246 24.5407 10.9799 25.2236 8.97548 25.2236C8.62958 25.2236 8.29256 25.2058 7.95554 25.1615C9.8269 26.3854 12.0796 27.0949 14.492 27.0949Z"
                  fill="#4CA2FF"
                />
                <path
                  d="M24.5019 11.0083C23.2581 10.4303 21.9248 10.0032 20.5306 9.76028C20.5181 9.75783 20.5053 9.75941 20.4938 9.76481C20.4823 9.77021 20.4727 9.77917 20.4663 9.79044C20.2956 10.0995 20.1054 10.5024 19.972 10.8207C18.4933 10.593 16.99 10.593 15.5113 10.8207C15.3628 10.4679 15.1953 10.124 15.0097 9.79044C15.0034 9.77903 14.9938 9.76987 14.9824 9.76419C14.9709 9.7585 14.958 9.75655 14.9454 9.75861C13.552 10.0015 12.2187 10.4287 10.9741 11.0074C10.9634 11.0121 10.9543 11.02 10.9481 11.0301C8.41808 14.862 7.72461 18.5992 8.06525 22.2896C8.0662 22.2986 8.06892 22.3074 8.07325 22.3153C8.07759 22.3232 8.08344 22.3302 8.09045 22.3357C9.56713 23.4433 11.2142 24.2871 12.9626 24.8316C12.9748 24.8355 12.9878 24.8355 13 24.8316C13.0122 24.8277 13.0229 24.8202 13.0309 24.8099C13.4071 24.2915 13.7405 23.7415 14.0276 23.1657C14.0316 23.1578 14.0339 23.1492 14.0343 23.1403C14.0348 23.1314 14.0334 23.1226 14.0302 23.1143C14.0271 23.1061 14.0222 23.0986 14.016 23.0924C14.0098 23.0863 14.0024 23.0816 13.9943 23.0786C13.4691 22.8748 12.9602 22.629 12.4724 22.3432C12.4636 22.3381 12.4562 22.3307 12.4509 22.3219C12.4455 22.3131 12.4424 22.303 12.4418 22.2927C12.4411 22.2823 12.443 22.2719 12.4472 22.2625C12.4514 22.253 12.4578 22.2448 12.4659 22.2385C12.5683 22.1606 12.6707 22.0794 12.7683 21.9981C12.7771 21.9908 12.7877 21.9862 12.7989 21.9847C12.81 21.9832 12.8214 21.985 12.8317 21.9897C16.0243 23.4672 19.4818 23.4672 22.637 21.9897C22.6473 21.9847 22.6588 21.9827 22.6701 21.984C22.6815 21.9854 22.6923 21.99 22.7012 21.9973C22.7988 22.0794 22.9004 22.1606 23.0036 22.2385C23.0118 22.2446 23.0183 22.2528 23.0226 22.2621C23.027 22.2715 23.029 22.2818 23.0285 22.2922C23.028 22.3026 23.0251 22.3127 23.0199 22.3216C23.0147 22.3305 23.0074 22.3379 22.9987 22.3432C22.5126 22.6313 22.0069 22.8751 21.476 23.0778C21.4679 23.0808 21.4605 23.0856 21.4543 23.0919C21.4481 23.0981 21.4432 23.1056 21.4401 23.114C21.4369 23.1223 21.4355 23.1312 21.436 23.1401C21.4364 23.1491 21.4387 23.1578 21.4427 23.1657C21.7354 23.7411 22.0703 24.2889 22.4386 24.809C22.4463 24.8197 22.4569 24.8277 22.4691 24.8319C22.4814 24.8361 22.4946 24.8363 22.5069 24.8325C24.2583 24.2894 25.908 23.4453 27.3864 22.3357C27.3936 22.3305 27.3996 22.3238 27.4041 22.316C27.4086 22.3082 27.4114 22.2995 27.4124 22.2904C27.8189 18.0238 26.7311 14.3167 24.5271 11.0317C24.5217 11.0211 24.5128 11.0127 24.5019 11.0083ZM14.5048 20.0424C13.5439 20.0424 12.7512 19.147 12.7512 18.0489C12.7512 16.95 13.5284 16.0555 14.5048 16.0555C15.4885 16.0555 16.2738 16.9576 16.2584 18.0489C16.2584 19.1478 15.4812 20.0424 14.5048 20.0424ZM20.9883 20.0424C20.0265 20.0424 19.2347 19.147 19.2347 18.0489C19.2347 16.95 20.0111 16.0555 20.9883 16.0555C21.972 16.0555 22.7573 16.9576 22.7418 18.0489C22.7418 19.1478 21.9728 20.0424 20.9883 20.0424Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="x-icon inline p-2">
            <Link to="https://twitter.com/Mysten_Labs">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.476074"
                  width="35.4762"
                  height="35.4762"
                  rx="17.7381"
                  fill="white"
                />
                <path
                  d="M35.9523 17.7381C35.9523 27.5384 28.0145 35.4762 18.2142 35.4762C8.41387 35.4762 0.476074 27.5384 0.476074 17.7381C0.476074 7.9378 8.41387 0 18.2142 0C28.0145 0 35.9523 7.9378 35.9523 17.7381ZM14.9681 27.0949C22.8349 27.0949 27.1364 20.5762 27.1364 14.9266C27.1364 14.7404 27.1364 14.5541 27.1276 14.3767C27.9613 13.7736 28.6885 13.0198 29.265 12.1595C28.5023 12.4965 27.6774 12.7271 26.8083 12.8335C27.6952 12.3014 28.3692 11.4677 28.6885 10.4655C27.8637 10.9533 26.9502 11.308 25.9746 11.5032C25.1941 10.6695 24.0855 10.1551 22.8527 10.1551C20.4935 10.1551 18.5778 12.0708 18.5778 14.4299C18.5778 14.767 18.6133 15.0951 18.6931 15.4055C15.1366 15.2282 11.9881 13.5253 9.87726 10.9355C9.51363 11.5652 9.30078 12.3014 9.30078 13.0818C9.30078 14.563 10.0546 15.8756 11.2076 16.6383C10.507 16.6206 9.85066 16.4255 9.27417 16.1062C9.27417 16.1239 9.27417 16.1417 9.27417 16.1594C9.27417 18.2348 10.7464 19.9554 12.7065 20.3545C12.3517 20.452 11.9704 20.5052 11.5801 20.5052C11.3052 20.5052 11.0391 20.4786 10.773 20.4254C11.314 22.1283 12.8927 23.3611 14.7641 23.3965C13.3007 24.5407 11.456 25.2236 9.45155 25.2236C9.10566 25.2236 8.76863 25.2058 8.43161 25.1615C10.303 26.3854 12.5557 27.0949 14.9681 27.0949Z"
                  fill="#4CA2FF"
                />
              </svg>
            </Link>
          </div>
          <div className="medium-icon inline p-2">
            <Link to="https://medium.com/mysten-labs">
              <svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18.6924" cy="17.74" r="17.74" fill="#4CA2FF" />
                <path
                  d="M18.9866 25.1246L14.7248 25.0468C13.3449 25.0196 11.9616 25.0738 10.6088 24.7928C8.55081 24.3731 8.40502 22.315 8.25246 20.5886C8.04225 18.1616 8.12363 15.6905 8.52032 13.2837C8.74427 11.9333 9.62558 11.1274 10.9885 11.0397C15.5894 10.7215 20.2208 10.7592 24.8115 10.9077C25.2964 10.9213 25.7845 10.9957 26.2626 11.0804C28.6224 11.4934 28.68 13.8256 28.833 15.789C28.9855 17.7726 28.9211 19.7664 28.6295 21.7365C28.3956 23.3677 27.948 24.7356 26.0591 24.8676C23.6925 25.0403 21.3802 25.1793 19.0069 25.1351C19.007 25.1246 18.9934 25.1246 18.9866 25.1246ZM16.4811 20.9949C18.2645 19.9725 20.014 18.9672 21.7872 17.9517C20.0004 16.9294 18.2543 15.9241 16.4811 14.9086V20.9949Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="linkedin-icon inline p-2">
            <Link to="https://www.linkedin.com/company/mysten-labs/">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_2801)">
                  <rect
                    x="0.432373"
                    width="35.48"
                    height="35.48"
                    rx="17.74"
                    fill="white"
                  />
                  <circle cx="18.1724" cy="17.74" r="17.74" fill="#4CA2FF" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8632 25.0004H14.1599V14.3498H10.8632V25.0004ZM10.5464 10.9898C10.5464 12.0751 11.4192 12.955 12.4959 12.955C13.5725 12.955 14.4453 12.0751 14.4452 10.9898C14.4452 9.90441 13.5724 9.02454 12.4959 9.02454C11.4193 9.02454 10.5464 9.90441 10.5464 10.9898ZM23.2335 25.0004H26.5141L26.5142 18.2566C26.5142 15.4039 24.8975 14.0249 22.6391 14.0249C20.3807 14.0249 19.4296 15.7843 19.4296 15.7843V14.3498H16.2677V25.0004H19.4296V19.4097C19.4296 17.9119 20.119 17.0204 21.4386 17.0204C22.651 17.0204 23.2335 17.8763 23.2335 19.4097V25.0004Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2801">
                    <rect
                      x="0.432373"
                      width="35.48"
                      height="35.48"
                      rx="17.74"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          {(logo || copyright) && (
            <div className="footer__bottom">
              {logo && <div className="margin-bottom--sm">{logo}</div>}
              {copyright}
            </div>
          )}
        </div>
        <div className="flex-0 lg:w-2/3 w-full xl:text-8xl text-4xl lg:text-right text-center">
          <p className="p-8 mb-0">Sui 中文文档</p>
        </div>
      </div>
    </footer>
  );
}
