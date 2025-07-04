import { useEffect } from "react";
import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  // Prevent background scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-auto backdrop-blur-sm px-2 sm:px-6">
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 mx-auto flex flex-col"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        {/* FIXED TITLE */}
        <div className="p-5 pb-0">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
        </div>
        {/* SCROLLABLE CONTENT (with hidden scrollbar) */}
        <div className="px-5 pt-2 flex-1 overflow-y-auto min-h-[100px] scrollbar-hide">
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-neutral-400" key={index}>{subDesc}</p>
          ))}
        </div>
        {/* STICKY FOOTER */}
        <div className="p-5 border-t border-white/10 bg-gradient-to-l from-midnight to-navy rounded-b-2xl">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;