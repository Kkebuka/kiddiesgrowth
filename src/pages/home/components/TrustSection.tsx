import {
  FaShieldAlt,
  FaShippingFast,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-primary w-8 h-8" />,
    title: "Safety First",
    description:
      "All toys are rigorously tested and certified safe for children",
  },
  {
    icon: <FaShippingFast className="text-primary w-8 h-8" />,
    title: "Fast Delivery",
    description: "Free shipping on orders over ₦30,000. Quick 2-3 day delivery",
  },
  {
    icon: <FaAward className="text-primary w-8 h-8" />,
    title: "Expert Curated",
    description: "Selected by child development experts and educators",
  },
  {
    icon: <FaHandshake className="text-primary w-8 h-8" />,
    title: "Happy Guarantee",
    description:
      "30-day return policy. If your child doesn't love it, return it",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-fredoka font-bold text-3xl lg:text-4xl text-base-500">
            Why Parents Trust Us
          </h2>
          <p className="font-inter text-lg text-gray-500 max-w-2xl mx-auto">
            We're committed to providing the highest quality educational toys
            that are safe, engaging, and developmentally appropriate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 text-center p-6 rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-fredoka font-semibold text-lg  text-base-500">
                {feature.title}
              </h3>
              <p className="font-inter text-sm  mt-2 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
