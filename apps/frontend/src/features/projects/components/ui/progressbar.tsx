import { LinearProgress } from "@mui/material";

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <>
      <LinearProgress variant="buffer" value={value} valueBuffer={value + 10} />
      <p className="text-sm italic underline underline-offset-2">
        {value}% réaliser
      </p>
    </>
  );
};

export { ProgressBar };
