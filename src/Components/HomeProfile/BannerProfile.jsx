import React from "react";
import { Box } from "@mui/material";
import profileBanner from "../../home_profile_assets/IMG_2537.gif";

function BannerProfile() {
  return (
    <a
      href="https://banner-api.hfm.com/link/4a9ff55e?regulator=HFSV&refid=30432124"
      target="_top"
      style={{ display: "block" }}
    >
      <img
        style={{ display: "block", width: "100%" }}
        src="https://banner-api.hfm.com/banner/4a9ff55e?regulator=HFSV&refid=30432124"
      />
    </a>
  );
}

export default BannerProfile;
