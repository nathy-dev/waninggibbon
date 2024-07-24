import gibbon from "/gibbon.svg";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-16 items-center justify-center align-middle w-full absolute z-10 p-12">
      <img src={gibbon} alt="waning gibbon logo" className="h-96" />
      <div className="flex flex-col gap-8 items-start lg:items-center justify-center">
        <h1 className="font-nasa text-7xl md:text-9xl">Wanning Gibbon</h1>
        <p className="font-bold">
          Game-making space monkeys, extremely based in Mesa, AZ 🌵
        </p>
      </div>
    </section>
  );
};
