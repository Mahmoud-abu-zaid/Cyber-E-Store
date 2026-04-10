import { BsCpu } from "react-icons/bs"
import { PiCpu } from "react-icons/pi"
import { TiCamera } from "react-icons/ti"
import { GiBattery75 } from "react-icons/gi"
import { AiOutlineShop } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCameraReverse } from "react-icons/io5"
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { TbDeviceMobileFilled } from "react-icons/tb"

export const Colors = [
  { id: 1, className: "bg-black" },
  { id: 2, className: "bg-[#781DBC]" },
  { id: 3, className: "bg-red-600" },
  { id: 4, className: "bg-[#E1B000]" },
  { id: 5, className: "bg-muted-text" },
]

export const MemerySize = [
  { id: 1, label: "128GB" },
  { id: 2, label: "256GB" },
  { id: 3, label: "512GB" },
  { id: 4, label: "1TB" },
]


export const ProductDetails = [
  {
    id: 1,
    label: "Screen size",
    value: 'N/A',
    icon: TbDeviceMobileFilled,
  },
  {
    id: 2,
    label: "CPU",
    value: "N/A",
    icon: BsCpu,
  },
  {
    id: 3,
    label: "Main camera",
    value: "N/A",
    icon: PiCpu,
  },
  {
    id: 4,
    label: "Number of Cores",
    value: "N/A",
    icon: TiCamera,
  },
  {
    id: 5,
    label: "Front-camera",
    value: "N/A",
    icon: IoCameraReverse,
  },
  {
    id: 6,
    label: "Battery capacity",
    value: "N/A",
    icon: GiBattery75,
  },
]

export const ProductMeta = [
  {
    id: 1,
    label: "Free Delivery",
    valueKey: "shippingInformation",
    icon: CiDeliveryTruck,
  },
  {
    id: 2,
    label: "In Stock",
    valueKey: "availabilityStatus",
    icon: AiOutlineShop,
  },
  {
    id: 3,
    label: "Guaranteed",
    valueKey: "warrantyInformation",
    icon: HiOutlineBadgeCheck,
  },
]