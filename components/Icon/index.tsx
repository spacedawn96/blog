import { css } from '@emotion/react';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

export default function Icon() {
  return (
    <>
      <Link href="https://github.com/spacedawn96">
        <li>
          <FaGithub size={20} css={IconBlock} />
        </li>
      </Link>

      <Link href="mailto:spacedawn96@gmail.com">
        <li>
          <SiGmail size={20} css={IconBlock} />
        </li>
      </Link>
    </>
  );
}

const IconBlock = css({
  '&:hover': {
    transition: 'color 0.5s ease',
    color: '#ff4400',
  },

  '@media (max-width: 1000px)': {
    display: 'none',
  },
});

const iconWrapper = css({});
