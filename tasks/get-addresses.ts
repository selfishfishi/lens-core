import { task } from 'hardhat/config';
import { LensHub__factory } from '../typechain-types';
import { ProtocolState, waitForTx, initEnv, getAddrs } from './helpers/utils';

task('getaddrs', 'gets all available addresses').setAction(async ({}, hre) => {
  let _ = await initEnv(hre);
  const addrs = getAddrs();
  console.log(addrs);
});
