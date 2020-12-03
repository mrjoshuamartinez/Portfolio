import profilePic from "../../images/avatar.jpg";
import services from '../../images/services.svg';
import resume from '../../images/resume.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'here is a little',
  headLine: 'About Me',
  description: `I am a full stack web developer residing in Lowell, Massachusetts, available for hire as a web developer or software engineer locally, nationally, or remotely...`,
  buttonLabel: 'Learn More',
  imgStart: false,
  img: profilePic,
  alt: 'profile',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'services',
  lightBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'if you desire',
  headLine: 'My Services',
  description: `Feel free to contact me for a free consultation if you like what you see.`,
  buttonLabel: 'Learn More',
  imgStart: true,
  img: services,
  alt: 'services',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjThree = {
  id: 'resume',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'here is my',
  headLine: 'Résumé',
  description: `I am a full stack web developer residing in Lowell, Massachusetts, available for hire as a web developer or software engineer locally, nationally, or remotely...`,
  buttonLabel: 'Learn More',
  imgStart: false,
  img: resume,
  alt: 'résumé',
  dark: true,
  primary: false,
  darkText: false
};