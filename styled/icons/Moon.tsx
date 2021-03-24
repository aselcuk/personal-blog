import * as React from 'react';

function SvgMoon(props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79v0z'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const MemoSvgMoon = React.memo(SvgMoon);
export default MemoSvgMoon;
