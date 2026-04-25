import { format } from "date-fns";

const Heading = () => {
  return (
    <header className="md:mt-10 flex justify-between">
      <h2 className="text-lg font-semibold">mood_logger</h2>
      <p className="text-xs">{format(new Date(), "EEEE, MMMM d yyyy")}</p>
    </header>
  );
};

export default Heading;
