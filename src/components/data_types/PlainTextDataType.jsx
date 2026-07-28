function PlainTextDataType(props) {
  const contentList = props.content.map((value, index) => 
    <p key={props.keyword + index}>{value}</p>
  );

  return (
    <>
      {contentList}
    </>
  )
}

export default PlainTextDataType