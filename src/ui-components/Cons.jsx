/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Convention, Teilnehmer, ConventionTeilnehmer } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function Cons(props) {
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
    Teilnehmers: [],
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [Teilnehmerobergrenze, setTeilnehmerobergrenze] = React.useState(
    initialValues.Teilnehmerobergrenze
  );
  const [Mindestalter, setMindestalter] = React.useState(
    initialValues.Mindestalter
  );
  const [Teilnehmers, setTeilnehmers] = React.useState(
    initialValues.Teilnehmers
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setLocation(initialValues.Location);
    setTeilnehmerobergrenze(initialValues.Teilnehmerobergrenze);
    setMindestalter(initialValues.Mindestalter);
    setTeilnehmers(initialValues.Teilnehmers);
    setCurrentTeilnehmersValue(undefined);
    setCurrentTeilnehmersDisplayValue("");
    setErrors({});
  };
  const [currentTeilnehmersDisplayValue, setCurrentTeilnehmersDisplayValue] =
    React.useState("");
  const [currentTeilnehmersValue, setCurrentTeilnehmersValue] =
    React.useState(undefined);
  const TeilnehmersRef = React.createRef();
  const getIDValue = {
    Teilnehmers: (r) => JSON.stringify({ id: r?.id }),
  };
  const TeilnehmersIdSet = new Set(
    Array.isArray(Teilnehmers)
      ? Teilnehmers.map((r) => getIDValue.Teilnehmers?.(r))
      : getIDValue.Teilnehmers?.(Teilnehmers)
  );
  const teilnehmerRecords = useDataStoreBinding({
    type: "collection",
    model: Teilnehmer,
  }).items;
  const getDisplayValue = {
    Teilnehmers: (r) => `${r?.Vorname ? r?.Vorname + " - " : ""}${r?.id}`,
  };
  const validations = {
    Name: [],
    Location: [],
    Teilnehmerobergrenze: [],
    Mindestalter: [],
    Teilnehmers: [],
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
          Teilnehmers,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            Name: modelFields.Name,
            Location: modelFields.Location,
            Teilnehmerobergrenze: modelFields.Teilnehmerobergrenze,
            Mindestalter: modelFields.Mindestalter,
          };
          const convention = await DataStore.save(
            new Convention(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...Teilnehmers.reduce((promises, teilnehmer) => {
              promises.push(
                DataStore.save(
                  new ConventionTeilnehmer({
                    convention,
                    teilnehmer,
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "Cons")}
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
              Teilnehmers,
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
              Teilnehmers,
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
              Teilnehmers,
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
              Teilnehmers,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Name,
              Location,
              Teilnehmerobergrenze,
              Mindestalter,
              Teilnehmers: values,
            };
            const result = onChange(modelFields);
            values = result?.Teilnehmers ?? values;
          }
          setTeilnehmers(values);
          setCurrentTeilnehmersValue(undefined);
          setCurrentTeilnehmersDisplayValue("");
        }}
        currentFieldValue={currentTeilnehmersValue}
        label={"Teilnehmers"}
        items={Teilnehmers}
        hasError={errors?.Teilnehmers?.hasError}
        errorMessage={errors?.Teilnehmers?.errorMessage}
        getBadgeText={getDisplayValue.Teilnehmers}
        setFieldValue={(model) => {
          setCurrentTeilnehmersDisplayValue(
            model ? getDisplayValue.Teilnehmers(model) : ""
          );
          setCurrentTeilnehmersValue(model);
        }}
        inputFieldRef={TeilnehmersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Teilnehmers"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Teilnehmer"
          value={currentTeilnehmersDisplayValue}
          options={teilnehmerRecords
            .filter((r) => !TeilnehmersIdSet.has(getIDValue.Teilnehmers?.(r)))
            .map((r) => ({
              id: getIDValue.Teilnehmers?.(r),
              label: getDisplayValue.Teilnehmers?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTeilnehmersValue(
              teilnehmerRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTeilnehmersDisplayValue(label);
            runValidationTasks("Teilnehmers", label);
          }}
          onClear={() => {
            setCurrentTeilnehmersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Teilnehmers?.hasError) {
              runValidationTasks("Teilnehmers", value);
            }
            setCurrentTeilnehmersDisplayValue(value);
            setCurrentTeilnehmersValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Teilnehmers", currentTeilnehmersDisplayValue)
          }
          errorMessage={errors.Teilnehmers?.errorMessage}
          hasError={errors.Teilnehmers?.hasError}
          ref={TeilnehmersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Teilnehmers")}
        ></Autocomplete>
      </ArrayField>
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
