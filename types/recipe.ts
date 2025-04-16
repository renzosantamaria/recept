export type Recipe = {
  id: number;
  image: { name: string; url: string };
  name: string;
  profiles: Profile[];
  sponsored: boolean;
  type: "article" | "recipe";
  url: string;
};

type Profile = {
  name: string;
};