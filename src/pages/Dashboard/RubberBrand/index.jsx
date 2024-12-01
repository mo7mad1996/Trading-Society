function RubberBrand() {
  return (
    <div
      className="blur"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black",
        borderRadius:'15px'
      }}
    >
      <p
        className="text-gradient"
        style={{ fontSize: "45px", textTransform: "capitalize" }}
      >
        Coming Soon
      </p>
    </div>
  );
}

export default RubberBrand;
