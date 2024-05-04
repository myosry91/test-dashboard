import React from "react";

interface InteractiveChartProps extends React.SVGProps<SVGSVGElement> {}
const MaiPieChart: React.FC<InteractiveChartProps> = (props) => {
  return (
    <svg
      version="1.1"
      style={{ fontFamily: "Roboto", fontSize: "12px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 650 400"
      aria-hidden="false"
      aria-label="Interactive chart"
    >
      <defs aria-hidden="true">
        <clipPath>
          <rect x="0" y="0" width="630" height="301" fill="none"></rect>
        </clipPath>
      </defs>
      {/* <rect
        fill="#ffffff"
        x="0"
        y="0"
        width="650"
        height="400"
        rx="0"
        ry="0"
        aria-hidden="true"
      ></rect> */}
      <rect
        fill="none"
        x="10"
        y="46"
        width="630"
        height="301"
        aria-hidden="true"
      ></rect>
      <g data-z-index="0" aria-hidden="true"></g>
      <rect
        fill="none"
        data-z-index="1"
        x="10"
        y="46"
        width="630"
        height="301"
        aria-hidden="true"
      ></rect>
      <g data-z-index="3" aria-hidden="false">
        <g
          data-z-index="0.1"
          opacity="1"
          transform="translate(10,46) scale(1 1)"
          style={{ cursor: "pointer" }}
          aria-hidden="false"
          clip-path="none"
        >
          <path
            fill="#c2bdc6"
            d="M 314.97669978549726 36.100002372814686 A 114.4 114.4 0 1 1 265.4250647670048 253.60036758733855 L 265.8584121029576 252.69914059793877 A 113.4 113.4 0 1 0 314.976903458701 37.100002352073304 Z"
            data-z-index="-1"
            fill-opacity="0.25"
            visibility="hidden"
          ></path>
          <path
            fill="rgb(194,189,198)"
            d="M 314.97669978549726 36.100002372814686 A 114.4 114.4 0 1 1 265.4250647670048 253.60036758733855 L 315 150.5 A 0 0 0 1 0 315 150.5 Z"
            transform="translate(0,0)"
            stroke="#ffffff"
            stroke-width="1"
            opacity="1"
            stroke-linejoin="round"
            tabIndex="-1"
            role="img"
            aria-label="Item 1, 80."
            style={{ outline: "none" }}
          ></path>
          <path
            fill="#493954"
            d="M 265.3219892040664 253.55074111018857 A 114.4 114.4 0 0 1 314.8411006950846 36.10011035402657 L 315 150.5 A 0 0 0 0 0 315 150.5 Z"
            transform="translate(0,0)"
            stroke="#ffffff"
            stroke-width="1"
            opacity="1"
            stroke-linejoin="round"
            tabIndex="-1"
            role="img"
            aria-label="Item 2, 60."
            style={{ outline: "none" }}
          ></path>
        </g>
        <g
          data-z-index="0.1"
          opacity="1"
          transform="translate(10,46) scale(1 1)"
          aria-hidden="true"
          clip-path="none"
        ></g>
      </g>
      <g data-z-index="3" aria-hidden="true">
        <g
          strokeLinecap="round"
          style={{ cursor: "pointer" }}
          transform="translate(616,10)"
        >
          <title>Chart context menu</title>
          <rect
            fill="#ffffff"
            x="0.5"
            y="0.5"
            width="24"
            height="22"
            rx="2"
            ry="2"
            stroke="none"
            strokeWidth="1"
          ></rect>
          <path
            fill="#666666"
            d="M 6 6.5 L 20 6.5 M 6 11.5 L 20 11.5 M 6 16.5 L 20 16.5"
            data-z-index="1"
            stroke="#666666"
            strokeWidth="3"
          ></path>
          <text
            fontFamily="Roboto-Regular,Roboto"
            x="0"
            data-z-index="1"
            y="15.5"
            style={{
              color: "rgb(51, 51, 51)",
              fontWeight: "normal",
              fill: "rgb(51, 51, 51)",
            }}
          ></text>
        </g>
      </g>
      <text
        fontFamily="Roboto-Regular,Roboto"
        x="325"
        textAnchor="middle"
        data-z-index="4"
        style={{
          color: "rgb(51, 51, 51)",
          fontSize: "18px",
          fill: "rgb(51, 51, 51)",
        }}
        y="24"
        aria-hidden="true"
      >
        Chart title
      </text>
      <text
        fontFamily="Roboto-Regular,Roboto"
        x="325"
        textAnchor="middle"
        data-z-index="4"
        style={{ color: "rgb(102, 102, 102)", fill: "rgb(102, 102, 102)" }}
        y="45"
        aria-hidden="true"
      ></text>
      <text
        fontFamily="Roboto-Regular,Roboto"
        x="10"
        textAnchor="start"
        data-z-index="4"
        style={{ color: "rgb(102, 102, 102)", fill: "rgb(102, 102, 102)" }}
        y="397"
        aria-hidden="true"
      ></text>
      <g data-z-index="7" aria-hidden="true" transform="translate(252,359)">
        <rect
          fill="none"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="145"
          height="26"
        ></rect>
        <g data-z-index="1">
          <g>
            <g data-z-index="1" transform="translate(8,3)">
              <text
                fontFamily="Roboto-Regular,Roboto"
                x="21"
                textAnchor="start"
                data-z-index="2"
                y="15"
                style={{
                  color: "rgb(51, 51, 51)",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "bold",
                  fill: "rgb(51, 51, 51)",
                }}
              >
                Item 1
              </text>
              <rect
                x="2"
                y="4"
                width="12"
                height="12"
                fill="#c2bdc6"
                rx="6"
                ry="6"
                data-z-index="3"
              ></rect>
            </g>
            <g data-z-index="1" transform="translate(82.78125,3)">
              <text
                fontFamily="Roboto-Regular,Roboto"
                x="21"
                y="15"
                textAnchor="start"
                data-z-index="2"
                style={{
                  color: "rgb(51, 51, 51)",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "bold",
                  fill: "rgb(51, 51, 51)",
                }}
              >
                Item 2
              </text>
              <rect
                x="2"
                y="4"
                width="12"
                height="12"
                fill="#493954"
                rx="6"
                ry="6"
                data-z-index="3"
              ></rect>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default MaiPieChart;
