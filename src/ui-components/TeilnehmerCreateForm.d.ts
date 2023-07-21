/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Convention } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeilnehmerCreateFormInputValues = {
    Vorname?: string;
    Nachname?: string;
    Geburtsdatum?: string;
    conventions?: Convention[];
};
export declare type TeilnehmerCreateFormValidationValues = {
    Vorname?: ValidationFunction<string>;
    Nachname?: ValidationFunction<string>;
    Geburtsdatum?: ValidationFunction<string>;
    conventions?: ValidationFunction<Convention>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeilnehmerCreateFormOverridesProps = {
    TeilnehmerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Vorname?: PrimitiveOverrideProps<TextFieldProps>;
    Nachname?: PrimitiveOverrideProps<TextFieldProps>;
    Geburtsdatum?: PrimitiveOverrideProps<TextFieldProps>;
    conventions?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TeilnehmerCreateFormProps = React.PropsWithChildren<{
    overrides?: TeilnehmerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeilnehmerCreateFormInputValues) => TeilnehmerCreateFormInputValues;
    onSuccess?: (fields: TeilnehmerCreateFormInputValues) => void;
    onError?: (fields: TeilnehmerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeilnehmerCreateFormInputValues) => TeilnehmerCreateFormInputValues;
    onValidate?: TeilnehmerCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeilnehmerCreateForm(props: TeilnehmerCreateFormProps): React.ReactElement;
