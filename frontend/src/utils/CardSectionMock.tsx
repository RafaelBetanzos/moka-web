import Lab from "../assets/icons/Lab.svg";
import Ia from "../assets/icons/Ia.svg";
import Graphicsynthetics from "../assets/Graphicsynthetics.svg";
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
    image: Graphicsynthetics,
    alt: "Graphic Synthetics",
  },
  {
    title: "<1% CHARACTERIZED",
    content: (
      <span>
        <strong>Less than 1% of the world’s</strong> originate from{" "}
        <strong> natural chemistry</strong> has been chemically characterized.
      </span>
    ),
    grayPoint: "UNINDEXED",
    greenPoint: "INDEXED",
    number: "1%",
    image: GraphicTraditional,
    alt: "Graphic Traditional",
  },
];
