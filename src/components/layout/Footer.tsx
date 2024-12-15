import facebook from "../../assets/icons/Facebook Circled.png";
import twitter from "../../assets/icons/TwitterX.png";
import linkedin from "../../assets/icons/LinkedIn.png";
import instagram from "../../assets/icons/Instagram.png";

const Footer = () => {
  return (
    <footer className="mt-[.5px] py-8">
      {/* Main Footer Content */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 text-font gap-6 px-4 md:text-center md:items-center">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">
            Ride with ease, anytime, anywhere! Our taxi app connects you with
            reliable drivers, ensuring safe and convenient travel at the tap of
            a button. Experience hassle-free rides tailored to your needs.
          </p>
        </div>

        {/* Column 2: Social Icons */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                className="filter brightness-0"
                alt="facebook"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                className="filter brightness-0"
                alt="twitter"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="filter brightness-0"
                src={instagram}
                alt="instagram"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                className="filter brightness-0"
                alt="linkedin"
              />
            </a>
          </div>
        </div>

        {/* Column 3: Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-gray-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-gray-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white mt-8 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Riderly. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
