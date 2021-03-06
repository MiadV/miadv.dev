import React from 'react';

function PaperPlaneIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 50, width = 50, className, ...otherProps } = props;

  return (
    <svg
      viewBox="0 0 100 100"
      height={height}
      width={width}
      className={className}
      {...otherProps}
    >
      <path d="M95.3485 1.44116C95.1761 1.44132 94.9993 1.46551 94.8212 1.51628L10.0297 24.3449C9.36659 24.5236 8.84918 25.0419 8.67187 25.7054C8.49456 26.3686 8.68416 27.076 9.16954 27.5616L31.2515 49.6432L26.5978 69.8088C26.4488 70.455 26.6428 71.132 27.1116 71.6008C27.5807 72.0698 28.2582 72.2642 28.904 72.115L49.0696 67.4617L71.1512 89.5429C72.1962 90.5875 73.984 90.1097 74.3682 88.6831C78.1615 74.5937 93.6446 17.0849 97.2033 3.86642C97.5445 2.60305 96.5555 1.44003 95.3485 1.44116ZM85.9788 7.88009L33.5554 46.508L14.2413 27.1939L85.9788 7.88009ZM86.2691 12.4433L48.5498 63.6343L31.037 67.6758L35.0785 50.163L86.2691 12.4433ZM90.8327 12.734L71.5189 84.4715L52.2051 65.1574L90.8327 12.734ZM22.9207 51.4434C22.4285 51.4434 21.9362 51.6311 21.5606 52.0064L7.13754 66.4295C6.38658 67.1805 6.38658 68.3981 7.13754 69.1492C7.88889 69.9002 9.10668 69.9 9.85764 69.1492L24.2807 54.7262C25.0317 53.9752 25.0317 52.7576 24.2807 52.0064C23.9052 51.6311 23.4129 51.4434 22.9207 51.4434ZM38.3053 74.5203C37.8131 74.5203 37.3208 74.708 36.9452 75.0834L16.7529 95.2757C16.002 96.0266 16.002 97.2442 16.7529 97.9954C17.5041 98.7464 18.7219 98.7464 19.473 97.9954L39.6653 77.8031C40.4163 77.0519 40.4163 75.8343 39.6653 75.0834C39.2899 74.708 38.7975 74.5203 38.3053 74.5203ZM19.0745 76.4434C18.5823 76.4434 18.09 76.6311 17.7145 77.0064L3.29139 91.4295C2.54042 92.1805 2.54042 93.3981 3.29139 94.1492C4.04254 94.9002 5.26033 94.9002 6.01149 94.1492L20.4346 79.7262C21.1855 78.975 21.1855 77.7574 20.4346 77.0064C20.0591 76.6311 19.5667 76.4434 19.0745 76.4434ZM52.7284 78.3665C52.2362 78.3665 51.7443 78.5541 51.3687 78.9295L38.8687 91.4295C38.1177 92.1805 38.1177 93.3981 38.8687 94.1492C39.2443 94.5246 39.7362 94.7126 40.2284 94.7126C40.7205 94.7126 41.213 94.5246 41.5884 94.1492L54.0884 81.6492C54.8394 80.8983 54.8394 79.6807 54.0884 78.9295C53.7128 78.5541 53.2205 78.3665 52.7284 78.3665Z" />
    </svg>
  );
}

export default PaperPlaneIcon;
