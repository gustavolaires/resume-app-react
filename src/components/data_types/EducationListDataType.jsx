// import "./EducationListDataType.css";

function EducationListDataType(props) {
  // console.log(props)

  const content = props.content.map((value, index) => (
    <div key={props.keyword + index}>
      <div>
        <h4>{value.course}</h4>
      </div>
      <div>
        <p className="m-0">{value.institution}</p>
        <p className="m-0">{value.begin} - {value.end}</p>
        {value.laureated && <p className="m-0"><strong>{value.laureated}</strong></p>}
      </div>
    </div>
  ));

  return (
    <>{content}</>
  );
}

export default EducationListDataType;
