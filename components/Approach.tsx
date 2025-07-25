import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const PURPLE_GRADIENT = [
  [91, 33, 182],   // rgb(91, 33, 182) - matches bg-purple-800
  [91, 33, 182],   // rgb(91, 33, 182) - matches bg-purple-800
];

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">key professional qualities</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Proactive & Responsible"
          icon={<AceternityIcon order="Proactive & Responsible" />}
          des="I take initiative in every project and am committed to delivering high-quality results. My sense of responsibility ensures that I meet deadlines and follow through on my commitments, making me a reliable team member."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-purple-800 rounded-3xl overflow-hidden"
            colors={PURPLE_GRADIENT}
          />
        </Card>
        <Card
          title="Flexible & Eager to Learn"
          icon={<AceternityIcon order="Flexible & Eager to Learn" />}
          des="I quickly adapt to new environments and challenges. I am always eager to learn new technologies and approaches, which allows me to grow continuously and contribute effectively to any team."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-purple-800 rounded-3xl overflow-hidden"
            colors={PURPLE_GRADIENT}
            dotSize={2}
          />
        </Card>
        <Card
          title="Creative Problem Solver"
          icon={<AceternityIcon order="Creative Problem Solver" />}
          des="I enjoy finding innovative solutions to complex problems. My creativity helps me approach tasks from different perspectives, ensuring that I can contribute fresh ideas and improvements to every project."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-purple-800 rounded-3xl overflow-hidden"
            colors={PURPLE_GRADIENT}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ backgroundColor: "#000000" }}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
        dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-purple-900"
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200 text-purple-100"
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button
        type="button"
        aria-label={order}
        className="relative inline-flex overflow-hidden rounded-full p-[1px] "
      >
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple-300 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};