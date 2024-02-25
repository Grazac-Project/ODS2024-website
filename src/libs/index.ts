import {
  FooterLinkProps,
  NavbarLinkProps,
  HighlightsProps,
  ProductProps,
} from "@/types";

export const NAV_LINKS: NavbarLinkProps[] = [
  { id: 1, link: "/gallery", label: "gallery" },
  { id: 2, link: "/highlight", label: "highlights" },
  { id: 3, link: "/blog", label: "Blog" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  company: [
    { id: 1, link: "services?path=services", label: "services" },
    { id: 2, link: "about?path=about", label: "about us" },
    { id: 3, link: "contacts?path=contacts", label: "contacts" },
    { id: 4, link: "jobs?path=jobs", label: "jobs" },
  ],
  help: [
    { id: 1, link: "faq?path=faq", label: "faq" },
    { id: 2, link: "terms?path=terms", label: "terms of services" },
    { id: 3, link: "privacy?path=privacy", label: "privacy policy" },
  ],
  emails: [
    { id: 1, email: "Info@codesgranite.com" },
    { id: 2, email: "Contact@codesgranite.com" },
    { id: 3, email: "Support@codesgranite.com" },
  ],
};

export const speakers = [
  {
    id: 1,
    name: "Olubunmi Fabanwo",
    title: "Affiliate Program Manager",
    title2: "Binance(Africa)",
    src: "/images/speaker1.svg",
    description: {
      bio: `Olubunmi Fabanwo is a seasoned professional in the field of
            affiliate marketing and business development, currently serving as
            the Affiliate Program Manager at Binance, one of the world's leading
            cryptocurrency exchanges, with a specific focus on the African
            region. <br /> <br /> With a background rooted in business
            management and marketing, Olubunmi has demonstrated a keen
            understanding of affiliate marketing dynamics and strategies that
            drive growth and engagement. His role at Binance involves
            spearheading the affiliate program initiatives tailored to the
            African market, fostering relationships with partners, and
            implementing innovative strategies to expand Binance's reach across
            the continent. <br /> Olubunmi Fabanwo's expertise lies in
            leveraging affiliate networks, strategic partnerships, and digital
            marketing channels to optimize user acquisition and retention
            efforts. He possesses a deep understanding of the cryptocurrency
            ecosystem and its potential impact on emerging markets like Africa,
            where financial inclusion and access to digital assets are
            increasingly vital. <br /> <br /> Throughout his career, Olubunmi
            has been dedicated to empowering individuals and businesses by
            providing them with access to valuable resources and opportunities
            in the cryptocurrency space. He is passionate about driving adoption
            and awareness of blockchain technology and decentralized finance
            (DeFi) solutions across Africa, contributing to the region's
            economic empowerment and financial independence. <br /> As the
            Affiliate Program Manager at Binance (Africa), Olubunmi Fabanwo
            plays a pivotal role in shaping the company's strategic direction
            and fostering collaborative partnerships that drive mutual growth
            and success in the dynamic and rapidly evolving cryptocurrency
            landscape. His commitment to innovation, integrity, and excellence
            underscores his contributions to Binance's mission of making
            cryptocurrency accessible to people around the world.`,
    },
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/olubunmifabanwo/",
      },
      { platform: "twitter", url: "https://twitter.com/OlubunmiFabanwo" },
      {
        platform: "instagram",
        url: "https://www.instagram.com/olubunmifabanwo/",
      },
    ],
  },
  {
    id: 2,
    name: "Harrison Obiefule",
    title: "Co-Lead, SuperteamDAO (Nigeria)",
    src: "/images/speaker2.svg",
    description: {
      bio: `Olubunmi Fabanwo is a seasoned professional in the field of
            affiliate marketing and business development, currently serving as
            the Affiliate Program Manager at Binance, one of the world's leading
            cryptocurrency exchanges, with a specific focus on the African
            region. <br /> <br /> With a background rooted in business
            management and marketing, Olubunmi has demonstrated a keen
            understanding of affiliate marketing dynamics and strategies that
            drive growth and engagement. His role at Binance involves
            spearheading the affiliate program initiatives tailored to the
            African market, fostering relationships with partners, and
            implementing innovative strategies to expand Binance's reach across
            the continent. <br /> Olubunmi Fabanwo's expertise lies in
            leveraging affiliate networks, strategic partnerships, and digital
            marketing channels to optimize user acquisition and retention
            efforts. He possesses a deep understanding of the cryptocurrency
            ecosystem and its potential impact on emerging markets like Africa,
            where financial inclusion and access to digital assets are
            increasingly vital. <br /> <br /> Throughout his career, Olubunmi
            has been dedicated to empowering individuals and businesses by
            providing them with access to valuable resources and opportunities
            in the cryptocurrency space. He is passionate about driving adoption
            and awareness of blockchain technology and decentralized finance
            (DeFi) solutions across Africa, contributing to the region's
            economic empowerment and financial independence. <br /> As the
            Affiliate Program Manager at Binance (Africa), Olubunmi Fabanwo
            plays a pivotal role in shaping the company's strategic direction
            and fostering collaborative partnerships that drive mutual growth
            and success in the dynamic and rapidly evolving cryptocurrency
            landscape. His commitment to innovation, integrity, and excellence
            underscores his contributions to Binance's mission of making
            cryptocurrency accessible to people around the world.`,
    },
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/olubunmifabanwo/",
      },
      { platform: "twitter", url: "https://twitter.com/OlubunmiFabanwo" },
      {
        platform: "instagram",
        url: "https://www.instagram.com/olubunmifabanwo/",
      },
    ],
  },
  {
    id: 3,
    name: "Joshua Chibueze",
    title: "Co-founder and CMO, Piggyvest",
    src: "/images/speaker3.svg",
    description: {
      bio: `Olubunmi Fabanwo is a seasoned professional in the field of
            affiliate marketing and business development, currently serving as
            the Affiliate Program Manager at Binance, one of the world's leading
            cryptocurrency exchanges, with a specific focus on the African
            region. <br /> <br /> With a background rooted in business
            management and marketing, Olubunmi has demonstrated a keen
            understanding of affiliate marketing dynamics and strategies that
            drive growth and engagement. His role at Binance involves
            spearheading the affiliate program initiatives tailored to the
            African market, fostering relationships with partners, and
            implementing innovative strategies to expand Binance's reach across
            the continent. <br /> Olubunmi Fabanwo's expertise lies in
            leveraging affiliate networks, strategic partnerships, and digital
            marketing channels to optimize user acquisition and retention
            efforts. He possesses a deep understanding of the cryptocurrency
            ecosystem and its potential impact on emerging markets like Africa,
            where financial inclusion and access to digital assets are
            increasingly vital. <br /> <br /> Throughout his career, Olubunmi
            has been dedicated to empowering individuals and businesses by
            providing them with access to valuable resources and opportunities
            in the cryptocurrency space. He is passionate about driving adoption
            and awareness of blockchain technology and decentralized finance
            (DeFi) solutions across Africa, contributing to the region's
            economic empowerment and financial independence. <br /> As the
            Affiliate Program Manager at Binance (Africa), Olubunmi Fabanwo
            plays a pivotal role in shaping the company's strategic direction
            and fostering collaborative partnerships that drive mutual growth
            and success in the dynamic and rapidly evolving cryptocurrency
            landscape. His commitment to innovation, integrity, and excellence
            underscores his contributions to Binance's mission of making
            cryptocurrency accessible to people around the world.`,
    },
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/olubunmifabanwo/",
      },
      { platform: "twitter", url: "https://twitter.com/OlubunmiFabanwo" },
      {
        platform: "instagram",
        url: "https://www.instagram.com/olubunmifabanwo/",
      },
    ],
  },
  {
    id: 4,
    name: "Olubunmi Fabanwo",
    title: "Affiliate Program Manager",
    title2: "Binance(Africa)",
    src: "/images/speaker1.svg",
    description: {
      bio: `Olubunmi Fabanwo is a seasoned professional in the field of
            affiliate marketing and business development, currently serving as
            the Affiliate Program Manager at Binance, one of the world's leading
            cryptocurrency exchanges, with a specific focus on the African
            region. <br /> <br /> With a background rooted in business
            management and marketing, Olubunmi has demonstrated a keen
            understanding of affiliate marketing dynamics and strategies that
            drive growth and engagement. His role at Binance involves
            spearheading the affiliate program initiatives tailored to the
            African market, fostering relationships with partners, and
            implementing innovative strategies to expand Binance's reach across
            the continent. <br /> Olubunmi Fabanwo's expertise lies in
            leveraging affiliate networks, strategic partnerships, and digital
            marketing channels to optimize user acquisition and retention
            efforts. He possesses a deep understanding of the cryptocurrency
            ecosystem and its potential impact on emerging markets like Africa,
            where financial inclusion and access to digital assets are
            increasingly vital. <br /> <br /> Throughout his career, Olubunmi
            has been dedicated to empowering individuals and businesses by
            providing them with access to valuable resources and opportunities
            in the cryptocurrency space. He is passionate about driving adoption
            and awareness of blockchain technology and decentralized finance
            (DeFi) solutions across Africa, contributing to the region's
            economic empowerment and financial independence. <br /> As the
            Affiliate Program Manager at Binance (Africa), Olubunmi Fabanwo
            plays a pivotal role in shaping the company's strategic direction
            and fostering collaborative partnerships that drive mutual growth
            and success in the dynamic and rapidly evolving cryptocurrency
            landscape. His commitment to innovation, integrity, and excellence
            underscores his contributions to Binance's mission of making
            cryptocurrency accessible to people around the world.`,
    },
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/olubunmifabanwo/",
      },
      { platform: "twitter", url: "https://twitter.com/OlubunmiFabanwo" },
      {
        platform: "instagram",
        url: "https://www.instagram.com/olubunmifabanwo/",
      },
    ],
  },
  {
    id: 5,
    name: "Harrison Obiefule",
    title: "Co-Lead, SuperteamDAO (Nigeria)",
    src: "/images/speaker2.svg",
    description: {
      bio: `Olubunmi Fabanwo is a seasoned professional in the field of
            affiliate marketing and business development, currently serving as
            the Affiliate Program Manager at Binance, one of the world's leading
            cryptocurrency exchanges, with a specific focus on the African
            region. <br /> <br /> With a background rooted in business
            management and marketing, Olubunmi has demonstrated a keen
            understanding of affiliate marketing dynamics and strategies that
            drive growth and engagement. His role at Binance involves
            spearheading the affiliate program initiatives tailored to the
            African market, fostering relationships with partners, and
            implementing innovative strategies to expand Binance's reach across
            the continent. <br /> Olubunmi Fabanwo's expertise lies in
            leveraging affiliate networks, strategic partnerships, and digital
            marketing channels to optimize user acquisition and retention
            efforts. He possesses a deep understanding of the cryptocurrency
            ecosystem and its potential impact on emerging markets like Africa,
            where financial inclusion and access to digital assets are
            increasingly vital. <br /> <br /> Throughout his career, Olubunmi
            has been dedicated to empowering individuals and businesses by
            providing them with access to valuable resources and opportunities
            in the cryptocurrency space. He is passionate about driving adoption
            and awareness of blockchain technology and decentralized finance
            (DeFi) solutions across Africa, contributing to the region's
            economic empowerment and financial independence. <br /> As the
            Affiliate Program Manager at Binance (Africa), Olubunmi Fabanwo
            plays a pivotal role in shaping the company's strategic direction
            and fostering collaborative partnerships that drive mutual growth
            and success in the dynamic and rapidly evolving cryptocurrency
            landscape. His commitment to innovation, integrity, and excellence
            underscores his contributions to Binance's mission of making
            cryptocurrency accessible to people around the world.`,
    },
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/olubunmifabanwo/",
      },
      { platform: "twitter", url: "https://twitter.com/OlubunmiFabanwo" },
      {
        platform: "instagram",
        url: "https://www.instagram.com/olubunmifabanwo/",
      },
    ],
  },
  {
    id: 6,
    name: "Joshua Chibueze",
    title: "Co-founder and CMO, Piggyvest",
    src: "/images/speaker3.svg",
    description: {
      bio: `Olubunmi Fabanwo is a seasoned professional in the field of
            affiliate marketing and business development, currently serving as
            the Affiliate Program Manager at Binance, one of the world's leading
            cryptocurrency exchanges, with a specific focus on the African
            region. <br /> <br /> With a background rooted in business
            management and marketing, Olubunmi has demonstrated a keen
            understanding of affiliate marketing dynamics and strategies that
            drive growth and engagement. His role at Binance involves
            spearheading the affiliate program initiatives tailored to the
            African market, fostering relationships with partners, and
            implementing innovative strategies to expand Binance's reach across
            the continent. <br /> Olubunmi Fabanwo's expertise lies in
            leveraging affiliate networks, strategic partnerships, and digital
            marketing channels to optimize user acquisition and retention
            efforts. He possesses a deep understanding of the cryptocurrency
            ecosystem and its potential impact on emerging markets like Africa,
            where financial inclusion and access to digital assets are
            increasingly vital. <br /> <br /> Throughout his career, Olubunmi
            has been dedicated to empowering individuals and businesses by
            providing them with access to valuable resources and opportunities
            in the cryptocurrency space. He is passionate about driving adoption
            and awareness of blockchain technology and decentralized finance
            (DeFi) solutions across Africa, contributing to the region's
            economic empowerment and financial independence. <br /> As the
            Affiliate Program Manager at Binance (Africa), Olubunmi Fabanwo
            plays a pivotal role in shaping the company's strategic direction
            and fostering collaborative partnerships that drive mutual growth
            and success in the dynamic and rapidly evolving cryptocurrency
            landscape. His commitment to innovation, integrity, and excellence
            underscores his contributions to Binance's mission of making
            cryptocurrency accessible to people around the world.`,
    },
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/olubunmifabanwo/",
      },
      { platform: "twitter", url: "https://twitter.com/OlubunmiFabanwo" },
      {
        platform: "instagram",
        url: "https://www.instagram.com/olubunmifabanwo/",
      },
    ],
  },
];

