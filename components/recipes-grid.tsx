import RecipeCard from "./recipe-card";
import { Recipe } from "@/types/recipe";

type RecipesGridProps = {
  recipes: Recipe[];
};

export default function RecipesGrid({ recipes }: RecipesGridProps) {
  return (
    <ul>
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
