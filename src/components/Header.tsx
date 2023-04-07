import Link from "next/link";
import anime from "animejs";
function Header() {
  function handleNameHover() {
    anime({
      targets: ".name",
      rotate: 360,
      duration: 1000,
      easing: "easeInOutSine",
    });
  }

  return (
    <header className="py-4 bg-base-200 snap-center snap-always">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-xl font-bold text-gray-100 ">
          <span className="name" onMouseEnter={handleNameHover}></span> Shivam
          Chaudhary
        </Link>
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="#projects"
                className="text-gray-100 hover:text-orange-400"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="text-gray-100  hover:text-orange-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
