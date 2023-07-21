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
import { Teilnehmer, Convention, ConventionTeilnehmer } from "../models";
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
export default function TeilnehmerCreateForm(props) {
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
    Vorname: "",
    Nachname: "",
    Geburtsdatum: "",
    conventions: [],
  };
  const [Vorname, setVorname] = React.useState(initialValues.Vorname);
  const [Nachname, setNachname] = React.useState(initialValues.Nachname);
  const [Geburtsdatum, setGeburtsdatum] = React.useState(
    initialValues.Geburtsdatum
  );
  const [conventions, setConventions] = React.useState(
    initialValues.conventions
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setVorname(initialValues.Vorname);
    setNachname(initialValues.Nachname);
    setGeburtsdatum(initialValues.Geburtsdatum);
    setConventions(initialValues.conventions);
    setCurrentConventionsValue(undefined);
    setCurrentConventionsDisplayValue("");
    setErrors({});
  };
  const [currentConventionsDisplayValue, setCurrentConventionsDisplayValue] =
    React.useState("");
  const [currentConventionsValue, setCurrentConventionsValue] =
    React.useState(undefined);
  const conventionsRef = React.createRef();
  const getIDValue = {
    conventions: (r) => JSON.stringify({ id: r?.id }),
  };
  const conventionsIdSet = new Set(
    Array.isArray(conventions)
      ? conventions.map((r) => getIDValue.conventions?.(r))
      : getIDValue.conventions?.(conventions)
  );
  const conventionRecords = useDataStoreBinding({
    type: "collection",
    model: Convention,
  }).items;
  const getDisplayValue = {
    conventions: (r) => `${r?.Name ? r?.Name + " - " : ""}${r?.id}`,
  };
  const validations = {
    Vorname: [],
    Nachname: [],
    Geburtsdatum: [],
    conventions: [],
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
          Vorname,
          Nachname,
          Geburtsdatum,
          conventions,
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
            Vorname: modelFields.Vorname,
            Nachname: modelFields.Nachname,
            Geburtsdatum: modelFields.Geburtsdatum,
          };
          const teilnehmer = await DataStore.save(
            new Teilnehmer(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...conventions.reduce((promises, convention) => {
              promises.push(
                DataStore.save(
                  new ConventionTeilnehmer({
                    teilnehmer,
                    convention,
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
      {...getOverrideProps(overrides, "TeilnehmerCreateForm")}
      {...rest}
    >
      <TextField
        label="Vorname"
        isRequired={false}
        isReadOnly={false}
        value={Vorname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vorname: value,
              Nachname,
              Geburtsdatum,
              conventions,
            };
            const result = onChange(modelFields);
            value = result?.Vorname ?? value;
          }
          if (errors.Vorname?.hasError) {
            runValidationTasks("Vorname", value);
          }
          setVorname(value);
        }}
        onBlur={() => runValidationTasks("Vorname", Vorname)}
        errorMessage={errors.Vorname?.errorMessage}
        hasError={errors.Vorname?.hasError}
        {...getOverrideProps(overrides, "Vorname")}
      ></TextField>
      <TextField
        label="Nachname"
        isRequired={false}
        isReadOnly={false}
        value={Nachname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vorname,
              Nachname: value,
              Geburtsdatum,
              conventions,
            };
            const result = onChange(modelFields);
            value = result?.Nachname ?? value;
          }
          if (errors.Nachname?.hasError) {
            runValidationTasks("Nachname", value);
          }
          setNachname(value);
        }}
        onBlur={() => runValidationTasks("Nachname", Nachname)}
        errorMessage={errors.Nachname?.errorMessage}
        hasError={errors.Nachname?.hasError}
        {...getOverrideProps(overrides, "Nachname")}
      ></TextField>
      <TextField
        label="Geburtsdatum"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Geburtsdatum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vorname,
              Nachname,
              Geburtsdatum: value,
              conventions,
            };
            const result = onChange(modelFields);
            value = result?.Geburtsdatum ?? value;
          }
          if (errors.Geburtsdatum?.hasError) {
            runValidationTasks("Geburtsdatum", value);
          }
          setGeburtsdatum(value);
        }}
        onBlur={() => runValidationTasks("Geburtsdatum", Geburtsdatum)}
        errorMessage={errors.Geburtsdatum?.errorMessage}
        hasError={errors.Geburtsdatum?.hasError}
        {...getOverrideProps(overrides, "Geburtsdatum")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Vorname,
              Nachname,
              Geburtsdatum,
              conventions: values,
            };
            const result = onChange(modelFields);
            values = result?.conventions ?? values;
          }
          setConventions(values);
          setCurrentConventionsValue(undefined);
          setCurrentConventionsDisplayValue("");
        }}
        currentFieldValue={currentConventionsValue}
        label={"Conventions"}
        items={conventions}
        hasError={errors?.conventions?.hasError}
        errorMessage={errors?.conventions?.errorMessage}
        getBadgeText={getDisplayValue.conventions}
        setFieldValue={(model) => {
          setCurrentConventionsDisplayValue(
            model ? getDisplayValue.conventions(model) : ""
          );
          setCurrentConventionsValue(model);
        }}
        inputFieldRef={conventionsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Conventions"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Convention"
          value={currentConventionsDisplayValue}
          options={conventionRecords
            .filter((r) => !conventionsIdSet.has(getIDValue.conventions?.(r)))
            .map((r) => ({
              id: getIDValue.conventions?.(r),
              label: getDisplayValue.conventions?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentConventionsValue(
              conventionRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentConventionsDisplayValue(label);
            runValidationTasks("conventions", label);
          }}
          onClear={() => {
            setCurrentConventionsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.conventions?.hasError) {
              runValidationTasks("conventions", value);
            }
            setCurrentConventionsDisplayValue(value);
            setCurrentConventionsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("conventions", currentConventionsDisplayValue)
          }
          errorMessage={errors.conventions?.errorMessage}
          hasError={errors.conventions?.hasError}
          ref={conventionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "conventions")}
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
