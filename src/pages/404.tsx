import React from 'react';
import AppLink from '../components/AppLink';

interface Props {}

function NotFound(props: Props) {
  return (
    <header className="container py-28 text-center text-xl md:py-48">
      <h1 className="mb-20 text-4xl">got lost?</h1>
      <AppLink href="/">home page</AppLink>
    </header>
  );
}

export default NotFound;
