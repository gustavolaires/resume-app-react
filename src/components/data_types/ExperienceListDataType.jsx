function ExperienceListDataType(props) {
  const get_responsibilities = (responsability, index) => {
    return <li key={props.keyword + "resp" + index}>{responsability}</li>;
  };

  const getClassName = classNameStr => {
    if (!props.typeOptions.bulletPoints) {
       return classNameStr.split().concat(["list-none"]).join(" ")
    }
    
    return classNameStr.split().concat(["list-disc"]).join(" ")
  }

  const content = props.content.map((value, index) => (
    <div key={props.keyword + index}>
      <div>
        <h4 className="text-lg font-semibold">{value.function}</h4>
      </div>
      <div className="mt-2">
        <p className="m-0">{value.company}</p>
        <p className="m-0">{value.begin} - {value.end}</p>
      </div>
      <div className="mt-2">
        <ul className={getClassName("list-inside p-0")}>
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
