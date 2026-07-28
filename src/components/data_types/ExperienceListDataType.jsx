import "./ExperienceListDataType.css";

function ExperienceListDataType(props) {
  // console.log(props)
  const get_responsibilities = (responsability, index) => {
    return <li key={props.keyword + "resp" + index}>{responsability}</li>;
  };

  const getClassName = classNameStr => {
    if (!props.typeOptions.bulletPoints) {
       return classNameStr.split().concat(['no-bullet']).join(' ')
    }

    return classNameStr
  }

  const content = props.content.map((value, index) => (
    <div key={props.keyword + index}>
      <div>
        <h4>{value.function}</h4>
      </div>
      <div>
        <p className="m-0">{value.company}</p>
        <p className="m-0">{value.begin} - {value.end}</p>
      </div>
      <div>
        <ul className={getClassName('custom-ul-exp-list')}>
          {value.responsibilities.map((value, index) => get_responsibilities(value, index))}
        </ul>
      </div>
    </div>
  ));

  return (
    <>{content}</>
  );
}

export default ExperienceListDataType;
