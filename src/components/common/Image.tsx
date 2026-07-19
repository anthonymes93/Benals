import type { ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';
import type { ImageAsset } from '@/types';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'> {
  asset: ImageAsset;
  className?: string;
  /** Defaults to true; set false only for the largest above-the-fold image on a page. */
  lazy?: boolean;
}

/**
 * Single point of control for every image on the site. Every photo is
 * currently a hot-linked Unsplash placeholder described in src/data — swap
 * an entry's `src` to a local asset (e.g. import from src/assets) and this
 * component needs no changes.
 */
export function Image({ asset, className, lazy = true, ...rest }: ImageProps) {
  return (
    <img
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      className={cn('h-full w-full object-cover', className)}
      {...rest}
    />
  );
}
