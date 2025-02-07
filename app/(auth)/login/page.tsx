import AuthWrapper from "@/app/(auth)/_components/auth-wrapper";
import LoginForm from "@/app/(auth)/login/_components/login-form";

export default async function Login() {
  return (
    <main className="min-h-screen">
      <AuthWrapper title="Влизане в акаунта">
        <LoginForm />
      </AuthWrapper>
    </main>
  );
}