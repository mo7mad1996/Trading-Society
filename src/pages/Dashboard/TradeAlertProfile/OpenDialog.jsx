import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@mui/material";
import TradeAlertWithId from "@/Pages/Dashboard/TradeAlertWithId/index.jsx";

function OpenDialog() {
  const navigate = useNavigate();

  return (
    <Dialog onClose={() => navigate("/tradealerts")} open={true}>
      <DialogContent>
        <TradeAlertWithId />
      </DialogContent>
    </Dialog>
  );
}

export default OpenDialog;
