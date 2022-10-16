/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721Time",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Time__factory>;
    getContractFactory(
      name: "IERC721Time",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Time__factory>;
    getContractFactory(
      name: "LensMultiState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LensMultiState__factory>;
    getContractFactory(
      name: "LensNFTBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LensNFTBase__factory>;
    getContractFactory(
      name: "CollectNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CollectNFT__factory>;
    getContractFactory(
      name: "FollowNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FollowNFT__factory>;
    getContractFactory(
      name: "LensHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LensHub__factory>;
    getContractFactory(
      name: "FeeCollectModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeCollectModule__factory>;
    getContractFactory(
      name: "FreeCollectModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FreeCollectModule__factory>;
    getContractFactory(
      name: "LimitedFeeCollectModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LimitedFeeCollectModule__factory>;
    getContractFactory(
      name: "LimitedTimedFeeCollectModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LimitedTimedFeeCollectModule__factory>;
    getContractFactory(
      name: "RevertCollectModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RevertCollectModule__factory>;
    getContractFactory(
      name: "TimedFeeCollectModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimedFeeCollectModule__factory>;
    getContractFactory(
      name: "FeeModuleBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeModuleBase__factory>;
    getContractFactory(
      name: "ApprovalFollowModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApprovalFollowModule__factory>;
    getContractFactory(
      name: "FeeFollowModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeFollowModule__factory>;
    getContractFactory(
      name: "FollowValidatorFollowModuleBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FollowValidatorFollowModuleBase__factory>;
    getContractFactory(
      name: "ProfileFollowModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProfileFollowModule__factory>;
    getContractFactory(
      name: "RevertFollowModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RevertFollowModule__factory>;
    getContractFactory(
      name: "FollowValidationModuleBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FollowValidationModuleBase__factory>;
    getContractFactory(
      name: "ModuleBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ModuleBase__factory>;
    getContractFactory(
      name: "ModuleGlobals",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ModuleGlobals__factory>;
    getContractFactory(
      name: "FollowerOnlyReferenceModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FollowerOnlyReferenceModule__factory>;
    getContractFactory(
      name: "ICollectModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICollectModule__factory>;
    getContractFactory(
      name: "ICollectNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICollectNFT__factory>;
    getContractFactory(
      name: "IFollowModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFollowModule__factory>;
    getContractFactory(
      name: "IFollowNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFollowNFT__factory>;
    getContractFactory(
      name: "ILensHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILensHub__factory>;
    getContractFactory(
      name: "ILensNFTBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILensNFTBase__factory>;
    getContractFactory(
      name: "IModuleGlobals",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IModuleGlobals__factory>;
    getContractFactory(
      name: "IReferenceModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IReferenceModule__factory>;
    getContractFactory(
      name: "Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Errors__factory>;
    getContractFactory(
      name: "Events",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Events__factory>;
    getContractFactory(
      name: "InteractionLogic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InteractionLogic__factory>;
    getContractFactory(
      name: "ProfileTokenURILogic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProfileTokenURILogic__factory>;
    getContractFactory(
      name: "PublishingLogic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PublishingLogic__factory>;
    getContractFactory(
      name: "LensPeriphery",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LensPeriphery__factory>;
    getContractFactory(
      name: "ProfileCreationProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProfileCreationProxy__factory>;
    getContractFactory(
      name: "UIDataProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UIDataProvider__factory>;
    getContractFactory(
      name: "Currency",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Currency__factory>;
    getContractFactory(
      name: "Helper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Helper__factory>;
    getContractFactory(
      name: "MockFollowModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockFollowModule__factory>;
    getContractFactory(
      name: "MockLensHubV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockLensHubV2__factory>;
    getContractFactory(
      name: "MockLensHubV2BadRevision",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockLensHubV2BadRevision__factory>;
    getContractFactory(
      name: "MockProfileCreationProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockProfileCreationProxy__factory>;
    getContractFactory(
      name: "MockReferenceModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockReferenceModule__factory>;
    getContractFactory(
      name: "FollowNFTProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FollowNFTProxy__factory>;
    getContractFactory(
      name: "TransparentUpgradeableProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransparentUpgradeableProxy__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721Time",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Time>;
    getContractAt(
      name: "IERC721Time",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Time>;
    getContractAt(
      name: "LensMultiState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LensMultiState>;
    getContractAt(
      name: "LensNFTBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LensNFTBase>;
    getContractAt(
      name: "CollectNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CollectNFT>;
    getContractAt(
      name: "FollowNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FollowNFT>;
    getContractAt(
      name: "LensHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LensHub>;
    getContractAt(
      name: "FeeCollectModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeCollectModule>;
    getContractAt(
      name: "FreeCollectModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FreeCollectModule>;
    getContractAt(
      name: "LimitedFeeCollectModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LimitedFeeCollectModule>;
    getContractAt(
      name: "LimitedTimedFeeCollectModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LimitedTimedFeeCollectModule>;
    getContractAt(
      name: "RevertCollectModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RevertCollectModule>;
    getContractAt(
      name: "TimedFeeCollectModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimedFeeCollectModule>;
    getContractAt(
      name: "FeeModuleBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeModuleBase>;
    getContractAt(
      name: "ApprovalFollowModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ApprovalFollowModule>;
    getContractAt(
      name: "FeeFollowModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeFollowModule>;
    getContractAt(
      name: "FollowValidatorFollowModuleBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FollowValidatorFollowModuleBase>;
    getContractAt(
      name: "ProfileFollowModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProfileFollowModule>;
    getContractAt(
      name: "RevertFollowModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RevertFollowModule>;
    getContractAt(
      name: "FollowValidationModuleBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FollowValidationModuleBase>;
    getContractAt(
      name: "ModuleBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ModuleBase>;
    getContractAt(
      name: "ModuleGlobals",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ModuleGlobals>;
    getContractAt(
      name: "FollowerOnlyReferenceModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FollowerOnlyReferenceModule>;
    getContractAt(
      name: "ICollectModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICollectModule>;
    getContractAt(
      name: "ICollectNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICollectNFT>;
    getContractAt(
      name: "IFollowModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFollowModule>;
    getContractAt(
      name: "IFollowNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFollowNFT>;
    getContractAt(
      name: "ILensHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILensHub>;
    getContractAt(
      name: "ILensNFTBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILensNFTBase>;
    getContractAt(
      name: "IModuleGlobals",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IModuleGlobals>;
    getContractAt(
      name: "IReferenceModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IReferenceModule>;
    getContractAt(
      name: "Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Errors>;
    getContractAt(
      name: "Events",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Events>;
    getContractAt(
      name: "InteractionLogic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InteractionLogic>;
    getContractAt(
      name: "ProfileTokenURILogic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProfileTokenURILogic>;
    getContractAt(
      name: "PublishingLogic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PublishingLogic>;
    getContractAt(
      name: "LensPeriphery",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LensPeriphery>;
    getContractAt(
      name: "ProfileCreationProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProfileCreationProxy>;
    getContractAt(
      name: "UIDataProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UIDataProvider>;
    getContractAt(
      name: "Currency",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Currency>;
    getContractAt(
      name: "Helper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Helper>;
    getContractAt(
      name: "MockFollowModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockFollowModule>;
    getContractAt(
      name: "MockLensHubV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockLensHubV2>;
    getContractAt(
      name: "MockLensHubV2BadRevision",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockLensHubV2BadRevision>;
    getContractAt(
      name: "MockProfileCreationProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockProfileCreationProxy>;
    getContractAt(
      name: "MockReferenceModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockReferenceModule>;
    getContractAt(
      name: "FollowNFTProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FollowNFTProxy>;
    getContractAt(
      name: "TransparentUpgradeableProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TransparentUpgradeableProxy>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
