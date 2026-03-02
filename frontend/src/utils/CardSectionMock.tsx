import Lab from "../assets/icons/Lab.svg";
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
      "Nature’s chemical diversity is unstructured and offline, making the discovery of predictable, scalable bioactives an artisanal and high-risk process.",
    chevron: true,
  },
  {
    image: Ia,
    alt: "ia",
    title: "THE SOLUTION",
    content:
      "Moka provides the programmable infrastructure to decode natural bioactivity into standardized, IP-protected molecular assets for global industries.",
    chevron: false,
  },
];

export const blocksGraphics = [
  {
    title: "GLOBAL BIOACTIVITY",
    content: (
      <span>
        <strong>80%</strong> of the world population utilizes{" "}
        <strong> natural molecular</strong> solutions.
      </span>
    ),
    grayPoint: "SYNTHETIC",
    greenPoint: "BIO-VALIDATED",
    number: "80%",
    image: GraphicTraditional,
    alt: "Graphic Traditional",
  },
  {
    title: "<1% CHARACTERIZED",
    content: (
      <span>
        <strong>Less than 1% of the world’s</strong> originate from{" "}
        <strong> natural chemistry</strong> has been chemically characterized.
      </span>
    ),
    grayPoint: "INDEXED",
    greenPoint: "UNINDEXED",
    number: "1%",
    image: GraphicDrugs,
    alt: "Graphic Drugs",
  },
];
