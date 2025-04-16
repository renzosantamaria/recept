import RecipesGrid from "@/components/recipes-grid";
import recipesData from '@/data/testdata.json'
import { Recipe } from "@/types/recipe";

export default function RecipePage() {
    return (
      <>
        <main>
          <h1>Våra recept</h1>
          <RecipesGrid recipes={recipesData as Recipe[]} />
        </main>
      </>
    );
  }