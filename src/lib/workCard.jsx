export function WorkCard({ title, img, text, secondaryText }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center mb-4 work-title">{title}</h1>
      <div className="relative inline-block mt-10">
        <img
          src={img}
          alt="Description de l'image"
          className="mx-auto rounded-lg"
        />
        <div className="absolute overflow-scroll p-4 mx-auto rounded-lg text-center inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-90 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
          <p className="text-white lg:text-lg text-sm transition duration-500 ease-in-out">
            {text}
          </p>
          <br />
          <p className="text-white lg:text-lg text-sm transition duration-500 ease-in-out">
            {secondaryText}
          </p>
        </div>
      </div>
    </div>
  );
}
