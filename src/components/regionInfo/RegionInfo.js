import React from "react";
import { Card } from "antd";
import {
  DollarOutlined,
  CarOutlined,
  CompassOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  getRegionData,
  getRegionInfoData,
} from "../../redux/actions/regionActions";

const RegionInfoCard = () => {
  const [displayRegionInfo] = useSelector(
    (state) => state.regionsInfo.regionsInfo
  );

  const displayRegionInfo2 = {
    name: "United States",
    currency: "USD",
    speedUnit: "mph",
    distanceUnit: "miles",
    volumeUnit: "gallons",
    timezone: "America/New_York",
  };

  return (
    <>
      {displayRegionInfo && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            zIndex: 999, // Make sure the card is above other content
          }}
        >
          <Card
            style={{
              borderRadius: "8px",
              background: "var(--card-background, #f7f7f7)",
              color: "var(--card-text-color, #000)",
              width: "280px",
              textAlign: "left",
            }}
          >
            <p>
              <GlobalOutlined /> Name: {displayRegionInfo.name}
            </p>
            <p>
              <DollarOutlined /> Currency: {displayRegionInfo.currency}
            </p>
            <p>
              <CarOutlined /> Speed Unit: {displayRegionInfo.speedUnit}
            </p>
            <p>
              <CompassOutlined /> Distance Unit:{" "}
              {displayRegionInfo.distanceUnit}
            </p>
            <p>
              <CarOutlined /> Volume Unit: {displayRegionInfo.volumeUnit}
            </p>
            <p>
              <ClockCircleOutlined /> Timezone: {displayRegionInfo.timezone}
            </p>
          </Card>
        </div>
      )}
    </>
  );
};

export default RegionInfoCard;
