import { css } from '@emotion/react';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Icon() {
  return (
    <>
      <span>
        <FaGithub size={20} />
      </span>
      <span>
        <SiGmail size={20} />
      </span>
    </>
  );
}

const IconBlock = css({});
