import { css } from '@emotion/react';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Icon() {
  return (
    <>
      <span>
        <FaGithub />
      </span>
      <span>
        <SiGmail />
      </span>
    </>
  );
}

const IconBlock = css({
  span: {
    ':nth-of-type(1)': { flexGrow: 0.3 },
    ':nth-of-type(2)': { flexGrow: 3 },
  },
});
