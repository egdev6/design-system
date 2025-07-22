import type { DynamicIconName } from '@/components/utils/types';
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import type { ComponentProps, FC, JSX } from 'react';
import Link from '../../atoms/link';
import { type BreadcrumbItem, type BreadcrumbProps, breadcrumbVariants } from './types';

type BreadcrumbItemCollapsed = BreadcrumbItem | JSX.Element;

const Breadcrumb: FC<BreadcrumbProps & VariantProps<typeof breadcrumbVariants> & ComponentProps<'nav'>> = ({
  items,
  variant = 'solid',
  separator = '/',
  size = 'md',
  rounded = false,
  className,
  shadow = false,
  startContent = undefined,
  endContent = undefined,
  hideSeparator = true,
  maxItem = 2,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  iconCollapse = '...'
}) => {
  const renderSeparator = (separator: string | IconName): string | JSX.Element => {
    const controlString = /[->/|](?![a-zA-Z0-9])/;
    return controlString.test(separator) ? separator : <DynamicIcon name={separator as IconName} />;
  };

  const itemsCollapsed = (
    items: BreadcrumbItem[],
    maxItemToShow: number,
    itemsAfterCollapseToShow: number,
    itemsBeforeCollapseToShow: number,
    iconCollapsed: string | DynamicIconName = '...'
  ): BreadcrumbItemCollapsed[] => {
    if (items.length <= maxItemToShow) {
      return items;
    }

    if (maxItemToShow < 2) {
      return items;
    }
    if (itemsBeforeCollapseToShow + itemsAfterCollapseToShow > maxItemToShow) {
      return items;
    }
    if (itemsBeforeCollapseToShow > maxItemToShow - 1) {
      return items;
    }
    if (itemsAfterCollapseToShow > maxItemToShow - 1) {
      return items;
    }

    const firstElementBeforeCollapse = items.slice(0, itemsBeforeCollapseToShow);

    const lastElementsAfterCollapse = items.slice(-itemsAfterCollapseToShow);

    const collapsedIconElement: JSX.Element = (
      <span key='collapsed-icon'>
        <DynamicIcon name={iconCollapsed as IconName} />
      </span>
    );

    return [...firstElementBeforeCollapse, collapsedIconElement, ...lastElementsAfterCollapse];
  };

  const isBreadcrumbItem = (item: BreadcrumbItem | JSX.Element): item is BreadcrumbItem => {
    return typeof item === 'object' && 'title' in item && 'href' in item;
  };

  const processedItems = itemsCollapsed(items, maxItem, itemsAfterCollapse, itemsBeforeCollapse, iconCollapse);

  return (
    <nav>
      <ul className={cn('w-auto', breadcrumbVariants({ variant, size, rounded, shadow }))}>
        {processedItems.map((item, index) => (
          <li className={cn('flex', className)} key={`${index}`}>
            {isBreadcrumbItem(item) ? (
              <>
                {startContent !== undefined && <DynamicIcon name={startContent as IconName} />}
                <Link title={item.title} href={item.href} target={item.target} size={size} className={cn(className)}>
                  {item.title}
                </Link>
                {endContent !== undefined && <DynamicIcon name={endContent as IconName} />}
              </>
            ) : (
              <p className={cn(className)}>
                <span>{item}</span>
              </p>
            )}
            {!hideSeparator && index < processedItems.length - 1 && <span>{renderSeparator(separator)}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
