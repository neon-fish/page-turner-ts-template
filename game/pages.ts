import * as pt from "@neonfish/page-turner";
import { Page, Utils } from "@neonfish/page-turner";
import { IMAGE_URL } from "./assets";

const PAGE_ID = {
  start: Utils.id,
  yes: Utils.id,
  no: Utils.id,
  featuresList: Utils.id,
};

export const pages: Page[] = [
  {
    onStart: (pt) => pt.images.clearAll(),
    images: [
      { slot: "bg", url: IMAGE_URL.bliss },
    ],
    content: [
      "Hello there!\n(Click, Space, Enter, or Tap to continue reading)",
      "This is an example Javascript PageTurner project.",
      "You can use this template to create any game or story you like, as long as it mainly consists of multiple-choice interactions.",
      "Cool, right?\n(Use the Mouse or Up/Down Arrows + Enter to select choices)",
    ],
    choices: [
      { text: "That's pretty nifty!", next: PAGE_ID.yes },
      { text: "I'm not very impressed.", next: PAGE_ID.no },
    ],
  },
  {
    id: PAGE_ID.yes,
    content: [
      "I know right?!",
      "Thank you for being so supportive.",
      "PageTurner can do a bunch of other things too, like show images, play music and sound effects, and it gives you complete control over the route your story takes.",
      "You don't have to settle for a linear story, or even a branching story. Your story can have jumps, loops and anything else you like.",
      "You can even randomly choose one path or another, or dynamically load settings over the internet.",
    ],
  },
  {
    id: PAGE_ID.featuresList,
    content: [
      "Would you like to see examples of some of the features?",
    ],
    choices: [
      { text: `"Content" settings (The text displayed above)`, next: PAGE_ID.featuresList },
      { text: `"Choices" settings (The choices like these)`, next: PAGE_ID.featuresList },
      { text: `Styling and theming options`, next: PAGE_ID.featuresList },
      { text: `Displaying images`, next: PAGE_ID.featuresList },
      { text: `Playing music and sound clips`, next: PAGE_ID.featuresList },
      { text: `Other game settings`, next: PAGE_ID.featuresList },
      { text: "That's it thanks, take me back to the beginning.", next: PAGE_ID.start },
    ],
    choicesSettings: {
      top: "30%",
      height: "70%",
    }
  },
  {
    id: PAGE_ID.no,
    images: [
      { slot: "bg", url: IMAGE_URL.black },
    ],
    content: [
      "Oh really? This isn't good enough for you?",
      "Maybe you don't deserve it.",
      "Even though I'm just a tutorial, maybe I need to teach you a lesson.",
      "Brace yourself."
    ],
  },
  {
    content: [
      "This is going to hurt.",
    ],
  },
  {
    images: [
      { slot: "bg", url: IMAGE_URL.hell },
    ],
    content: [
      "Ha ha!",
      "How do you like that!",
      "Now you're in hell.",
      "Yes.",
      "...",
      "Well, now I feel bad.",
      "I didn't give you much of a chance, did I?",
      "I suppose it was a bit of an over-reaction.",
      "Tell you what, I'll let you have another go at the right answer.",
      "Get it right this time.",
      "Or you'll be back.",
      "(Here we go back to the beginning!)",
    ],
    next: PAGE_ID.start,
  }
];
