import clsx from 'clsx';
import {ComponentPropsWithoutRef, ComponentType, ReactNode} from 'react';

export const SocialLink = ({
  className,
  children,
  icon: Icon,
  ...rest
}: {
  className?: string;
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
  children?: ReactNode;
} & ComponentPropsWithoutRef<'a'>) => {
  return (
    <li className={clsx(className, 'flex')}>
      <a
        {...rest}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        {children && <span className="ml-4">{children}</span>}
      </a>
    </li>
  );
};
