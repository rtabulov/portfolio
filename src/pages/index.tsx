import { Chat16, Partnership16 } from '@carbon/icons-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import AppLink from '../components/AppLink';
import AppList from '../components/AppList';
import AppListItem from '../components/AppListItem';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page / rtabulov</title>
        <meta name="description" content="asd" />
      </Head>
      <header className="container space-y-4 py-12 text-center text-xl">
        <h1 className="mb-8 text-4xl">
          hi! my name is <span className="text-violet-400">rassul 😷</span>.
          i&apos;m a software developer 💻
        </h1>

        <p>
          i am only at the start of my
          <span className="text-violet-400"> path of the ninja 🥷</span> in the
          software development world
        </p>

        <p>
          i mostly work with <span className="text-violet-400">frontend</span>{' '}
          at the moment, but learning the backend & database stuff too
        </p>

        <p>
          i love <span className="text-violet-400">open source</span>, and
          always try to contriubte to the projects that i use
        </p>

        <p>
          you can check my github{' '}
          <AppLink href="https://github.com/rtabulov">
            here <span className="sr-only">my github accout</span>
          </AppLink>
        </p>

        <p>
          i currently work at{' '}
          <AppLink href="https://mitwork.kz">mitwork</AppLink> as a frontend
          developer
        </p>
      </header>

      <section className="container py-4 text-center">
        <h2 className="text-2xl">
          stuff i already <span className="text-violet-400">work</span> with
        </h2>

        <AppList>
          <AppListItem>javascript</AppListItem>
          <AppListItem>typescript</AppListItem>
          <AppListItem>react (hooks)</AppListItem>
          <AppListItem>vue 3</AppListItem>
          <AppListItem>vue 2</AppListItem>
          <AppListItem>next js</AppListItem>
        </AppList>
      </section>
      <section className="container py-4 text-center">
        <h2 className="text-2xl ">
          stuff i am <span className="text-violet-400">learning</span> at the
          moment
        </h2>
        <AppList>
          <AppListItem>nest js</AppListItem>
          <AppListItem>remix.run</AppListItem>
          <AppListItem>react 18 concurrent features</AppListItem>
          <AppListItem>react 18 streaming</AppListItem>
        </AppList>
      </section>
      <section id="contact" className="conatiner py-4 text-center">
        <h2 className="text-2xl">
          if you are interested in working{' '}
          <Partnership16 className="inline align-middle" /> with me (or just
          want to chat <Chat16 className="inline align-middle" />) you can
          contact me on <AppLink href="https://t.me/rtabulov">telegram</AppLink>
        </h2>
      </section>
    </>
  );
};

export default Home;
