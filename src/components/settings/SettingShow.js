import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ShowController,
  ShowView,
  BooleanField,
} from "react-admin";

const SettingShow = (props) => {
  return (
    <Show title="Settings" {...props}>
      <ShowController {...props}>
        {(controllerProps) => (
          <ShowView title="Settings" {...controllerProps}>
            <SimpleShowLayout>
              {controllerProps.record &&
                Object.keys(controllerProps.record).map((key) =>
                  /true|false/.test(controllerProps.record[key]) ? (
                    <BooleanField key={key} source={key} />
                  ) : (
                    <TextField key={key} source={key} />
                  )
                )}
            </SimpleShowLayout>
          </ShowView>
        )}
      </ShowController>
    </Show>
  );
};

export default SettingShow;
