// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
// prettier-ignore
// @ts-ignore
import { DateResolver as Date } from 'graphql-scalars';
// prettier-ignore
// @ts-ignore
import { GraphQLID as ID } from 'graphql';
// prettier-ignore
// @ts-ignore
import { ArgsType, Field as TypeGraphQLField, Float, InputType as TypeGraphQLInputType, Int } from 'type-graphql';
// prettier-ignore
// @ts-ignore
import { registerEnumType, GraphQLISODateTime as DateTime } from "type-graphql";

import * as BN from "bn.js";

// prettier-ignore
// @ts-ignore eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require('graphql-type-json');
// prettier-ignore
// @ts-ignore
import { BaseWhereInput, JsonObject, PaginationArgs, DateOnlyString, DateTimeString, BigInt, Bytes } from 'warthog';

// @ts-ignore
import { AdditionalData } from "../modules/jsonfields/jsonfields.model";
// @ts-ignore
import { SomeData } from "../modules/jsonfields/jsonfields.model";
// @ts-ignore
import { HistoricalBalance } from "../modules/historical-balance/historical-balance.model";
// @ts-ignore
import { Account } from "../modules/account/account.model";

export enum AdditionalDataOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  data_ASC = "data_ASC",
  data_DESC = "data_DESC"
}

registerEnumType(AdditionalDataOrderByEnum, {
  name: "AdditionalDataOrderByInput"
});

@TypeGraphQLInputType()
export class AdditionalDataWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField(() => Bytes, { nullable: true })
  data_eq?: string;

  @TypeGraphQLField(() => [Bytes], { nullable: true })
  data_in?: string[];

  @TypeGraphQLField(() => AdditionalDataWhereInput, { nullable: true })
  AND?: [AdditionalDataWhereInput];

  @TypeGraphQLField(() => AdditionalDataWhereInput, { nullable: true })
  OR?: [AdditionalDataWhereInput];
}

@TypeGraphQLInputType()
export class AdditionalDataWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class AdditionalDataCreateInput {
  @TypeGraphQLField({ nullable: true })
  data?: string;
}

@TypeGraphQLInputType()
export class AdditionalDataUpdateInput {
  @TypeGraphQLField({ nullable: true })
  data?: string;
}

@ArgsType()
export class AdditionalDataWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => AdditionalDataWhereInput, { nullable: true })
  where?: AdditionalDataWhereInput;

  @TypeGraphQLField(() => AdditionalDataOrderByEnum, { nullable: true })
  orderBy?: AdditionalDataOrderByEnum[];
}

@ArgsType()
export class AdditionalDataCreateManyArgs {
  @TypeGraphQLField(() => [AdditionalDataCreateInput])
  data!: AdditionalDataCreateInput[];
}

@ArgsType()
export class AdditionalDataUpdateArgs {
  @TypeGraphQLField() data!: AdditionalDataUpdateInput;
  @TypeGraphQLField() where!: AdditionalDataWhereUniqueInput;
}

export enum SomeDataOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  name_ASC = "name_ASC",
  name_DESC = "name_DESC",

  type_ASC = "type_ASC",
  type_DESC = "type_DESC",

  value_ASC = "value_ASC",
  value_DESC = "value_DESC"
}

registerEnumType(SomeDataOrderByEnum, {
  name: "SomeDataOrderByInput"
});

@TypeGraphQLInputType()
export class SomeDataWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  name_eq?: string;

  @TypeGraphQLField({ nullable: true })
  name_contains?: string;

  @TypeGraphQLField({ nullable: true })
  name_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  name_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  name_in?: string[];

  @TypeGraphQLField({ nullable: true })
  type_eq?: string;

  @TypeGraphQLField({ nullable: true })
  type_contains?: string;

  @TypeGraphQLField({ nullable: true })
  type_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  type_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  type_in?: string[];

  @TypeGraphQLField({ nullable: true })
  value_eq?: string;

  @TypeGraphQLField({ nullable: true })
  value_contains?: string;

  @TypeGraphQLField({ nullable: true })
  value_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  value_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  value_in?: string[];

  @TypeGraphQLField(() => SomeDataWhereInput, { nullable: true })
  AND?: [SomeDataWhereInput];

  @TypeGraphQLField(() => SomeDataWhereInput, { nullable: true })
  OR?: [SomeDataWhereInput];
}

@TypeGraphQLInputType()
export class SomeDataWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class SomeDataCreateInput {
  @TypeGraphQLField({ nullable: true })
  name?: string;

  @TypeGraphQLField({ nullable: true })
  type?: string;

  @TypeGraphQLField({ nullable: true })
  value?: string;
}

@TypeGraphQLInputType()
export class SomeDataUpdateInput {
  @TypeGraphQLField({ nullable: true })
  name?: string;

  @TypeGraphQLField({ nullable: true })
  type?: string;

  @TypeGraphQLField({ nullable: true })
  value?: string;
}

@ArgsType()
export class SomeDataWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => SomeDataWhereInput, { nullable: true })
  where?: SomeDataWhereInput;

  @TypeGraphQLField(() => SomeDataOrderByEnum, { nullable: true })
  orderBy?: SomeDataOrderByEnum[];
}

@ArgsType()
export class SomeDataCreateManyArgs {
  @TypeGraphQLField(() => [SomeDataCreateInput])
  data!: SomeDataCreateInput[];
}

