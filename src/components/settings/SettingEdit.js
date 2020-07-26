import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  EditController,
  EditView,
  BooleanInput,
} from "react-admin";

const SettingEdit = (props) => (
  <Edit label="Settings" title=" " {...props}>
    <EditController {...props}>
      {(controllerProps) => (
        <EditView title="Settings" {...controllerProps}>
          <SimpleForm>
            {controllerProps.record &&
              Object.keys(controllerProps.record).map((key) =>
                /true|false/.test(controllerProps.record[key]) ? (
                  <BooleanInput key={key} source={key} />
                ) : (
                  <TextInput key={key} source={key} />
                )
              )}
          </SimpleForm>
        </EditView>
      )}
    </EditController>
  </Edit>
);

export default SettingEdit;
