import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>به اپلیکیشن احراز هویت خوش آمدید</h1>
      <Link href="/auth">برو به صفحه ورود</Link>
    </main>
  );
}
