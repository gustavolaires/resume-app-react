import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function TopicListDataType(props) {
  const get_icon = info_data => {
    if (info_data.icon == "address") {
      return <FontAwesomeIcon icon={faMapLocation} className="me-2" />;
    } else if (info_data.icon == "email") {
      return <FontAwesomeIcon icon={faAt} className="me-2" />;
    } else if (info_data.icon == "email2") {
      return <FontAwesomeIcon icon={faEnvelope} className="me-2" />;
    } else if (info_data.icon == "linkedin") {
      return <FontAwesomeIcon icon={faLinkedin} className="me-2" />;
    } else if (info_data.icon == "github") {
      return <FontAwesomeIcon icon={faGithub} className="me-2" />;
    } else if (info_data.icon == "whatsapp") {
      return <FontAwesomeIcon icon={faWhatsapp} className="me-2" />;
    } else {
      return null;
    }
  };

  const content = props.content.map((value, index) => (
    <li key={props.keyword + index}>
      { props.typeOptions.itemIcon && get_icon(value)}
      <span>{ props.typeOptions.key && value.key} { props.typeOptions.value && value.value}</span>
      {/* { props.typeOptions.valueAsChart && value.key} */}
    </li>
  ));

  const getClassName = classNameStr => {
    if (!props.typeOptions.bulletPoints) {
       return classNameStr.split().concat(["list-none"]).join(' ')
    }

    return classNameStr.split().concat(["list-disc"]).join(" ")
  }

  return (
    <ul className={getClassName("list-inside p-0")}>
      {content}
    </ul>
  );
}

export default TopicListDataType;
