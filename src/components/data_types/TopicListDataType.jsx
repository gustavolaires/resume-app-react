import "./TopicListDataType.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function TopicListDataType(props) {
  // console.log(props)

  const get_icon = info_data => {
    if (info_data.icon == "address") {
      return <FontAwesomeIcon icon={faMapLocation} />;
    } else if (info_data.icon == "email") {
      return <FontAwesomeIcon icon={faAt} />;
    } else if (info_data.icon == "email2") {
      return <FontAwesomeIcon icon={faEnvelope} />;
    } else if (info_data.icon == "linkedin") {
      return <FontAwesomeIcon icon={faLinkedin} />;
    } else if (info_data.icon == "github") {
      return <FontAwesomeIcon icon={faGithub} />;
    } else if (info_data.icon == "whatsapp") {
      return <FontAwesomeIcon icon={faWhatsapp} />;
    } else {
      return null;
    }
  };

  const content = props.content.map((value, index) => (
    <li key={props.keyword + index}>
      {/* { props.typeOptions.bulletPoints && value.key} */}
      { props.typeOptions.itemIcon && get_icon(value)}
      <span>{ props.typeOptions.key && value.key} { props.typeOptions.value && value.value}</span>
      {/* { props.typeOptions.valueAsChart && value.key} */}
    </li>
  ));

  const getClassName = classNameStr => {
    if (!props.typeOptions.bulletPoints) {
       return classNameStr.split().concat(['no-bullet']).join(' ')
    }

    return classNameStr
  }

  return (
    <ul className={getClassName('custom-ul')}>
      {content}
    </ul>
  );
}

export default TopicListDataType;
