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
  // Gradient CTA — the site's visual signature. Vivid, fully-saturated
  // orange → hot pink (--color-cta-*), left to right. The `to-85%` stop
  // position (on both the base gradient and its hover overlay) compresses
  // the orange→pink blend into the first 85% of the width and holds pure
  // pink for the last stretch, so pink reads as the dominant color rather
  // than a thin sliver at the edge. A soft inset top highlight gives it a
  // glossy "premium app" sheen; the outer shadow is tinted from the
  // gradient's own midpoint instead of flat gray. The brighter hover
  // gradient lives on an absolutely-positioned ::before (its own `-z-10`
  // layer) that crossfades via opacity, since browsers won't smoothly
  // interpolate between two background-image values directly.
  accent:
    'relative isolate overflow-hidden text-white ' +
    'bg-linear-to-r from-cta-orange to-cta-pink to-85% ' +
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_22px_-6px_rgba(214,34,60,0.5)] ' +
    'transition-[scale,translate,box-shadow] duration-[250ms] ease-out ' +
    "before:content-[''] before:absolute before:inset-0 before:-z-10 " +
    'before:bg-linear-to-r before:from-cta-orange-bright before:to-cta-pink-bright before:to-85% ' +
    'before:opacity-0 before:transition-opacity before:duration-[250ms] before:ease-out ' +
    'hover:scale-[1.02] hover:-translate-y-0.5 hover:before:opacity-100 ' +
    'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_16px_34px_-6px_rgba(224,0,120,0.55)] ' +
    'active:scale-[0.98] active:translate-y-0 ' +
    'active:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_4px_10px_-4px_rgba(214,34,60,0.5)]',
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
