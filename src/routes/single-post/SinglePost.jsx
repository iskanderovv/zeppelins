import { useParams } from 'react-router-dom';
import { data } from '../../db/data';
import { useTranslation } from 'react-i18next';
import Container from '../../utils/container/Container';
import brand from '../../images/brand.svg';

const SinglePost = () => {
  const { id } = useParams();
  const post = data.find((post) => post.id === parseInt(id));
  const { t, i18n } = useTranslation();

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Container>
      <div className='mt-[113px] '>
        <div className='flex flex-col justify-center'>
          <img src={post.image} alt={post[`title_${i18n.language}`]} className="" />
          <p className='text-[14px] font-semibold py-4 text-[#424242] '>NOV 23 2020</p>
          <h1 className='font-semibold text-[#D05270] text-xl leading-[29.26px]'>{post[`title_${i18n.language}`]}</h1>
          <p className='leading-[19.5px] text-[#424242] mt-3 mb-7'>{post[`summary_${i18n.language}`]}</p>
          <div className=''>{post[`content_${i18n.language}`]}</div>
        </div>
        <div className='lg:mt-[176px] md:mt-[155px] sm:mt-[144px] mt-[120px]'>
          <h3 className='text-[#3A0CA3] lg:text-[42px] md:text-4xl sm:text-3xl text-xl font-bold mb-[70px] ' >{t("singlePostTitle")}</h3>
          <p className='mb-8'> {t("singlePostInfo1")} </p>
          <p className='mb-8'> {t("singlePostInfo2")} </p>
          <p> {t("singlePostInfo2")} </p>
        </div>
        <div className='lg:mt-[176px] md:mt-[155px] sm:mt-[144px] mt-[120px]'>
          <h3 className='text-[#3A0CA3] lg:text-4xl md:text-2xl sm:text-xl text-[18px] font-bold mb-[70px] ' >{t("singlePostTitle")}</h3>
          <p className='mb-8'> {t("singlePostInfo1")} </p>
          <p className='mb-8'> {t("singlePostInfo2")} </p>
          <p> {t("singlePostInfo2")} </p>
        </div>
        <div className='lg:mt-[176px] md:mt-[155px] sm:mt-[144px] mt-[120px] lg:mb-[400px] md:mb-[300px] sm:mb-[200px] mb-[200px] '>
          <h3 className='text-[#3A0CA3] lg:text-xl md:text-xl sm:text-[18px] text-[18px] font-bold mb-[70px] ' >{t("singlePostTitle")}</h3>
          <p className='mb-8'> {t("singlePostInfo1")} </p>
          <p className='mb-8'> {t("singlePostInfo2")} </p>
          <p> {t("singlePostInfo2")} </p>
        </div>
        <div className='mb-20'>
          <img className='mx-auto ' src={brand} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default SinglePost;