import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCallLight } from "react-icons/pi";





const Header = () => {
  return (
    <div className="bg-purple-700 w-full">
      <div className="flex container mx-auto justify-between py-2 text-sm font-medium">
        <div className="flex gap-4">
          <span className="flex gap-1 items-center">
            <MdOutlineMail size={13} color="white" />
            <p className="text-white">S4idmazouz@gmail.com</p>
          </span>
          <span className="flex gap-1 items-center">
            <PiPhoneCallLight size={13} color="white" />
            <p className="text-white">(+212) 674402833</p>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="flex gap-1 items-center">
            <p className="text-white">Login</p>
            <AiOutlineUser size={13} color="white" />
          </span>
          <span className="flex gap-1 items-center">
            <p className="text-white">Wisthlist</p>
            <CiHeart size={13} color="white" />
          </span>
          <p className="text-white">
            <FiShoppingCart size={15} color="white" />
          </p>
        </div>
      </div>
    </div>
  );
}

export { Header }