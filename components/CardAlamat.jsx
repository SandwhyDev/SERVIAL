import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const CardAlamat = () => {
  const [showPilih, setShowPilih] = useState(false);

  const handlePilih = () => {
    setShowPilih(!showPilih);
  };
  return (
    <div>
      {/* CARD ALAMAT  */}
      <div className="cardAlamat w-full h-56 rounded-xl  border-[.5px] border-red-400 px-4 py-2 bg-red-100 flex flex-col gap-2">
        <h1 className="font-bold mt-2">Jln. meruyung utara no. 12</h1>

        <div className="people flex flex-col gap-1 w-full pb-4">
          <h1 className="font-bold">Sandy Iswahyudi</h1>
          <p className="font-light text-md">62812173330000</p>
          <p className="font-light text-md">jln. meruyung utara no.12</p>
        </div>

        <button
          className="w-full h-12 border-[.5px] border-red-400 bg-white rounded-xl mt-2 flex items-center justify-center gap-2 "
          onClick={handlePilih}
        >
          <h1>Pilih Alamat</h1>
        </button>

        {showPilih && (
          <button
            className="w-full h-12 border-[.5px] border-red-400 bg-red-100 rounded-xl flex items-center justify-center gap-2 -mt-14  "
            onClick={handlePilih}
          >
            <h1>Pilih Alamat</h1>
            <span className="text-xl">
              <AiOutlineCheck />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CardAlamat;