export const highlights: HighlightsProps[] = [
  {
    id: 1,
    title: "Leveraging on social media for business growth",
    img: "/images/highlight1.svg",
    date: "Thursday, 26th October 2023",
    speaker: "Olubunmi Fabanwo",
    description:
      "In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.",
  },
  {
    id: 2,
    title: "Raising funds for your startup business",
    img: "/images/highlight2.svg",
    date: "Thursday, 26th October 2023",
    speaker: "Olubunmi Fabanwo",
    description:
      "In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.",
  },
  {
    id: 3,
    title: "Getting started in tech - Knowing what to learn",
    img: "/images/highlight3.svg",
    date: "Thursday, 26th October 2023",
    speaker: "Olubunmi Fabanwo",
    description:
      "In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.",
  },
  {
    id: 4,
    title: "Leveraging on social media for business growth",
    img: "/images/highlight1.svg",
    date: "Thursday, 26th October 2023",
    speaker: "Olubunmi Fabanwo",
    description:
      "In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.",
  },
  {
    id: 5,
    title: "Raising funds for your startup business",
    img: "/images/highlight2.svg",
    date: "Thursday, 26th October 2023",
    speaker: "Olubunmi Fabanwo",
    description:
      "In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.",
  },
  {
    id: 6,
    title: "Getting started in tech - Knowing what to learn",
    img: "/images/highlight3.svg",
    date: "Thursday, 26th October 2023",
    speaker: "Olubunmi Fabanwo",
    description:
      "In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.  In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.",
  },
];

