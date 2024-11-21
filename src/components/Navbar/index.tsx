import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between w-full  py-3">

      <div className="flex gap-24 items-center">
        <h1 className="text-black text-2xl">Hekto</h1>
        <div className="flex gap-8 text-sm items-center">
          <a href="/" className="text-black hover:text-pink-600">Home</a>
          <a href="/pages" className="text-black hover:text-pink-600">Pages</a>
          <a href="/products" className="text-black hover:text-pink-600">Products</a>
          <a href="/blog" className="text-black hover:text-pink-600">Blog</a>
          <a href="/shop" className="text-black hover:text-pink-600">Shop</a>
          <a href="/contact" className="text-black hover:text-pink-600">Contact</a>
        </div>
      </div>

      <div className="flex">
        <input type="search" className="w-[266px] h-[40px] px-2 py-1 border focus:outline-none hover:outline-none " />
        <span className="flex justify-center items-center w-[41px] h-[40px] bg-pink-600">
          <CiSearch size={25} color="white" />
        </span>
      </div>

    </div>
  )
}

export { Navbar }