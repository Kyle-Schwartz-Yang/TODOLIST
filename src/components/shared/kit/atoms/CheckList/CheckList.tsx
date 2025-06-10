import "./Checklist.scss";

interface Props {
  title: string;
  id: string;
}

const Checklist = (props: Props) => {
  const { title, id } = props;

  return (
    <div id="checklist">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default Checklist;
