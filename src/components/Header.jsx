import Logo from "@/components/Logo";
import Menu from "@/components/Menu";

export default function Header({ className }) {
  return (
    <header className={className}>
      {/* Large screen header */}
      <div className="hidden xl:block">
        <div>
          <Logo className={"text-center text-7xl"} />
          <h2 className="mt-2 text-center text-2xl uppercase leading-none">
            Fullfill
            <br />
            <span className="font-extralight">your</span> belly
          </h2>
        </div>
        <Menu className="mt-8 flex items-center justify-center gap-4" />
      </div>

      {/* Medium screen header */}
      <div className="hidden items-center justify-between md:flex xl:hidden">
        <Logo className="text-3xl" />
        <Menu className="flex items-center justify-center gap-4" />
      </div>

      {/* Small screen header */}
      <div className="flex justify-between md:hidden">
        <Logo className="text-3xl" />
        <button class="flex items-center rounded border-2 border-black px-3 py-2">
          <svg
            class="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
