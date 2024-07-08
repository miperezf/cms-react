import ContactForm from "../Form";
import ContactTable from "../Table";

const CMS = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ContactForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactTable />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CMS;
