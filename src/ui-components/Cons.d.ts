/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Teilnehmer } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConsInputValues = {
    Name?: string;
    Location?: string;
    Teilnehmerobergrenze?: number;
    Mindestalter?: string;
    Teilnehmers?: Teilnehmer[];
};
export declare type ConsValidationValues = {
    Name?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Teilnehmerobergrenze?: ValidationFunction<number>;
    Mindestalter?: ValidationFunction<string>;
    Teilnehmers?: ValidationFunction<Teilnehmer>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConsOverridesProps = {
    ConsGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Teilnehmerobergrenze?: PrimitiveOverrideProps<TextFieldProps>;
    Mindestalter?: PrimitiveOverrideProps<TextFieldProps>;
    Teilnehmers?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ConsProps = React.PropsWithChildren<{
    overrides?: ConsOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConsInputValues) => ConsInputValues;
    onSuccess?: (fields: ConsInputValues) => void;
    onError?: (fields: ConsInputValues, errorMessage: string) => void;
    onChange?: (fields: ConsInputValues) => ConsInputValues;
    onValidate?: ConsValidationValues;
} & React.CSSProperties>;
export default function Cons(props: ConsProps): React.ReactElement;
