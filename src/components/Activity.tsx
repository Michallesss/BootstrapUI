export default function Activity() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <span className="text-sm text-sky-500 font-bold text-center block mb-2">Practice</span>
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Our Activity</h2>
          <p className="font-light text-gray-500 sm:text-xl">We use an agile approach to test assumptions and
            connect with the needs of your audience early and often.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Article */}
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">How to quickly
                deploy a static website</a></h2>
            <p className="mb-5 font-light text-gray-500">Static websites are now used to bootstrap lots of
              websites and are becoming the basis for a variety of tools that even influence both web designers and
              developers influence both web designers and developers.</p>
            <div className="flex justify-between items-center">
            </div>
          </article>
          {/* End Article */}

          {/* Article */}
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">How to quickly
                deploy a static website</a></h2>
            <p className="mb-5 font-light text-gray-500">Static websites are now used to bootstrap lots of
              websites and are becoming the basis for a variety of tools that even influence both web designers and
              developers influence both web designers and developers.</p>
            <div className="flex justify-between items-center">
            </div>
          </article>
          {/* End Article */}

          {/* Article */}
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">How to quickly
                deploy a static website</a></h2>
            <p className="mb-5 font-light text-gray-500">Static websites are now used to bootstrap lots of
              websites and are becoming the basis for a variety of tools that even influence both web designers and
              developers influence both web designers and developers.</p>
            <div className="flex justify-between items-center">
            </div>
          </article>
          {/* End Article */}
        </div>
      </div>
    </section>
  );
}