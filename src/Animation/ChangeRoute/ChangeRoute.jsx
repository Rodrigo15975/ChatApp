import { m } from "framer-motion";
import React from "react";
const ChangeRoute = ({ children }) => {
  const pageVariants = {    initial: {      x: "-100vw",    },    animate: {      x: 0,      transition: { type: "spring", bounce: 0.2 },    },    exit: {     x: "100vw",      transition: { type: "spring", bounce: 0.2 },    }, };const pageTransition = {  type: "tween",    ease: "anticipate",    duration: 0.5,  };
  return (
    <m.article
     initial="initial"
     animate="animate"
     exit="exit"
     variants={pageVariants}
     transition={pageTransition}
    > {children}    
    </m.article>
  );
};

export default ChangeRoute;
