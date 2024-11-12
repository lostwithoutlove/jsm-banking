import AuthForm from "@/components/AuthForm";

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <div>Sign Up</div>
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
