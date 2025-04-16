import { Recipe } from "@/types/recipe";
import ResponsiveImage from "@/components/responsive-image";
import classes from "@/components/recipe-card.module.scss";
import Link from "next/link";

type RecipeCardProps = Omit<Recipe, 'id'>;

export default function RecipeCard(
  { image, name, profiles, sponsored, type, url }
: RecipeCardProps) {

  const profileNames = profiles.length
    ? profiles.map((profile) => profile?.name).join(', ')
    : null;

  return (
    <li className={classes.recipeCard}>
      <article>
        <header>
          <Link href={`/recept${url}`}>
            <ResponsiveImage url={image.url} alt={name} format="square" />
            <h2>{name}</h2>
          </Link>

          {profileNames && <p>{profileNames}</p>}
          {sponsored && <p>Sponsrad recept</p>}
          {/* TODO: Show type visually */}
          <p>{type}</p>
        </header>
      </article>
    </li>
  );
}