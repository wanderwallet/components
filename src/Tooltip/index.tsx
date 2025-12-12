import { PropsWithChildren, ReactNode, useId } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Position, getPlace } from "./position";
import styled from "styled-components";
import { useTheme } from "styled-components";

export function Tooltip({
  children,
  content,
  underline = false,
  position = "top",
  style,
  ...props
}: PropsWithChildren<TooltipProps>) {
  const tooltipId = useId();
  const theme = useTheme();
  const place = getPlace(position);
  const border = `1px solid ${theme.borderDefault}`;

  return (
    <>
      <TooltipWrapper data-tooltip-id={tooltipId} underline={underline}>
        {children}
      </TooltipWrapper>
      <StyledReactTooltip
        id={tooltipId}
        place={place}
        opacity={1}
        positionStrategy="fixed"
        delayShow={0.23}
        delayHide={0.23}
        border={border}
        style={style}
        {...props}
      >
        {content}
      </StyledReactTooltip>
    </>
  );
}

export interface TooltipProps {
  content: ReactNode;
  position?: Position;
  underline?: boolean;
  style?: React.CSSProperties;
}

const TooltipWrapper = styled.div<{ underline?: boolean }>`
  position: relative;
  display: inline-flex;
  ${(props) =>
    props.underline
      ? "border-bottom: 1px dotted rgb(" + props.theme.cardBorder + ");"
      : ""}
  ${(props) => (props.underline ? "cursor: pointer;" : "")}
`;

const StyledReactTooltip = styled(ReactTooltip)`
  background-color: ${(props) =>
    props.theme.displayTheme === "light"
      ? props.theme.surfaceDefault
      : props.theme.backgroundSecondary} !important;
  color: ${(props) => props.theme.primaryText} !important;
  padding: 10px 15px !important;
  border-radius: 10px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 19px !important;
  min-width: 109px !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14) !important;
  z-index: 99999 !important;
`;
