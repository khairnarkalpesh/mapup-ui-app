import React, { useState } from "react";
import { Button, Dropdown, Menu } from "antd";
import { UpOutlined } from "@ant-design/icons";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getRegionData,
  getRegionInfoData,
} from "../../redux/actions/regionActions";

const menuItems = [
  { key: "us", label: "United States" },
  { key: "in", label: "India" },
  { key: "uk", label: "United Kingdom" },
];

const DropdownBox = (props) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(null);
  const { selectPosition, setSelectPosition, regions } = props;

  const handleMenuClick = (e) => {
    // Handle menu item selection here
    const selectedKey = e.key;
    const selectedItem = regions.find((item) => item.place_id == selectedKey);
    setSelectedValue(selectedItem);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {regions.map((item, key) => (
        <Menu.Item key={item.place_id}>{item.display_name}</Menu.Item>
      ))}
    </Menu>
  );

  const handleLoadButtonClick = () => {
    // Handle load button click here
    setSelectPosition(selectedValue);
    console.log("Load button clicked", selectedValue);
    dispatch(getRegionInfoData(selectedValue.address.country_code));

  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        "--dropdown-background": "var(--light-background, #fff)",
        "--dropdown-text-color": "var(--light-text-color, #000)",
      }}
      className="dropdown"
    >
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button
          style={{
            marginRight: 16,
            background: "var(--dropdown-background)",
            color: "var(--dropdown-text-color)",
          }}
          className="selected-item"
        >
          {selectedValue && selectedValue.display_name || "Select Region"}
          {/* <UpOutlined /> */}
        </Button>
      </Dropdown>
      <Button
        type="primary"
        onClick={handleLoadButtonClick}
        style={{
          background: "var(--primary-button-background, #1890ff)",
          color: "var(--primary-button-text-color, #fff)",
          border: "none",
        }}
      >
        Load
      </Button>
    </div>
  );
};

export default DropdownBox;
