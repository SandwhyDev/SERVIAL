import React from "react";
import CardBLog from "../../components/CardBLog";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Navbar />

      <div className="main mt-12 p-4 flex flex-col gap-4">
        <CardBLog title="cara merawat bulu kucing" />
        <CardBLog
          title="toko hewan di depok"
          img="https://images.pexels.com/photos/167773/pexels-photo-167773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </div>
  );
};

export default index;
