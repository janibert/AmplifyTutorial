/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Convention } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ConventionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    Location: "",
    Teilnehmerobergrenze: "",
    Mindestalter: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [Teilnehmerobergrenze, setTeilnehmerobergrenze] = React.useState(
    initialValues.Teilnehmerobergrenze
  );
  const [Mindestalter, setMindestalter] = React.useState(
    initialValues.Mindestalter
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setLocation(initialValues.Location);
    setTeilnehmerobergrenze(initialValues.Teilnehmerobergrenze);
    setMindestalter(initialValues.Mindestalter);
    setErrors({});
  };
  const validations = {
    Name: [],
    Location: [],
    Teilnehmerobergrenze: [],
    Mindestalter: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name,
          Location,
          Teilnehmerobergrenze,
          Mindestalter,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Convention(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ConventionCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Location,
              Teilnehmerobergrenze,
              Mindestalter,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Location: value,
              Teilnehmerobergrenze,
              Mindestalter,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        label="Teilnehmerobergrenze"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Teilnehmerobergrenze}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Location,
              Teilnehmerobergrenze: value,
              Mindestalter,
            };
            const result = onChange(modelFields);
            value = result?.Teilnehmerobergrenze ?? value;
          }
          if (errors.Teilnehmerobergrenze?.hasError) {
            runValidationTasks("Teilnehmerobergrenze", value);
          }
          setTeilnehmerobergrenze(value);
        }}
        onBlur={() =>
          runValidationTasks("Teilnehmerobergrenze", Teilnehmerobergrenze)
        }
        errorMessage={errors.Teilnehmerobergrenze?.errorMessage}
        hasError={errors.Teilnehmerobergrenze?.hasError}
        {...getOverrideProps(overrides, "Teilnehmerobergrenze")}
      ></TextField>
      <TextField
        label="Mindestalter"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Mindestalter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Location,
              Teilnehmerobergrenze,
              Mindestalter: value,
            };
            const result = onChange(modelFields);
            value = result?.Mindestalter ?? value;
          }
          if (errors.Mindestalter?.hasError) {
            runValidationTasks("Mindestalter", value);
          }
          setMindestalter(value);
        }}
        onBlur={() => runValidationTasks("Mindestalter", Mindestalter)}
        errorMessage={errors.Mindestalter?.errorMessage}
        hasError={errors.Mindestalter?.hasError}
        {...getOverrideProps(overrides, "Mindestalter")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
