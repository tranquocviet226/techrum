import { Tag } from "../../types/model/Tag";

export default () => {
  const arrayTags: string[] = [
    "bitcoin",
    "business",
    "canada",
    "cricket",
    "crypto",
    "desert",
    "died",
    "drink",
    "drinks",
    "fashion",
    "food",
    "football",
    "gadget",
    "gold",
    "health",
    "kids",
    "litcoin",
    "market",
    "money",
    "music",
    "news",
    "recipie",
    "Sketing",
    "sports",
    "stock",
    "surfing",
    "technology",
    "travel",
  ];
  const arrayDataTags: Tag[] = arrayTags.map((title, index) => ({
    id: index + 1,
    title: title,
    redirect_to_url: "#" + index + 1,
  }));
  return arrayDataTags;
};
