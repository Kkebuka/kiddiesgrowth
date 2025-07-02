import React from "react";

export default function AboutUsPage() {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-4">
          About KiddiesGrowth
        </h1>
        <p className="text-lg text-gray-600">
          Helping your child grow through joyful learning, play, and creativity.
        </p>
      </div>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
        <p className="text-gray-700">
          At <span className="font-semibold">KiddiesGrowth</span>, we believe
          every child deserves a nurturing space to explore, learn, and thrive.
          Our journey started with a passion for purposeful play—curating toys
          and educational tools that stimulate a child’s senses, imagination,
          and development. We don’t just sell products; we support parenting by
          offering items that spark curiosity and inspire growth.
        </p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
        <p className="text-gray-700">
          To become Nigeria’s most trusted platform for parents seeking quality
          developmental tools for their children—making playtime a time to grow.
        </p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Why Parents Trust Us
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Carefully Curated Products:</strong> Every item in our store
            is chosen with learning and fun in mind.
          </li>
          <li>
            <strong>Play with Purpose:</strong> We combine joy and growth in
            every toy and tool we offer.
          </li>
          <li>
            <strong>Faceless, but Connected:</strong> Though we create faceless
            content, we stay deeply connected to our community through reviews,
            guides, and shared stories.
          </li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-primary mb-4">
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
  );
}
