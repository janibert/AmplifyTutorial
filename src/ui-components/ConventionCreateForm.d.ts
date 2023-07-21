/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConventionCreateFormInputValues = {
    Name?: string;
    Location?: string;
    Teilnehmerobergrenze?: number;
    Mindestalter?: string;
};
export declare type ConventionCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Teilnehmerobergrenze?: ValidationFunction<number>;
    Mindestalter?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConventionCreateFormOverridesProps = {
    ConventionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Teilnehmerobergrenze?: PrimitiveOverrideProps<TextFieldProps>;
    Mindestalter?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConventionCreateFormProps = React.PropsWithChildren<{
    overrides?: ConventionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConventionCreateFormInputValues) => ConventionCreateFormInputValues;
    onSuccess?: (fields: ConventionCreateFormInputValues) => void;
    onError?: (fields: ConventionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConventionCreateFormInputValues) => ConventionCreateFormInputValues;
    onValidate?: ConventionCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConventionCreateForm(props: ConventionCreateFormProps): React.ReactElement;
