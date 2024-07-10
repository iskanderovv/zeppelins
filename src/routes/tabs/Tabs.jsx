import { useTranslation } from 'react-i18next'
import Container from '../../utils/container/Container'
import './Tabs.scss'
import { NavLink, Outlet } from 'react-router-dom'

const Tabs = () => {
  const { t } = useTranslation();
  return (
    <Container>

      <nav className='flex flex-wrap gap-6 my-[124px]'>
        {[
          ['/', t('all')],
          ['/tabs/ui-design', t('uiDesign')],
          ['/tabs/ux-design', t('uxDesign')],
          ['/tabs/product-design', t('productDesign')],
          ['/tabs/articles', t('articles')],
          ['/tabs/tutorials', t('tutorials')],
          ['/tabs/news', t('news')],
        ].map(([path, label], index) => (
          <NavLink
            className='text-[#424242] font-bold text-[18px] text-nowrap'
            key={index}
            active
            to={path}
          >
            {label}
          </NavLink>
        ))
        }
      </nav>
      <div>
        <Outlet />
      </div>
    </Container>
  )
}

export default Tabs
