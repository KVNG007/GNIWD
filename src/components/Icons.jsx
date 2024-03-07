import React from 'react'


export const IWDLogoPurple = ({color = "green", size = 150, className}) => {
  return (
    <svg
      width="68"
      height="63"
      viewBox="0 0 68 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width="68" height="63" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_8_36"
            transform="matrix(0.0203371 0 0 0.0218002 0 -0.0232046)"
          />
        </pattern>
        <image
          id="image0_8_36"
          width="397"
          height="48"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY0AAAAwCAYAAADthCbOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAD6ZJREFUeNrsXUtS40wSLhMcQP8JECf4TcTskU9gEzF77BM0Xs8CWMza5gQ2+4nAnACxnwjUJ2j1CVpzgh4lZNHpdL0kS7KA/CIUTduypKp8fJlZDw1Ug/jnP/4Vl//AMSyPiH2dlkfxn//+O1MCgUAg+JAY7EkSQAyT8hiXR2IgChuAQJ7LYyMkIhAIBJ+cNEqyAIK4LI9pA88ApHFXksdaxCEQCASfiDSw/LTCrKJp5OUxL8ljI2IRCASCD04aJWHclP9cd/BMaXlclORRiHgEAoGgXzgOIAsYp3hSb4PbTQOIYV0e/2OfT8tjKeIRCASCD5RplIQxRMKIWrr/bZlR3OAYSRDJyMC5QCAQ9JA0OiCMV9JQb2MZqwq/OS2JIxfRCQQCQfc4shBG3AFhaMQVzi2EMAQCgeBwODYQBhDFwx6EAU4dSkjfyWcn6m1MZJ9xERj/GInIBH0F2s4LBkIXMhNQ8CVIQ73NkKrq3IEo7stj7coEyGJAWOOR1CCNvCHjfl2xXj5rKipwEOeaqM85PjUkmfO38tg0qYsVz4XniEXH99LRXCobuxgYOuqpoiOHwexlTaFEaGihU3mX5b3mDRDGC/53XufZPde/wnYtv/K0YVs/lJ8/kYDhU0XjzH7Ssm2jCrro1G12LgRnMw9h/Ag5V2DsvwcMbiGw+auF678EBOZAVkD4d30LrviYRpUBaWjIWV2nCxFQDYdxhcazDybk73ELTmOBJLj4wkY3Jf1wxb5OWGT+lRFZ+sWES4sO+3Q8FhqobMMTg3yazkh9ALmBHb0AiWGVpl+kgYYeqmDr8hgdKHX7KM74Kxtr7Ak2TH9/RRQVHAkllcgzTT2SPq6Na+bn2sYtO5aYYfAg4KkvxHFs6SwX0gOnuwmk31Jr/LAYoYP88mtuoP2lLtMod2jqEyw3cVIZG5yLxjn5+7uoXKUsI2EOvW0duLE8S4w+eUqCCih9nvUi0ygfcBIYGYOjvuhZNCD4WI6ywNKkRMAYhAVkaEngZ6brSHBVM8s4ZGAK98bgnAboQ9zOqReZRmhtf9by4G6GCu9LwyasM5uIMuCeuv7+OniLbD8hzwNt33BlwvMgIjihhosCTk0zWHBshtemrVvFk/MzPRaEZK8jUD22VKsNjj7hAYXp/q+fkX6gke457QfSjsI1Hsbapp87dfRPdKC2p3vOUMoIAcD1TON81D43+FxDR8YdE+eTVuhfa9+Y5GYoae/or0EGTj0PkEGOvy8sv9ETMDaYyZmuYZOZNcuwXCdYn/Ygj3V573OScXwr/790tJ/L9b2/LD4kaOIOue5mgB/8CnDU3tkgNZ01PPQCjWeEjQoZkB/VMVa28eJ7m9jncySAK8tltma6sBlBJpxpI0HBLRznp0jOnJjoPU5Z6kqVPLgN6m3mm8v4ri16oTPOBzSi11kmAXr0F8p2YpMh9s+DI+qG83c2tKwqvz3anmHAohe/QkR4SsobT1Xshei/jm5nhnN0v0Lb77B/dBC3NpRYngjJnRmMf+WQk7FvyIwihe2/tsgInmeOTurGURUwyjFQBvCbO17aYW0Hp/iIfRuF2Fn5+xXa1C29NpnYEVWxWYfMfxNSGAScD/f9xYJ3k9xXFpkUKLNLIsNTPPfJ5NMc90+P9NzvgLa2Ut/DqGWEDqRAYYdkM0nLaeqV4/srNCIqFBcK4hB9BAPfvXhmiT2o3XeZFFXbYCNnNB6XkWhl0woaBZRCCnauLZp58ZRKoX9+YARbW357tJ1vrxM3kF1by1NkarpCJ5haMhDTNXjUP1X+hbvQN6ZBV/r/laPdrw62/P1CucvI1MFXlQF8fo3nua7vIkdtZxHxReCMBwbCWHn6bOdaTZd0WQY6Nsj1ySETvWA7cejaxFPZebfjo0Dnm7e5SAhr3IWlg2w4b5E0InRyQJSnGA1cMCOcoJPTkdcII1xqsCP8fW7YmmWDRDnACHxGnG7kybaGxBGvMfJY1mzD1OC4p6wccoa/PyXBg8lARnisWeQ5wmu40t+YtTnDSJT2T8GMYF/5TQ3GZ2v7mafttXXfEwiNWbZfEOJIPKTx0xCJKoP+nbKgMGTtFJUP//2UkHbqug+v0eP/p0S/qQx37oMZiU0HTDLcsHN8szEXHlugOtnmFPJng/3rQHTlkMvcFrCh7hWknG57fqqDj8esDq8c6VeXeFT+twLGLT/DBTVorNmnanub+EtSX03pTBgs2aQs+o1MZQj8PdQuNyTSBoOaOt5ouFH+MaaQNoy1k8dIiSrgVpqO6TfsSpybSI30A3VmPwMDDto/Gck8af9khHh9/VOn7QtH2+Hema3teyLX+mwYp0hI4JYRB/KagUBfs/49t9gtfWauf1quGSFjyKbvLWMPOZOP/n3B+jCjJTpyHi2jgg3dkMDhGytBZx79g4xjbbGDrZILXuuClKF0FD2zBDI0y4P+vzA8y4a0pc3JHbaMdMGCCt7fS6L3kcWPTIksMkNpimYam6NAdnzumDRCnEybpLExOTpUzNuqJTLseBo9zR1p6Iw5Ulvm53tRVVqjDRNmJDeW51w3GUiw/tEOvzDcN2PP/u2jt93lENhU25QZuq1EtVOeYrMjXfq3YVmirX/vLLrHCfzO8vul5XmpDJa2wXImg8hRWrGV1Gn7o9AFw6byEzwj2mLnL45D/aA6PLP0V+aQxZ2nRDVhfrE4qhAJdYYebL/xPZDQQssUOx3vKVfkJGWMKxhDENGzlfiRxQHdea5/32B/T1h06tK3NStvRBWDnLRnbef6llj+fmZOoLAELjHJdAtD9rH22Nd9QFCUOew28/kNwyA7zdxD+/jOQZy0lGe7f4gdczJ/qvDuny7A/Uqo3XBCyR0lqjGrAKkj1V94o7kGthTpitCo4/9ZkaTjDkk89jkGS7Tb5H0fA/qfPtuwIflVaXvaoq6fWAx2Y+n/oQ4smEOz9dGzp3/SPbP5OvYR8ecMmJJbWwcq6sqM3QeIA45pD1Zo/x0Y6OpSVR5gy5eW0tT7WPOxEnQBGulBDbavixOHoY4Tp1S2ofxtOaYm25432HZXkJCQ7KswZFNTct6a/fZ5j77L1Z8xluQQO+XSaakVg46miWONYzV0BlWCB8wSg4yni81Joz0DnS25GrLLK5K9zF0Vkj5nGkmAQL/CquKDlOo6LhFGferwrsujGAVulZsMU21d0eG4phPplc41RLptyAf6Ws9EypneQgD4g8yk7CLwTJuUmaNENTZVAEJJI+5SA/q0o2NDoAb8vi4l4DjrmBhzIoOkQxk998nxdNz2HR3BcpOrNMXLdInBsezjSIOzrhYxqmInXQQSMK0dF3JeqN0xkYeWy+UTg0zyKkG2Jzgzlaj0NQs6DnqstrcxaKp80HqWoT7Wnjo/mQKmPX3OjAQIQ+Wu3ScN3reoqGtJC3pwqLZT4kxIkEYN1ua4U3zWiGUmPAvPWVaSOghxa2uRjrMuWj7p7QuQ0IFuDKvrYbZZ45u5GrZruTf4lZOAQMdFalBmey9Rlec/q+21LopmGiEDs5OO5XIeqGAfBekB+7JuxO/bj6zJd5FQpZy4VnuzBXlNOpZDtd2kz5fKPNWW45ERme03jxX079JTBunKTqZ9N2okj9s2KzKG9UN0/zVuN1FdH452lJF2XBtI6p00QhQj7niq2bSikfdduXjN8MajKLCw6je+4atLrEnUn/AV06x8M22wf3KmhwuHAVmV+SO23VIGSiwOXxky1oJEucaACp0bXfl75cgypiz67BJUnt9c5R7QBZzF9NuxKnxfhw2L93557LWw/N3E/cF580V5t8yvaL2JPHazqNj/QxKYbXHEEZvz7UInM37QWENqxn0t8dhAFxRd49u4Yu6QcGPCRVuRi8d5F8xRrLhBkv2LmsYti5q2+odsRhcTx7j8JG3n5aS4gp6nxGlofPf07wIdYkTaNmEOKu26jIr3o+15Mmz1EuFnPwi5tjUGqncpAHt94YPdZCNDL8FX9IEJ7t3FXwt7a5AJ9SswDXjF5Joo+2pwV8Zv/eyYfOGLnpK2p99VYMSix+MC1lQWtjRW21PbJjidL1fmeuP8AM95g1sxJ8TBLNCYExZVNboHU3kfqAevWP+YtsuHeze+AhfbPiay6KTtLNvYGoQOKL89GkoPmaFtsJ3E38TOr9EZZgbde+3fA5nKhfqz1UuE5L3CNkWGQCprMnhgoPb6uvsyTrXm+qBlta7h80KnFi9NuxSg3dDnnCJ52OwmcmX8Bn3YyeaPKjLkquWZTVv7MzkUd5+FZbktjW84zTRtgzFX2xuI6ShpaIgeRw4lLDowXG6I3GmOyHMUTTwftnemdl+DGjGZjVqcVTbas+37IDUQQtXfWAMq3G+Kt82ke6cNEXJR1Q7xviNDu4YGwlgqsgdWCwHUXJl3X0hM9tqSPmpfMPc859xjNzMWTBQBJarcZGfHJArOA8ohMabnbXXQrRYIKLhj7vM+27QD4YyxQ+/Y5+fqz86xvuc8Nxh1hteJbM+IEd9a/XlZERUsjNPYXlBzTyKazNE23QZf9DXHfni0lGrmsGGd2h6U1Y5sjYv75vg9j0bWpG0bi+wKy/5QeuPGqdoecIZnevRs4Bjadpv89m07lf+8pv7r6DCo/IbRoX5XglKecQhwMLggTesfddz3jgz+ljgSV5Yfoqf6epembEoTB5ZWxmr3pULaTgpD1O20v6rtwexzidncudpdC/NYo+pxofyr2J0vHbP4Ff2CrjF7xjuSRSw8sjlxZRmAAavPhezeCY05a3I6HN77GksO+m1bsaUW18rLoAQCgeCro/S9Pwgxnpr8/BErDfiIoMBUKceBtLiBh1yoPy91eSCRRmypv81FtAKBQNA4YdDdkK3jaXxF+CyAMDIcmILM4KXudDecIQCzA644IcDD4zRBnp4vv8jWIQKBQNA1aFnLOp19YHDm9AUlNsLg3wMjQZ3UuT0v2TURapkJ+xp+S1+QkqrtQWK47lkPtk0XCASCz5Zl8PeQn9p8+cDyY/p2Mx9hKAOBQDZA54qfqO2tEWyZTK7sA0RnkmUIBAJBK6QBfl2PaTvHjXe2RseZITC6r1cjVyEMheQQq+rbZbj2RpkJYQgEAkEncO60MHAwzxBJpAphtIFZnUUzAoFAIKicbSifvx0EXAhmN10dqB1CGAKBQNAjhLxPAxbBdF0a0uMoQhgCgUDQIwxCT8SdHrvYtDBVLewrJBAIBIIOSQOJI1ZvI+xJC8+Sl8ecviFKIBAIBB+YNAh5AGnAWotpA8+g90ZZizgEAoHgE5IGIQ+9WG+M2UfoDripcm/OJxAIBILPRhoGEonV2xqNoYFAgCgKIQmBQCD4uPi/AAMAh/hQWx8+rtcAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );

}


export const IWDLogoWhite = ({color = "green", size = 150, className}) => {
  return (
    <svg
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width="58.422" height="58.422" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_234_293"
            transform="scale(0.0204082 0.0208333)"
          />
        </pattern>
        <image
          id="image0_234_293"
          width="397"
          height="48"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY0AAAAwCAYAAADthCbOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxQzAyRDVBRDc1QjExRUU4MDNEQzZGMDY3MUU0MTU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxQzAyRDVCRDc1QjExRUU4MDNEQzZGMDY3MUU0MTU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzFDMDJENThENzVCMTFFRTgwM0RDNkYwNjcxRTQxNTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzFDMDJENTlENzVCMTFFRTgwM0RDNkYwNjcxRTQxNTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7cf3i6AAANzElEQVR42uxd+3Hj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"
        />
      </defs>
    </svg>
  );

}


export const ArrowButton = ({color = "#017A59", size = 32, className}) => {
  return (
    <svg
      width="46"
      height="48"
      viewBox="0 0 46 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_109_135)">
        <path
          d="M38.3333 7.66675L7.66667 7.66675"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 19.1666L23 38.3333"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 19.1666L15.3333 26.8333"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 19.1666L30.6667 26.8333"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_109_135"
          x="-4"
          y="0"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_109_135"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_109_135"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

}


export const TrendDownIcon = ({color = "#017A59", size = 32, className}) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5395 2.16797H8.46116C4.51783 2.16797 2.16699 4.5188 2.16699 8.46214V17.5296C2.16699 21.4838 4.51783 23.8346 8.46116 23.8346H17.5287C21.472 23.8346 23.8228 21.4838 23.8228 17.5405V8.46214C23.8337 4.5188 21.4828 2.16797 17.5395 2.16797ZM18.287 15.5255C18.287 15.623 18.2653 15.7205 18.2328 15.818C18.157 16.0021 18.0053 16.1538 17.8212 16.2296C17.7237 16.273 17.6262 16.2838 17.5287 16.2838H15.5137C15.0912 16.2838 14.7553 15.948 14.7553 15.5255C14.7553 15.103 15.0912 14.7671 15.5137 14.7671H15.7087L13.4228 12.4813L12.3178 14.128C12.1878 14.3121 11.9928 14.4421 11.7653 14.4638C11.5378 14.4855 11.3212 14.4096 11.1587 14.2471L7.93033 11.0188C7.63783 10.7263 7.63783 10.2496 7.93033 9.9463C8.22283 9.64297 8.69949 9.6538 9.00283 9.9463L11.5812 12.5246L12.6862 10.878C12.8162 10.6938 13.0112 10.5638 13.2387 10.5421C13.477 10.5205 13.6828 10.5963 13.8453 10.7588L16.792 13.7055V13.5105C16.792 13.088 17.1278 12.7521 17.5503 12.7521C17.9728 12.7521 18.3087 13.088 18.3087 13.5105V15.5255H18.287Z"
        fill="white"
      />
    </svg>
  );

}


