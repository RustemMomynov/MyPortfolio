import { FC, useEffect, useState } from "react";
import { Line } from "rc-progress";
import styled from "styled-components";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: FC<ProgressBarProps> = (props) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percent < props.percent) {
        setPercent((prevPercent) => prevPercent + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [percent]);
  return (
    <BarWrapper>
      <Line
        percent={percent}
        strokeColor="#3A3422"
        strokeWidth={1}
        trailWidth={0.5}
        trailColor="#DBDBDB"
        strokeLinecap="square"
      />
    </BarWrapper>
  );
};

export default ProgressBar;

const BarWrapper = styled.div``;
