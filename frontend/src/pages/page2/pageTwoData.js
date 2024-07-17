export const radioButton = [
  {
    label: "Property For ",
    type: "radio",
    radioElement: ["Rent", "Sale"],
    starPosition: "left",
  },
  {
    label: "Property Type ",
    type: "radio",
    radioElement: ["Residential", "Commercial", "Land/Plot"],
    starPosition: "left",
  },
];

export const textPlaceHolder = [
  {
    label: "Built-up Area",
    starPosition: "right",
    type: "text-placeholder",
    placeholder: 0,
    textPlaceHolderfield: "Sq.Ft.",
  },
  {
    label: "Carpet Area",
    starPosition: "right",
    type: "text-placeholder",
    placeholder: 0,
    textPlaceHolderfield: "Sq.Ft.",
  },
];

export const buttonlist = [
  {
    label: "Property Age",
    list: [
      "less than 1 Year",
      "1-3 Years",
      "3-5 Years",
      "5-10 Years",
      "Greater than 10 Years",
    ],
  },
  {
    label: "BHK Type",
    list: ["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"],
  },
  {
    label: "Bathrooms/ Toilets",
    list: ["1", "2", "3", "4", "5", "6+"],
  },
  {
    label: "Balcony",
    list: ["0", "1", "2", "3", "4+"],
  },
  {
    label: "Tenant Preference",
    list: ["Any", "Family", "Bachelor(Male)", "Bachelor(Women)"],
  },
  {
    label: "Availability",
    list: ["immediate", "within 15 days", "within 1 month", "within 2 months"],
  },
];
