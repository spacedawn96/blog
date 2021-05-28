import { css } from '@emotion/react';

export default function Header() {
  return (
    <div css={HeaderBlock}>
      <nav css={Nav}>
        <section css={NavList}>
          <span>POSTS</span>
          <span>ABOUT</span>
          <span>IMG</span>
          <span>GITHUB</span>
          <span>THINK</span>
        </section>
      </nav>
    </div>
  );
}

const HeaderBlock = css({
  display: 'flex',
  height: '10rem',
  alignItems: 'center',
});

const Nav = css({
  width: '100%',
});

const NavList = css({
  display: 'flex',
  span: {
    ':nth-of-type(1)': { flexGrow: 0.3 },
    ':nth-of-type(2)': { flexGrow: 3 },
    ':nth-of-type(3)': { flexGrow: 1 },
    ':nth-of-type(4)': { flexGrow: 0.3 },
    ':nth-of-type(5)': { flexGrow: 1 },
  },

  color: '#292929',
  textTransform: 'uppercase',
  fontFamily: '"Aeonik-Bold","Helvetica","Arial",sans-serif',
  transition: 'all .3s ease',
  fontWeight: 600,
  fontSize: '1rem',
});
