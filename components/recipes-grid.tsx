import RecipeCard from "./recipe-card";
import { Recipe } from "@/types/recipe";
import styles from "./recipes-grid.module.scss"

type RecipesGridProps = {
  recipes: Recipe[];
};

export default function RecipesGrid({ recipes }: RecipesGridProps) {
  return (
    <ul className={styles['recipes-grid']}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          image={recipe.image}
          name={recipe.name}
          profiles={recipe.profiles}
          sponsored={recipe.sponsored}
          type={recipe.type}
          url={recipe.url}
        />
      ))}
    </ul>
  );
}
