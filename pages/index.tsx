import Link from 'next/link';

import { Layout, Bio, SEO } from '../components/Common';
import { getSortedPosts } from '../utils/posts';

import Header from '../components/Header';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <Categories />
      <Footer />
    </>
  );
}
