"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const allCardData = [
 
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_z97bNHUKOhVxp_0JMbfqfQoVIqqoMTWZqQ&s",
    title: "Request Salami",
    description:
      "Juniors can send salami requests to their seniors and receive Eid blessings digitally.",
     bg: "bg-[#F7F4ED]",
    textColor: "text-black",
    btnBg: "bg-white dark:bg-secondary dark:text-secondary-content",
    buttonText: "Request Salami",
  },
   {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=600",
    title: "Send Salami to Juniors",
    description:
      "Celebrate Eid by sending digital salami to your juniors. Share happiness and blessings instantly.",
    bg: "bg-[#0D4444]",
    textColor: "text-white",
    btnBg: "bg-[#FBBF24]",
    buttonText: "Send Salami",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsbQa52n9fXlFc80eFVIpQFdT9YrvQY5PeQ&s",
    title: "Salami History",
    description:
      "Track all the salami you have given and received during Eid in one place.",
    bg: "bg-[#F7F4ED]",
    textColor: "text-black",
    btnBg: "bg-white dark:bg-secondary dark:text-secondary-content",
    buttonText: "View History",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&q=80&w=600",
    title: "Top Salami Givers",
    description:
      "See who is the most generous senior this Eid with our leaderboard system.",
    bg: "bg-[#0D4444]",
    textColor: "text-white",
    btnBg: "bg-[#FBBF24]",
    buttonText: "View Leaderboard",
  },
];

export const CardSlider = () => {
  const duplicatedCards = [...allCardData, ...allCardData];

  return (
    <section className="bg-base-100 py-24 relative overflow-hidden transition-colors duration-300">
      {" "}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        ```
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-base-content mb-6">
          Celebrate Eid with Digital Salami
        </h2>
        <p className="max-w-2xl mx-auto text-base-content/70">
          Send salami to juniors, request blessings from seniors, and track your
          Eid celebrations through our smart digital salami exchange system.
        </p>
      </div>
      <div className="flex w-full overflow-hidden relative">
        <motion.div
          className="flex gap-6 whitespace-nowrap px-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} w-[350px] md:w-[420px] rounded-none p-10 flex flex-col justify-between whitespace-normal shadow-sm shrink-0 h-[520px] transition-all border border-transparent dark:border-white/5 group`}
            >
              <div>
                <h3 className={`text-2xl font-bold mb-8 ${card.textColor}`}>
                  {card.title}
                </h3>

                <div className="relative h-60 w-full rounded-3xl overflow-hidden mb-8 shadow-md border-4 border-black/5 dark:border-white/5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>

                <p
                  className={`${card.textColor} opacity-80 text-sm leading-relaxed`}
                >
                  {card.description}
                </p>
              </div>

              <button
                className={`${card.btnBg} text-black text-xs font-bold py-3.5 px-10 rounded-full w-fit hover:opacity-90 transition-all active:scale-95 shadow-md flex items-center gap-2 mt-6`}
              >
                {card.buttonText}
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </motion.div>

        {/* Side Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};
