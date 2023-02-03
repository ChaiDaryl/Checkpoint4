import React from "react";

function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="bg-homeBg bg-bottom h-[45vh]">
        <h1 className="flex w-screen text-white text-[5.5rem] justify-center mt-32">
          Le Pré Vert
        </h1>
      </div>
      <div className="flex my-4 mx-16 flex-col align-middle justify-center containe-middle">
        <h2 className="text-xl my-4 "> Qui nous sommes ?</h2>

        <p className="my-4 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          dignissimos excepturi cum omnis. Esse voluptas, iure pariatur velit
          quis magnam officiis voluptatum autem amet eum explicabo, asperiores
          atque saepe aliquid. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Cumque consequuntur error quisquam. At, rem numquam.
          Molestiae, ipsum labore atque animi itaque error culpa doloribus!
          Reiciendis earum fugit necessitatibus! Magni, dolor? Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Fugiat eligendi similique
          optio ipsa aspernatur, laboriosam quaerat, cumque architecto maxime
          repudiandae aut tempore suscipit illum autem rem odit. Architecto,
          maiores rerum?
        </p>
      </div>
    </div>
  );
}

export default Home;
