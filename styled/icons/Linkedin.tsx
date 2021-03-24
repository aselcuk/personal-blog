import * as React from 'react';

function SvgLinkedin(props) {
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
        d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6v0zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const MemoSvgLinkedin = React.memo(SvgLinkedin);
export default MemoSvgLinkedin;
