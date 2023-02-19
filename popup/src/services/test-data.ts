import { GandalfData, GandalfMark } from "../types/gandalf.types";

export const testData: GandalfData = [
  {
    name: "Expression",
    code: "0",
    children: [
      // {
      //   name: "Oral Production",
      //   code: "0.1",
      //   children: [
      //     {
      //       name: "Address a clear and organized speech",
      //       code: "0.1.B01",
      //       status: GandalfMark.success,
      //       expectations: {
      //         succeeded: [
      //           {
      //             project: "T-DEV-810_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=176",
      //             mark: GandalfMark.above,
      //           },
      //           {
      //             project: "T-ESP-800_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=183",
      //             mark: GandalfMark.above,
      //           },
      //           {
      //             project: "T-AIA-901_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=193",
      //             mark: GandalfMark.success,
      //           },
      //           {
      //             project: "T-DAT-901_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=195",
      //             mark: GandalfMark.success,
      //           },
      //           {
      //             project: "T-MAJ-800_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=184",
      //             mark: GandalfMark.success,
      //           },
      //           {
      //             project: "T-POO-700_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=143",
      //             mark: GandalfMark.success,
      //           },
      //           {
      //             project: "T-WEB-700_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=147",
      //             mark: GandalfMark.success,
      //           },
      //           {
      //             project: "T-WEB-800_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=182",
      //             mark: GandalfMark.success,
      //           },
      //         ],
      //         failed: [
      //           {
      //             project: "T-DIT-700_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=145",
      //             mark: GandalfMark.below,
      //           },
      //           {
      //             project: "T-NSA-700_msc2023",
      //             url: "https://gandalf.epitech.eu/course/view.php?id=146",
      //             mark: GandalfMark.failed,
      //           },
      //         ],
      //       },
      //     },
      //   ],
      // },
      {
        name: "Oral Reception",
        code: "0.2",
        children: [
          {
            name: "Sum up information from an oral presentation",
            code: "0.2.B01",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Written Production",
        code: "0.3",
        children: [
          {
            name: "Support a talk with relevant slides",
            code: "0.3.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.failed,
                },
              ],
            },
          },
          {
            name: "Make a professional public presentation",
            code: "0.3.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Make a professional presentation inside your company",
            code: "0.3.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Document produced work",
            code: "0.3.B04",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Write a concise document",
            code: "0.3.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-LAW-900_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=200",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Adapt communication scheme to an objective",
            code: "0.3.B06",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-LAW-900_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=200",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Define procedures",
            code: "0.3.B07",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Written Reception",
        code: "0.4",
        children: [
          {
            name: "Understand given instructions",
            code: "0.4.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.above,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Work out meaning from written documents",
            code: "0.4.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Interaction",
        code: "0.5",
        children: [
          {
            name: "Answer questions",
            code: "0.5.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.failed,
                },
              ],
            },
          },
          {
            name: "Argue one's opinion",
            code: "0.5.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
              ],
            },
          },
          {
            name: "Get an interview with the user",
            code: "0.5.B03",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    name: "Information and data literacy",
    code: "1",
    children: [
      {
        name: "Browsing, searching and filtering data, information and digital content",
        code: "1.1",
        children: [
          {
            name: "Locate logs",
            code: "1.1.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Find non trivial technical points",
            code: "1.1.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Implement a technology watch",
            code: "1.1.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Comply with existing procedures",
            code: "1.1.B04",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-LAW-900_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=200",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Get data from an external device",
            code: "1.1.B05",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Get relevant 3D-models",
            code: "1.1.B06",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Investigate relevant obstacles preventing a solution",
            code: "1.1.B07",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Evaluating data, information and digital content",
        code: "1.2",
        children: [
          {
            name: "Discriminate relevant information",
            code: "1.2.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Evaluate the feasability of a solution",
            code: "1.2.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Evaluate a video",
            code: "1.2.B03",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
          {
            name: "Estimate an amount of work",
            code: "1.2.B04",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Evaluate the quality of digital content",
            code: "1.2.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Assess produced work",
            code: "1.2.B06",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Evaluate artefacts security using public vulnerabilities databases",
            code: "1.2.B07",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Identify relevant criteria of analysis",
            code: "1.2.B08",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Managing data, information and digital content",
        code: "1.3",
        children: [
          {
            name: "Keep data persistent",
            code: "1.3.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Create session tokens",
            code: "1.3.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Make complex data visually understandable",
            code: "1.3.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Consume structured data from an external source",
            code: "1.3.B04",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Balance size against quality",
            code: "1.3.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Log data in a file",
            code: "1.3.B06",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.above,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Enhance expressiveness of the simulation",
            code: "1.3.B07",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Centralize tasks",
            code: "1.3.B08",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.above,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Reformat data",
            code: "1.3.B09",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Make data easily available",
            code: "1.3.B10",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    name: "Communication and collaboration",
    code: "2",
    children: [
      {
        name: "Interacting through digital technologies",
        code: "2.1",
        children: [
          {
            name: "Share info on Moodle forums",
            code: "2.1.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Adapt vectors of communication",
            code: "2.1.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.above,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Share work to be reviewed",
            code: "2.1.B03",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
          {
            name: "Design a user interface",
            code: "2.1.B04",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.above,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Connect two distant machines",
            code: "2.1.B05",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Connect two containers",
            code: "2.1.B06",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Give feedback",
            code: "2.1.B07",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
        ],
      },
      {
        name: "Sharing through digital technologies",
        code: "2.2",
        children: [
          {
            name: "Create a tutorial",
            code: "2.2.B01",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Give a talk in front of students",
            code: "2.2.B02",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Organize a conference",
            code: "2.2.B03",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Expose a personal idea",
            code: "2.2.B04",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
          {
            name: "Share the display of a connected device",
            code: "2.2.B05",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Share artifacts",
            code: "2.2.B06",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Share an organized set of documents",
            code: "2.2.B07",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Engaging in citizenship through digital technologies",
        code: "2.3",
        children: [
          {
            name: "Take part in community projects",
            code: "2.3.B01",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Engage in extra curricular activities",
            code: "2.3.B02",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Participate in a social action",
            code: "2.3.B03",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Facilitate users sharing",
            code: "2.3.B04",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Collaborating through digital technologies",
        code: "2.4",
        children: [
          {
            name: "Use specific tools to collaborate as a team",
            code: "2.4.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Use project management tools",
            code: "2.4.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Comply with corporate guidelines",
            code: "2.4.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Participate in a code review",
            code: "2.4.B04",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Define communication requirements",
            code: "2.4.B05",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Set up beta tests",
            code: "2.4.B06",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Netiquette",
        code: "2.5",
        children: [
          {
            name: "Behave decently on forums",
            code: "2.5.B01",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Behave decently on professional forums",
            code: "2.5.B02",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
          {
            name: "Adapt communication to the specific audience",
            code: "2.5.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Behave constructively on forums",
            code: "2.5.B04",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Consider morality and ethics when proposing a solution",
            code: "2.5.B05",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
        ],
      },
      {
        name: "Managing digital identity",
        code: "2.6",
        children: [
          {
            name: "Promote a project or oneself",
            code: "2.6.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Publish on a public platform",
            code: "2.6.B02",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    name: "Digital content creation",
    code: "3",
    children: [
      {
        name: "Fundamentals",
        code: "3.0",
        children: [
          {
            name: "Deliver in time",
            code: "3.0.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Use a versioning tool",
            code: "3.0.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Submit a clean and well organised delivery",
            code: "3.0.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Produce a clean code",
            code: "3.0.B04",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Deliver a robust solution",
            code: "3.0.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Developing digital content",
        code: "3.1",
        children: [
          {
            name: "Draw a use-case diagram",
            code: "3.1.B01",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Draw a class diagram",
            code: "3.1.B02",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Draw an activity diagram",
            code: "3.1.B03",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Provide a final quality assessment process",
            code: "3.1.B04",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Write code documentation",
            code: "3.1.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Produce a video",
            code: "3.1.B06",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Create a synthesis of documents",
            code: "3.1.B07",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Create a large set of files",
            code: "3.1.B08",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Write formative documents",
            code: "3.1.B09",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Integrating and re-elaborating digital content",
        code: "3.2",
        children: [
          {
            name: "Automate deployment",
            code: "3.2.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Take ownership of legacy work",
            code: "3.2.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.above,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Overlay data",
            code: "3.2.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Automate generation of documentation",
            code: "3.2.B04",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Automate tests launching",
            code: "3.2.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Automate patching",
            code: "3.2.B06",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Use libraries",
            code: "3.2.B07",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Optimize an algorithm tuning",
            code: "3.2.B08",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Homogenize the components",
            code: "3.2.B09",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Use SDK",
            code: "3.2.B10",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Copyright and licences",
        code: "3.3",
        children: [
          {
            name: "Keep a legal watch",
            code: "3.3.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-LAW-900_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=200",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Programming",
        code: "3.4",
        children: [
          {
            name: "Refer to a design pattern",
            code: "3.4.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.success,
                },
              ],
              failed: [],
            },
          },
          {
            name: "Handle events in a HMI",
            code: "3.4.B02",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Organize a code in logical entities",
            code: "3.4.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.above,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Distribute the work along appropriate classes and avoiding extra static methods",
            code: "3.4.B04",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Craft a transmission protocol between two devices",
            code: "3.4.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Transmit information between two entities",
            code: "3.4.B06",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Build a unit test",
            code: "3.4.B07",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
          {
            name: "Build a full unit test coverage",
            code: "3.4.B08",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
              ],
            },
          },
          {
            name: "Build a functional test sequence",
            code: "3.4.B09",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Code in a functional paradigm-compliant way",
            code: "3.4.B10",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Develop an authentication method",
            code: "3.4.B11",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Develop using a Javascript framework",
            code: "3.4.B12",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Utilize an application development framework",
            code: "3.4.B13",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Produce fast code",
            code: "3.4.B14",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Recognize a pattern in an image",
            code: "3.4.B15",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Develop a complex algorithm",
            code: "3.4.B16",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Perform cross-plateform compilation",
            code: "3.4.B17",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Respect the Open-closed principle (from S.O.L.I.D.)",
            code: "3.4.B18",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    name: "Safety",
    code: "4",
    children: [
      {
        name: "Protecting devices",
        code: "4.1",
        children: [
          {
            name: "Guarantee uptime",
            code: "4.1.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Organize and separate deployments",
            code: "4.1.B02",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Virtually isolate components",
            code: "4.1.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Ensure code safety",
            code: "4.1.B04",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Ensure deployment quality",
            code: "4.1.B05",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Ensure devices safety",
            code: "4.1.B06",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Improve infrastructure safety",
            code: "4.1.B07",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Backup a database",
            code: "4.1.B08",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Regulate data transmission channels",
            code: "4.1.B09",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Protecting personal data and privacy",
        code: "4.2",
        children: [
          {
            name: "Keep environment variables coherent",
            code: "4.2.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Store safely personal data",
            code: "4.2.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Strengthen security using a password policy",
            code: "4.2.B03",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Lock data",
            code: "4.2.B04",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Manage access",
            code: "4.2.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Securize communication",
            code: "4.2.B06",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Suggest solution to avoid possible safety breach in data",
            code: "4.2.B07",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Protecting health and well-being",
        code: "4.3",
        children: [
          {
            name: "Take handicaps into consideration when offering a service",
            code: "4.3.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Use digital technologies to improve well-being",
            code: "4.3.B02",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Ensure electrical safety",
            code: "4.3.B03",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Protecting the environment",
        code: "4.4",
        children: [
          {
            name: "Be aware of the environmental impact of digital technologies and their use",
            code: "4.4.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.failed,
                },
              ],
            },
          },
          {
            name: "Use digital technologies to coppe with environmental issues",
            code: "4.4.B02",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Optimize resources consumption",
            code: "4.4.B03",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    name: "Problem solving",
    code: "5",
    children: [
      {
        name: "Fundamentals",
        code: "5.0",
        children: [
          {
            name: "Comply with specifications",
            code: "5.0.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Solving technical problems",
        code: "5.1",
        children: [
          {
            name: "Guarantee a low MTTR (Mean Time To Recovery)",
            code: "5.1.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Deploy quickly",
            code: "5.1.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Automate recovery",
            code: "5.1.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Orchestrate",
            code: "5.1.B04",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Define public access",
            code: "5.1.B05",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
          {
            name: "Define access",
            code: "5.1.B06",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Identify an anomaly",
            code: "5.1.B07",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Make IP automatically available",
            code: "5.1.B08",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Patch vulnerable artefacts",
            code: "5.1.B09",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Fit an HMI to required functionalities",
            code: "5.1.B10",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
          {
            name: "Define a global strategy",
            code: "5.1.B11",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Identifying needs and technological responses",
        code: "5.2",
        children: [
          {
            name: "Write functional specifications",
            code: "5.2.B01",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Write technical specifications",
            code: "5.2.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.failed,
                },
              ],
            },
          },
          {
            name: "Write non-functional specifications",
            code: "5.2.B03",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Fix steps (deliveries and non-regression tests)",
            code: "5.2.B04",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Organize a project in several independent components",
            code: "5.2.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Prove flexibility and reactivity to client needs",
            code: "5.2.B06",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-POO-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=143",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=182",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Identify clients needs",
            code: "5.2.B07",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-NSA-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=146",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Take into account budget and financial aspects of a project",
            code: "5.2.B08",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Select the most suitable algorithm",
            code: "5.2.B09",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Adapt wireless transmission",
            code: "5.2.B10",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Discriminate operable data",
            code: "5.2.B11",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-AIA-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=193",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Take into account legal aspects of a project",
            code: "5.2.B12",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-LAW-900_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=200",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Refer to a standard",
            code: "5.2.B13",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Draw lessons from experience",
            code: "5.2.B14",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.above,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Identify stakeholders",
            code: "5.2.B15",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Suggest a business model",
            code: "5.2.B16",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
        ],
      },
      {
        name: "Creatively using digital technologies",
        code: "5.3",
        children: [
          {
            name: "Take part in HUB activities",
            code: "5.3.B01",
            status: GandalfMark.unrated,
            expectations: {
              succeeded: [],
              failed: [],
            },
          },
          {
            name: "Break unadapted rules",
            code: "5.3.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Design a creative solution",
            code: "5.3.B03",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Craft an object",
            code: "5.3.B04",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Hack  a tool",
            code: "5.3.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DAT-901_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=195",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Exploit vertically vulnerable artefacts",
            code: "5.3.B06",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Exploit lateraly vulnerable artefacts",
            code: "5.3.B07",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
      {
        name: "Identifying digital competence gaps",
        code: "5.4",
        children: [
          {
            name: "Assist users in using an application",
            code: "5.4.B01",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-WEB-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=147",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DEV-810_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=176",
                  mark: GandalfMark.below,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.failed,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Recruit the proper coworkers to fit a team",
            code: "5.4.B02",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
                {
                  project: "T-MAJ-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=184",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Organize training sessions",
            code: "5.4.B03",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Facilitate newbies integration",
            code: "5.4.B04",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-800_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=183",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Identify required skills",
            code: "5.4.B05",
            status: GandalfMark.success,
            expectations: {
              succeeded: [
                {
                  project: "T-ESP-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=149",
                  mark: GandalfMark.success,
                },
              ],
              failed: [
                {
                  project: "T-DIT-700_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=145",
                  mark: GandalfMark.unrated,
                },
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Facilitate product acceptance",
            code: "5.4.B06",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
          {
            name: "Investigate product acceptance",
            code: "5.4.B07",
            status: GandalfMark.failed,
            expectations: {
              succeeded: [],
              failed: [
                {
                  project: "T-PRO-000_msc2023",
                  url: "https://gandalf.epitech.eu/course/view.php?id=166",
                  mark: GandalfMark.unrated,
                },
              ],
            },
          },
        ],
      },
    ],
  },
];
