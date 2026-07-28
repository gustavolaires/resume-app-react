import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import "./DataContainer.css";

import PlainTextDataType from "./data_types/PlainTextDataType";
import ExperienceListDataType from "./data_types/ExperienceListDataType";
import EducationListDataType from "./data_types/EducationListDataType"
import TopicListDataType from "./data_types/TopicListDataType";

function DataContainer(props) {
  const data = props.data;
  // console.log(data)

  const get_icon = info_data => {
    if (info_data.icon == "faGraduationCap") {
      return <FontAwesomeIcon icon={faGraduationCap} />;
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
      <section className="container-box">
        <div className="container-header">
          <div className="container-header-content">
            { get_icon(data) }
            <h2>{data.title}</h2>
          </div>
          <div className="container-header-line"></div>
        </div>
        <article className="container-body">
          { get_content(data) }
        </article>
      </section>
    </>
  );
}

export default DataContainer;
