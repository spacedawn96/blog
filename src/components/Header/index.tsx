import { useEffect, useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import Image from 'next/image';
import Icon from '../Icon';

export default function Header() {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <header css={HeaderBlock}>
      <nav css={Nav}>
        <ul css={NavList}>
          <li>
            <Link href="/">
              <a>POSTS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <Image src="/signature.png" alt="signature" width={320} height={113} />
              </a>
            </Link>
          </li>
          <Icon />
        </ul>
      </nav>
    </header>
  );
}

const HeaderBlock = css({
  display: 'flex',
  margin: '4rem 0  4rem 0',
  alignItems: 'center',
  transition: 'all .3s ease',
});

const Nav = css({
  width: '100%',

  a: {
    '&:hover': {
      color: '#ff4400',
      borderBottom: '4px solid #ff4400',
      paddingBottom: '0.3rem',
    },
  },
});

const NavList = css({
  display: 'flex',
  alignItems: 'center',
  li: {
    ':nth-of-type(1)': { flexGrow: 0.3 },
    ':nth-of-type(2)': { flexGrow: 2.5 },
    ':nth-of-type(3)': { flexGrow: 1 },
    ':nth-of-type(4)': { flexGrow: 0.3 },
    ':nth-of-type(5)': { flexGrow: 0 },
  },

  color: '#292929',
  textTransform: 'uppercase',
  fontFamily: '"Rubik", "sans-serif"',
  transition: 'all .3s ease',
  fontSize: '1.12rem',
});
