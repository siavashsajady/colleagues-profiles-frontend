import Head from 'next/head';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className='container mt-10 mb-10 pr-7 pl-7 max-w-4xl '>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <div className='container mx-auto my-7'>{children}</div>
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
