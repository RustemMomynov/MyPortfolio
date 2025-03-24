import { FC, useEffect, useRef, useState } from "react";
import { Line } from "rc-progress";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percent: targetPercent }) => {
  const [percent, setPercent] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start: number | null = null;

          const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / 1000, 1);
            setPercent(Math.round(targetPercent * progress));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setHasAnimated(true);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetPercent, hasAnimated]);

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
  align-items: center;
`;
