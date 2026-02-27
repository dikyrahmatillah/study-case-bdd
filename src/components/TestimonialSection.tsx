import React from "react";

const testimonialsRow1 = [
  {
    name: "COTTONINK",
    avatar: "C",
    color: "#0852c8",
    text: "“BDD sangat aktif buat ngasih insight dan rekomendasi terkait ads, Selama jalan kurang lebih 3 tahun udah nemu formula winning campaign nya, Dari sisi performance juga cukup oke, teknis pengerjaan dan inisiatif strategi nya bagus.\n\nOverall puas dengan BDD lewat service ads dan TikTok live nya. Sangat terbantu dari sisi digital marketing dan semoga bisa semakin growth lagi kedepannya.”",
  },
  {
    name: "Lotus Archi",
    avatar: "L",
    color: "#9e3832",
    text: "“Kita sudah jalan 2 tahun dengan pelayanan dari tim BDD dan cukup puas dengan pelayanan yang diberikan. Adanya insight setiap bulan dan performance online sale yang perlahan-lahan mulai ada peningkatan juga jadi faktor yang mempertahankan kerja sama antara brand Lotus Archi Gold dan juga BDD.”",
  },
  {
    name: "Holycow",
    avatar: "H",
    color: "#2de1e1",
    text: "“Terima kasih banyak ya BDD untuk service digital marketingnya yang ciamik! Kami sangat terbantu dengan deliverables yang sudah diberikan BDD pada perkembangan presensi digital kami.”",
  },
  {
    name: "Kitschy",
    avatar: "K",
    color: "#8b629d",
    text: "“Sangat senang dengan team BDD yang responsif dan komunikatif, sangat bisa kasih suggestion untuk improvement Kitschy.”",
  },
  {
    name: "CRSL",
    avatar: "C",
    color: "#e8f7ee",
    text: "“Selama jalan 3 tahun, sangat terbantu, ada dampak yang cukup signifikan dalam meningkat sales apalagi CPASnya. Sudah oke dari segi rekomendasi dan komunikasi.”",
  },
];

const testimonialsRow2 = [
  {
    name: "Holycow",
    avatar: "H",
    color: "#91f622",
    text: "“Terima kasih banyak ya BDD untuk service digital marketingnya yang ciamik! Kami sangat terbantu dengan deliverables yang sudah diberikan BDD pada perkembangan presensi digital kami.”",
  },
  {
    name: "Kitschy",
    avatar: "K",
    color: "#b43dac",
    text: "“Sangat senang dengan team BDD yang responsif dan komunikatif, sangat bisa kasih suggestion untuk improvement Kitschy.”",
  },
  {
    name: "CRSL",
    avatar: "C",
    color: "#3c5b93",
    text: "“Selama jalan 3 tahun, sangat terbantu, ada dampak yang cukup signifikan dalam meningkat sales apalagi CPASnya. Sudah oke dari segi rekomendasi dan komunikasi.”",
  },
  {
    name: "COTTONINK",
    avatar: "C",
    color: "#b0a3ef",
    text: "“BDD sangat aktif buat ngasih insight dan rekomendasi terkait ads, Selama jalan kurang lebih 3 tahun udah nemu formula winning campaign nya, Dari sisi performance juga cukup oke, teknis pengerjaan dan inisiatif strategi nya bagus.\n\nOverall puas dengan BDD lewat service ads dan TikTok live nya. Sangat terbantu dari sisi digital marketing dan semoga bisa semakin growth lagi kedepannya.”",
  },
  {
    name: "Lotus Archi",
    avatar: "L",
    color: "#70a8f2",
    text: "“Kita sudah jalan 2 tahun dengan pelayanan dari tim BDD dan cukup puas dengan pelayanan yang diberikan. Adanya insight setiap bulan dan performance online sale yang perlahan-lahan mulai ada peningkatan juga jadi faktor yang mempertahankan kerja sama antara brand Lotus Archi Gold dan juga BDD.”",
  },
];

type TestimonialItem = {
  name: string;
  avatar: string;
  color: string;
  text: string;
};

const TestimonialCard = ({ item }: { item: TestimonialItem }) => (
  <div
    className="section-testimoni-homepage content-item flex flex-col bg-white whitespace-normal shrink-0
    w-[75vw] md:w-[40vw]
    p-[2.2vw] md:p-[1.1vw]
    mx-[2.2vw] md:mx-[1.2vw]
    my-[1vw]
    border-[0.138vw] border-black
    rounded-[2.2vw] md:rounded-[0.55vw]
    shadow-[0.9vw_0.9vw_0px_0px_#222] md:shadow-[0.277vw_0.277vw_0px_0px_#222]
    h-auto
  "
  >
    <div className="content-item-header flex items-center">
      <div
        className="avatar flex justify-center items-center text-white
          w-[9.3vw] h-[9.3vw] md:w-[2.8vw] md:h-[2.8vw]
          rounded-[6vw] md:rounded-[3vw]
          text-[4.6vw] md:text-[1.35vw]
        "
        style={{ backgroundColor: item.color }}
      >
        {item.avatar}
      </div>
      <div className="information ml-[2.6vw] md:ml-[0.8vw]">
        <p className="name font-normal m-0 p-0 text-[4vw] md:text-[1.1vw] text-black">
          {item.name}
        </p>
      </div>
    </div>
    <p
      className="font-light text-black whitespace-pre-line
      text-[3.3vw] md:text-[1.25vw]
      leading-[3.8vw] md:leading-[1.5vw]
      mt-[3.5vw] md:mt-[1.2vw]
    "
    >
      {item.text}
    </p>
  </div>
);

export default function TestimonialSection() {
  return (
    <section
      id="container-section-testimoni"
      className="section-testimoni-homepage w-full overflow-hidden bg-[#eee9df] border-b-2 border-[#222222]"
    >
      <div className="inner flex flex-col items-center w-full py-20 md:py-[2vw]">
        <div className="w-full flex flex-col items-center content-heading">
          <h5 className="m-0 p-0 text-center text-[#333333] font-[500] leading-7 tracking-2 text-[4.26vw] md:text-[0.972vw] uppercase">
            FROM OUR NOTABLE CLIENTS
          </h5>
          <h3
            className="m-0 p-0 text-center font-normal 
            text-[6.4vw] md:text-[2.57vw]
            mt-[2vw] mb-[7vw] md:mt-[0.3vw] md:mb-[0.9vw]
            leading-12 md:leading-14
          "
          >
            800+ business have experienced the result
          </h3>
        </div>

        <div className="w-full flex flex-col gap-[7vw] md:gap-2 overflow-hidden relative content-marque inner-marquee">
          <div className="box-marquee flex w-max animate-marquee hover:[animation-play-state:paused] items-stretch">
            {[...testimonialsRow1, ...testimonialsRow1].map((item, index) => (
              <TestimonialCard key={`row1-${index}`} item={item} />
            ))}
          </div>

          <div className="hidden md:flex box-marquee w-max animate-marquee-reverse hover:[animation-play-state:paused] items-stretch">
            {[...testimonialsRow2, ...testimonialsRow2].map((item, index) => (
              <TestimonialCard key={`row2-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
