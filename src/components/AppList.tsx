import React from 'react';

interface Props {
  children: React.ReactNode;
}

function AppList({ children }: Props) {
  return (
    <ul className="mt-4 flex flex-col justify-center gap-4 md:flex-row">
      {children}
    </ul>
  );
}

export default AppList;
