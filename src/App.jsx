import { useState } from "react";
import { usePollingValue } from "./hooks/usePollingValue";
import { PollOption } from "./components";

const App = (props) => {
  const { pollingValue, handleFormSubmit } = usePollingValue(
    props.pollConfig,
    props.uniqueId
  );

  const [disableSelection, setDisableSelection] = useState(false);

  return (
    <div>
      <div className="container mx-auto ">
      
      <div className="block md:flex md:flex-row bg-amber-400 gap-2 my-5 p-4 rounded-md">
        <div className="w-full md:basis-2/5 md:flex md:justify-center md:items-center md:p-4">
          <h1 className="text-3xl font-bold">{pollingValue.question}</h1>
        </div>
        <div className="w-full md:basis-3/5 ">
        <p className="mt-4 md:text-right text-md text-black-600">
          Total Votes:{" "}
          <strong className="text-black">{pollingValue.totalVotes}</strong>
        </p>
        
      <form
        className="mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          setDisableSelection(true);
        }}
      >
        <div>
          {pollingValue.options.map((option) => (
            <PollOption
              key={option.id}
              option={option}
              totalVotes={pollingValue.totalVotes}
              disableSelection={disableSelection}
              onClick={handleFormSubmit}
            />
          ))}
        </div>
        
      </form>
        </div>
      </div>
      </div>
      
      
      
    </div>
  );
};

export default App;