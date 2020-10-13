import * as React from "react";
import { CompoundButton, Stack } from "office-ui-fabric-react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// Example formatting
const stackTokens = { childrenGap: 40 };

export default function ButtonCompoundExample(props) {
  const { disabled, checked } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{maxWidth: "600px", margin: "10% auto"}}>
        <Stack horizontal tokens={stackTokens}>
          <CompoundButton
            secondaryText="This is the secondary text."
            disabled={disabled}
            checked={checked}
          >
            Standard
          </CompoundButton>
          <CompoundButton
            primary
            secondaryText="This is the secondary text."
            disabled={disabled}
            checked={checked}
          >
            Primary
          </CompoundButton>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
