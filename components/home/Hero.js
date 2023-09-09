import { useState } from "react";
import Popup from "../popup";

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section id="hero" className="relative">
      <div className="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div>
      <div className="bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block bg-left -right-42.6%"></div>
      <div className="bg-image-mockups bg-right-top absolute z-20 w-full bg-opacity-50 h-full bg-no-repeat -top-12 md:-top-16 bg-custom-mobile-mockup-size lg:hidden"></div>
      <div className="container h-screen relative z-20">
        <div className="h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center">
          <div className="h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl lg:text-5xl text-primary-dark-blue pb-5">
              Book your next event
            </h1>
            <p className="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              suscipit nec orci euismod fermentum. Praesent augue dolor,
              bibendum vel ex quis, congue posuere ex. In eget lectus nec libero
              bibendum egestas.
            </p>

            <Popup isOpen={isPopupOpen} onClose={closePopup} />

            <button
              onClick={openPopup}
              className="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400"
            >
              CLICK to Request a Booking with Event Planner Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
