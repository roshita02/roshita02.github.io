import { i18n } from '../locale/i18n';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-8 2xl:h-9 bg-[#262629] text-theme-white flex justify-center items-center shadow-[0px_-1px_10px_0px] shadow-[rgba(0,0,0,0.2)]">
      <span className="text-sm font-medium"><p>&copy; Copyright {currentYear} Roshita Shakya. {i18n.t('copyright_text')}</p></span>{' '}
    </footer>
  );
};

export default Footer;
