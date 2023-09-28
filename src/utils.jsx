import school1 from "../src/components/images/school1.png";
import school2 from "../src/components/images/school2.png";
import school3 from "../src/components/images/school3.png";
import school4 from "../src/components/images/school4.png";
import school5 from "../src/components/images/school5.png";
import school6 from "../src/components/images/school6.png";
import school7 from "../src/components/images/school7.png";
import school8 from "../src/components/images/school8.png";

import logo from "../src/components/images//minilogo.png";
// students
import student1 from "../src/components/images/student1.png";
import student2 from "../src/components/images/student2.png";
import student3 from "../src/components/images/student3.png";
import student4 from "../src/components/images/student4.png";

import youtube from "../src/assets/videos/youtube.mp4";
import video2 from "../src/assets/videos/video2.mp4";
import video3 from "../src/assets/videos/video3.mp4";

export const slides = [
  { id: 1, img: school1 },
  { id: 2, img: school2 },
  { id: 3, img: school3 },
  { id: 4, img: school4 },
  { id: 5, img: school5 },
  { id: 6, img: school6 },
  { id: 7, img: school7 },
  { id: 8, img: school8 },
];

// import youtube from './components/images/Youtube player.png';

export const struggles = [
  {
    id: 1,
    img: logo,
    text: "Is your website is a liability:",
    subText:
      "Are you tired of spending money on a school website that adds no value to your school's growth?",
  },
  {
    id: 2,
    img: logo,
    text: "No clear strategy:",
    subText:
      "Do you lack a clear strategy to empower your school to compete using digital tools?",
  },
  {
    id: 3,
    img: logo,
    text: "New to the school business:",
    subText:
      "Are you new to the school business and feeling overwhelmed with all the challenges that come with it?",
  },
  {
    id: 4,
    img: logo,
    text: "Rising printing cost:",
    subText:
      " Are you spending too much money on printing paper results, when there is a more cost-effective solution?",
  },
  {
    id: 5,
    img: logo,
    text: "Feeling overworked and stressed out:",
    subText:
      " Is your staff overworked and stressed, leaving little time for other important tasks?",
  },
  {
    id: 6,
    img: logo,
    text: "Underutilized social media: ",
    subText:
      "Are you underutilizing social media, missing out on potential opportunities to reach and engage with parents and students?",
  },
  {
    id: 7,
    img: logo,
    text: "Poor financial records:",
    subText:
      "Is your school's financial record keeping a mess, making it difficult to manage your school's finances effectively?",
  },
  {
    id: 8,
    img: logo,
    text: "Difficult market demands:",
    subText:
      "Are you tired of dealing with suppliers who force you to buy school supplies in bulk, taking up valuable office space?",
  },
  {
    id: 9,
    img: logo,
    text: "Untrained staff:",
    subText:
      "Are your teachers not tech-savvy, hindering your school's ability to leverage digital tools and resources to trigger growth",
  },
];

// rapid suite
export const rapids = [
  {
    id: 1,
    img: student1,
    text: "Rapid Compiler",
    subtext:
      "Save time and money by automating the process of result compilation, allowing your staff to focus on other important tasks.",
    btn: "Learn more",
    url: "https://rapidsuite.ng/Pages/compiler.html",
  },
  {
    id: 2,
    img: student2,
    text: "Rapid Driller",
    subtext:
      "Conduct computer-based tests, quizzes, and assessments to measure student progress and enhance learning outcomes.",
    btn: "Learn more",
    URL: "https://rapidsuite.ng/Pages/driller.html",
  },
  {
    id: 3,
    img: student3,
    text: "Rapid Web",
    subtext:
      "Create a professional and customized website for your school, with features like online enrollment and student management, to enhance your school's digital presence and reach.",
    btn: "Learn more",
    url: "https://rapidsuite.ng/Pages/web.html",
  },
  {
    id: 4,
    img: student2,
    text: "The Learning Center",
    subtext:
      "Provide your staff with access to training and resources on how to leverage digital tools and resources, empowering them to enhance student learning experiences.",
    btn: "Learn more",
    url: "https://rapidsuite.ng/Pages/login.html",
  },
  {
    id: 5,
    img: student4,
    text: "Paymof",
    subtext:
      "Manage your school's financial records and transactions in a streamlined and efficient manner, freeing up valuable time for you and your staff to focus on other important aspects of running your school.",
    btn: "Learn more",
    url: "https://rapidsuite.ng/Pages/paymoff.html",
  },
];

// invest
const investments = [
  {
    image: school4,
    text: "Emilio Plazza School",
    subtext: `"Since implementing Rapid Suite in our school, we've seen a significant improvement in the way we manage our operations. With Rapid Compiler, we can compile results in minutes and Rapid Driller has been instrumental in helping us conduct CBT and quizzes seamlessly. We're grateful for the impact Rapid Suite has had on our school."`,
    video: youtube,
  },
  {
    image: school5,
    text: "Fountain International High School",
    subtext: `"Before using Paymof, managing our financial records was a nightmare. But with Paymof, we're able to keep track of all our payment records seamlessly. Rapid Suite has been a lifesaver for our school and we're excited to continue using their suite of digital tools."`,
    video: video2,
  },
  {
    image: school6,
    text: "Oak Crest Montessori",
    subtext: `"At Oak Crest Montessori, we've struggled with keeping up with the digital demands of today's world. But with Rapid Web, we were able to create a customized website and blog that has helped us connect with prospective parents and students. We highly recommend Rapid Suite to any school looking to enhance their digital presence."`,
    video: video3,
  },
];
export default investments;
