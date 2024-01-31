export const CheckUpForm = () => {
  return (
    <div>
      <div className="w-full flex justify-center  bg-[#F5F1EE]">
        <div className="w-full max-w-5xl">
          <h2 className="text-4xl font-bold pt-32 pb-20 px-10">
            {" "}
            Richiedi una <span>consulenza gratuita</span>
          </h2>
        </div>
      </div>
      <div className="bg-[#F5F1EE] flex justify-center pb-32">
        <form className="w-full max-w-5xl ">
          <div className="  grid lg:grid-cols-2 gap-20 mb-4">
            <div className="flex flex-col gap-4 px-10">
              <div className="">
                <input
                  type="text"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="Nome e Cognome"
                />
              </div>

              <div>
                <input
                  type="email"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="tel"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="Telefono"
                />
              </div>
              <div className=" ">
                <input
                  type="text"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="Provincia"
                />
              </div>
              <div className=" ">
                <input
                  type="text"
                  id="password"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="Azienda/Settore"
                />
              </div>
              <div className=" ">
                <input
                  type="text"
                  id="confirm_password"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="Sito Web"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  id="confirm_password"
                  className="py-2 px-0 border-b-2 border-black bg-transparent w-full rounded-t-lg focus:bg-white focus:outline-none placeholder:text-black"
                  placeholder="A quale servizio sei interessato?"
                />
              </div>
            </div>
            <div className="px-10 ">
              <textarea
                className="textarea w-full h-full lg:h-1/2  rounded-none "
                placeholder="Scrivi qui le informazioni principali del tuo progetto online (tipo di prodotto, canali utilizzati, budget investito,target)..."
              ></textarea>
              <div className="flex items-start mb-6">
                <div className=" flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue=""
                    className="  w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a href="#" className="text-primary hover:underline">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className=" mb-20 btn btn-primary   text-sm lg:w-2/5 sm:w-auto "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
