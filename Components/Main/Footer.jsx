import Link from 'next/link';
  const webLogo="https://imgs.search.brave.com/R2TA23Dz4jfyvvIOBvCG-shDQ0wvT3SyXW_5WALXmQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20veWxqaUdz/VXNkUE9zZkdJby05/S2VLX29leEJqNk5Y/aEYtNjdCLTVCa09T/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9abUZ0Wlcx/aGFXNWxMbU52L2JT/OTNjQzFqYjI1MFpX/NTAvTDNWd2JHOWha/SE12TWpBeS9NeTh3/TkM5R1FVMUZYMHh2/L1oyOWZNakF5TTE5/U1IwSXUvY0c1bg"

  const DateYear= new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center">
              <img
                src={webLogo}
                alt="FAME Logo"
                width={48}
                height={48}
                className="me-3"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                .........
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="https://flowbite.com/" className="hover:underline">FAME</Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="https://github.com/themesberg/flowbite" className="hover:underline">GitHub</Link>
                </li>
                <li>
                  <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {DateYear} <Link href="https://flowbite.com/" className="hover:underline">FAME™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* You can paste your SVG icons here or use icon components */}
            {/* Example icon button (no dark mode needed): */}
            <Link href="#" className="text-gray-500 hover:text-gray-900 ms-5" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
            </Link>
            {/* Add other social icons similarly */}
          </div>
        </div>
      </div>
    </footer>
  );
}
