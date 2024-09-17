export default function MainInfo() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div>
          <span className="text-sm text-sky-500 font-bold block mb-2">Welcome</span>
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Online Appointment</h2>
          <p className="font-light text-base text-gray-500 max-w-3xl sm:text-xl">We use an agile approach to test assumptions and connect with the needs of your audience early and often
          </p>
        </div>
        
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <button className="rounded-md bg-sky-500 px-3 py-3 text-sm font-bold text-white hover:bg-sky-800 focus:ring-4 focus:ring-primary-300 transition-all duration-500" aria-current="page">Get Now</button>
              <button className="rounded-md px-3 py-3 text-sm font-bold text-sky-500 hover:text-sky-800 focus:ring-4 focus:ring-primary-300 transition-all duration-500">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}