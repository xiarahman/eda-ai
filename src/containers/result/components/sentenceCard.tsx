import React, { useEffect, useState } from "react";
import { Button, Flex, List } from "antd";
import { useSelector } from "react-redux";
import { getVideos } from "../../../redux/Selectors/index.ts";

const SentenceCard = () => {
  const { data } = useSelector(getVideos);
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [dataa, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    // Replace the following fetch logic with your actual data (audio_chunks)
    const audioChunks = data?.audio_detail?.audio_chunks || [];

    setInitLoading(false);
    setData(audioChunks.slice(0, 3));
    setList(audioChunks.slice(0, 3));
  }, [data]);

  const onLoadMore = () => {
    setLoading(true);
    const remainingChunks =
      data?.audio_detail?.audio_chunks.slice(dataa.length) || [];
    setList(dataa.concat(remainingChunks));
    setLoading(false);
    window.dispatchEvent(new Event("resize"));
  };
  const loadMore =
    !initLoading &&
    !loading &&
    dataa.length < data?.audio_detail?.audio_chunks.length ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>Load more</Button>
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
        <List.Item>
          <Flex vertical gap="small" style={{ minWidth: "100%" }}>
            <p style={{ wordWrap: "break-word" }}>{item.input_text}</p>
            <Flex gap="middle">
              <h3 className="card-heading">Emotion : {item.pred_emotion}</h3>
              <h3 className="card-heading">
                Sentiment : {item.pred_sentiment}
              </h3>
            </Flex>
          </Flex>
        </List.Item>
      )}
    />
  );
};

export default SentenceCard;
