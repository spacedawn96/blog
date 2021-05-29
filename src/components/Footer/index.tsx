import { css } from '@emotion/react';
import Icon from '../Icon';
import Image from 'next/image';

export type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <>
      <footer css={FooterStyle}>
        <section css={FooterLeft}>
          <article css={FooterArticle}>
            <div css={FooterIcon}>
              <Icon />
            </div>
            <div css={FooterEamilFont}>spacedawn96@gmail.com</div>
            <div css={FooterCopyRight}> © 2021. All Posts copyright of Spaceadwn96 </div>
          </article>
        </section>
        <section css={FooterWithImg}>
          <img src="/footer.png" className="avatar" />
          <style jsx global>{`
            .avatar {
              max-width: 50%;
              height: auto;
            }
          `}</style>
        </section>
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
  span: {
    ':nth-of-type(1)': { flexGrow: 0.15 },
    ':nth-of-type(2)': { flexGrow: 0 },
  },
});

const FooterArticle = css({
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

  div: {
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
