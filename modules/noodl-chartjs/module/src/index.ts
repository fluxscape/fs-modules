import * as Noodl from "@noodl/noodl-sdk";
import { Chart, registerables } from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';

// Install date adapter https://github.com/bolstycjw/chartjs-adapter-dayjs-4
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';

import { barNode } from "./reactNodes/bar";
import { bubbleNode } from "./reactNodes/bubble";
import { doughnutNode } from "./reactNodes/doughnut";
import { lineNode } from "./reactNodes/line";
import { pieNode } from "./reactNodes/pie";
import { polarAreaNode } from "./reactNodes/polarArea";
import { radarNode } from "./reactNodes/radar";
import { scatterNode } from "./reactNodes/scatter";
import { chartNode } from "./reactNodes/chart";

Chart.register(
  ...registerables,
  annotationPlugin
);

// module
Noodl.defineModule({
  // @ts-expect-error
  name: "Chart JS",
  reactNodes: [
    barNode,
    bubbleNode,
    doughnutNode,
    lineNode,
    pieNode,
    polarAreaNode,
    radarNode,
    scatterNode,
    chartNode,
  ],
  nodes: [],
  settings: [],
  setup() {},
});
