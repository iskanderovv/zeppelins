import { useTranslation } from 'react-i18next';
import { data } from '../../db/data'
import { Link } from 'react-router-dom'

const UIDesign = () => {
  const {t, i18n} = useTranslation();

  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 place-items-center gap-4 gap-y-[77px]'>
    {
        data.slice(0, 2).map((post) => (
          <div key={post.id}>
            <img src={post.image} alt="" />
            <p className='text-[14px] font-semibold py-4 text-[#424242] '>NOV 23 2020</p>
            <h1 className='font-semibold text-[#D05270] text-xl leading-[29.26px] '>{post[`title_${i18n.language}`]}</h1>
            <p className='leading-[19.5px] text-[#424242] mt-3 mb-7 '>{post[`summary_${i18n.language}`]}</p>
            <Link className='text-[#D05270] text-[18px] leading-[21.94px] font-medium ' to={`/all/${post.id}`}>{t("readMore")}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default UIDesign
