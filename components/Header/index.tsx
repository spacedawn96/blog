import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Icon from '../Icon';
import { useRouter } from 'next/router';
import { useTrail, a } from '@react-spring/web';
import { Trail } from '../Animation/Trail';
import { CgDarkMode } from 'react-icons/cg';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export type HeadereProps = {};

export type LinkeProps = {
  href: any;
  children: any;
};

const Link = (props: LinkeProps) => {
  const router = useRouter();

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(props.href);
      }}>
      {props.children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  );
};

export default function Header(props: HeadereProps) {
  const [open, set] = useState(true);
  const router = useRouter();

  const [isSelect, setIsSelect] = useState(false);

  return (
    <header css={HeaderBlock}>
      <nav css={Nav}>
        <ul css={NavList}>
          <li>
            <Link href="/">
              <a
                style={{
                  color: router.asPath == '/about' ? '#292929' : '#ff4400',
                  borderBottom: router.asPath == '/about' ? '0' : '4px solid #ff4400',
                  paddingBottom: router.asPath == '/about' ? '0rem' : '0.3rem',
                }}>
                POST
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                style={{
                  color: router.asPath == '/about' ? '#ff4400' : '#292929',
                  borderBottom: router.asPath == '/about' ? '4px solid #ff4400' : '0',
                  paddingBottom: router.asPath == '/about' ? '0.3rem' : '0',
                }}>
                ABOUT
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="/signature.png" alt="signature" css={HedaerImg} />
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
  alignItems: 'center',
  transition: 'all .3s ease',
  margin: ' 0 6% 0 10%',
  '@media (max-width: 1000px)': {
    margin: ' 0 6% 0 6%',
  },
});

const Nav = css({
  width: '100%',
  marginTop: '4rem',
  marginBottom: '4rem',
  zIndex: 22,

  '@media (max-width: 1000px)': {
    marginTop: '3rem',
    marginBottom: '2rem',
  },
});

const HedaerImg = css({
  width: '20rem',

  '@media (max-width: 1000px)': {
    width: '9.0625rem',
  },

  '@media (max-width: 768px)': {
    display: 'none',
  },
});

const NavList = css({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  li: {
    ':nth-of-type(1)': { flexGrow: 0.3 },
    ':nth-of-type(2)': { flexGrow: 2.5 },
    ':nth-of-type(3)': { flexGrow: 1 },
    ':nth-of-type(4)': { flexGrow: 0.3 },
    ':nth-of-type(5)': { flexGrow: 0 },
    '&:hover': {
      transition: 'color 0.5s ease',
      color: '#ff4400',
    },
  },

  color: '#292929',
  textTransform: 'uppercase',
  fontFamily: '"Rubik", "sans-serif"',
  transition: 'all .3s ease',
  fontSize: '1.12rem',

  '@media (max-width: 1000px)': {
    display: 'flex',
    li: {
      ':nth-of-type(1)': { flexGrow: 0.2 },
      ':nth-of-type(2)': { flexGrow: 2 },
      ':nth-of-type(3)': { flexGrow: 0 },
    },
    fontSize: '0.9rem',
  },

  '@media (max-width: 768px)': {
    display: 'flex',

    fontSize: '0.9rem',
  },

  '@media (max-width: 576px)': {
    display: 'flex',

    fontSize: '0.9rem',
  },

  '@media (max-width: 400px)': {
    display: 'flex',

    fontSize: '0.9rem',
  },
});
