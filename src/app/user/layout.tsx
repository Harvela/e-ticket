import { AsideNav } from '@/navigation/AsideNav';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative h-[100vh]">
          <img
            src="/assets/images/home/background.jpg"
            alt="Hero"
            className="h-full w-full"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-row bg-blue/20">
            <aside className="h-full w-[20%] rounded-r-[15px] bg-blue px-8 py-24">
              <AsideNav />
            </aside>
            <div className="w-[80%]">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
