import {
  BaseModel,
  BooleanField,
  DateField,
  FloatField,
  IntField,
  NumericField,
  JSONField,
  BytesField,
  EnumField,
  StringField,
  ObjectType
} from 'warthog';
import BN from 'bn.js';
import { InputType, Field } from 'type-graphql';

@InputType('AdditionalDataInput')
@ObjectType()
export class AdditionalData {
  @BytesField({
    nullable: true
  })
  data?: Buffer;
}

@InputType('SomeDataInput')
@ObjectType()
export class SomeData {
  @StringField({
    nullable: true
  })
  name?: string;

  @StringField({
    nullable: true
  })
  type?: string;

  @StringField({
    nullable: true
  })
  value?: string;

  @Field(() => [AdditionalData])
  additionalData!: AdditionalData[];
}
