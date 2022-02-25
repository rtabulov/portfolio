import { LogoGithub24 } from '@carbon/icons-react';
import Link from 'next/link';
import React from 'react';
import AppLink from './AppLink';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-slate-300">
      <nav className="container flex shrink-0 items-center justify-between">
        <div className="flex items-center py-2 leading-none">
          <Link href="/">
            <a className="text-xl leading-none text-white">rtabulov</a>
          </Link>
          <div className="ml-4 hidden gap-4 sm:flex">
            <AppLink href="/#contact" variant="light">
              contact
            </AppLink>
          </div>
        </div>
        <div className="flex items-center gap-4 py-2 leading-none">
          <AppLink
            href="https://github.com/rtabulov"
            variant="light"
            foceHideExternalIcon
          >
            <span className="sr-only">check out my github</span>
            <LogoGithub24 className="inline align-middle" />
          </AppLink>
        </div>
      </nav>

      <main className="grow">{children}</main>

      <footer className="shrink-0 py-2 text-center">
        <div className="container">
          <p>make love, not war ✌️</p>
          <p>
            <span className="text-violet-500">rassul tabulov</span>
          </p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
