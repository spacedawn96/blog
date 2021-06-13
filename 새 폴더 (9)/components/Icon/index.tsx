import { css } from '@emotion/react';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

export default function Icon() {
  return (
    <>
      <li css={IconBlock}>
        <Link href="https://github.com/spacedawn96">
          <FaGithub size={20} />
        </Link>
      </li>
      <li css={IconBlock}>
        <Link href="mailto:spacedawn96@gmail.com">
          <SiGmail size={20} />
        </Link>
      </li>
    </>
  );
}

const IconBlock = css({
  '&:hover': {
    color: '#ff4400',
  },

  '@media (max-width: 1000px)': {
    display: 'none',
  },
});
