export const Breadcrumbs = ({ title }) => {
  return (
    <div
      className="h-48 bg-center bg-cover breadcrumb-container"
      style={{
        backgroundImage: `url('https://picsum.photos/2000/1000')`,
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="container flex flex-col items-center justify-center gap-4 p-8 mx-auto">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <nav className="flex space-x-2 text-white breadcrumb">
          <a href="/" className="breadcrumb-item">
            Home
          </a>
          <span className="breadcrumb-separator">/</span>
          <a href={"#"} className="breadcrumb-item">
            {title}
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;