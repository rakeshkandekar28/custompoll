import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const usePollingValue = (pollConfig, uniqueId) => {
  const { getDataFromLocalStorage, setDataInLocalStorage } = useLocalStorage();
  const [pollingValue, setPollingValue] = useState(
    () => getDataFromLocalStorage(`${uniqueId}-${pollConfig.id}`) || pollConfig
  );

const handleFormSubmit = (optionId) => {
  const updatedOptions = pollingValue.options.map((option) => {
    if (optionId === option.id) {
      return {
        ...option,
        voteCount: option.voteCount + 1,
        isSelected: true,
      };
    }
    return {
      ...option,
      isSelected: false,
    };
  });

  const updatedPollingValue = {
    ...pollingValue,
    totalVotes: pollingValue.totalVotes + 1,
    options: updatedOptions,
  };

  setDataInLocalStorage(
    `${uniqueId}-${pollingValue.id}`,
    JSON.stringify(updatedPollingValue)
  );
  setPollingValue(updatedPollingValue);
};

  return { pollingValue, handleFormSubmit };
};