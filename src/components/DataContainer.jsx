import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faChartPie, faGraduationCap, faHandHoldingHeart, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

import PlainTextDataType from "./data_types/PlainTextDataType";
import ExperienceListDataType from "./data_types/ExperienceListDataType";
import EducationListDataType from "./data_types/EducationListDataType"
import TopicListDataType from "./data_types/TopicListDataType";

function DataContainer(props) {
  const data = props.data;

  const get_icon = info_data => {
    if (info_data.icon == "contact") {
      return <FontAwesomeIcon icon={faPhone} style={{color: "#FF4F29"}}/>;
    } else if (info_data.icon == "education") {
      return <FontAwesomeIcon icon={faGraduationCap} style={{color: "#FF4F29"}}/>;
    } else if (info_data.icon == "experience") {
      return <FontAwesomeIcon icon={faBriefcase} style={{color: "#FF4F29"}}/>;
    } else if (info_data.icon == "me") {
      return <FontAwesomeIcon icon={faUser} style={{color: "#FF4F29"}}/>;
    } else if (info_data.icon == "skills") {
      return <FontAwesomeIcon icon={faChartPie} style={{color: "#FF4F29"}}/>;
    } else if (info_data.icon == "volunteer") {
      return <FontAwesomeIcon icon={faHandHoldingHeart} style={{color: "#FF4F29"}}/>;
    } else {
      return null;
    }
  };

  const get_content = info_data => {
    const keyword = info_data.title.toLowerCase()
    const content = info_data.content

    if (info_data.type == "text") {
      return <PlainTextDataType content={content} keyword={keyword} />;
    } else if (info_data.type == "education-list") {
      return <EducationListDataType content={content} keyword={keyword}/>;
    } else if (info_data.type == "experience-list") {
      return <ExperienceListDataType content={content} keyword={keyword} typeOptions={info_data.typeOptions}/>;
    } else if (info_data.type == "list") {
      return <TopicListDataType content={content} keyword={keyword} typeOptions={info_data.typeOptions}/>;
    } 
  };

  return (
    <>
      <section>
        <div>
          <div className="flex justify-start items-center gap-2">
            { get_icon(data) }
            <h2 className="text-2xl font-bold text-[#111F3C]">{data.title}</h2>
          </div>
          <div className="w-[52px] h-[8px] mt-0.5 bg-[#111F3C]"></div>
        </div>
        <article className="flex flex-col gap-4 mt-2">
          { get_content(data) }
        </article>
      </section>
    </>
  );
}

export default DataContainer;
