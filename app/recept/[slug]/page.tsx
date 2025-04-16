import recipesData from '@/data/testdata.json'
import { notFound } from 'next/navigation';

export default async function RecipeDetailsPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params;
    const recipe = recipesData.find((recipe) => recipe.url === `/${slug}`);

    if (!recipe) {
      notFound();
    }

    return (
      <main>
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
      </main>
    );
  }