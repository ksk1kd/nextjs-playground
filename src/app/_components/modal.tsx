import Link from "next/link";

export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-black opacity-40 fixed inset-0" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white px-10 py-8 z-20">
          <Link href="/">Close</Link>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
