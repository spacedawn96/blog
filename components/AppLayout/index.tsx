import { css } from '@emotion/react';
import Footer from '../Footer';
import Header from '../Header';
import { Trail } from '../Animation/Trail';
export type AppLayoutProps = {
  children: any;
};

export default function AppLayout(props: AppLayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

const AppLayoutBlock = css({});
