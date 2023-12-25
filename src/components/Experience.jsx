import LeapfrogLogo from '../assets/images/logo/lf-logo.png';
import BajraLogo from '../assets/images/logo/bajra-logo.png';
import JyaasaLogo from '../assets/images/logo/jyaasa-logo.png';

import { i18n } from '../locale/i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ExperienceElement from './ExperienceElement';

const Experience = () => {
  return (
    <section name='experience' className='pt-12 md:pt-20 w-full text-theme-white'>
        <div className='flex flex-col w-full h-full max-w-[900px] mx-auto py-4 px-8'>
            <div className='pb-10'>
              <h1 className='font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1'>
                  {i18n.t('experienceSection.sectionName')}
              </h1>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
            <div className="bg-[rgba(44,42,46,0.95)] hover:bg-[rgba(44,42,46,0.90)] p-4 rounded shadow-md text-center">
              <ExperienceElement
                  imgsrc={LeapfrogLogo}
                  imgSizeClass='w-[100px] h-[100px]'
                  alt={i18n.t('experienceSection.first.alt')}
                  title={`${i18n.t('experienceSection.first.name')}`}
                  description={`${i18n.t('experienceSection.first.description')}`}
                  date={`${i18n.t('experienceSection.first.date')}`}
                  skills={`${i18n.t('experienceSection.first.skills')}`}
                  company={`${i18n.t('experienceSection.first.company')}`}
                  subcompany={`${i18n.t('experienceSection.first.subcompany')}`}
                  link={`${i18n.t('experienceSection.first.link')}`}
                />
            </div>

            <div className="bg-[rgba(44,42,46,0.95)] hover:bg-[rgba(44,42,46,0.90)] p-4 rounded shadow-md text-center">
              <ExperienceElement
                  imgsrc={BajraLogo}
                  imgSizeClass='w-[120px] h-[100px]'
                  alt={i18n.t('experienceSection.second.alt')}
                  title={`${i18n.t('experienceSection.second.name')}`}
                  description={`${i18n.t('experienceSection.second.description')}`}
                  date={`${i18n.t('experienceSection.second.date')}`}
                  skills={`${i18n.t('experienceSection.second.skills')}`}
                  company={`${i18n.t('experienceSection.second.company')}`}
                  subcompany={`${i18n.t('experienceSection.second.subcompany')}`}
                  link={`${i18n.t('experienceSection.second.link')}`}
                />
            </div>

            <div className="bg-[rgba(44,42,46,0.95)] hover:bg-[rgba(44,42,46,0.90)] p-4 rounded shadow-md text-center">
              <ExperienceElement
                  imgsrc={JyaasaLogo}
                  imgSizeClass='w-[120px] h-[100px]'
                  alt={i18n.t('experienceSection.third.alt')}
                  title={`${i18n.t('experienceSection.third.name')}`}
                  description={`${i18n.t('experienceSection.third.description')}`}
                  date={`${i18n.t('experienceSection.third.date')}`}
                  skills={`${i18n.t('experienceSection.third.skills')}`}
                  company={`${i18n.t('experienceSection.third.company')}`}
                  subcompany={`${i18n.t('experienceSection.third.subcompany')}`}
                  link={`${i18n.t('experienceSection.third.link')}`}
                />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Experience;
