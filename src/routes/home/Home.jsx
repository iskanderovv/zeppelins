import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from 'react-router-dom';
import hero from '../../images/hero.svg';
import Container from "../../utils/container/Container";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <div className="flex flex-wrap justify-between gap-2 items-center mt-[138px] mb-[312px]">
        <div className="max-w-[631px]">
          <h1 className="font-bold text-[#D05270] text-[52px]">{t("heroTitle")}</h1>
          <h2 className="text-[52px] font-medium">{t("heroSubtitle")}</h2>
          <p className="text-[18px] py-9">{t("heroInfo")}</p>
          <div className="flex gap-[18px]">
            {[
              { icon: <AiOutlineTwitter className="text-xl" />, label: "Twitter", bgColor: "bg-[#47ACDF]", },
              { icon: <AiFillLinkedin className="text-xl" />, label: "Linkedin", bgColor: "bg-[#1275B1]", },
              { icon: <AiFillInstagram className="text-xl" />, label: "Instagram", bgColor: "bg-black", },
            ].map((content, index) => (
              <Link
                key={index}
                className={`text-xs h-14 w-[200px] flex gap-[35px] justify-center font-medium uppercase text-white items-center ${content.bgColor}`}
                to="#"
              >
                {content.icon}
                <p>{content.label}</p>
              </Link>
            ))}
          </div>
        </div>
        <img className="md:inline-block hidden" src={hero} alt="hero image" />
      </div>
    </Container >
  )
}

export default Home
