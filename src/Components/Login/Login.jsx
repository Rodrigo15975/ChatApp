import React, { useEffect } from "react";
import { BurbleBottomLeft,  BurbleBottomRight,  BurbleLeft,  BurbleRight,  ConteinerImgPhone,  ConteinerLogin,  MainLogin,} from "./StyledLogin/Styled-Login";
import bg from "./img/image 99.webp";
import PanelLogin from "./PanelLogin/PanelLogin";
import { m } from "framer-motion";
const floatingVariants = {
  initial: {
    y: -20,
  },
  animate: {
    y: [0, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
};
const Login = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);
  }, []);
  return (
    <>    
      <MainLogin>
        <BurbleLeft />
        <BurbleRight />
        <BurbleBottomLeft />
        <BurbleBottomRight />
        <ConteinerLogin>
          <PanelLogin />
        </ConteinerLogin>
        <ConteinerImgPhone>
          <m.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
          >
            <img src={bg} alt="Phone" />
          </m.div>
        </ConteinerImgPhone>
      </MainLogin>
    </>
  );
};

export default Login;
