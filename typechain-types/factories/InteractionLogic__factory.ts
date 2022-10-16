/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InteractionLogic,
  InteractionLogicInterface,
} from "../InteractionLogic";

const _abi = [
  {
    inputs: [],
    name: "ArrayMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicationDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
];

const _bytecode =
  "0x611a5361003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610620000435760003560e01c80636fb4b4631462000048578063cd339bc41462000085575b600080fd5b8180156200005557600080fd5b506200006d6200006736600462000cd9565b620000b9565b6040516200007c919062000d72565b60405180910390f35b8180156200009257600080fd5b50620000aa620000a436600462000db8565b62000505565b6040519081526020016200007c565b6060858414620000dc5760405163b7c1140d60e01b815260040160405180910390fd5b60008667ffffffffffffffff811115620000fa57620000fa62000e7b565b60405190808252806020026020018201604052801562000124578160200160208202803683370190505b50905060005b87811015620004ad5760008560008b8b858181106200014d576200014d62000e91565b9050602002013581526020019081526020016000206003018054620001729062000ea7565b80601f0160208091040260200160405190810160405280929190818152602001828054620001a09062000ea7565b8015620001f15780601f10620001c557610100808354040283529160200191620001f1565b820191906000526020600020905b815481529060010190602001808311620001d357829003601f168201915b505050505090508989838181106200020d576200020d62000e91565b905060200201358560008380519060200120815260200190815260200160002054146200024d5760405163677510db60e11b815260040160405180910390fd5b60008660008c8c8681811062000267576200026762000e91565b602090810292909201358352508101919091526040016000908120600101546001600160a01b0316915087818d8d87818110620002a857620002a862000e91565b60209081029290920135835250810191909152604001600020600201546001600160a01b03169050806200035457620002fc8c8c86818110620002ef57620002ef62000e91565b9050602002013562000733565b9050808860008e8e8881811062000317576200031762000e91565b90506020020135815260200190815260200160002060020160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b6040516335313c2160e11b81526001600160a01b038e81166004830152821690636a627842906024016020604051808303816000875af11580156200039d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003c3919062000ee4565b858581518110620003d857620003d862000e91565b60209081029190910101526001600160a01b038216156200049e57816001600160a01b0316630e096ae18e8e8e8881811062000418576200041862000e91565b905060200201358d8d8981811062000434576200043462000e91565b905060200281019062000448919062000efe565b6040518563ffffffff1660e01b815260040162000469949392919062000f71565b600060405180830381600087803b1580156200048457600080fd5b505af115801562000499573d6000803e3d6000fd5b505050505b8360010193505050506200012a565b50886001600160a01b03167f40487072dc56f384287d26fbe090f404143c2737d54632177451d1f74bd82c768989898942604051620004f195949392919062000fa5565b60405180910390a298975050505050505050565b600080600080620005188b8b8862000810565b600083815260208a815260408083208584529091528120600501549396509194509250906001600160a01b0316806200063457620005fe85858960008981526020019081526020016000206003018054620005739062000ea7565b80601f0160208091040260200160405190810160405280929190818152602001828054620005a19062000ea7565b8015620005f25780601f10620005c657610100808354040283529160200191620005f2565b820191906000526020600020905b815481529060010190602001808311620005d457829003601f168201915b50505050508c620008d6565b600086815260208a81526040808320888452909152902060050180546001600160a01b0319166001600160a01b03831617905590505b6040516335313c2160e11b81526001600160a01b038f81166004830152821690636a627842906024016020604051808303816000875af11580156200067d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006a3919062000ee4565b915050816001600160a01b031663e49c3dda8d8f87878f8f6040518763ffffffff1660e01b8152600401620006de969594939291906200108b565b600060405180830381600087803b158015620006f957600080fd5b505af11580156200070e573d6000803e3d6000fd5b50505050620007238d8d8d87878f8f62000a4e565b9c9b505050505050505050505050565b60008063fe4b84df60e01b836040516024016200075291815260200190565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600081604051620007989062000c64565b620007a491906200112e565b604051809103906000f080158015620007c1573d6000803e3d6000fd5b509050806001600160a01b0316847f44403e38baed5e40df7f64ff8708b076c75a0dfda8380e75df5c36f11a476743426040516200080191815260200190565b60405180910390a39392505050565b600083815260208281526040808320858452909152812060040154819081906001600160a01b031680156200084d578693508592509050620008cd565b60008781526020868152604080832089845290915290205480620008845760405163a43d2a7160e01b815260040160405180910390fd5b6000888152602087815260408083208a84528252808320600101548484528983528184208185529092529091206004015491955093506001600160a01b03169150620008cd9050565b93509350939050565b600080620008e48362000aa4565b90506000620008f3856200114a565b9050600085604051806040016040528060098152602001682d436f6c6c6563742d60b81b815250620009258962000b46565b604051602001620009399392919062001182565b60408051601f1981840301815282820190915260048252632d436c2d60e01b6020830152915060009083906200096f8a62000b46565b6040516020016200098393929190620011cb565b60408051601f1981840301815290829052631fd3c60560e11b825291506001600160a01b03851690633fa78c0a90620009c7908c908c908790879060040162001216565b600060405180830381600087803b158015620009e257600080fd5b505af1158015620009f7573d6000803e3d6000fd5b50505050836001600160a01b0316888a7f0b227b550ffed48af813b32e246f787e99581ee13206ba8f9d90d63615269b3f4260405162000a3991815260200190565b60405180910390a45091979650505050505050565b8486886001600160a01b03167fed39bf0d9afa849610b901c9d7f4d00751ba20de2db023428065bec153833218878787874260405162000a9395949392919062001256565b60405180910390a450505050505050565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b03811662000b415760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b604482015260640160405180910390fd5b919050565b60608162000b6b5750506040805180820190915260018152600360fc1b602082015290565b8160005b811562000b9b578062000b8281620012a0565b915062000b939050600a83620012d4565b915062000b6f565b60008167ffffffffffffffff81111562000bb95762000bb962000e7b565b6040519080825280601f01601f19166020018201604052801562000be4576020820181803683370190505b5090505b841562000c5c5762000bfc600183620012eb565b915062000c0b600a8662001305565b62000c189060306200131c565b60f81b81838151811062000c305762000c3062000e91565b60200101906001600160f81b031916908160001a90535062000c54600a86620012d4565b945062000be8565b949350505050565b6106e6806200133883390190565b80356001600160a01b038116811462000b4157600080fd5b60008083601f84011262000c9d57600080fd5b50813567ffffffffffffffff81111562000cb657600080fd5b6020830191508360208260051b850101111562000cd257600080fd5b9250929050565b600080600080600080600060a0888a03121562000cf557600080fd5b62000d008862000c72565b9650602088013567ffffffffffffffff8082111562000d1e57600080fd5b62000d2c8b838c0162000c8a565b909850965060408a013591508082111562000d4657600080fd5b5062000d558a828b0162000c8a565b989b979a5095989597966060870135966080013595509350505050565b6020808252825182820181905260009190848201906040850190845b8181101562000dac5783518352928401929184019160010162000d8e565b50909695505050505050565b60008060008060008060008060e0898b03121562000dd557600080fd5b62000de08962000c72565b97506020890135965060408901359550606089013567ffffffffffffffff8082111562000e0c57600080fd5b818b0191508b601f83011262000e2157600080fd5b81358181111562000e3157600080fd5b8c602082850101111562000e4457600080fd5b60208301975080965050505062000e5e60808a0162000c72565b925060a0890135915060c089013590509295985092959890939650565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600181811c9082168062000ebc57607f821691505b6020821081141562000ede57634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121562000ef757600080fd5b5051919050565b6000808335601e1984360301811262000f1657600080fd5b83018035915067ffffffffffffffff82111562000f3257600080fd5b60200191503681900382131562000cd257600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038516815283602082015260606040820152600062000f9b60608301848662000f48565b9695505050505050565b6060808252810185905260006001600160fb1b0386111562000fc657600080fd5b8560051b8088608085013782018281036080908101602080860191909152908201869052600586901b820160a090810191600091840189835b8a8110156200107257868603609f190183528135368d9003601e1901811262001026578586fd5b8c01803567ffffffffffffffff8111156200103f578687fd5b8036038e13156200104e578687fd5b6200105d888288850162000f48565b97505050918301919083019060010162000fff565b5050505050604093909301939093525095945050505050565b86815260018060a01b038616602082015284604082015283606082015260a060808201526000620010c160a08301848662000f48565b98975050505050505050565b60005b83811015620010ea578181015183820152602001620010d0565b83811115620010fa576000848401525b50505050565b600081518084526200111a816020860160208601620010cd565b601f01601f19169290920160200192915050565b60208152600062001143602083018462001100565b9392505050565b805160208201516001600160e01b031980821692919060048310156200117a5780818460040360031b1b83161693505b505050919050565b6000845162001196818460208901620010cd565b845190830190620011ac818360208901620010cd565b8451910190620011c1818360208801620010cd565b0195945050505050565b6001600160e01b0319841681528251600090620011f0816004850160208801620010cd565b83519083019062001209816004840160208801620010cd565b0160040195945050505050565b84815283602082015260806040820152600062001237608083018562001100565b82810360608401526200124b818562001100565b979650505050505050565b8581528460208201526080604082015260006200127860808301858762000f48565b90508260608301529695505050505050565b634e487b7160e01b600052601160045260246000fd5b6000600019821415620012b757620012b76200128a565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082620012e657620012e6620012be565b500490565b6000828210156200130057620013006200128a565b500390565b600082620013175762001317620012be565b500690565b600082198211156200133257620013326200128a565b50019056fe60a060405234801561001057600080fd5b506040516106e63803806106e683398101604081905261002f9161025f565b336001600160a01b03166080816001600160a01b0316815250506100ca81336001600160a01b0316633502ac4b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100af919061030b565b6001600160a01b03166100d160201b6100291790919060201c565b5050610383565b60606100f683836040518060600160405280602781526020016106bf602791396100fd565b9392505050565b60606001600160a01b0384163b61016a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b0316856040516101859190610334565b600060405180830381855af49150503d80600081146101c0576040519150601f19603f3d011682016040523d82523d6000602084013e6101c5565b606091505b5090925090506101d68282866101e0565b9695505050505050565b606083156101ef5750816100f6565b8251156101ff5782518084602001fd5b8160405162461bcd60e51b81526004016101619190610350565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561024a578181015183820152602001610232565b83811115610259576000848401525b50505050565b60006020828403121561027157600080fd5b81516001600160401b038082111561028857600080fd5b818401915084601f83011261029c57600080fd5b8151818111156102ae576102ae610219565b604051601f8201601f19908116603f011681019083821181831017156102d6576102d6610219565b816040528281528760208487010111156102ef57600080fd5b61030083602083016020880161022f565b979650505050505050565b60006020828403121561031d57600080fd5b81516001600160a01b03811681146100f657600080fd5b6000825161034681846020870161022f565b9190910192915050565b602081526000825180602084015261036f81604085016020870161022f565b601f01601f19169190910160400192915050565b60805161032261039d6000396000605901526103226000f3fe60806040523661001357610011610017565b005b6100115b610027610022610055565b6100de565b565b606061004e83836040518060600160405280602781526020016102c660279139610102565b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633502ac4b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100d9919061021d565b905090565b3660008037600080366000845af43d6000803e8080156100fd573d6000f35b3d6000fd5b60606001600160a01b0384163b61016f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161018a9190610276565b600060405180830381855af49150503d80600081146101c5576040519150601f19603f3d011682016040523d82523d6000602084013e6101ca565b606091505b50915091506101da8282866101e4565b9695505050505050565b606083156101f357508161004e565b8251156102035782518084602001fd5b8160405162461bcd60e51b81526004016101669190610292565b60006020828403121561022f57600080fd5b81516001600160a01b038116811461004e57600080fd5b60005b83811015610261578181015183820152602001610249565b83811115610270576000848401525b50505050565b60008251610288818460208701610246565b9190910192915050565b60208152600082518060208401526102b1816040850160208701610246565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122033b8b210376f0e3a717318c1e885ca090c9bd64d314224d0a7f9770ed6f8cd1364736f6c634300080a0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201c40a5f206a69d316f4dc1334a01f97f975802853c781580f356e251b4672e1a64736f6c634300080a0033";

type InteractionLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InteractionLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InteractionLogic__factory extends ContractFactory {
  constructor(...args: InteractionLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InteractionLogic> {
    return super.deploy(overrides || {}) as Promise<InteractionLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InteractionLogic {
    return super.attach(address) as InteractionLogic;
  }
  connect(signer: Signer): InteractionLogic__factory {
    return super.connect(signer) as InteractionLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InteractionLogicInterface {
    return new utils.Interface(_abi) as InteractionLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InteractionLogic {
    return new Contract(address, _abi, signerOrProvider) as InteractionLogic;
  }
}
