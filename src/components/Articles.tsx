export default function Articles() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <span className="text-sm text-sky-500 font-bold text-center block mb-2">Articles</span>
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Our Doctors</h2>
        <p className="mt-1 text-gray-600">Stay in the know with insights from industry experts.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Article title="How to quickly deploy a static website" subTitle="Sale" description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers." />

        <Article title="How to quickly deploy a static website" subTitle="Sale" description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers." />

        <Article title="How to quickly deploy a static website" subTitle="Sale" description="Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers." />
      </div>
    </div>
  );
}

function Article({ title, href, subTitle, description }: { title: string, href?: URL, subTitle: string, description: string }) {
  const url = href ? href.toString() : "#";

  return (
    <a className="group flex flex-col focus:outline-none" href={url}>
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-red-400 text-white py-1.5 px-3">
          {subTitle}
        </span>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
          {title}
        </h3>
        <p className="mt-3 text-gray-800">
          {description}
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-sky-500 decoration-2 group-hover:underline group-focus:underline font-medium">
          Learn more
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
  );
}