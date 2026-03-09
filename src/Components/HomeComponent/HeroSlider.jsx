import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight, Play } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://img.drz.lazcdn.com/g/kf/S3a5e9736b9aa4ef4bac1b7280fed1b07n.jpg_720x720q80.jpg_.webp",
    title: "Celebrate Eid with Digital Salami",
    subtitle:
      "Send Eid Salami to your juniors and request blessings from your seniors easily through our smart salami exchange system.",
    ctaText: "Send Salami",
    link: "/give-salami",
  },
  {
    id: 2,
    image: "https://i.ytimg.com/vi/E3yNX4-A_-s/maxresdefault.jpg",
    title: "Request Salami from Your Seniors",
    subtitle:
      "Juniors can send salami requests to seniors and celebrate Eid together in a fun digital way.",
    ctaText: "Request Salami",
    link: "/requests",
  },
  {
    id: 3,
    image:
      "https://www.eidparty.co.uk/cdn/shop/articles/front-view-islamic-new-year-concept_3.png?v=1712142595",
    title: "Track Your Eid Salami History",
    subtitle:
      "Easily view the salami you’ve given and received. Celebrate Eid with transparency and fun through our digital salami tracker.",
    ctaText: "View History",
    link: "/history",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] md:h-[85vh] min-h-[650px] md:min-h-[600px] w-full overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          <div className="relative z-10 flex h-full items-center max-w-7xl mx-auto px-6 sm:px-12 py-10 md:py-20">
            <div className="max-w-3xl text-left">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-7xl font-extrabold text-white leading-[1.2] md:leading-[1.1]">
                  {slides[index].title}
                </h1>

                <p className="mb-6 md:mb-10 text-sm md:text-xl max-w-xl text-gray-100 leading-relaxed opacity-90 pr-4">
                  {slides[index].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
                  <Link
                    href={slides[index].link}
                    className="group flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all shadow-xl active:scale-95 border border-primary/20 text-sm md:text-base"
                  >
                    {slides[index].ctaText}
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>

                  <button className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 hover:border-secondary px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all active:scale-95 text-sm md:text-base">
                    <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-white text-primary group-hover:bg-secondary group-hover:text-white rounded-full transition-colors">
                      <Play size={10} fill="currentColor" />
                    </span>
                    Live Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 md:bottom-16 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className="group p-2">
            <div
              className={`transition-all duration-500 rounded-full ${
                index === i ? "w-8 h-2 bg-secondary" : "w-2 h-2 bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-6 md:h-12 text-base-100 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C0,95.83,161,122.52,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
}
