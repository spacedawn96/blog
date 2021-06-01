import { css } from '@emotion/react';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Icon() {
  return (
    <>
      <li>
        <a>
          <FaGithub size={20} />
        </a>
      </li>
      <li>
        <a>
          <SiGmail size={20} />
        </a>
      </li>
    </>
  );
}

const IconBlock = css({});