export const teams = [
  {
    id: 1,
    name: "Harrison Obiefule",
    title: "Program Cordinator",
    src: "/images/speaker1.svg",
  },
  {
    id: 2,
    name: "Harrison Obiefule",
    title: "Media Specialist",
    src: "/images/speaker4.svg",
  },
  {
    id: 3,
    name: "Harrison Obiefule",
    title: "Head of Design",
    src: "/images/speaker5.svg",
  },
  {
    id: 4,
    name: "Harrison Obiefule",
    title: "Software Developer",
    src: "/images/speaker3.svg",
  },
  {
    id: 5,
    name: "Harrison Obiefule",
    title: "Head of Publicity",
    src: "/images/speaker2.svg",
  },
  {
    id: 6,
    name: "Harrison Obiefule",
    title: "Social media manager",
    src: "/images/speaker6.svg",
  },
];

export const details = [
  {
    id: 1,
    date: "Thursday, 26th October 2023",
    title: "Leveraging on social media for business growth.",
    speaker: "Olubunmi Fabanwo",
    img: "/highlights/img1.svg",
    description:
      "In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy. In the last three years, the Ogun Digital Summit has ignited a fire within the hearts of more than 6,000 individuals, propelling them to not only forge careers in the digital technology sector but also to harness the power of technology in tackling significant challenges, thereby revolutionizing our digital economy.",
  },
];

