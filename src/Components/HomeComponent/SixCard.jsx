"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

/* ================= All 6 Cards ================= */
const cards = [
  // === Eid Mubarak Cards ===
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x6RLX2jbAUG-X3gc9eoI1CrwRX8OTM1cRw&s",
    title: "Eid Mubarak Wishes",
    description:
      "Wishing you a joyful Eid filled with blessings, happiness, and love.",
    bg: "bg-[#FDE68A]",
    textColor: "text-black",
    buttonText: "Send Greetings",
    link: "/greetings",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceZt-tGjlOkKFmi4W1CoRqN0um3SnLT5U1Q&s",
    title: "Celebrate Eid Together",
    description:
      "Share smiles and happiness with your friends and family this Eid.",
    bg: "bg-[#2458fe]",
    textColor: "text-black",
    buttonText: "Celebrate Now",
    link: "/celebrate",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80",
    title: "Eid Festival Fun",
    description:
      "Enjoy the festive season with digital celebrations and memorable moments.",
    bg: "bg-[#aeebf2]",
    textColor: "text-black",
    buttonText: "Join Festival",
    link: "/festival",
  },

  // === Eid Salami Cards ===
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd87HT71hErRFF3BEdrTyZ--S-5CqYMNoJw&s",
    title: "Send Salami to Juniors",
    description:
      "Celebrate Eid by sending digital salami to your juniors and spread joy.",
    bg: "bg-[#0D4444]",
    textColor: "text-white",
    buttonText: "Send Salami",
    link: "/give-salami",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_0Q65pLsX_podhmTvkXU9czF_6C4JvUAmQ&s",
    title: "Request Salami",
    description:
      "Juniors can request salami from seniors and receive Eid blessings digitally.",
    bg: "bg-[#f7a34c]",
    textColor: "text-black dark:text-white",
    buttonText: "Request Salami",
    link: "/requests",
  },
  {
    id: 6,
    image:
      "https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2022/04/27/bkash.png",
    title: "Salami History & Leaderboard",
    description:
      "Track given and received salami, and see the most generous seniors.",
    bg: "bg-[#93cf5b]",
    textColor: "text-white",
    buttonText: "View Leaderboard",
    link: "/leaderboard",
  },
];

/* ================= SixCard Component ================= */
const SixCard = () => {
  return (
    <section className="bg-base-100 py-24 relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Celebrate Eid with Digital Salami
        </h2>
        <p className="max-w-2xl mx-auto text-base-content/70">
          Send greetings, share joy, and exchange digital salami with your
          juniors and seniors this Eid.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.bg} rounded-xl p-6 flex flex-col justify-between shadow-md transition-transform transform hover:scale-105 hover:shadow-xl`}
          >
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${card.textColor}`}>
                {card.title}
              </h3>
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4 shadow-inner border border-black/5 dark:border-white/5">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`${card.textColor} opacity-80 text-sm leading-relaxed`}>
                {card.description}
              </p>
            </div>
            <Link href={card.link}>
              <button
                className="bg-white text-black text-xs font-bold py-3 px-6 rounded-full mt-4 hover:opacity-90 transition-all flex items-center gap-2 w-fit"
              >
                {card.buttonText} <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SixCard;