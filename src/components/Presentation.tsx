import Alert from "@/components/Alert";
import sparkles from "@/assets/svg/sparkles.svg";
import flare from "@/assets/png/flare.png";

const Presentation = () => {
    return (
      <div className="relative md:mt-20">
        <img
          src={flare}
          alt="flares"
          className="absolute left-1/2 translate-x-[-50%] -top-64 w-[1200px] h-[1200px] select-none pointer-events-none"
        />
        <Alert
          className="mx-auto relative z-10"
          message="Discover the benefit of tracking your body composition to improuve yourself"
          icon={sparkles}
        >
          <p className="text-sm text-center md:text-base">
            Discover the <span className="text-primary">benefit</span> of
            tracking your body composition to improuve{" "}
            <span className="text-primary">yourself</span>
          </p>
        </Alert>
        <h1 className="text-center font-clash font-bold md:text-7xl leading-tight mt-28 text-5xl">
          The <span className="text-primary">All-in-One</span>
          <br /> solution for training
        </h1>
        <p className="text-center font-inter mt-8 md:text-xl font-bold text-secondary text-md">
          If you want to start weight training and track your <br />
          performance, you've come to the right place.
        </p>
      </div>  
    )
}

export default Presentation;