import React from 'react';

export function CompactLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 72 72" {...props}>
      <defs>
        <linearGradient
          id="a"
          x1={90.31}
          y1={64.55}
          x2={52.82}
          y2={21.49}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#4338ca" />
          <stop offset={0.12} stopColor="#5551d7" />
          <stop offset={0.36} stopColor="#757bef" />
          <stop offset={0.48} stopColor="#818cf8" />
          <stop offset={0.6} stopColor="#7e88f6" />
          <stop offset={0.71} stopColor="#767df0" />
          <stop offset={0.82} stopColor="#696be6" />
          <stop offset={0.92} stopColor="#5551d8" />
          <stop offset={1} stopColor="#4338ca" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={1.83}
          y1={3.84}
          x2={63.4}
          y2={57.34}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#6366f1" />
          <stop offset={0.1} stopColor="#676bf2" />
          <stop offset={0.23} stopColor="#737af5" />
          <stop offset={0.33} stopColor="#818cf8" />
          <stop offset={0.53} stopColor="#767ff6" />
          <stop offset={0.79} stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <path
          d="M54 18v45a9 9 0 0 0 9 9 9 9 0 0 0 9-9V0Z"
          style={{
            fill: 'url(#a)',
          }}
        />
        <path
          d="M0 2.39v60.47A9.07 9.07 0 0 0 9 72a9.07 9.07 0 0 0 9-9.14V35.43l16 16.22a2.33 2.33 0 0 0 3.62-.36L72 0 45 26.29 3.23.17A2.36 2.36 0 0 0 0 2.39Z"
          style={{
            fill: 'url(#b)',
          }}
        />
      </g>
    </svg>
  );
}
