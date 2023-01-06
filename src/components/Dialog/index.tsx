import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  open,
  handleClose,
  content,
  onMoreDetails,
}: any) {
  const router = useRouter();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby={content.code}
    >
      <DialogTitle>
        <strong>{content.code}</strong>
      </DialogTitle>
      <DialogContent>
        <DialogContentText textAlign="justify">
          {content.description}
        </DialogContentText>
      </DialogContent>
      {content.href && (
        <DialogActions>
          <span>Gostaria de saber mais?</span>
          <Button
            onClick={() =>
              router.push({
                pathname: content.href,
              })
            }
          >
            Clique Aqui!
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
