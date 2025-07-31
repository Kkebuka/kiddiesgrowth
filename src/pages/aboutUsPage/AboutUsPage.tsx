import React from "react";
import aboutImg from "../../assets/images/about-Img.jpg";

export default function AboutUsPage() {
  return (
    <div className="  pb-8  overflow-x-hidden   mx-auto">
      <div
        className="relative w-screen h-[400px] bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-6xl font-bold t mb-4">About KiddiesGrowth</h1>{" "}
          <p className="text-xl text-gray-100">
            Helping your child grow through joyful learning, play, and
            creativity.
          </p>
        </div>
      </div>

      <div className="px-12 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 gap-8 mt-8 justify-center">
        <section className="bg-white shadow-lg rounded-lg p-6 ">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To become Nigeria’s most trusted platform for parents seeking
            quality developmental tools for their children—making playtime a
            time to grow.
          </p>
        </section>
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Our Story
          </h2>
          <p className="text-gray-700">
            At <span className="font-semibold">KiddiesGrowth</span>, we believe
            every child deserves a nurturing space to explore, learn, and
            thrive. Our journey started with a passion for purposeful
            play—curating toys and educational tools that stimulate a child’s
            senses, imagination, and development. We don’t just sell products;
            we support parenting by offering items that spark curiosity and
            inspire growth.
          </p>
        </section>
        <section className="bg-white shadow-lg rounded-lg p-6 ">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Why Parents Trust Us
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Carefully Curated Products:</strong> Every item in our
              store is chosen with learning and fun in mind.
            </li>
            <li>
              <strong>Play with Purpose:</strong> We combine joy and growth in
              every toy and tool we offer.
            </li>
            <li>
              <strong>Faceless, but Connected:</strong> Though we create
              faceless content, we stay deeply connected to our community
              through reviews, guides, and shared stories.
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 ">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Join the KiddiesGrowth Family
          </h2>
          <p className="text-gray-700 mb-4">
            We’re more than a store—we’re a growing movement of parents who
            believe in nurturing our kids through mindful parenting, play, and
            education.
          </p>
          <p className="text-sm text-gray-500">
            Follow us on social media, stay inspired, and let’s build a better
            future for our children—one toy at a time.
          </p>
        </section>
      </div>
    </div>
  );
}
