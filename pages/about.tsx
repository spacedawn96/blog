import { css } from '@emotion/react';

import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

export type AboutPageProps = {};

export default function AboutPage({}: AboutPageProps) {
  return (
    <div css={AboutPageStyle}>
      <Header />
      <About />
      <Footer />
    </div>
  );
}
const AboutPageStyle = css({});
