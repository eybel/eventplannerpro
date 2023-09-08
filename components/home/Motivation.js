import Image from "next/image";

const motivationItems = [
  {
    iconPath: "/icons/icon-online.svg",
    title: "Pay Online",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Na suscipit nec orci euismod fermentum. Praesent augue dolor.",
  },
  {
    iconPath: "/icons/icon-budgeting.svg",
    title: "Get Estimates fast",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Na suscipit nec orci euismod fermentum. Praesent augue dolor.",
  },
  {
    iconPath: "/icons/icon-onboarding.svg",
    title: "Connect with people",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Na suscipit nec orci euismod fermentum. Praesent augue dolor.",
  },
];

export default function Motivation() {
  return (
    <section className="py-14 bg-neutral-light-grayish-blue lg:py-24">
      <div className="container text-center lg:text-left">
        <div className="grid lg:grid-cols-2 mb-12 lg:mb-16">
          <div className="col-span-1">
            <h2 className="text-3xl lg:text-4xl text-primary-dark-blue pb-5">
              Why choose Event Planner Pro?
            </h2>
            <p className="text-neutral-grayish-blue text-sm lg:text-base leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              suscipit nec orci euismod fermentum.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-3">
          {motivationItems.map((item) => (
            <div key={item.title} className="justify-center">
              <div className="flex justify-center lg:justify-start">
                <Image src={item.iconPath} width="100" height="100" alt="" />
              </div>

              <h2 className="text-lg text-primary-dark-blue py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
              <p className="text-neutral-grayish-blue text-sm font-light lg:text-base leading-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
