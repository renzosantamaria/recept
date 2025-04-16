import { Recipe } from "@/types/recipe";
import ResponsiveImage from "@/components/responsive-image";
import styles from "@/components/recipe-card.module.scss";
import Link from "next/link";
import Image from "next/image";

type RecipeCardProps = Omit<Recipe, 'id'>;

export default function RecipeCard(
  { image, name, profiles, sponsored, type, url }
: RecipeCardProps) {

  const profileNames = profiles.length
    ? profiles.map((profile) => profile?.name).join(', ')
    : null;

  return (
    <li className={styles["recipe-card"]}>
      <Link
        href={`${url}`}
        className={styles["recipe-card__content-wrapper"]}
      >
        <div className={styles["recipe-card__image-wrapper"]}>
          <ResponsiveImage url={image.url} alt={name} format="square" />
          {sponsored && (
            <p className={styles["recipe-card__badge"]}>Sponsrat innehåll</p>
          )}
          <Image
            className={styles["recipe-card__icon"]}
            src={`/${type}-icon.png`}
            alt="en ikon som representerar ett recept"
            width={48}
            height={48}
          />
        </div>
        <div className={styles["recipe-card__text-wrapper"]}>
          <h2 className={styles["recipe-card__title"]}>{name}</h2>
          {profileNames && (
            <p className={styles["recipe-card__profiles"]}>{profileNames}</p>
          )}
        </div>
      </Link>
    </li>
  );
}