@ArgsType()
export class SomeDataUpdateArgs {
  @TypeGraphQLField() data!: SomeDataUpdateInput;
  @TypeGraphQLField() where!: SomeDataWhereUniqueInput;
}

export enum HistoricalBalanceOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  account_ASC = "account_ASC",
  account_DESC = "account_DESC",

  balance_ASC = "balance_ASC",
  balance_DESC = "balance_DESC",

  timestamp_ASC = "timestamp_ASC",
  timestamp_DESC = "timestamp_DESC"
}

registerEnumType(HistoricalBalanceOrderByEnum, {
  name: "HistoricalBalanceOrderByInput"
});

@TypeGraphQLInputType()
export class HistoricalBalanceWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  testField_json?: JsonObject;

  @TypeGraphQLField(() => ID, { nullable: true })
  account_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  account_in?: string[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  balance_in?: string[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  timestamp_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  timestamp_in?: string[];

  @TypeGraphQLField(() => AccountWhereInput, { nullable: true })
  account?: AccountWhereInput;

  @TypeGraphQLField(() => HistoricalBalanceWhereInput, { nullable: true })
  AND?: [HistoricalBalanceWhereInput];

  @TypeGraphQLField(() => HistoricalBalanceWhereInput, { nullable: true })
  OR?: [HistoricalBalanceWhereInput];
}

@TypeGraphQLInputType()
export class HistoricalBalanceWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class HistoricalBalanceCreateInput {
  @TypeGraphQLField(() => SomeData)
  testField!: SomeData;

  @TypeGraphQLField(() => ID)
  account!: string;

  @TypeGraphQLField()
  balance!: string;

  @TypeGraphQLField()
  timestamp!: string;
}

@TypeGraphQLInputType()
export class HistoricalBalanceUpdateInput {
  @TypeGraphQLField(() => SomeData, { nullable: true })
  testField?: SomeData;

  @TypeGraphQLField(() => ID, { nullable: true })
  account?: string;

  @TypeGraphQLField({ nullable: true })
  balance?: string;

  @TypeGraphQLField({ nullable: true })
  timestamp?: string;
}

@ArgsType()
export class HistoricalBalanceWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => HistoricalBalanceWhereInput, { nullable: true })
  where?: HistoricalBalanceWhereInput;

  @TypeGraphQLField(() => HistoricalBalanceOrderByEnum, { nullable: true })
  orderBy?: HistoricalBalanceOrderByEnum[];
}

@ArgsType()
export class HistoricalBalanceCreateManyArgs {
  @TypeGraphQLField(() => [HistoricalBalanceCreateInput])
  data!: HistoricalBalanceCreateInput[];
}

@ArgsType()
export class HistoricalBalanceUpdateArgs {
  @TypeGraphQLField() data!: HistoricalBalanceUpdateInput;
  @TypeGraphQLField() where!: HistoricalBalanceWhereUniqueInput;
}

export enum AccountOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  wallet_ASC = "wallet_ASC",
  wallet_DESC = "wallet_DESC",

  balance_ASC = "balance_ASC",
  balance_DESC = "balance_DESC"
}

registerEnumType(AccountOrderByEnum, {
  name: "AccountOrderByInput"
});

@TypeGraphQLInputType()
export class AccountWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  wallet_eq?: string;

  @TypeGraphQLField({ nullable: true })
  wallet_contains?: string;

  @TypeGraphQLField({ nullable: true })
  wallet_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  wallet_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  wallet_in?: string[];

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_eq?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_gt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_gte?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_lt?: string;

  @TypeGraphQLField(() => BigInt, { nullable: true })
  balance_lte?: string;

  @TypeGraphQLField(() => [BigInt], { nullable: true })
  balance_in?: string[];

  @TypeGraphQLField(() => HistoricalBalanceWhereInput, { nullable: true })
  historicalBalances_none?: HistoricalBalanceWhereInput;

  @TypeGraphQLField(() => HistoricalBalanceWhereInput, { nullable: true })
  historicalBalances_some?: HistoricalBalanceWhereInput;

  @TypeGraphQLField(() => HistoricalBalanceWhereInput, { nullable: true })
  historicalBalances_every?: HistoricalBalanceWhereInput;

  @TypeGraphQLField(() => AccountWhereInput, { nullable: true })
  AND?: [AccountWhereInput];

  @TypeGraphQLField(() => AccountWhereInput, { nullable: true })
  OR?: [AccountWhereInput];
}

@TypeGraphQLInputType()
export class AccountWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class AccountCreateInput {
  @TypeGraphQLField()
  wallet!: string;

  @TypeGraphQLField()
  balance!: string;
}

@TypeGraphQLInputType()
export class AccountUpdateInput {
  @TypeGraphQLField({ nullable: true })
  wallet?: string;

  @TypeGraphQLField({ nullable: true })
  balance?: string;
}

@ArgsType()
export class AccountWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => AccountWhereInput, { nullable: true })
  where?: AccountWhereInput;

  @TypeGraphQLField(() => AccountOrderByEnum, { nullable: true })
  orderBy?: AccountOrderByEnum[];
}

@ArgsType()
export class AccountCreateManyArgs {
  @TypeGraphQLField(() => [AccountCreateInput])
  data!: AccountCreateInput[];
}

@ArgsType()
export class AccountUpdateArgs {
  @TypeGraphQLField() data!: AccountUpdateInput;
  @TypeGraphQLField() where!: AccountWhereUniqueInput;
}
