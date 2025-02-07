import AuthWrapper from "@/app/(auth)/_components/auth-wrapper";
import RegisterForm from "@/app/(auth)/register/_components/register-form";

export default async function Login() {
  return (
    <main className="min-h-screen">
      <AuthWrapper title="Създаване на акаунт">
        <RegisterForm />
      </AuthWrapper>
    </main>
  );
}