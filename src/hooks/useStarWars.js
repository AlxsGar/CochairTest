import React, { useCallback, useState } from "react";
import { planetsService } from "../services/startWarsServices";

function useStarWars() {
  const [swList, setSWList] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchStarWarsPlanets = useCallback(() => {
    const loadData = async () => {
      setLoading(true);
      await planetsService({
        success: (res) => {
          setSWList(res);
          setLoading(false);
        },
        error: () => {
          setError(true);
          setErrorMessage("Algo salió mal.");
          setLoading(false);
        },
      });
    };

    loadData().then();
  }, []);

  return {
    swList,
    error,
    errorMessage,
    fetchStarWarsPlanets,
    loading,
  };
}

export default useStarWars;
