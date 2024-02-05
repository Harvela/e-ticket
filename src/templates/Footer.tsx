const Footer = () => (
  <footer className="flex h-80 flex-row justify-between bg-[#00172B] p-16 text-white dark:bg-gray-800">
    <div className="">
      <p>A propos de nous</p>
    </div>

    <div className="w-[30%]">
      <h2 className="text-md mb-8 font-semibold">NOUS CONTACTER</h2>
      <form>
        <input
          type="email"
          placeholder="Email / Telephone"
          id="small-input"
          className="border-b-1 w-full border-x-0 border-t-0 border-white bg-[#00172B] pl-0 outline-none sm:text-xs"
        />
        <textarea
          placeholder="Message"
          id="small-input"
          className="border-b-1 my-4 w-full border-x-0 border-t-0 border-white bg-[#00172B] pl-0 outline-none sm:text-xs"
        />
        <button className="w-full rounded-lg bg-white p-2 text-sm font-semibold text-[#00172B]">
          SOUMETTRE
        </button>
      </form>
    </div>
  </footer>
);

export { Footer };
