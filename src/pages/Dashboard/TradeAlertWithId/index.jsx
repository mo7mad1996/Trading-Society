import { Box, Typography, Card, CardContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "@/api";

// Main component for displaying the trade alert by ID
function TradeAlertWithId() {
  // config
  const api = useApi();
  let params = useParams();

  // data
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch data from the API using offer ID
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getTradeAlert() {
    const id = params.id;
    try {
      setLoading(true);
      let res = await api.get(`/offers/${id}`);
      const data = res.data.offer;

      setOffer(data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTradeAlert();
  }, []);

  if (loading)
    return <DialogTitle sx={{ color: "#333" }}>Loading...</DialogTitle>;
  if (error)
    return <DialogTitle sx={{ color: "#333" }}>{error.toString()}</DialogTitle>;
  if (offer)
    return (
      <Card
        sx={{
          backgroundColor: "#262626",
          color: "#fff",
          p: 2,
          borderRadius: "15px",
        }}
      >
        <CardContent>
          {/* Instructor Name */}
          <Typography variant="h5" sx={{ color: "#C3AD57", mb: 2 }}>
            Instructor: {offer.instructor_name}
          </Typography>

          {/* Order Status */}
          <Typography variant="body1" sx={{ color: "#C3AD57", mb: 1 }}>
            Order Status: {offer.order_status}
          </Typography>

          {/* Pair Information */}
          <Typography variant="body1" sx={{ color: "#C3AD57", mb: 1 }}>
            Pair: {offer.pair}
          </Typography>

          {/* Price */}
          <Typography variant="body1" sx={{ color: "#fff", mb: 1 }}>
            Price: {offer.price}
          </Typography>

          {/* Order Type */}
          <Typography variant="body1" sx={{ color: "#fff", mb: 1 }}>
            Order Type: {offer.order_type}
          </Typography>

          {/* Stop Loss and Take Profits */}
          <Typography variant="body1" sx={{ color: "#fff", mb: 1 }}>
            SL: {offer.sl}
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff", mb: 1 }}>
            TP1: {offer.tp1}, TP2: {offer.tp2}, TP3: {offer.tp3}, TP4:{" "}
            {offer.tp4}, TP5: {offer.tp5}
          </Typography>

          {/* Chart Image */}
          <Box sx={{ mt: 2 }}>
            <img
              src={offer.chart_image}
              alt="Chart"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Box>

          {/* Offer Description */}
          <Typography variant="body2" sx={{ color: "#fff", mt: 2 }}>
            Description: {offer.offer_description}
          </Typography>

          {/* Offer Creation Date */}
          <Typography variant="body2" sx={{ color: "#fff", mt: 2 }}>
            Created At: {new Date(offer.offer_creation_date).toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default TradeAlertWithId;
