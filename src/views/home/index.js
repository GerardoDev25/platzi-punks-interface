import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { usePlatziPunks } from '../../hooks/useTruncatedAddress/usePlatziPunks';
const Home = () => {
  const [maxSupplay, setMaxSupplay] = useState();

  const platziPunks = usePlatziPunks();

  const { active } = useWeb3React();

  const getMaxSupply = useCallback(async () => {
    if (platziPunks) {
      const result = await platziPunks.methods.maxSupply().call();
      setMaxSupplay(result);
    }
  }, [platziPunks]);

  useEffect(() => {
    getMaxSupply();
  }, [getMaxSupply]);

  if (!active) return 'Conecta tu wallet';
  return (
    <>
      <p>max Supply: {maxSupplay}</p>
    </>
  );
};

export default Home;
