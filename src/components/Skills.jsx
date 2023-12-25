import SkillCard from './SkillCard';

import {
  SiTailwindcss,
  SiFirebase,
  SiReact,
  SiFigma,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiChakraui,
  SiJest,
  SiGo,
  SiRubyonrails,
  SiPhp,
  SiAngular,
  SiAngularjs,
  SiMongodb,
  SiPostgresql,
  SiGrafana,
} from 'react-icons/si';
import { BsPlusLg, BsServer } from 'react-icons/bs';
import { HiMinus } from 'react-icons/hi';

import { i18n } from '../locale/i18n';
import { useState } from 'react';

const Skills = () => {
  const [active, setActive] = useState(false);
  const showMore = () => {
    setActive(!active);
  };

  return (
    <section name='skills' className='w-full pt-12 md:pt-20'>
      <div className='max-w-[900px] mx-auto p-4 md:p-8'>
        <div>
          <h1 className='font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1'>
            {i18n.t('skillsSection.sectionName')}
          </h1>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 text-center gap-5 pb-6 md:pb-0 md:pt-6'>
          <SkillCard color='#00ADD8' icon={SiGo} name='Go' />
          <SkillCard color='#CC0000' icon={SiRubyonrails} name='Ruby on Rails' />
          <SkillCard color='#AEB2D5' icon={SiPhp} name='PHP' />
          <SkillCard color='#c3002f' icon={SiAngular} name='Angular' />
          <SkillCard color='#EFD81E' icon={SiJavascript} name='JavaScript' />
          <SkillCard color='#007acc' icon={SiTypescript} name='TypeScript' />
          <SkillCard color='#4DB33D' icon={SiMongodb} name='MongoDB' />
          <SkillCard color='#0064a5' icon={SiPostgresql} name='PostgreSQL' />
          <SkillCard color='#F46800' icon={SiGrafana} name='Grafana' />
          <SkillCard color='#FFA611' icon={SiFirebase} name='Firebase' />
          <SkillCard color='#DC4A29' icon={SiHtml5} name='HTML5' />
          <SkillCard color='#376FB4' icon={SiCss3} name='CSS3' />
          <SkillCard color='#69DDB3' icon={BsServer} name='RESTful API' active={active} />
        </div>
        <button
          className='sm:hidden w-36 h-11 flex justify-center items-center mx-auto rounded bg-transparent border-2 hover:text-white active:text-white hover:bg-theme-blue-50 active:bg-theme-blue-50 hover:border-theme-blue-50 active:border-theme-blue-50 duration-200 group font-medium'
          onClick={showMore}>
          {active ? `${i18n.t('skillsSection.showLess')}` : `${i18n.t('skillsSection.showMore')}`}
          {active ? <HiMinus className='ml-1' /> : <BsPlusLg className='ml-1' />}
        </button>
      </div>
    </section>
  );
};

export default Skills;