export const products: ProductProps[] = [
  {
    image: "/shop/bag.svg",
    name: "ODS 2024 Bag ",
    rating: "3.9",
    reviewsCount: "546",
    discount: "20",
    price: "10,000",
    originalPrice: "14,000",
  },
  {
    image: "/shop/bag2.svg",
    name: "ODS 2024 Bag",
    rating: "3.9",
    reviewsCount: "4",
    discount: "20",
    price: "100,000",
    originalPrice: "14,000",
  },
  {
    image: "/shop/shirt.svg",
    name: "ODS 2024 T-Shirt",
    rating: "3.9",
    reviewsCount: "4",
    discount: "20",
    price: "25,000",
    originalPrice: "35,000",
  },
  {
    image: "/shop/shirt1.svg",
    name: "ODS 2024 T-Shirt",
    rating: "3.9",
    reviewsCount: "4",
    discount: "20",
    price: "25,000",
    originalPrice: "35,000",
  },
  {
    image: "/shop/shirt2.svg",
    name: "ODS 2024 T-Shirt",
    rating: "3.9",
    reviewsCount: "4",
    discount: "20",
    price: "25,000",
    originalPrice: "35,000",
  },
  {
    image: "/shop/shirt3.svg",
    name: "ODS 2024 T-Shirt",
    rating: "3.9",
    reviewsCount: "4",
    discount: "20",
    price: "25,000",
    originalPrice: "35,000",
  },
  {
    image: "/shop/shirt4.svg",
    name: "ODS 2024 T-Shirt",
    rating: "3.9",
    reviewsCount: "4",
    discount: "20",
    price: "25,000",
    originalPrice: "35,000",
  },
];
