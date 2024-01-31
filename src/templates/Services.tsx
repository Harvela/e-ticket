import { services } from '@/utils/services';

const Services = () => {
  return (
    <div id="services" className="relative z-20 px-4 py-8 lg:px-[100px]">
      <h1 className="mb-2 mt-5 text-center text-lg font-bold text-blue lg:text-2xl">
        Nos services
      </h1>
      <hr className="m-auto mb-8 h-[4px] w-[100px] bg-blue" />
      <div className="mt-12 grid grid-cols-4 gap-16">
        {services.map((service, index) => {
          const isFirstOrLast = index === 0 || index === services.length - 1;
          const additionalStyles = isFirstOrLast
            ? 'mt-[-60px] bg-secondary-900'
            : 'mt-8 bg-black';

          return (
            <div
              key={index}
              className={`rounded-md p-8 text-white shadow-xl lg:h-[200px] ${additionalStyles}`}
            >
              <div className="flex flex-row items-center gap-4">
                <h2 className="font-semibold">{service.name}</h2>
                <h4 className="text-secondary-900">{service.type}</h4>
              </div>
              <p className="my-8 text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Services };
