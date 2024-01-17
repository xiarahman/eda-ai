import React, { useEffect, useState } from "react";
import { Avatar, Button, Flex, List, Skeleton } from "antd";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const SentenceCard = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(data);
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);

        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
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

        //   actions={[
        //     <a key="list-loadmore-edit">edit</a>,
        //     <a key="list-loadmore-more">more</a>,
        //   ]}
        >
          <Flex vertical gap="small" style={{ minWidth: "100%" }}>
            <p style={{ wordWrap: "break-word" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              rhoncus lorem at venenatis cursus. Pellentesque ex velit,
              elementum id dapibus eu, auctor in lorem. Praesent urna purus,
              pulvinar eget nulla et, vulputate varius urna.
            </p>
            <Flex gap="middle">
              <h3 className="card-heading">Happy</h3>
              <h3 className="card-heading">positive</h3>
            </Flex>
          </Flex>
        </List.Item>
      )}
    />
  );
};
export default SentenceCard;
