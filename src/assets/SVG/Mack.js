import { useContext } from "react";
import { ThemeContext } from "styled-components";

const sizes = {
  xs: 50,
  sm: 150,
  md: 250,
  lg: 400,
};

const Mack = ({ size }) => {
  const theme = useContext(ThemeContext);

  return (
    <svg
      width={sizes[size]}
      // height="929"
      viewBox="0 0 589 929"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M478.852 592.833C462.642 570.437 465.332 535.998 486.304 517.983C549.176 463.973 589 383.887 589 294.5C589 131.852 457.148 0 294.5 0C131.852 0 0 131.852 0 294.5C0 390.138 45.5877 475.128 116.218 528.925C138.218 545.682 142.937 579.915 128.077 603.237C107.134 636.107 95 675.137 95 717C95 834.084 189.916 929 307 929C424.084 929 519 834.084 519 717C519 670.627 504.111 627.732 478.852 592.833Z"
        />
      </mask>
      <g filter="url(#filter0_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M478.852 592.833C462.642 570.437 465.332 535.998 486.304 517.983C549.176 463.973 589 383.887 589 294.5C589 131.852 457.148 0 294.5 0C131.852 0 0 131.852 0 294.5C0 390.138 45.5877 475.128 116.218 528.925C138.218 545.682 142.937 579.915 128.077 603.237C107.134 636.107 95 675.137 95 717C95 834.084 189.916 929 307 929C424.084 929 519 834.084 519 717C519 670.627 504.111 627.732 478.852 592.833Z"
          fill={theme.accent}
        />
      </g>
      <path
        d="M116.218 528.925L110.159 536.88L116.218 528.925ZM128.077 603.237L119.644 597.864L128.077 603.237ZM486.304 517.983L479.787 510.398L486.304 517.983ZM579 294.5C579 380.85 540.543 458.206 479.787 510.398L492.82 525.569C557.81 469.74 599 386.925 599 294.5H579ZM294.5 10C451.625 10 579 137.375 579 294.5H599C599 126.329 462.671 -10 294.5 -10V10ZM10 294.5C10 137.375 137.375 10 294.5 10V-10C126.329 -10 -10 126.329 -10 294.5H10ZM122.277 520.97C54.0232 468.982 10 386.884 10 294.5H-10C-10 393.391 37.1522 481.273 110.159 536.88L122.277 520.97ZM105 717C105 677.096 116.56 639.923 136.511 608.611L119.644 597.864C97.708 632.291 85 673.177 85 717H105ZM307 919C195.438 919 105 828.562 105 717H85C85 839.607 184.393 939 307 939V919ZM509 717C509 828.562 418.562 919 307 919V939C429.607 939 529 839.607 529 717H509ZM470.751 598.697C494.817 631.946 509 672.802 509 717H529C529 668.452 513.405 623.517 486.953 586.97L470.751 598.697ZM110.159 536.88C127.671 550.219 131.954 578.543 119.644 597.864L136.511 608.611C153.921 581.286 148.764 541.144 122.277 520.97L110.159 536.88ZM479.787 510.398C454.535 532.09 451.759 572.456 470.751 598.697L486.953 586.97C473.526 568.419 476.129 539.907 492.82 525.569L479.787 510.398Z"
        fill={theme.accent}
        mask="url(#path-1-inside-1)"
      />
      <circle
        cx="211.404"
        cy="271.618"
        r="49.9039"
        fill={theme.bg.negative}
        stroke={theme.bg.base}
        strokeWidth="7"
      />
      <circle
        cx="442.369"
        cy="221.915"
        r="49.9039"
        fill={theme.bg.negative}
        stroke={theme.bg.base}
        strokeWidth="7"
      />
      <defs>
        <filter
          id="filter0_i"
          x="0"
          y="0"
          width="589"
          height="929"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="62" dy="-18" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
};

export default Mack;
