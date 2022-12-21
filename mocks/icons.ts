import NodeImg from "../src/assets/img/node.png";
import Css3Img from "../src/assets/img/css3.png";
import GitlabImg from "../src/assets/img/gitlab.png";
import Html5Img from "../src/assets/img/html5.png";
import JavascriptImg from "../src/assets/img/javascript.svg";
import JenkinsImg from "../src/assets/img/jenkins.png";
import MaterialuiImg from "../src/assets/img/materialui.png";
import NextjsImg from "../src/assets/img/nextjs.png";
import ReactnativeImg from "../src/assets/img/reactnative.png";
import StyledcomponentsImg from "../src/assets/img/styled-components.png";
import StorybookImg from "../src/assets/img/storybook.png";
import { StaticImageData } from "next/image";

interface Icon {
  [x: string]: StaticImageData;
}

const Icons: Icon = {
  NODE: NodeImg,
  JENKINS: JenkinsImg,
  NEXTJS: NextjsImg,
  REACT_NATIVE: ReactnativeImg,
  STORYBOOK: StorybookImg,
  MATERIAL_UI: MaterialuiImg,
  STYLED_COMPONENTS: StyledcomponentsImg,
  GITLAB: GitlabImg,
  JAVASCRIPT: JavascriptImg,
  CSS3: Css3Img,
  HTML5: Html5Img,
};

export default Icons;
