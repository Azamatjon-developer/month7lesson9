import { useFormik } from 'formik';
import React from 'react';
import { LoginValidation } from '../schemas';

function Validation() {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      userName: '',
      userEmail: '',
      Passsword: '',
    },
    validationSchema: LoginValidation,
    onSubmit: handleFormSubmit,
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-lg p-10 max-w-xl w-full">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
          Form Validation
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="userName" className="text-lg font-semibold text-gray-700">
              Username
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.userName}
              id="userName"
              name="userName"
              className={`p-4 rounded-md border ${
                errors.userName && touched.userName
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="text"
              placeholder="Enter Your Name"
            />
            {errors.userName && touched.userName && (
              <span className="text-red-500 text-base">{errors.userName}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="userEmail" className="text-lg font-semibold text-gray-700">
              Email
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.userEmail}
              id="userEmail"
              name="userEmail"
              className={`p-4 rounded-md border ${
                errors.userEmail && touched.userEmail
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="email"
              placeholder="Enter Your Email"
            />
            {errors.userEmail && touched.userEmail && (
              <span className="text-red-500 text-base">{errors.userEmail}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="Passsword" className="text-lg font-semibold text-gray-700">
              Password
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.Passsword}
              id="Passsword"
              name="Passsword"
              className={`p-4 rounded-md border ${
                errors.Passsword && touched.Passsword
                  ? 'border-red-500'
                  : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="password"
              placeholder="Enter Your Password"
            />
            {errors.Passsword && touched.Passsword && (
              <span className="text-red-500 text-base">{errors.Passsword}</span>
            )}
          </div>

          <button
            className="w-[150px] float-end shadow-2xl shadow-blue-600 py-4 bg-blue-600 text-white text-xl font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Validation;
