import { FC, useEffect, useRef, useState } from "react";
import { Line } from "rc-progress";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

interface ProgressBarProps {
  percent: number;
}


const ProgressBar: FC<ProgressBarProps> = ({ percent: targetPercent }) => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setPercent(0);
      const interval = setInterval(() => {
        setPercent((prev) => {
          if (prev < targetPercent) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isVisible, targetPercent]);

  return (
    <BarWrapper ref={ref}>
      <Line
        percent={percent}
        strokeColor={theme.colors.font1}
        strokeWidth={1}
        trailWidth={0.5}
        trailColor="#DBDBDB"
        strokeLinecap="square"
      />
    </BarWrapper>
  );
};

export default ProgressBar;

const BarWrapper = styled.div`
  height: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
