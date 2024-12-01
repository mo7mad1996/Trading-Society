import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import useApi from "@/api";

function Categories() {
  // config
  const api = useApi();

  // data
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // let { token } = useContext(DarkModeContext);
  // Function to fetch data from API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCategories = async () => {
    try {
      const response = await api.get(
        "https://tradingsociety.net/api/api/v1/category"
      );
      setCategories(response?.data?.categories?.data); // setting the categories data

      setLoading(false);
    } catch (error) {
      setError("Failed to fetch categories");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <Box sx={{ p: 3, minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Categories List
      </Typography>
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center">
          {/* <CircularProgress /> */}
          Loading
        </Box>
      )}
      {error && <div severity="error">{error}</div>}
      {!loading && !error && (
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Card sx={{ backgroundColor: "#2C2C2C", color: "#fff" }}>
                <CardContent>
                  <Typography variant="h6">{category.category_name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Categories;
