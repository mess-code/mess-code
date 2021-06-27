import React, { useEffect } from 'react';
import Image from 'next/image';
import { useCountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import aboutMeImg from '../public/aboutme.jpg';
import PrimaryButton from './PrimaryButton';

export interface HomeAboutProps { }

const HomeAbout: React.FunctionComponent<HomeAboutProps> = () => {
  const [counterRef, counterInView] = useInView({ threshold: 0.8, triggerOnce: true, delay: 1000 });

  const { countUp: countUpYear, start: startYear } = useCountUp({
    start: 0,
    end: 4,
    duration: 3,
    suffix: '+',
  });

  const { countUp: countUpService, start: startService } = useCountUp({
    start: 0,
    end: 30,
    duration: 4,
    suffix: '+'
  });

  const { countUp: countUpCompany, start: startCompany } = useCountUp({
    start: 0,
    end: 2,
    duration: 2,
    suffix: '+',
  });

  useEffect(() => {
    if (counterInView) {
      startYear();
      startService();
      startCompany();
    }
  }, [counterInView]);

  return (
    <div className="bg-white lg:container mx-auto px-4 py-14 md:py-20 lg:py-40">
      <h2 className="text-center">About me</h2>
      <p className="text-center text-gray-500 mt-2">My introduction</p>

      <div className="flex flex-wrap justify-center lg:justify-around items-center mt-10 md:mt-20">
        <div className="w-10/12 md:w-8/12 lg:w-5/12">
          <Image
            className="rounded-2xl"
            loading="lazy"
            alt="about-me"
            width={728}
            height={380}
            src={aboutMeImg} />
        </div>

        <div className="w-12/12 md:w-10/12 lg:w-5/12 mt-10">
          <p className="text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

          <div className="flex justify-between items-center mt-10" ref={counterRef}>
            <div className="w-3/12">
              <h2 className="text-center">{countUpYear}</h2>
              <p className="text-center text-gray-500 mt-2">Years<br />experience</p>
            </div>
            <div className="w-4/12">
              <h2 className="text-center">{countUpService}</h2>
              <p className="text-center text-gray-500 mt-2">Modules/projects<br />worked</p>
            </div>
            <div className="w-3/12">
              <h2 className="text-center">{countUpCompany}</h2>
              <p className="text-center text-gray-500 mt-2">Companies<br />worked</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start mt-16">
            <PrimaryButton content="Download My CV" icon="uil uil-cloud-download" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
