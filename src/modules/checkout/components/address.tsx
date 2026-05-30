
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { useProfile } from "@/modules/account/hooks/use-profile";

export default function Address() {
  const { data: profile } = useProfile();

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
      <div className="flex justify-between items-center w-full border p-4 rounded bg-accent">
        <div className="flex items-center gap-4">
          <input type="radio" defaultChecked className="accent-black" />
          <div>
            <p>{profile?.address || "No address saved"}</p>
            <p className="text-sm text-gray-500 block">Phone: {profile?.phone_number || "No phone number saved"}</p>
          </div>
        </div>
        <Link href={"/account"}><MdModeEditOutline className="text-xl" /></Link>
      </div>

      <div>
        <Link href="/account" className="flex items-center gap-2 text-black my-4 relative">
          <span className="flex-1 h-px bg-linear-to-l from-black to-white"></span>
          <IoIosAddCircle className="text-2xl" />
          <span className="flex-1 h-px bg-linear-to-r from-black to-white"></span>
        </Link>
      </div>
    </div>
  )
}