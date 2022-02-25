import { CheckmarkFilled24 } from '@carbon/icons-react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

function AppListItem({ children }: Props) {
  return (
    <li>
      <CheckmarkFilled24 className="mr-2 inline align-middle text-teal-300" />
      {children}
    </li>
  );
}

export default AppListItem;
