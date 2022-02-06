import React from "react";
import spoon from "../assets/images/spoon.svg";
import g from "../assets/images/g.svg";
import knife from "../assets/images/knife.svg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-image bg-cover bg-fixed bg-50 bg-repeat py-16 px-8 md:p-16 lg:px-24"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={g} alt="" className="h-80 w-4/5 object-contain md:w-80" />
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-end justify-end text-right">
          <h1 className="font-cormorant text-6xl capitalize tracking-wider text-golden lg:text-7xl">
            About Us
          </h1>

          <img src={spoon} alt="" className="w-11" />

          <p className="my-8 font-open text-sm leading-7 tracking-wider text-grey lg:text-base">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </p>

          <button className="rounded-sm bg-crimson py-2 px-6 font-cormorant font-bold leading-7 tracking-wider text-darkGray">
            Know More
          </button>
        </div>

        <div className="my-16 flex items-center justify-center lg:my-8 lg:mx-16">
          <img src={knife} alt="" className="h-full w-full object-contain" />
        </div>

        <div className="flex w-full flex-1 flex-col items-start justify-start text-left">
          <h1 className="font-cormorant text-6xl capitalize tracking-wider text-golden lg:text-7xl">
            Our History
          </h1>

          <img src={spoon} alt="" className="w-11" />

          <p className="my-8 font-open text-sm leading-7 tracking-wider text-grey lg:text-base">
            Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
            Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
            Odio Nec Aliquet.
          </p>

          <button className="rounded-sm bg-crimson py-2 px-6 font-cormorant font-bold leading-7 tracking-wider text-darkGray">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
