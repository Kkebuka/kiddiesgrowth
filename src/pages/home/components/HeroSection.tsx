import { AiFillStar } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../../assets/images/hero-kids-playing.jpg";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-white/90">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-sm font-medium">
                Trusted by 10k+ Parents
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold font-fredoka leading-tight">
                Learn Through
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-300">
                  Play & Discovery
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-white/90 max-w-lg leading-relaxed">
                Premium educational toys that spark creativity, build
                confidence, and make learning an adventure your child will love.
              </p>
            </div>

            {/* Value Props */}
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              {["Age-Appropriate", "Safety Tested", "Expert Curated"].map(
                (text, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                    <span className="font-medium">{text}</span>
                  </div>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="btn btn-primary text-white shadow-white shadow-xs font-semibold flex items-center gap-2 group" // Added 'group' class
              >
                Shop Now{" "}
                <FaArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-3" />
              </Link>

              <Link
                to="/category"
                className="btn btn-outline bg-base-200 border-white/40 text-primary hover:bg-base-200/90 font-semibold"
              >
                View Categories
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm text-white/80">
                <span className="font-semibold">2,000+</span> happy customers
                this month
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Children playing with educational toys"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Decorative Circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-300/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
