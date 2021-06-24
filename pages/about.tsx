import { css } from '@emotion/react';

import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import AppLayout from '../components/AppLayout';

export type AboutPageProps = {};

export default function AboutPage({}: AboutPageProps) {
  return (
    <div css={AboutPageStyle}>
      <AppLayout>
        <About />
      </AppLayout>
    </div>
  );
}
const AboutPageStyle = css({});
