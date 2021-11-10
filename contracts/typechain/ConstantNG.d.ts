/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ConstantNGInterface extends ethers.utils.Interface {
  functions: {
    "contribute(uint256)": FunctionFragment;
    "getRN(uint256)": FunctionFragment;
    "getUncorrelatedRN(uint256)": FunctionFragment;
    "number()": FunctionFragment;
    "requestRN(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "contribute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getRN", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getUncorrelatedRN",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "number", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requestRN",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUncorrelatedRN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "number", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "requestRN", data: BytesLike): Result;

  events: {};
}

export class ConstantNG extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ConstantNGInterface;

  functions: {
    contribute(
      _block: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRN(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { RN: BigNumber }>;

    getUncorrelatedRN(
      _block: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    number(overrides?: CallOverrides): Promise<[BigNumber]>;

    requestRN(
      _block: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  contribute(
    _block: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRN(_block: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getUncorrelatedRN(
    _block: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  number(overrides?: CallOverrides): Promise<BigNumber>;

  requestRN(
    _block: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    contribute(_block: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getRN(_block: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getUncorrelatedRN(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    requestRN(_block: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    contribute(
      _block: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRN(_block: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getUncorrelatedRN(
      _block: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    requestRN(
      _block: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    contribute(
      _block: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRN(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUncorrelatedRN(
      _block: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    number(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requestRN(
      _block: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}