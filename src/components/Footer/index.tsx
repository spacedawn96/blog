import { css } from '@emotion/react';
import Icon from '../Icon';
import Image from 'next/image';

export type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <>
      <footer css={FooterStyle}>
        <div css={FooterLeft}>
          <div css={FooterContainer}>
            <div css={FooterIcon}>
              <Icon />
            </div>
            <p css={FooterEamilFont}>spacedawn96@gmail.com</p>
            <p css={FooterCopyRight}> © 2021. All Posts copyright of Spaceadwn96 </p>
          </div>
        </div>
        <div css={FooterWithImg}>
          <img src="/footer.png" className="avatar" />
          <style jsx global>{`
            .avatar {
              max-width: 50%;
              height: auto;
            }
          `}</style>
        </div>
        <p css={FooterAsideContainer}> Web design by Spacedawn96</p>
      </footer>
    </>
  );
}
const FooterStyle = css({
  display: 'flex',
  fontFamily: '"Rubik", "sans-serif"',
  color: '#292929',
  right: 0,
});

const FooterIcon = css({
  display: 'flex',
  div: {
    ':nth-of-type(1)': { flexGrow: 0.15 },
    ':nth-of-type(2)': { flexGrow: 0 },
  },
});

const FooterContainer = css({
  marginBottom: '12%',
});

const FooterEamilFont = css({
  fontSize: '1.5rem',
});

const FooterCopyRight = css({
  fontSize: '0.75rem',
  fontFamily: '"Aeonik-Light","Helvetica","Arial",sans-serif',
});

const FooterLeft = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',

  p: {
    ':nth-of-type(1)': { marginBottom: '12%' },
    ':nth-of-type(2)': { marginBottom: '12%' },
  },
});

const FooterWithImg = css({
  display: 'flex',
  width: '60%',
  justifyContent: 'flex-end',
});

const FooterAsideContainer = css({
  display: 'flex',
  transform: 'rotate(-90deg)',
  fontSize: '0.75rem',
  alignItems: 'flex-end',
});
