import Rectangle1 from "./assets/images/Rectangle1.jpg";
import Rectangle2 from "./assets/images/Rectangle2.jpg";
import Rectangle3 from "./assets/images/Rectangle3.jpg";
import train from "./assets/images/train.jpg";
import guestCircle1 from "./assets/images/guestCircle1.jpg";
import userCircle from "./assets/images/urerCircle.jpg";

export default posts = [
  {
    name: "Ліс",
    comments: "8",
    likes: "153",
    location: "Ukraine",
    img: Rectangle1,
    commentsUnderPost: [
      {
        guestCirclePhoto: guestCircle1,
        author: "guest1",
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        userCirclePhoto: userCircle,
        author: "user",
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
      },
      {
        guestCirclePhoto: guestCircle1,
        author: "guest1",
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
      },
      {
        userCirclePhoto: userCircle,
        author: "user",
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 11:14",
      },
      {
        guestCirclePhoto: guestCircle1,
        author: "guest1",
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 12:20",
      },
    ],
  },
  {
    name: "Захід на Чорному морі",
    comments: "3",
    likes: "200",
    location: "Ukraine",
    img: Rectangle2,
    commentsUnderPost: [
      {
        guestCirclePhoto: guestCircle1,
        author: "guest1",
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        userCirclePhoto: userCircle,
        author: "user",
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
      },
      {
        guestCirclePhoto: guestCircle1,
        author: "guest1",
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
      },
    ],
  },
  {
    name: "8",
    comments: "50",
    likes: "200",
    location: "Italy",
    img: Rectangle3,
    commentsUnderPost: [
      {
        guestCirclePhoto: guestCircle1,
        author: "guest1",
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        userCirclePhoto: userCircle,
        author: "user",
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
      },
      {
        guestCirclePhoto: guestCircle1,
        author: "guest1",
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
      },
    ],
  },
  {
    name: "Західний експрес",
    comments: "1",
    likes: "200",
    location: "France",
    img: train,
    commentsUnderPost: [
      {
        guestCirclePhoto: guestCircle1,
        author: "guest1",
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        userCirclePhoto: userCircle,
        author: "user",
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:14",
      },
      {
        guestCirclePhoto: guestCircle1,
        author: "guest1",
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 09:20",
      },
    ],
  },
];
