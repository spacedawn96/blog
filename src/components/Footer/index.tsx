import { css } from '@emotion/react';
import Icon from '../Icon';
import Image from 'next/image';

export type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <>
      <div css={FooterRight}>
        <Image src="/footer.png" alt="footer" width={550} height={550} />
        <div css={FooterAside}> Web design by Andrew Couldwell</div>
      </div>
      <footer css={FooterStyle}>
        <div css={FooterLeft}>
          <div css={FooterIcon}>
            <Icon />
          </div>
          <div>spacedawn96@gmail.com</div>
          <div> © 2021. All artwork copyright of Eric Robison </div>
        </div>
      </footer>
    </>
  );
}
const FooterStyle = css({
  padding: '6rem 0',
});

const FooterIcon = css({
  display: 'flex',
  span: {
    ':nth-of-type(1)': { flexGrow: 0.05 },
    ':nth-of-type(2)': { flexGrow: 0 },
  },
});

const FooterLeft = css({
  marginTop: '15rem',
});

const FooterRight = css({
  display: 'flex',
  position: 'absolute',
  right: 0,
});

const FooterAside = css({
  transform: 'rotate(-90deg)',
});
