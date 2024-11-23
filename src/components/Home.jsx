
import React from "react";
import { Link } from "react-router-dom";
import ImagenPerfilFede from "../assets/img/FG2.jpg";
import ImagenPerfilEnzo from "../assets/img/ED.jpg";

const Home = () => {
  const users = [
    {
      id: 1,
      name: "Federico Gastaldi",
      email: "gastaldifederico69@gmail.com",
      avatarUrl: ImagenPerfilFede,
      link: "/cardfede", // Ruta para CardFede
    },
    {
      id: 2,
      name: "Enzo Dellape",
      email: "enzodellape@gmail.com",
      avatarUrl: ImagenPerfilEnzo, 
      link: "/cardenzo", // Ruta para CardEnzo
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-gray-900 border-gray-800 rounded-lg shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-center mb-6 text-gray-100">
            Seleccione un usuario
          </h1>
          <div className="space-y-2">
            {users.map((user) => (
              <Link
                key={user.id}
                to={user.link}
                className="flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-800"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none text-gray-100">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
