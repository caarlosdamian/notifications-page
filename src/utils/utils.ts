import Mark from "../assets/images/avatar-mark-webber.webp";
import Angela from "../assets/images/avatar-angela-gray.webp";
import Anna from "../assets/images/avatar-anna-kim.webp";
import Jacob from "../assets/images/avatar-jacob-thompson.webp";
import Kimberly from "../assets/images/avatar-kimberly-smith.webp";
import Nathan from "../assets/images/avatar-nathan-peterson.webp";
import Risky from "../assets/images/avatar-rizky-hasanuddin.webp";
import Chess from "../assets/images/image-chess.webp";

export const data = [
  {
    id: "1",
    avatar: Mark,
    name: "Mark Webber",
    action: "reacted to your recent post",
    hightlight: "My first tournament today!",
    read: false,
    ismessage: false,
    message: "",
    secondImg: "",
    time: "5m ago",
  },
  {
    id: "2",
    avatar: Angela,
    name: "Angela Gray",
    action: "followed you",
    hightlight: "",
    read: false,
    ismessage: false,
    message: "",
    secondImg: "",
    time: "5m ago",
  },
  {
    id: "3",
    avatar: Jacob,
    name: "Jacob Thompson",
    action: "has joined your group",
    hightlight: "Chess Club",
    read: false,
    ismessage: false,
    message: "",
    secondImg: "",
    time: "1 day ago",
  },
  {
    id: "4",
    avatar: Risky,
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    hightlight: "",
    read: true,
    ismessage: true,
    message:
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    secondImg: "",
    time: "5 days ago",
  },
  {
    id: "5",
    avatar: Kimberly,
    name: "Kimberly Smith",
    action: "commented on your picture",
    hightlight: "",
    read: true,
    ismessage: false,
    message: "",
    secondImg: Chess,
    time: "1 week ago",
  },
  {
    id: "6",
    avatar: Nathan,
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    hightlight: "5 end-game strategies to increase your win rate",
    read: true,
    ismessage: false,
    message: "",
    secondImg: "",
    time: "2 weeks ago",
  },
  {
    id: "7",
    avatar: Anna,
    name: "Anna Kim",
    action: "reacted to your recent post",
    hightlight: "left the group",
    read: true,
    ismessage: false,
    message: "",
    secondImg: "",
    time: "1m ago",
  },
];

export interface itemInterface {
  id: string;
  avatar: string;
  name: string;
  action: string;
  hightlight: string;
  read: boolean;
  ismessage: boolean;
  message: string;
  secondImg: string;
  time: string;
}
