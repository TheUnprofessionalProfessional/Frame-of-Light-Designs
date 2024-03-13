import { RiHomeHeartFill, RiCameraLensFill } from "react-icons/ri";
import { FaJournalWhills } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import {
  GiBurningBook,
  GiEagleEmblem,
  GiSpikedDragonHead,
  GiFlowers,
  GiGlassCelebration,
  GiShatteredHeart,
} from "react-icons/gi";
import { PiCatBold, PiFlowerLotusThin } from "react-icons/pi";
import { MdHomeWork, MdReviews, MdConnectWithoutContact } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";

export const TopNav = [
  {
    name: "Home",
    path: "/",
    src: <RiHomeHeartFill />,
  },
  {
    name: "About Us",
    path: "/about-us",
    src: <FaJournalWhills />,
    submenu: [
      {
        name: "Our Story",
        path: "/about-us/our-story",
        src: <GiBurningBook />,
      },
      {
        name: "Our Family",
        path: "/about-us/our-family",
        src: <FaPeopleRoof />,
        submenu: [
          {
            name: "Benjamin Hodder-McDavid",
            path: "/about-us/our-family/hodder-mcdavid",
            src: <GiEagleEmblem />,
          },
          {
            name: "Philip R. McDavid-Hodder",
            path: "/about-us/our-family/mcdavid-hodder",
            src: <GiSpikedDragonHead />,
          },
          {
            name: "Cleo",
            path: "/about-us/our-family/cleo",
            src: <PiCatBold />,
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    path: "/services",
    src: <MdHomeWork />,
    submenu: [
      {
        name: "Floral Artistry",
        path: "/services/floral-artistry",
        src: <GiFlowers />,
        submenu: [
          {
            name: "Arrangements",
            path: "/services/floral-artistry/arrangements",
            src: <PiFlowerLotusThin />,
            submenu: [
              {
                name: "Celebrations",
                path: "/services/floral-artistry/arrangements/celebrations",
                src: <GiGlassCelebration />,
              },
              {
                name: "Funeral and Memorium",
                path: "/services/floral-artistry/arrangements/funeral-and-memorium",
                src: <GiShatteredHeart />,
              },
              {
                name: "Spiritual",
                path: "/services/floral-artistry/arrangements/spiritual",
                src: <TbHeartHandshake />,
              },
            ],
          },
          {
            name: "Displays",
            path: "/services/floral-artistry/displays",
            src: "GiVineFlower",
            submenu: [
              {
                name: "Spiritual",
                path: "/services/floral-artistry/displays/spiritual",
                src: "GiChurch",
              },
              {
                name: "Shows",
                path: "/services/floral-artistry/displays/shows",
                src: "TbAdjustmentsHeart",
              },
            ],
          },
        ],
      },
      {
        name: "Photography",
        path: "/services/gallery",
        src: <RiCameraLensFill />,
      },
    ],
  },
  {
    name: "Reviews",
    path: "/reviews",
    src: <MdReviews />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    src: <MdConnectWithoutContact />,
  },
];
