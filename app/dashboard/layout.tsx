import SideNav from "@/app/ui/dashboard/sidenav";
import { inter } from "@/app/ui/fonts";

interface Children {
  children: React.ReactNode;
}
export default function Layout({ children }: Children) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div
        className={`${inter.className} antialiased flex-grow p-6 md:overflow-y-auto md:p-1`}
      >
        {children}
      </div>
    </div>
  );
}
