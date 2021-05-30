import { css } from '@emotion/react';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Icon() {
  return (
    <>
      <div>
        <FaGithub size={20} />
      </div>
      <div>
        <SiGmail size={20} />
      </div>
    </>
  );
}

const IconBlock = css({});
