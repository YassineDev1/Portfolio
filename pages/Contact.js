import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import {useRouter} from "next/router"

export default function Contact() {
    const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "MA",
      terms: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be less 20 charracter")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email adress")
        .required("Email is required"),
       country: Yup.string().required("Counntry is required"), 
       terms: Yup.array().required("Terms of service must be checked")
    }),
    onSubmit: (values) => {
        console.log(values);
        router.push({pathname:"/success", query: values})
    }
  });
  return (
    <main className="flex items-center justify-center h-screen bg-blue-500">
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-2/3 font-sans bg-white rounded-lg"
      >
        <div className="flex-1 p-20 text-gray-700">
          <h1 className="pb-2 text-3xl text-blue-800">Let's get started</h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
            nisi. Ipsa eveniet autem nisi eius?
          </p>
          <div className="mt-6">
            {/* Name input field */}
            <div className="pb-4">
              <label
                className={`block pb-2 text-sm ${
                  formik.touched.name && formik.errors.name
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="name"
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                className="w-1/2 p-2 border-2 border-gray-500 rounded-md outline-none focus:border-blue-500 focus:ring-blue-500"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
              />
            </div>
            {/* Email input field */}
            <div className="pb-4">
              <label
                className={`block pb-2 text-sm ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="email"
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                className="w-1/2 p-2 border-2 border-gray-500 rounded-md outline-none focus:border-blue-500 focus:ring-blue-500"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter your name"
              />
            </div>
            {/* Country input field */}
            <div className="pb-4">
              <label
                className={`block pb-2 text-sm ${
                  formik.touched.country && formik.errors.country
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="country"
              >
                {formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : "Country"}
              </label>
              <select
                name="country"
                id=""
                value={formik.values.country}
                onChange={formik.handleChange}
                className="w-1/2 p-2 border-2 border-gray-500 rounded-md outline-none focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="UK">United Kingdom</option>
                <option value="USA">United States</option>
                <option value="CA">Canada</option>
                <option value="MA">Morocco</option>
              </select>
            </div>
            {/* terms of service*/}
            <div className="pb-4">
              <label
                className={`block pb-2 text-sm ${
                  formik.touched.terms && formik.errors.terms
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="terms"
              >
                {formik.touched.terms && formik.errors.terms
                  ? formik.errors.terms
                  : "Terms of service"}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  onChange={formik.handleChange}
                  className="w-5 h-5 border-2 border-blue-500 focus:border-blue-500 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-600">
                  I agree to the Terms and Service that my data will be taken
                  and sold
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-6 text-sm text-white bg-blue-500 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src="/myDoctor.png"
            alt="form"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </form>
    </main>
  );
}
