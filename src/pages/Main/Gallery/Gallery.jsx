import GalleryCard from "./GalleryCard"
import "./Gallery.css"
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const mockData = [
  { image: "./gallery-1.png", category: "Комоды", name: 'Комод "Geometry"', link: "2", price: 999 },
  { image: "./gallery-2.png", category: "Столы", name: 'Стол "Nordic"', link: "1", price: 1999 },
  { image: "./gallery-3.png", category: "Стулья", name: 'Стул "Rein"', link: "4", price: 399 },
  { image: "./gallery-4.png", category: "Тумбы", name: 'Тумба "Art Faces"', link: "3", price: 999 },
];

export default function Gallery() {
  return <section id="gallery" className="gallery">
    <h2>Галерея</h2>
    <div className="wrapper">
      <p>Избранные <br /> позиции</p>
      <a href="/catalog">Весь каталог <span>→</span></a>
    </div>
    <Swiper
      // spaceBetween={25}
      breakpoints={{
        320: {
          spaceBetween: 15,
        },
        425: {
          spaceBetween: 30,
        },
        550: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="gallerySwiper"
    >
      {
        mockData.map((cardData) => {
          return <SwiperSlide>
            <GalleryCard key={cardData.link} {...cardData} />
          </SwiperSlide>
        })
      }
    </Swiper>
  </section >
}