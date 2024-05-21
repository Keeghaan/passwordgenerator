import { StrengthLevelModel } from "../../src/utils/types";

type StrengthLevelBarProps = {
  level: StrengthLevelModel;
};

export const StrengthLevelBar = ({ level }: StrengthLevelBarProps) => {
  const whichlevel = () => {
    switch (level) {
      case 0:
        return (
          <>
            <span className="rectangle"></span>
            <span className="rectangle"></span>
            <span className="rectangle"></span>
            <span className="rectangle"></span>
          </>
        );
      case 1:
        return (
          <>
            <span className="rectangle tooweak-rect"></span>
            <span className="rectangle"></span>
            <span className="rectangle"></span>
            <span className="rectangle"></span>
          </>
        );
      case 2:
        return (
          <>
            <span className="rectangle weak-rect"></span>
            <span className="rectangle weak-rect"></span>
            <span className="rectangle"></span>
            <span className="rectangle"></span>
          </>
        );
      case 3:
        return (
          <>
            <span className="rectangle medium-rect"></span>
            <span className="rectangle medium-rect"></span>
            <span className="rectangle medium-rect"></span>
            <span className="rectangle"></span>
          </>
        );
      case 4:
        return (
          <>
            <span className="rectangle strong-rect"></span>
            <span className="rectangle strong-rect"></span>
            <span className="rectangle strong-rect"></span>
            <span className="rectangle strong-rect"></span>
          </>
        );
    }
  };

  const rectangles = whichlevel();
  return <>{rectangles}</>;
};
