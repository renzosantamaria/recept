import RecipesGrid from "@/components/recipes-grid";
import recipesData from '@/data/testdata.json'
import { Recipe } from "@/types/recipe";

export default function RecipePage() {
    return (
      <main>
        <RecipesGrid recipes={recipesData as Recipe[]} />
      </main>
    );
  }