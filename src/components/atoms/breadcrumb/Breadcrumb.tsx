import type { ComponentProps, FC, JSX } from 'react';
import { BreadcrumbProps, breadcrumbVariants } from './types';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import Link from '../link';
import { cn } from '@/lib/utils';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';


const Breadcrumb: FC<BreadcrumbProps & VariantProps<typeof breadcrumbVariants> & ComponentProps<'nav'>> = ({
  variant = 'solid',
  separator = '/',
  items,
}) => {

const renderSeparator = (separator: string | IconName): string | JSX.Element => {
  const controlString = /[->/|](?![a-zA-Z0-9])/
   return controlString.test(separator) ? separator : <DynamicIcon name={separator as IconName}/>
}

  return (
    <nav>
      <ul className={cn('w-auto', breadcrumbVariants({ variant }))}>
        {
          items.map((item, index) => <React.Fragment key={index}>
            <li><Link title={item.title} href={item.href} target={item.target} size='md' className='text-white'>{item.title}</Link></li>
            {index < items.length - 1 && <li>{renderSeparator(separator)}</li>}
          </React.Fragment>)
        }
      </ul>
    </nav>
  );
};

export default Breadcrumb;