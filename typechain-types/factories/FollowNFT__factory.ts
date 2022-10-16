/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FollowNFT, FollowNFTInterface } from "../FollowNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BlockNumberInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHub",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerOrApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "burnWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getDelegatedSupplyByBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPowerByBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintTimestampOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sigNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenDataOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "mintTimestamp",
            type: "uint96",
          },
        ],
        internalType: "struct IERC721Time.TokenData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002c0838038062002c0883398101604081905262000034916200007b565b6001600160a01b0381166200005c576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03166080526012805460ff19166001179055620000ad565b6000602082840312156200008e57600080fd5b81516001600160a01b0381168114620000a657600080fd5b9392505050565b608051612b15620000f3600039600081816103c10152818161051701528181610ae401528181610db50152818161103601528181611bb00152611c7c0152612b156000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806370a082311161010f578063c0da9bcd116100a2578063e985e9c511610071578063e985e9c51461046f578063ed24911d146104ab578063f990ccd7146104b3578063fe4b84df146104d357600080fd5b8063c0da9bcd146103f6578063c87b56dd14610436578063dd69cdb114610449578063df8d80711461045c57600080fd5b806395d89b41116100de57806395d89b41146103a1578063a22cb465146103a9578063a4c52b86146103bc578063b88d4fde146103e357600080fd5b806370a08231146103555780637ef67f991461036857806389028a131461037b5780638fca0d411461038e57600080fd5b806342842e0e1161018757806350ddf35c1161015657806350ddf35c146103095780635c19a95c1461031c5780636352211e1461032f5780636a6278421461034257600080fd5b806342842e0e146102bd57806342966c68146102d05780634f558e79146102e35780634f6ccce7146102f657600080fd5b806318160ddd116101c357806318160ddd1461027257806323b872dd146102845780632c994dc8146102975780632f745c59146102aa57600080fd5b806301ffc9a7146101f557806306fdde031461021d578063081812fc14610232578063095ea7b31461025d575b600080fd5b61020861020336600461242f565b6104e6565b60405190151581526020015b60405180910390f35b610225610511565b60405161021491906124a4565b6102456102403660046124b7565b6105f5565b6040516001600160a01b039091168152602001610214565b61027061026b3660046124e5565b610682565b005b6008545b604051908152602001610214565b610270610292366004612511565b610798565b6102766102a53660046124e5565b6107c9565b6102766102b83660046124e5565b61083e565b6102706102cb366004612511565b6108d4565b6102706102de3660046124b7565b6108ef565b6102086102f13660046124b7565b610922565b6102766103043660046124b7565b61092d565b6102766103173660046124b7565b6109c0565b61027061032a366004612552565b610a56565b61024561033d3660046124b7565b610a60565b610276610350366004612552565b610ad7565b610276610363366004612552565b610b37565b610270610376366004612587565b610bbe565b6102706103893660046125db565b610ca4565b61027661039c3660046124b7565b610d69565b610225610daf565b6102706103b7366004612634565b610e9b565b6102457f000000000000000000000000000000000000000000000000000000000000000081565b6102706103f13660046126d8565b610f03565b6104096104043660046124b7565b610f35565b6040805182516001600160a01b031681526020928301516001600160601b03169281019290925201610214565b6102256104443660046124b7565b610ff4565b610270610457366004612787565b6110ad565b61027061046a3660046127ab565b61113b565b61020861047d3660046127ea565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6102766111d0565b6102766104c1366004612552565b600a6020526000908152604090205481565b6102706104e13660046124b7565b6111df565b60006001600160e01b0319821663780e9d6360e01b148061050b575061050b82611254565b92915050565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ec81d1946010546040518263ffffffff1660e01b815260040161056591815260200190565b600060405180830381865afa158015610582573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105aa9190810190612823565b9050806040518060400160405280600981526020016816a337b63637bbb2b960b91b8152506040516020016105e092919061289a565b60405160208183030381529060405291505090565b6000610600826112a4565b6106665760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061068d82610a60565b9050806001600160a01b0316836001600160a01b031614156106fb5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161065d565b336001600160a01b03821614806107175750610717813361047d565b6107895760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161065d565b61079383836112c1565b505050565b6107a2338261132f565b6107be5760405162461bcd60e51b815260040161065d906128c9565b610793838383611415565b6000438211156107eb5760405162ac8e9f60e61b815260040160405180910390fd5b6001600160a01b0383166000908152600d60205260409020548061081357600091505061050b565b6001600160a01b0384166000908152600b602052604090206108369084836115c0565b949350505050565b600061084983610b37565b82106108ab5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161065d565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61079383838360405180602001604052806000815250610f03565b6108f9338261132f565b61091657604051636d8a29e760e11b815260040160405180910390fd5b61091f816116f0565b50565b600061050b826112a4565b600061093860085490565b821061099b5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161065d565b600882815481106109ae576109ae61291a565b90600052602060002001549050919050565b600081815260026020526040812054600160a01b90046001600160601b031680610a475760405162461bcd60e51b815260206004820152603260248201527f4552433732313a206d696e742074696d657374616d7020717565727920666f72604482015271103737b732bc34b9ba32b73a103a37b5b2b760711b606482015260840161065d565b6001600160601b031692915050565b61091f338261178c565b6000818152600260205260408120546001600160a01b03168061050b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161065d565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b22576040516313bd2e8360e31b815260040160405180910390fd5b601180546001019081905561050b83826117d3565b60006001600160a01b038216610ba25760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161065d565b506001600160a01b031660009081526003602052604090205490565b6001600160a01b038316610be5576040516307eb16dd60e21b815260040160405180910390fd5b6000610bf083610a60565b6001600160a01b038181166000908152600a602090815260409182902080546001810190915582517f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad9281019290925292881691810191909152606080820187905260808201929092529084013560a0820152909150610c9490610c8d9060c0015b60405160208183030381529060405280519060200120611915565b828461195f565b610c9e84846112c1565b50505050565b6001600160a01b038316610ccb576040516307eb16dd60e21b815260040160405180910390fd5b6001600160a01b038481166000818152600a602090815260409182902080546001810190915582517f47ab88482c90e4bb94b82a947ae78fa91fb25de1469ab491f4c15b9a0a2677ee9281019290925291810192909252918516606080830191909152841515608083015260a08201929092529082013560c0820152610d5e90610d579060e001610c72565b858361195f565b610c9e848484611a3d565b600043821115610d8b5760405162ac8e9f60e61b815260040160405180910390fd5b600f5480610d9c5750600092915050565b610da8600e84836115c0565b9392505050565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ec81d1946010546040518263ffffffff1660e01b8152600401610e0391815260200190565b600060405180830381865afa158015610e20573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e489190810190612823565b90506000610e5582612930565b905080604051806040016040528060038152602001620b519b60ea1b815250604051602001610e85929190612967565b6040516020818303038152906040529250505090565b6001600160a01b038216331415610ef45760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161065d565b610eff338383611a3d565b5050565b610f0d338361132f565b610f295760405162461bcd60e51b815260040161065d906128c9565b610c9e84848484611aaa565b6040805180820190915260008082526020820152610f52826112a4565b610fb55760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a20746f6b656e206461746120717565727920666f72206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b606482015260840161065d565b506000908152600260209081526040918290208251808401909352546001600160a01b0381168352600160a01b90046001600160601b03169082015290565b6060610fff826112a4565b61101c5760405163677510db60e11b815260040160405180910390fd5b60105460405163374c947360e01b815260048101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063374c947390602401600060405180830381865afa158015611085573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261050b9190810190612823565b60006110b883610a60565b6001600160a01b0381166000908152600a602090815260409182902080546001810190915582517f108ccda6d7331b00561a3eea66a2ae331622356585681c62731e4a01aae2261a9281019290925291810186905260608082019290925290840135608082015290915061113290610c8d9060a001610c72565b610793836116f0565b6001600160a01b038381166000818152600a602090815260409182902080546001810190915582517fb8f190a57772800093f4e2b186099eb4f1df0ed7f5e2791e89a4a07678e0aeff928101929092529181019290925291841660608083019190915260808201929092529082013560a08201526111c6906111bf9060c001610c72565b848361195f565b610793838361178c565b60006111da611add565b905090565b60125460ff1615611203576040516302ed543d60e51b815260040160405180910390fd5b6012805460ff19166001179055601081905560405181907faec15127df11a6b562c87d31bcb8f4cd2f0cf57fb9b663d6334abf41fea94d95906112499042815260200190565b60405180910390a250565b60006001600160e01b031982166380ac58cd60e01b148061128557506001600160e01b03198216635b5e139f60e01b145b8061050b57506301ffc9a760e01b6001600160e01b031983161461050b565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906112f682610a60565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061133a826112a4565b61139b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161065d565b60006113a683610a60565b9050806001600160a01b0316846001600160a01b031614806113e15750836001600160a01b03166113d6846105f5565b6001600160a01b0316145b8061083657506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff16610836565b826001600160a01b031661142882610a60565b6001600160a01b0316146114905760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161065d565b6001600160a01b0382166114f25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161065d565b6114fd838383611b72565b6115086000826112c1565b6001600160a01b03831660009081526003602052604081208054600192906115319084906129ae565b90915550506001600160a01b038216600090815260036020526040812080546001929061155f9084906129c5565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000198101600081815260208590526040812054909182916001600160801b0316851061160f57600090815260208690526040902054600160801b90046001600160801b03169150610da89050565b6000828152602087905260409020546001600160801b031685101561163957600092505050610da8565b818111156116c7576002828203048103600081815260208881526040918290208251808401909352546001600160801b03808216808552600160801b909204169183019190915287141561169f57602001516001600160801b03169350610da892505050565b80516001600160801b03168711156116b9578193506116c0565b6001820392505b5050611639565b50600090815260208590526040902054600160801b90046001600160801b031690509392505050565b60006116fb82610a60565b905061170981600084611b72565b6117146000836112c1565b6001600160a01b038116600090815260036020526040812080546001929061173d9084906129ae565b9091555050600082815260026020526040808220829055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600061179783610b37565b6001600160a01b038085166000908152600c6020526040902080548583166001600160a01b031982161790915591925016610c9e818484611d65565b6001600160a01b0382166118295760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161065d565b611832816112a4565b1561187f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161065d565b61188b60008383611b72565b6001600160a01b03821660009081526003602052604081208054600192906118b49084906129c5565b90915550506000818152600260205260408082206001600160a01b038516600160a01b426001600160601b031602811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600080611920611add565b60405161190160f01b602082015260228101919091526042810184905260620160408051601f1981840301815291905280516020909101209392505050565b428160600135101561198457604051630819bdcd60e01b815260040160405180910390fd5b600060018461199660208501856129dd565b604080516000815260208181018084529490945260ff9092168282015291850135606082015290840135608082015260a0016020604051602081039080840390855afa1580156119ea573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580611a1f5750826001600160a01b0316816001600160a01b031614155b15610c9e576040516337e8456b60e01b815260040160405180910390fd5b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611ab5848484611415565b611ac184848484611f48565b610c9e5760405162461bcd60e51b815260040161065d90612a00565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611b08610511565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b038084166000908152600c6020526040808220548584168352818320546010549251633648f48360e21b81529185169490811693927f00000000000000000000000000000000000000000000000000000000000000009091169163d923d20c91611be99160040190815260200190565b602060405180830381865afa158015611c06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c2a9190612a52565b9050611c3883836001611d65565b611c43868686612046565b601054604051632f7f752f60e21b81526004810191909152602481018590526001600160a01b03878116604483015286811660648301527f0000000000000000000000000000000000000000000000000000000000000000169063bdfdd4bc90608401600060405180830381600087803b158015611cc057600080fd5b505af1158015611cd4573d6000803e3d6000fd5b505050506001600160a01b03811615611d5d57601054604051630f2c8b3160e21b815260048101919091526001600160a01b038781166024830152868116604483015260648201869052821690633cb22cc490608401600060405180830381600087803b158015611d4457600080fd5b505af1158015611d58573d6000803e3d6000fd5b505050505b505050505050565b6001600160a01b0383161580611e15576001600160a01b0384166000908152600d6020908152604080832054600b83528184206000198201855290925290912054600160801b90046001600160801b0316838103611dc48782856120fe565b806001600160801b0316876001600160a01b03167fd9a6070174f4ccca76ed4896432e9a090b16e07e8fe27f275f50b33500b98e5242604051611e0991815260200190565b60405180910390a35050505b6001600160a01b03831615611f06578015611e6257600f5460001981016000908152600e6020526040902054600160801b90046001600160801b0316838101611e5e81846121dd565b5050505b6001600160a01b0383166000908152600d6020908152604080832054600b83528184206000198201855290925290912054600160801b90046001600160801b0316838101611eb18682856120fe565b806001600160801b0316866001600160a01b03167fd9a6070174f4ccca76ed4896432e9a090b16e07e8fe27f275f50b33500b98e5242604051611ef691815260200190565b60405180910390a3505050610c9e565b80610c9e57600f5460001981016000908152600e6020526040902054600160801b90046001600160801b0316838103611f3f81846121dd565b50505050505050565b60006001600160a01b0384163b1561203b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611f8c903390899088908890600401612a6f565b6020604051808303816000875af1925050508015611fc7575060408051601f3d908101601f19168201909252611fc491810190612aac565b60015b612021573d808015611ff5576040519150601f19603f3d011682016040523d82523d6000602084013e611ffa565b606091505b5080516120195760405162461bcd60e51b815260040161065d90612a00565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610836565b506001949350505050565b6001600160a01b0383166120a15761209c81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6120c4565b816001600160a01b0316836001600160a01b0316146120c4576120c48382612289565b6001600160a01b0382166120db5761079381612326565b826001600160a01b0316826001600160a01b0316146107935761079382826123d5565b6001600160a01b0383166000908152600b6020526040902043908215801590612145575060001983016000908152602082905260409020546001600160801b038381169116145b1561217a576000198301600090815260208290526040902080546001600160801b03808716600160801b0291161790556121d6565b6040805180820182526001600160801b03808516825286811660208084019182526000888152868252858120945192518416600160801b0292909316919091179092556001600160a01b0388168152600d909152206001840190555b5050505050565b43811580159061220b575060001982016000908152600e60205260409020546001600160801b038281169116145b156122405760001982016000908152600e6020526040902080546001600160801b03808616600160801b029116179055505050565b6040805180820182526001600160801b03928316815293821660208086019182526000858152600e90915291909120935190518216600160801b02911617909155600101600f55565b6000600161229684610b37565b6122a091906129ae565b6000838152600760205260409020549091508082146122f3576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090612338906001906129ae565b600083815260096020526040812054600880549394509092849081106123605761236061291a565b9060005260206000200154905080600883815481106123815761238161291a565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806123b9576123b9612ac9565b6001900381819060005260206000200160009055905550505050565b60006123e083610b37565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b03198116811461091f57600080fd5b60006020828403121561244157600080fd5b8135610da881612419565b60005b8381101561246757818101518382015260200161244f565b83811115610c9e5750506000910152565b6000815180845261249081602086016020860161244c565b601f01601f19169290920160200192915050565b602081526000610da86020830184612478565b6000602082840312156124c957600080fd5b5035919050565b6001600160a01b038116811461091f57600080fd5b600080604083850312156124f857600080fd5b8235612503816124d0565b946020939093013593505050565b60008060006060848603121561252657600080fd5b8335612531816124d0565b92506020840135612541816124d0565b929592945050506040919091013590565b60006020828403121561256457600080fd5b8135610da8816124d0565b60006080828403121561258157600080fd5b50919050565b600080600060c0848603121561259c57600080fd5b83356125a7816124d0565b9250602084013591506125bd856040860161256f565b90509250925092565b803580151581146125d657600080fd5b919050565b60008060008060e085870312156125f157600080fd5b84356125fc816124d0565b9350602085013561260c816124d0565b925061261a604086016125c6565b9150612629866060870161256f565b905092959194509250565b6000806040838503121561264757600080fd5b8235612652816124d0565b9150612660602084016125c6565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156126a8576126a8612669565b604052919050565b600067ffffffffffffffff8211156126ca576126ca612669565b50601f01601f191660200190565b600080600080608085870312156126ee57600080fd5b84356126f9816124d0565b93506020850135612709816124d0565b925060408501359150606085013567ffffffffffffffff81111561272c57600080fd5b8501601f8101871361273d57600080fd5b803561275061274b826126b0565b61267f565b81815288602083850101111561276557600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060a0838503121561279a57600080fd5b82359150612660846020850161256f565b600080600060c084860312156127c057600080fd5b83356127cb816124d0565b925060208401356127db816124d0565b91506125bd856040860161256f565b600080604083850312156127fd57600080fd5b8235612808816124d0565b91506020830135612818816124d0565b809150509250929050565b60006020828403121561283557600080fd5b815167ffffffffffffffff81111561284c57600080fd5b8201601f8101841361285d57600080fd5b805161286b61274b826126b0565b81815285602083850101111561288057600080fd5b61289182602083016020860161244c565b95945050505050565b600083516128ac81846020880161244c565b8351908301906128c081836020880161244c565b01949350505050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b805160208201516001600160e01b0319808216929190600483101561295f5780818460040360031b1b83161693505b505050919050565b6001600160e01b031983168152815160009061298a81600485016020870161244c565b919091016004019392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156129c0576129c0612998565b500390565b600082198211156129d8576129d8612998565b500190565b6000602082840312156129ef57600080fd5b813560ff81168114610da857600080fd5b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060208284031215612a6457600080fd5b8151610da8816124d0565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612aa290830184612478565b9695505050505050565b600060208284031215612abe57600080fd5b8151610da881612419565b634e487b7160e01b600052603160045260246000fdfea26469706673582212200404e06ea63c2d541ca22c43bb878aacb5f3504a767642a36faf7dcbb7c8fd5f64736f6c634300080a0033";

type FollowNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FollowNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FollowNFT__factory extends ContractFactory {
  constructor(...args: FollowNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FollowNFT> {
    return super.deploy(hub, overrides || {}) as Promise<FollowNFT>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): FollowNFT {
    return super.attach(address) as FollowNFT;
  }
  connect(signer: Signer): FollowNFT__factory {
    return super.connect(signer) as FollowNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FollowNFTInterface {
    return new utils.Interface(_abi) as FollowNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FollowNFT {
    return new Contract(address, _abi, signerOrProvider) as FollowNFT;
  }
}
