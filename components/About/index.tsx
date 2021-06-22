import { css } from '@emotion/react';

const AboutBlock = css({ margin: '0 6% 0 10%' });

const AboutMain = css({
  fontSize: '1.25rem',
  lineHeight: '2.215rem',
  fontFamily: '"Aeonik-Light","Helvetica","Arial",sans-serif',
  whiteSpace: 'initial',
  width: '50%',
  div: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const AboutTitle = css({
  color: '#292929',
  fontFamily: '"Rubik", "sans-serif"',
  fontSize: '7rem',
  animationDelay: '.2s',
  animationDuration: '.8s',
  animationName: 'bottomToTop',
  animationFillMode: 'both',
  animationTimingFunction: 'ease',
  marginBottom: '4rem',
});

export default function About() {
  return (
    <div css={AboutBlock}>
      <h1 css={AboutTitle}>About</h1>
      <pre css={AboutMain}>
        <div>준비중...</div>
      </pre>
    </div>
  );
}