export const InstaIcon = ({color = "#017A59", size = 32, className}) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="44" height="44" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_387_284" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_387_284"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );

}


export const FacebookIcon = ({color = "#017A59", size = 32, className}) => {
  return (
    <svg
      width="50"
      height="44"
      viewBox="0 0 50 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width="50" height="44" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_188_275"
            transform="matrix(0.00977778 0 0 0.0111111 0.06 0)"
          />
        </pattern>
        <image
          id="image0_188_275"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFaUlEQVR4nO2cS2idRRTHB19V8YHgE8V3ETc+UPGBUhFR3PhYWLU+QLQaRLFStYILXShUwYUFl3ehC0VBjVaxVBTdVBdt1dRHN2q1Kia55n7z/8+XNpo4cshkE2LyJXe+mfm+zB8OhIT73TO/nDt35syZo1RWVlZWVlZWVlZWVlZWNVlrDyzL8hIA95F8keQggCGSP5IcAzAhJj/L79zfBkm+IK8py/JieUbFt1teKsvyFJLrSG4mqUnaPq0g+T7JR8uyPFktZ1lrDzPG3A3gYwBTHuDOaQAmAWwleZe19lC1XDQ8PHyERBqA3+uCO4+NkHx2bGzsaNVWWWsP1lo/QfKvCIBnm/iwXnxSbRKAqwDsSgDwbNtN8lrVdMmcSPIVAP8mAHVOE98AbLLWrlBNVK/XO53kl7FBsjrwHUVRnK2aJPk4elqm2cAmy8JrVBME4BYA+xKAZpcY2bIZuk2lLAAP1LkmZjjYUwDWqhQF4GbZHMSGRI+wSa5WKUnmNQD7Y8Ohf9gTxpjrVArSWq9s6BefrWhFURRnRV8nA9iZSPT9DeBPkt8D2O78kuzeLzNZvz6evT3qOls2I5Hn0A9IPmKMOd9ae8BC/hpjTgRw/xLfb5OKIQCrYuz4ML2TexXAuUv9Punjfa9UISXJGADfRojknjHm+n58XypoB3vIWnuQCiWXhQsNWRtjLuzX935AO3tMhdDo6OiRMVKdAG7y4b8H0KOSU1d1C8CTESC/6ct/D6DF1qu6j5/cEiok5Cmt9TkpgQbwR63HYsaYeyJE8yc+x+AposXWqLokB6mhQZNctxgfZVWgtb4RwFMkN842AG94CoAttZUExMjMaa0vreqjJO5J/hDokzZpjDnJO2hXdxEUMoB91tpDqvgnW+QIa/uH6wC9OQLoXVX901rfG9o/ku96hSwlVrIrizCQz6v6COCjCP71vJafSS1chEFYKetaBOigy84ZK8vyIm+gXcFh8EEAeK2KfxJVsU53ZMryBtpVdcaI6E5F/06I5J/YRp+g30sZdK/XOyMi6He8gQbwTQbNOUED+Mon6D0ZNP8von/yBjpiBWinAVPHqDfQ/Rxsth00gP1JgwawtSiKY+Yza+3hVfyTg9mFnjVjxpjHPY9jwhvoOnaFAD5UEQTgZc9j6fp0bm+LQG/xPI49Pp0bagtokj97HsfXPp0bbANoO30U5zun/rY3BwG81AbQxpgLfI9DLpJ6cxDAg20ATXJ1DeNYm3QkIAJoAM/UENHneXNQ1qnufkfTQb/uGXLh/d6572URyd0ANsxnxpgbqvgmN2EXepZYDSsO/8EC4KEaPna2yVtwAAPeQUtyPcIpRidV0I7F8d5BO9ifZdCcAf1pLZAd6DUZNGei+va6C9D3LvepA8BvtXdGAPB0Bo0Nqm5JEXbAGopOahENYLjb7R6lQkhqzpYx6AEVSjI/Bara7CQG+rugl4VEWuvLAqyrO6mAdhfxw15/qzN9ykRBe61IWmIifUfbQQPYEb2V2/j4+KmuzVlbQXfl+SoFkby6pjYSnZigXXvOVSolyYVLAP+0BTSmv+jTbPkjbSk9r0Q6MUC7MdyhUpaL7LKpoDE9BaYZybOltb5CvkQaCHpEa325apLGx8dPI7mtQaC3SVNE1UTJdtXdVp1MFbQrqHk++Na6DpnpcoUvUgMtfZcaN1VUvDk1IEnz2KClO4EUBVXpw9RYWWtXSJoVwK+hQUvlp5zmR99Oh5SdLsqRZrFvSSu1ukC71vPSleHW1jXmXqwAHEvyTldJ1PUAekSeJf1FABxX/wgaqqIozpQIlL4bi/hHPedes7LVc29WVlZWVlZWVlZWVpbyrP8AoQAlmFc3DkgAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );

}


