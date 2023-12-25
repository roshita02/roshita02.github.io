const ExperienceElement = ({ imgsrc, alt, title, skills, date, company, subcompany, link, imgSizeClass }) => {
  const hasSubcompany = subcompany !== ''
  return (
    <>
    <div className="flex flex-col items-center">
      <a href={link} rel='noreferrer' target='_blank'>
        <div>
          <img src={imgsrc} alt={alt} className={`${imgSizeClass} mx-auto mb-4 rounded-full`} />
        </div>
        <h2 className="text-lg font-semibold mb-2">{company}</h2>
        <div>
        {hasSubcompany ? (<h3 className="text-md font-semibold mb-2">{subcompany}</h3>) : null}
        </div>
        <h2 className="text-sm font-semibold mb-2">{title}</h2>
        <p className="mt-2">{date}</p>
        <p>Skills: {skills}</p>
      </a>
    </div>
      
    </>
  );
};

export default ExperienceElement;
