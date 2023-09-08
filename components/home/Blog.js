import Image from "next/image";

const articles = [
  {
    author: "Event Planner",
    title: "Event of the year",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Na suscipit nec orci euismod fermentum. Praesent augue dolor...",
    imgPath: "/images/image-currency.jpg",
    imgAlt: "multiple bills with different values and currencies",
  },
  {
    author: "Event Planner",
    title: "Event of the year",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Na suscipit nec orci euismod fermentum. Praesent augue dolor...",
    imgPath: "/images/image-restaurant.jpg",
    imgAlt: "someone eating a hamburguer in a restaurant",
  },
  {
    author: "Event Planner",
    title: "Event of the year",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Na suscipit nec orci euismod fermentum. Praesent augue dolor...",
    imgPath: "/images/image-plane.jpg",
    imgAlt: "A plane in the sky",
  },
  {
    author: "Event Planner",
    title: "Event of the year",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Na suscipit nec orci euismod fermentum. Praesent augue dolor...",
    imgPath: "/images/image-confetti.jpg",
    imgAlt: "Falling confetti",
  },
];

export default function Blog() {
  return (
    <section className="py-14 lg:py-24">
      <div className="container">
        <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left lg:mb-10">
          Latest Events
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:gap-7 lg:grid-cols-4">
          {articles.map((article) => (
            <article key={article.title} className="bg-white">
              <div className="aspect-w-16 aspect-h-10 lg:aspect-w-4 lg:aspect-h-3">
                <Image
                  className="object-cover"
                  src={article.imgPath}
                  width={200}
                  height={200}
                  alt={article.imgAlt}
                />
              </div>

              <div className="px-7 pt-5 pb-10 lg:p-6">
                <span className="text-neutral-grayish-blue text-xs">
                  {article.author}
                </span>
                <h4 className="text-primary-dark-blue text-sm py-2 hover:text-green-400">
                  <a href="#">{article.title}</a>
                </h4>
                <p className="text-neutral-grayish-blue text-xs">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
