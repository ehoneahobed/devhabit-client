import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    // <div className="max-w-md mx-auto mt-10">
    //   <h2 className="text-xl font-bold mb-5 text-center">Register</h2>
    //   <RegisterForm />
    // </div>

<div className="max-w-md mx-auto  flex items-center justify-center min-h-screen">
    <div className="p-6 bg-white shadow-md rounded">
    <h2 className="text-xl font-bold mb-5 text-center text-slate-700">Register</h2>
        <RegisterForm />
    </div>
</div>
  );
};

export default RegisterPage;
