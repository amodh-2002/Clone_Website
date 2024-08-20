import { useFormik } from "formik";
import { basicSchema } from "../schema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const ContactForm = () => {
  const {
    values,
    handleBlur,
    touched,
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="w-full max-w-sm mx-auto"
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-zinc-800 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-zinc-800 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="name"
          type="text"
          placeholder="Enter your name"
          className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
        />
        {errors.name && touched.name && (
          <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-zinc-800 text-sm font-bold mb-2"
        >
          Phone Number
        </label>
        <input
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          id="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <p className="text-red-500 text-xs italic mt-1">
            {errors.phoneNumber}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-zinc-800 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          id="message"
          placeholder="Enter your message"
          className="h-24 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-[#F36361] text-[#fff] hover:bg-opacity-90 font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
