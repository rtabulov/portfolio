import Link, { LinkProps } from 'next/link';
import React from 'react';
import cs from 'classnames';
import { Launch16 } from '@carbon/icons-react';

interface Props {
  href: LinkProps['href'];
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light';
  foceHideExternalIcon?: boolean;
}

function AppLink({
  href,
  children,
  className,
  variant = 'default',
  foceHideExternalIcon = false,
}: Props) {
  const isExternal =
    typeof href === 'string' &&
    (href.startsWith('http') || href.startsWith('//'));

  return (
    <Link href={href}>
      <a
        className={cs(className, 'transition-colors ', {
          'text-pink-500 hover:text-pink-400': variant === 'default',
          'text-slate-300 hover:text-slate-100': variant === 'light',
        })}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        {children}

        {!foceHideExternalIcon && isExternal && (
          <sup>
            <Launch16 height={14} width={14} className="ml-1 inline" />
          </sup>
        )}
      </a>
    </Link>
  );
}

export default AppLink;
