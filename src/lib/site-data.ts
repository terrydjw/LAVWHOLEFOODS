import produce from "@/assets/cat-produce.jpg";
import mediterranean from "@/assets/cat-mediterranean.jpg";
import turkish from "@/assets/cat-turkish.jpg";
import eastern from "@/assets/cat-eastern.jpg";
import dairy from "@/assets/cat-dairy.jpg";
import snacks from "@/assets/cat-snacks.jpg";
import groceries from "@/assets/cat-groceries.jpg";
import wines from "@/assets/cat-wines.jpg";
import bakery from "@/assets/cat-bakery.jpg";

export type Category = {
  slug: string;
  name: string;
  image: string;
  blurb: string;
  items: string[];
};

export const categories: Category[] = [
  {
    slug: "fruit-vegetables",
    name: "Fruit & Vegetables",
    image: produce,
    blurb: "Crisp seasonal produce delivered fresh, every day of the year.",
    items: [
      "Tomatoes on the Vine", "Cucumbers", "Bell Peppers", "Aubergine",
      "Courgette", "Avocado", "Bananas", "Lemons", "Apples",
      "Pomegranates", "Fresh Herbs", "Leafy Greens",
    ],
  },
  {
    slug: "mediterranean",
    name: "Mediterranean",
    image: mediterranean,
    blurb: "Olives, oils, dips and cheeses from across the Mediterranean.",
    items: [
      "Kalamata Olives", "Feta Cheese", "Halloumi", "Tahini",
      "Hummus", "Extra Virgin Olive Oil", "Sun-Dried Tomatoes",
      "Stuffed Vine Leaves", "Pita Bread",
    ],
  },
  {
    slug: "turkish",
    name: "Turkish",
    image: turkish,
    blurb: "Authentic Turkish staples, sweets and pantry favourites.",
    items: [
      "Baklava", "Turkish Delight", "Simit", "Sucuk",
      "Pide Bread", "Ayran", "Turkish Coffee", "Dried Apricots",
      "Pul Biber (Aleppo Pepper)",
    ],
  },
  {
    slug: "eastern-european",
    name: "Eastern European",
    image: eastern,
    blurb: "Pierogi, sausages, pickles and rye breads from home.",
    items: [
      "Pierogi", "Kielbasa", "Smoked Sausage", "Pickled Cucumbers",
      "Sauerkraut", "Rye Bread", "Tvorog", "Borscht Base",
      "Polish Mustard",
    ],
  },
  {
    slug: "dairy-eggs",
    name: "Dairy & Eggs",
    image: dairy,
    blurb: "Milk, cheese, yogurts and free-range eggs.",
    items: [
      "Whole Milk", "Greek Yogurt", "Mature Cheddar", "Mozzarella",
      "Butter", "Free-Range Eggs", "Crème Fraîche", "Kefir",
    ],
  },
  {
    slug: "bakery",
    name: "Bakery",
    image: bakery,
    blurb: "Freshly baked loaves, pastries and rolls.",
    items: [
      "Sourdough Loaf", "Baguette", "Seeded Rolls", "Croissants",
      "Pain au Chocolat", "Ciabatta", "Focaccia",
    ],
  },
  {
    slug: "snacks-confectionery",
    name: "Snacks & Confectionery",
    image: snacks,
    blurb: "Chocolates, crisps, biscuits and nuts for every craving.",
    items: [
      "Mixed Nuts", "Dark Chocolate", "Tortilla Chips", "Biscuits",
      "Dried Fruit Mix", "Crisps", "Wafers",
    ],
  },
  {
    slug: "groceries-pantry",
    name: "Groceries & Pantry",
    image: groceries,
    blurb: "Pasta, rice, oils and tinned essentials for every meal.",
    items: [
      "Pasta", "Basmati Rice", "Bulgur Wheat", "Tinned Tomatoes",
      "Chickpeas", "Lentils", "Sunflower Oil", "Coffee", "Tea",
    ],
  },
  {
    slug: "wines-spirits",
    name: "Wines & Spirits",
    image: wines,
    blurb: "A curated selection of wines, beers and spirits.",
    items: [
      "Red Wine", "White Wine", "Rosé", "Craft Lager",
      "Raki", "Vodka", "Whisky", "Prosecco",
    ],
  },
];

export const site = {
  name: "LAV Whole Food",
  tagline: "Your 24/7 neighbourhood supermarket in Archway",
  phone: "020 7263 7071",
  phoneHref: "tel:+442072637071",
  email: "hello@lavwholefood.co.uk",
  address: "691-693 Holloway Rd, Archway, London N19 5SE",
  /** Opens Google Maps in a new tab — share / short links are fine here. */
  mapsUrl: "https://maps.app.goo.gl/9J8WMrtp7hz3io1M9",
  /** For the contact-page iframe only — must be an embed URL, not a share link. */
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7471.191686990691!2d-0.13150500816033214!3d51.56542169162244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b6b9d45d40f%3A0xc4698e361e1dd462!2sLav%20Whole%20Food!5e0!3m2!1sen!2suk!4v1780510331932!5m2!1sen!2suk",
  hours: "Open 24 hours · 7 days a week",
};
