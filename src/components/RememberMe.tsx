import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

interface RememberMeProps {
  active: (value: boolean) => void;
  value: boolean;
}

export default function RememberMe({ active, value }: RememberMeProps) {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value={value}
              onChange={(e) => active(e.target.checked)}
            />
          }
          label="Remember me"
        />
      </FormGroup>
    </>
  );
}
