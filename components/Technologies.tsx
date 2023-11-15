import Image from 'next/image';
/*
/**|======================================
/**| pics
/**|======================================
*/
import Reactimg from "@/public/react.png";
import Next from "@/public/nextjs.png";
import Tailwind from "@/public/tailwind.png";
import Mongo from "@/public/mongodb.png";
import Typescript from "@/public/ts.png";
import Node from "@/public/nodejs.png";
import Javascript from "@/public/js.png";
import Styledcomponents from "@/public/sc.png";
import Redux from "@/public/redux.png";
import Mobx from "@/public/mobx.png";
import Npm from "@/public/npm.png";
import Html from "@/public/html.png";
import Css from "@/public/css.png";
import Emotion from "@/public/emotion.png";
import Figma from "@/public/figma.png";
import Mui from "@/public/mui.png";
/*
/**|======================================
/**| code
/**|======================================
*/

export default function Technologies() {
  return (
    <>
      <div className='my-stack'>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Html} />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Css} />
        </a>
        <a href="https://ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Javascript} />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Typescript} />
        </a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Reactimg} />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Next} />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Tailwind} />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Mongo} />
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Figma} />
        </a>
        <a href="https://emotion.sh/docs/introduction" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Emotion} />
        </a>
        <a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Styledcomponents} />
        </a>
        <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Mui} />
        </a>
        <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Npm} />
        </a>
        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Redux} /></a>
        <a href="https://mobx.js.org/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Mobx} />
        </a>
        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
          <Image className="my-stack-pic" alt="pic" src={Node} />
        </a>
      </div>
    </>
  )
}
