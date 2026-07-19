import { forwardRef } from 'react';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

const VARIANT_STYLES = {
  primary: 'bg-ink-900 text-white hover:bg-ink-800 active:bg-ink-950',
  accent:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-700',
  outline:
    'border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white',
  outlineInverse:
    'border border-white/70 text-white hover:bg-white hover:text-ink-900',
  ghost: 'text-ink-900 hover:bg-ink-50',
} as const;

const SIZE_STYLES = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-5 text-[15px] gap-2',
  lg: 'h-[3.25rem] px-7 text-base gap-2.5',
} as const;

export type ButtonVariant = keyof typeof VARIANT_STYLES;
export type ButtonSize = keyof typeof SIZE_STYLES;

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseStyles =
  'inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

/**
 * Renders a <button>, an internal <Link>, or a plain <a> (external / tel: /
 * mailto:) from the same API, so call sites never have to think about it.
 */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    fullWidth,
    className,
    children,
    href,
    ...rest
  },
  ref,
) {
  const classes = cn(
    baseStyles,
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (href) {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (isInternal) {
      return (
        <Link
          to={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorProps}
        >
          {content}
        </Link>
      );
    }

    const isExternal = /^https?:\/\//.test(href);

    return (
      <a
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});
