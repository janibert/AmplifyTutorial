/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Convention, Teilnehmer } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConventionUpdateFormInputValues = {
    Name?: string;
    Location?: string;
    Teilnehmerobergrenze?: number;
    Mindestalter?: string;
    Teilnehmers?: Teilnehmer[];
};
export declare type ConventionUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Teilnehmerobergrenze?: ValidationFunction<number>;
    Mindestalter?: ValidationFunction<string>;
    Teilnehmers?: ValidationFunction<Teilnehmer>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConventionUpdateFormOverridesProps = {
    ConventionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Teilnehmerobergrenze?: PrimitiveOverrideProps<TextFieldProps>;
    Mindestalter?: PrimitiveOverrideProps<TextFieldProps>;
    Teilnehmers?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ConventionUpdateFormProps = React.PropsWithChildren<{
    overrides?: ConventionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    convention?: Convention;
    onSubmit?: (fields: ConventionUpdateFormInputValues) => ConventionUpdateFormInputValues;
    onSuccess?: (fields: ConventionUpdateFormInputValues) => void;
    onError?: (fields: ConventionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConventionUpdateFormInputValues) => ConventionUpdateFormInputValues;
    onValidate?: ConventionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ConventionUpdateForm(props: ConventionUpdateFormProps): React.ReactElement;
