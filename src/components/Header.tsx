export default function Header() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <p className="rounded-md px-3 py-2 text-lg font-black text-gray-900">MedicalFunc</p>
                <a href="#" className="rounded-md px-3 py-3 text-sm font-bold text-gray-500 hover:text-gray-900 transition-all duration-500">Home</a>
                <a href="#" className="rounded-md px-3 py-3 text-sm font-bold text-gray-500 hover:text-gray-900 transition-all duration-500">Products</a>
                <a href="#" className="rounded-md px-3 py-3 text-sm font-bold text-gray-500 hover:text-gray-900 transition-all duration-500">Pricing</a>
                <a href="#" className="rounded-md px-3 py-3 text-sm font-bold text-gray-500 hover:text-gray-900 transition-all duration-500">Contact</a>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="/" className="rounded-md px-3 py-3 text-sm font-bold text-sky-500 hover:text-sky-800 focus:ring-4 focus:ring-primary-300 transition-all duration-500">Login</a>
                <a href="/" className="rounded-md bg-sky-500 px-3 py-3 text-sm font-bold text-white hover:bg-sky-800 focus:ring-4 focus:ring-primary-300 transition-all duration-500" aria-current="page">JOIN US</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}