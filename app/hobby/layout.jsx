import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Photography | Nazmul Hasan",
  description:
    "Street, nature, and bird photography by Nazmul Hasan — former President, MEC Photography Club.",
};

export default function HobbyLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
