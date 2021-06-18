import Link from 'next/link';

import { Layout, Bio, SEO } from '../components/Common';
import { getSortedPosts } from '../utils/posts';

import Header from '../components/Header';
import Categories from '../components/Categories';

import Footer from '../components/Footer';
import { Trail } from '../components/Animation/Trail';
import { useState } from 'react';
import AppLayout from '../components/AppLayout';

export default function Home({ posts }) {
  const [open, set] = useState(true);

  return (
    <>
      <AppLayout>
        <Categories />
      </AppLayout>
    </>
  );
}
