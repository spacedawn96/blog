import { css } from '@emotion/react';
import Link from 'next/link';

export type CloumnLayout = {
  leftNode: any;
  rightNode: any;
};

export default function CloumnLayout(props: CloumnLayout) {
  return (
    <>
      <section>{props.leftNode}</section>
      <aside>{props.rightNode}</aside>
    </>
  );
}

const CloumnLayoutBlock = css({});

const CloumnLayoutWrapper = css({});
