"use client";
import { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantsContext";

const FormComments = ({ id }: any) => {
  const { addComment } = useContext(RestaurantContext);
  const [formData, setFormData] = useState({
    rating: 0,
    description: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();    
    addComment({
      ...formData,
      id,
    });
    setFormData({
      rating: 0,
      description: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border border-black rounded-3xl p-4 flex flex-col gap-6 h-fit"
    >
      <div className="rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              // Verificar si el valor actual del rating es mayor o igual al valor actual del radio
              checked={formData.rating >= value}
              onChange={handleChange}
              className="hidden"
            />
            {/* Mostrar la estrella llena o vacía según el valor del rating */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={formData.rating >= value ? "#264BEB" : "none"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0999 7.49562L13.0693 7.62325L13.488 6.44682L13.2623 7.67495L14.1657 8.04915L14.8745 7.02115L14.3387 8.14903L15.1145 8.74429L16.0652 7.93479L15.2557 8.88555L15.851 9.66131L16.9789 9.12546L15.9509 9.83431L16.3251 10.7377L17.5532 10.512L16.3768 10.9307L16.5044 11.9001L17.7491 12L16.5044 12.0999L16.3768 13.0693L17.5532 13.488L16.3251 13.2623L15.9509 14.1657L16.9789 14.8745L15.851 14.3387L15.2557 15.1145L16.0652 16.0652L15.1145 15.2557L14.3387 15.851L14.8745 16.9789L14.1657 15.9509L13.2623 16.3251L13.488 17.5532L13.0693 16.3768L12.0999 16.5044L12 17.7491L11.9001 16.5044L10.9307 16.3768L10.512 17.5532L10.7377 16.3251L9.83431 15.9509L9.12546 16.9789L9.66131 15.851L8.88555 15.2557L7.93479 16.0652L8.74429 15.1145L8.14903 14.3387L7.02115 14.8745L8.04915 14.1657L7.67495 13.2623L6.44682 13.488L7.62325 13.0693L7.49562 12.0999L6.25092 12L7.49562 11.9001L7.62325 10.9307L6.44682 10.512L7.67495 10.7377L8.04915 9.83431L7.02115 9.12546L8.14903 9.66131L8.74429 8.88555L7.93479 7.93479L8.88555 8.74429L9.66131 8.14903L9.12546 7.02115L9.83431 8.04915L10.7377 7.67495L10.512 6.44682L10.9307 7.62325L11.9001 7.49562L12 6.25092L12.0999 7.49562Z"
                stroke="currentColor"
              />
            </svg>
          </label>
        ))}
      </div>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="md:text-2xl text-lg font-normal resize-none placeholder:text-black focus:outline-none"
        placeholder="Escribe tu comentario sobre el restaurante"
      ></textarea>

      <div className="flex justify-between items-center">
        <button className="border py-3 px-8 w-fit rounded-3xl font-semibold capitalize border-black text-black ">
          Enviar
        </button>
        {/* <span className="text-xl text-black">{errorMessage}</span> */}
      </div>
    </form>
  );
};

export default FormComments;
