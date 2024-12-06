import Link from "next/link";
import Image from "next/image";
import BCImage from "../app/public/assets/image/breadcrumbs img.jpg";

export const Breadcrumbs = ({ title }) => {
  return (
    <div
      className="h-60 bg-center bg-cover breadcrumb-container"
      style={{
        position: "relative"
      }}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        src={BCImage}
        alt="Breadcrumbs Image"
      />

      <div className="container flex flex-col items-center justify-center gap-4 p-20 mx-auto z-10 absolute bg-black/70 h-60">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <nav className="flex space-x-2 text-white breadcrumb">
          <Link href="/" className="breadcrumb-item">
            Home
          </Link>
          <span className="breadcrumb-separator">/</span>
          <Link href={"#"} className="breadcrumb-item">
            {title}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
