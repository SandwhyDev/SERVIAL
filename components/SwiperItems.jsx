import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiOpenedFoodCan } from "react-icons/gi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const swiperItems = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="w-20 h-20 bg-white flex items-center justify-center p-2 rounded-full gap-2 ">
        <GiOpenedFoodCan size={20} />
        <h1 className="font-bold">Food</h1>
      </SwiperSlide>

      <SwiperSlide className="w-20 h-20 bg-white flex items-center justify-center p-2 rounded-full gap-2">
        <GiOpenedFoodCan size={20} />
        <h1 className="font-bold">Food</h1>
      </SwiperSlide>

      <SwiperSlide className="w-20 h-20 bg-white flex items-center justify-center p-2 rounded-full gap-2">
        <GiOpenedFoodCan size={20} />
        <h1 className="font-bold">Food</h1>
      </SwiperSlide>

      <SwiperSlide className="w-20 h-20 bg-white flex items-center justify-center p-2 rounded-full gap-2">
        <GiOpenedFoodCan size={20} />
        <h1 className="font-bold">Food</h1>
      </SwiperSlide>

      <SwiperSlide className="w-20 h-20 bg-white flex items-center justify-center p-2 rounded-full gap-2">
        <GiOpenedFoodCan size={20} />
        <h1 className="font-bold">Food</h1>
      </SwiperSlide>

      <SwiperSlide className="w-20 h-20 bg-white flex items-center justify-center p-2 rounded-full gap-2">
        <GiOpenedFoodCan size={20} />
        <h1 className="font-bold">Food</h1>
      </SwiperSlide>
    </Swiper>
  );
};

export default swiperItems;
