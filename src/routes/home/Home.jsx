import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom';
import hero from '../../images/hero.svg';
import Container from "../../utils/container/Container";
import { useTranslation } from "react-i18next";
import brand from '../../images/brand.svg';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div className="flex flex-wrap justify-between gap-2 items-center lg:mt-[138px] md:mt-[100px] sm:mt-[80px] mt-[60px] lg:mb-[312px] md:mb-[240px] sm:mb-[160px] mb-[120px]">
        <div className="max-w-[631px]">
          <h1 className="font-bold text-[#D05270] lg:text-[52px] md:text-[40px] sm:text-[30px] text-[25px]">{t("heroTitle")}</h1>
          <h2 className="font-medium lg:text-[52px] md:text-[40px] sm:text-[30px] text-[25px]">{t("heroSubtitle")}</h2>
          <p className="lg:text-[18px] md:text-[16px] sm:text-xs lg:py-6 md:py-9 sm:py-9 py-8">{t("heroInfo")}</p>
          <div className="flex gap-[18px]">
            {[
              { icon: <AiOutlineTwitter className="text-xl" />, label: "Twitter", bgColor: "bg-[#47ACDF]", },
              { icon: <AiFillLinkedin className="text-xl" />, label: "Linkedin", bgColor: "bg-[#1275B1]", },
              { icon: <AiFillInstagram className="text-xl" />, label: "Instagram", bgColor: "bg-black", },
            ].map((content, index) => (
              <Link
                key={index}
                className={`lg:text-xs md:text-xs sm:text-[10px] text-[8px] lg:h-14 lg:w-[200px] md:h-14 md:w-[170px] sm:h-12 sm:w-[170px]  w-full h-11 flex lg:gap-[35px] md:gap-[30px] sm:gap-[25px] gap-4 justify-center font-medium uppercase text-white items-center ${content.bgColor}`}
                to="#"
              >
                {content.icon}
                <p>{content.label}</p>
              </Link>
            ))}
          </div>
        </div>
        <img className="lg:block hidden" src={hero} alt="hero image" />
      </div>
      <Outlet />
      <div className="mt-[340px] mb-[100px]">
        <img className="mx-auto" src={brand} alt="brand logo" />
      </div>
    </Container >
  )
}

export default Home
