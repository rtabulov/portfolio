import {
  Chat16,
  CheckmarkFilled24,
  LogoGithub16,
  Partnership16,
  Portfolio16,
} from '@carbon/icons-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import AppLink from '../components/AppLink';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page / rtabulov</title>
        <meta name="description" content="asd" />
      </Head>
      <header className="container space-y-4 py-12 text-center text-xl">
        <h1 className="mb-8 text-4xl">
          hi! my name is <span className="text-violet-500">rassul 😷</span>.
          i&apos;m a software developer 💻
        </h1>

        <p>
          i am only at the start of my
          <span className="text-violet-500"> path of the ninja 🥷</span> in the
          software development world
        </p>

        <p>
          i mostly work with <span className="text-violet-500">frontend</span>{' '}
          at the moment, but learning the backend & database stuff too
        </p>

        <p>
          i love <span className="text-violet-500">open source</span>, and
          always try to contriubte to the projects that i use
        </p>

        <p>
          you can check my github{' '}
          <AppLink href="https://github.com/rtabulov">here</AppLink>
        </p>

        <p>
          i currently work at{' '}
          <AppLink href="https://mitwork.kz">mitwork</AppLink> as a frontend
          developer
        </p>
      </header>

      <section className="container py-4 text-center">
        <h2 className="text-2xl">
          stuff i already <span className="text-violet-500">work</span> with
        </h2>

        <ul className="mt-4 flex flex-col justify-center gap-4 md:flex-row">
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            javascript
          </li>
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            typescript
          </li>
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            react (hooks)
          </li>
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            vue 3
          </li>
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            vue 2
          </li>
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            next js
          </li>
        </ul>
      </section>
      <section className="container py-4 text-center">
        <h2 className="text-2xl ">
          stuff i am <span className="text-violet-500">learning</span> at the
          moment
        </h2>
        <ul className="mt-4 flex flex-col justify-center gap-4 md:flex-row">
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            nest js
          </li>
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            remix.run
          </li>
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            react 18 concurrent features
          </li>
          <li>
            <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
            react 18 streaming
          </li>
        </ul>
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
