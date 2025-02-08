import { DisplayLogo } from "@/components/sidebar/_components/display-logo";
import { DisplayDesktopItems } from "@/components/sidebar/_components/display-desktop-items";
import { DisplayMobileItems } from "@/components/sidebar/_components/display-mobile-items";
import { auth } from "@/lib/auth";

export const Navbar = async () => {
  const session = await auth();

  return (
    <div className="border-b border-b-secondary h-16">
      <div className="container mx-auto h-full flex justify-between items-center max-sm:px-5">
        <DisplayLogo />
        <DisplayDesktopItems session={session} className="hidden sm:block" />
        <DisplayMobileItems session={session} className="block sm:hidden" />
      </div>
    </div>
  );
};
