import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import spacefood from "../assets/spacefood.png?url";
import storespacefood from "../assets/storespacefood.png?url";
import gamersland from "../assets/gamersland.png?url";
import multiverseland from "../assets/multiverseland.png?url";

const ProjectCard = () => {
  return (
    <div className="p-4 md:p-8 bg-slate-100 mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        <Card
          heading="Space food"
          description="This is a full stack application, with advanced features, such as third-party authentication (google login), payment gateway, sending email notifications, among others! It was built using the PERN stack (Postgresql, Expressjs, React, Node), which emulates the operation of a fast food e-commerce "
          imgSrc={spacefood}
          url={"https://spacefood.netlify.app/"}
        />
        <Card
          heading="Store space food"
          description="This is a full stack application emulates the operation of a fast food e-commerce from administration side "
          imgSrc={storespacefood}
          url={"https://storespacefood.netlify.app/"}
        />
        <Card
          heading="Gamersland"
          description="This is a full-stack application based on the theme of retro videogames"
          imgSrc={gamersland}
          url={"https://gamersland.netlify.app/"}
        />
        <Card
          heading="Multiverseland"
          description="This is a React application, based on the theme of the animated series Rick & Morty, which shows a series of cards with the basic information of each character in the serie"
          imgSrc={multiverseland}
          url={"https://multiverseland.netlify.app/home"}
        />
      </div>
    </div>
  );
};

const Card = ({ heading, description, imgSrc, url }) => {
  return (
    <a href={url}>
      <motion.div
        transition={{
          staggerChildren: 0.035,
        }}
        whileHover="hover"
        className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
      >
        <div
          className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500 "
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",

            backgroundPosition: "center",
          }}
        />
        <div className="p-4 relative z-20 h-full  hover:text-[#0eab29]  text-primary-80 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
          <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
          <div>
            <h4>
              {heading.split("").map((l, i) => (
                <ShiftLetter letter={l} key={i} />
              ))}
            </h4>
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ProjectCard;
