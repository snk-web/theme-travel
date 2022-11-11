import Nav from "./Nav";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import happyman from "../assets/happy-man.png";
import searchIcon from "../assets/search-icon.png"
import Image from "next/image";


function Header() {
  return (
    <div className="h-screen">
      <Nav />
      <div className="pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-14">
            <div className="mx-auto max-w-lg px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-16">
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block text-[#2D3134] pb-3 sm:pb-5">
                    Discover the Best Lovely Places
                  </span>
                </h1>
                <p className="text-base text-[#5B5F62] sm:text-xl lg:text-lg xl:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
                <div className="mt-10 sm:mt-12">
                  <div className="flex w-full rounded-full px-6 py-2 text-base text-gray-900 bg-white items-center justify-between">
                    <div className="flex gap-6">
                    <div className="flex flex-col text-left m-2 border-r-2 pr-10">
                        <h1 className="font-medium">Where</h1>
                        <p className="text-sm text-[#9498A4]">Center Point, Lo...</p>
                    </div>
                    <div className="flex flex-col text-left m-2 pr-10">
                        <h1 className="font-medium">Date</h1>
                        <p className="text-sm text-[#9498A4]">09th March, 2023</p>
                    </div>
                    </div>
                    <div>
                        <Image
                        src={searchIcon}
                        width="50"
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <Image
                  className="w-1/2 lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={happyman}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
