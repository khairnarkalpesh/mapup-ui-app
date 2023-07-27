import React, { useState } from "react";
import { Input, Button, List, Divider } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export default function SearchBox(props) {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Input
            style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => {
              // Search
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div>
        <List dataSource={listPlace} renderItem={(item) => (
          <div key={item?.place_id}>
            <List.Item
              onClick={() => {
                setSelectPosition(item);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="./placeholder.png"
                alt="Placeholder"
                style={{ width: 38, height: 38, marginRight: 10 }}
              />
              {item?.display_name}
            </List.Item>
            <Divider />
          </div>
        )} />
      </div>
    </div>
  );
}
