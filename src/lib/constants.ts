import { TbLayoutDashboard, TbLayoutDashboardFilled } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { IoImagesOutline } from "react-icons/io5";
import { IoImages } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineAudio } from "react-icons/ai";
import { AiFillAudio } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi2";
import { IconType } from "react-icons/lib";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RiNotificationFill } from "react-icons/ri";
import { RiNotificationLine } from "react-icons/ri";

export const DOMAIN: string = "http://localhost:3000";

export const Icons: Record<
  string,
  {
    outline: IconType;
    filled: IconType;
  }
> = {
  dashboard: {
    outline: TbLayoutDashboard,
    filled: TbLayoutDashboardFilled,
  },
  clock: {
    outline: FaRegClock,
    filled: FaClock,
  },
  document: {
    outline: IoDocumentTextOutline,
    filled: IoDocumentText,
  },
  image: {
    outline: IoImagesOutline,
    filled: IoImages,
  },
  video: {
    outline: BsCameraVideo,
    filled: BsCameraVideoFill,
  },
  audio: {
    outline: AiOutlineAudio,
    filled: AiFillAudio,
  },
  trash: {
    outline: HiOutlineTrash,
    filled: HiTrash,
  },
  settings: {
    outline: IoSettingsOutline,
    filled: IoSettingsSharp,
  },
  search: {
    outline: CiSearch,
    filled: CiSearch,
  },
  notifications: {
    outline: RiNotificationLine,
    filled: RiNotificationFill,
  },
};
