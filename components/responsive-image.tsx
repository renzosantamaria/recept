import styles from "./responsive-image.module.scss"

type ResponsiveImageProps = {
    url: string;
    alt: string;
    format: 'square' | 'standard' | 'wide' | 'cinema' | 'poster' | 'portrait';
}

export default function ResponsiveImage({ url, alt, format }: ResponsiveImageProps) {
    const webpSrcSet = `
        https://img.koket.se/${format}-mini/${url}.webp 88w,
        https://img.koket.se/${format}-small/${url}.webp 192w,
        https://img.koket.se/${format}-medium/${url}.webp 400w,
        https://img.koket.se/${format}-large/${url}.webp 608w,
        https://img.koket.se/${format}-giant/${url}.webp 816w,
        https://img.koket.se/${format}-mega/${url}.webp 1224w,
    `;
    const jpegSrcSet = `
        https://img.koket.se/${format}-mini/${url}.jpg 88w,
        https://img.koket.se/${format}-small/${url}.jpg 192w,
        https://img.koket.se/${format}-medium/${url}.jpg 400w,
        https://img.koket.se/${format}-large/${url}.jpg 608w,
        https://img.koket.se/${format}-giant/${url}.jpg 816w,
        https://img.koket.se/${format}-mega/${url}.jpg 1224w,
    `
    const sizes = `(min-width: 650px) 50vw, 100vw`

    return (
      <picture>
        <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
        <source type="image/jpeg" srcSet={jpegSrcSet} sizes={sizes} />
        <img
          src={`https://img.koket.se/standard-mini/${url}.webp`}
          alt={alt}
          loading="eager"
          className={styles["responsive-image"]}
        />
      </picture>
    );
}