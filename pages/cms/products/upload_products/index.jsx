import Form_Product from "../../../../components/Form_Product";
import Navbar_Dashboard from "../../../../components/Navbar_Dashboard";

const Upload_products = () => {
  return (
    <div className="w-screen min-h-screen flex bg-gray-100">
      <Navbar_Dashboard />
      <div className="flex flex-col items-center justify-center w-full h-screen gap-2 ">
        <Form_Product />;
      </div>
    </div>
  );
};

export default Upload_products;
