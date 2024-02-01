import React, { useEffect, useState } from "react";
import { Avatar, Button, Flex, List, Skeleton } from "antd";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const SentenceCard = () => {
  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      size="large"
      renderItem={(item) => (
        <List.Item
        >
          
        </List.Item>
      )}
    />
  );
};
export default SentenceCard;
