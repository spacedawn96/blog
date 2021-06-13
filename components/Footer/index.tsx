import { css } from '@emotion/react';
import Icon from '../Icon';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

export type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <>
      <footer css={FooterStyle}>
        <div css={FooterLeft}>
          <div css={FooterContainer}>
            <ul css={FooterIcon}>
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
            </ul>
            <div css={FooterAsideContainer}> Web design by Spacedawn96</div>
            <ul>
              <li css={FooterEamilFont}>spacedawn96@gmail.com</li>
              <li css={FooterCopyRight}> © 2021. All Posts copyright of Spaceadwn96 </li>
              <div css={FooterBottomContainer}> Web design by Spacedawn96</div>
            </ul>
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
      </footer>
    </>
  );
}
const FooterStyle = css({
  display: 'flex',
  fontFamily: '"Rubik", "sans-serif"',
  color: '#292929',
  right: 0,
  margin: '0 6% 0 10% ',
});

const FooterIcon = css({
  display: 'flex',
  li: {
    ':nth-of-type(1)': { flexGrow: 0.15 },
    ':nth-of-type(2)': { flexGrow: 0 },
  },
});

const FooterContainer = css({
  marginBottom: '12%',
});

const FooterEamilFont = css({
  fontSize: '1.5rem',
  '@media (max-width: 1000px)': {
    fontSize: '20px',
  },
});

const FooterCopyRight = css({
  fontSize: '0.75rem',
  fontFamily: '"Aeonik-Light","Helvetica","Arial",sans-serif',
});

const FooterLeft = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',

  li: {
    ':nth-of-type(1)': { marginBottom: '12%' },
    ':nth-of-type(2)': { marginBottom: '12%' },
  },
});

const FooterWithImg = css({
  display: 'flex',
  width: '60%',
  justifyContent: 'flex-end',
  '@media (max-width: 1000px)': {
    display: 'none',
  },
});

const FooterAsideContainer = css({
  display: 'flex',
  transform: 'rotate(-90deg)',
  position: 'absolute',
  fontSize: '0.75rem',
  alignItems: 'flex-end',
  right: '0',
  '@media (max-width: 1000px)': {
    display: 'none',
  },
});

const FooterBottomContainer = css({
  display: 'none',
  fontSize: '0.75rem',
  '@media (max-width: 1000px)': {
    fontFamily: '"Aeonik-Light","Helvetica","Arial",sans-serif',
    display: 'flex',
  },
});

const IconBlock = css({
  '&:hover': {
    color: '#ff4400',
  },
});
