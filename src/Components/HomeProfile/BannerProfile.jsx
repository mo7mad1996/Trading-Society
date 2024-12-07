import React from "react";
import { Box } from "@mui/material";
import profileBanner from "@/assets/images/home/banner.jpg";

function BannerProfile() {
  return (
    <a
      href="https://banner-api.hfm.com/link/4a9ff55e?regulator=HFSV&refid=30432124"
      target="_top"
      style={{ display: "block" }}
    >
      <img style={{ display: "block", width: "100%" }} src={profileBanner} />
    </a>
  );
}

export default BannerProfile;
