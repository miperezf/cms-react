import { useForm } from "react-hook-form";

type Props = {};

const ContactForm = (props: Props) => {
  const methods = useForm();
  return (
    <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          {...methods.register("name")}
          type="name"
          className="form-control"
          id="name"
        />
      </div>
    </form>
  );
};

export default ContactForm;
