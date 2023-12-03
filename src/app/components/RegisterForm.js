"use client";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useContext } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      username: formData.get("username"),
      email: formData.get("email"),
      fullname: formData.get("fullname"),
      password: formData.get("password"),
    };

    // Call the API to register the user
    try {
      // Use Axios to send a POST request
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`,
        userData
      );

      // Axios wraps the response data inside the `data` property
      const { data } = response;

      console.log(data);
      // Redirect user to the login page
      router.push("/login");
    } catch (error) {
      // Handle errors
      // Axios wraps the response error in `error.response`
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-slate-600">
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
      <div className="text-center text-slate-700 flex justify-center gap-2">
        <p>Already have an account?</p>
        <Link href="/login" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
