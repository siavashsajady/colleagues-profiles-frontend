import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import Showcase from './Showcase';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className='w-full '>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <Search />
      <Showcase />

      <div className='container mx-auto my-7'>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Meet | tretton37',
  description:
    'Meet our family of handpicked specialists. Our exceptionally skilled consultants empower our clients to embrace their digital destiny and challenge the world with well-crafted, flexible and high-quali...',
  keywords:
    'technology, partner,high-quality-software, software, digital,transformation, consultant',
};
