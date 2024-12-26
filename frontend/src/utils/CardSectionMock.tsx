import Lab from "../assets/icons/lab.svg";
import Ia from "../assets/icons/Ia.svg";
import GraphicDrugs from "../assets/GraphicDrugs.svg";
import GraphicTraditional from "../assets/GraphicTraditional.svg";
import "../styles/CardSection.style.css";

export const blocksProblem = [
  {
    image: Lab,
    alt: "lab",
    title: "THE PROBLEM",
    content:
      "The lack of knowledge in identifying therapeutic molecules and their synergies in ethnobotanics.",
    chevron: true,
  },
  {
    image: Ia,
    alt: "ia",
    title: "THE SOLUTION",
    content:
      "Moka platform enables groundbreaking insights to identify new ethnobotanical molecules and their mechanisms of action.",
    chevron: false,
  },
];

export const blocksGraphics = [
  {
    title: "USE OF TRADICIONAL MEDICINE",
    content: (
      <span>
        <strong>80%</strong> of the world population{" "}
        <strong>uses traditional medicine.</strong>
        (WHO, 2024)
      </span>
    ),
    grayPoint: "TRADITIONAL",
    greenPoint: "MODERN",
    number: "80%",
    image: GraphicTraditional,
    alt: "Graphic Traditional",
  },
  {
    title: "APPROVED DRUGS",
    content: (
      <span>
        <strong>40% of approved drugs</strong> today came from{" "}
        <strong>natural substances</strong> like tree barks and plant roots.
        (WHO, 2024)
      </span>
    ),
    grayPoint: "SINTETIC DRUGS",
    greenPoint: "NATURAL",
    number: "40%",
    image: GraphicDrugs,
    alt: "Graphic Drugs",
  },
];
