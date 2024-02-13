import { Navbar } from '@/navigation/Navbar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative h-[100vh]">
          <img
            src="/assets/images/home/background.jpg"
            alt="Hero"
            className="h-full w-full"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-blue/20 ">
            <div
              id="home"
              className="flex h-[100vh] flex-col items-center justify-between px-16 py-4"
            >
              <Navbar />
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
