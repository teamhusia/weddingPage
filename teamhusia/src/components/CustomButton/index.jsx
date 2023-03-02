import { Button } from "@mui/material";

const CustomButton = ({ children, ...buttonProps }) => {
  return (
    <Button
      {...buttonProps}
      variant="contained"
      // variant="outlined
      size="large"
      className="custom-btn"
      color="primary"
      sx={{
        borderRadius: "1em",
        margin: "0 1em"
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
