import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-10 py-2 text-white flex justify-between items-center">
        <h1>
          <img
            src="/RocketAcademyLogo.png"
            alt="Rocket Academy"
            className="h-10"
          />
        </h1>
        <nav className="space-x-6">
          <button className="bg-[#DA4E15] hover:bg-[#C94813] rounded-lg py-2 px-4">
            Apply now
          </button>
        </nav>
      </div>
    </header>
  )
}
