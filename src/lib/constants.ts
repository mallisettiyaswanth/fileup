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
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { LuMoveRight } from "react-icons/lu";
import { LuDot } from "react-icons/lu";
import { FaListUl } from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";
import { IoMdCloudOutline } from "react-icons/io";
import { IoCloudOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { BsFolderSymlink } from "react-icons/bs";
import { GoFileSymlinkFile } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";
import { BsDatabaseFill } from "react-icons/bs";
import { TbDeviceUnknown } from "react-icons/tb";
import { TbDeviceUnknownFilled } from "react-icons/tb";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoFolderOpen } from "react-icons/io5";

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
  upload: {
    outline: IoCloudUploadOutline,
    filled: IoCloudUploadSharp,
  },
  create: {
    outline: IoMdAdd,
    filled: IoMdAdd,
  },
  filter: {
    outline: TiArrowUnsorted,
    filled: TiArrowUnsorted,
  },
  arrow_right: {
    outline: LuMoveRight,
    filled: LuMoveRight,
  },
  dot: {
    outline: LuDot,
    filled: LuDot,
  },
  list: {
    outline: FaListUl,
    filled: FaListUl,
  },
  cloud: {
    outline: IoMdCloudOutline,
    filled: IoCloudOutline,
  },
  star: {
    outline: AiOutlineStar,
    filled: AiFillStar,
  },
  shared_folder: {
    outline: BsFolderSymlink,
    filled: BsFillFolderSymlinkFill,
  },
  shared_file: {
    outline: GoFileSymlinkFile,
    filled: GoFileSymlinkFile,
  },
  database: {
    outline: BsDatabase,
    filled: BsDatabaseFill,
  },
  other: {
    outline: TbDeviceUnknown,
    filled: TbDeviceUnknownFilled,
  },
  folder: {
    outline: IoFolderOpenOutline,
    filled: IoFolderOpen,
  },
};
