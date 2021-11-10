/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConstantNG, ConstantNGInterface } from "../ConstantNG";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "getRN",
    outputs: [
      {
        internalType: "uint256",
        name: "RN",
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
        name: "_block",
        type: "uint256",
      },
    ],
    name: "getUncorrelatedRN",
    outputs: [
      {
        internalType: "uint256",
        name: "RN",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
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
        name: "_block",
        type: "uint256",
      },
    ],
    name: "requestRN",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161024438038061024483398101604081905261002f91610037565b608052610050565b60006020828403121561004957600080fd5b5051919050565b6080516101cd6100776000396000818160a80152818160f9015261011f01526101cd6000f3fe60806040526004361061004a5760003560e01c80631c73601e1461004f5780637b9c34e0146100815780638381f58a14610096578063c1cbbca7146100ca578063ca4742f1146100db575b600080fd5b34801561005b57600080fd5b5061006f61006a36600461017e565b61011b565b60405190815260200160405180910390f35b61009461008f36600461017e565b6100d8565b005b3480156100a257600080fd5b5061006f7f000000000000000000000000000000000000000000000000000000000000000081565b6100946100d836600461017e565b50565b3480156100e757600080fd5b5061006f6100f636600461017e565b507f000000000000000000000000000000000000000000000000000000000000000090565b60007f00000000000000000000000000000000000000000000000000000000000000008061014c5750600092915050565b6040805133602082015290810182905260600160408051601f1981840301815291905280516020909101209392505050565b60006020828403121561019057600080fd5b503591905056fea26469706673582212206d2da4fc3117603518cc1c783c546f03bbd1e50dfa448bb2a407e51a64116bae64736f6c63430008090033";

export class ConstantNG__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _number: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConstantNG> {
    return super.deploy(_number, overrides || {}) as Promise<ConstantNG>;
  }
  getDeployTransaction(
    _number: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_number, overrides || {});
  }
  attach(address: string): ConstantNG {
    return super.attach(address) as ConstantNG;
  }
  connect(signer: Signer): ConstantNG__factory {
    return super.connect(signer) as ConstantNG__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConstantNGInterface {
    return new utils.Interface(_abi) as ConstantNGInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConstantNG {
    return new Contract(address, _abi, signerOrProvider) as ConstantNG;
  }
}