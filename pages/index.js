import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          hewwo 😊 i'm <strong>nicole</strong> and welcome 2 my vewy cool website
        </p>
        <figure>
          <blockquote>
            <p>
              pls rember that wen u feel scare or frigten <br />
              never forget ttimes wen u feeled happy <br />
              wen day is dark alway rember happy day <br />
            </p>
          </blockquote>
          <figcaption>— someone vewy wise (not me 😞)</figcaption>
        </figure>
        <p>
          i made this by fowwowing the <a href='https://nextjs.org/learn'>next.js tutowial</a> uwu
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📫 blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
