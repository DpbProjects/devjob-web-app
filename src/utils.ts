import { ColourVariant, ButtonVariant } from "./types";

export const colourVariants: Record<ColourVariant, string> = {
  scoot: `bg-scoot`,
  blogr: `bg-blogr`,
  vector: `bg-vector`,
  office: `bg-office`,
  pod: `bg-pod`,
  creative: `bg-creative`,
  pomodoro: `bg-pomodoro`,
  maker: `bg-maker`,
  coffee: `bg-coffee`,
  mastercraft: `bg-mastercraft`,
  crowdfund: `bg-crowdfund`,
  typemaster: `bg-typemaster`,
};

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: `flex justify-center items-center h-12 text-base text-white font-bold rounded-lg bg-violet hover:bg-light-violet text-center px-7 w-full sm:max-w-max`,
  secondary: `flex justify-center items-center h-12 text-base font-bold rounded-lg bg-icy-blue hover:bg-icy-blue-light dark:bg-ash-grey dark:hover:bg-ash-grey-light text-center px-7 max-w-max text-violet dark:text-white`,
};
