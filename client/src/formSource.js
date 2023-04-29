export const userInputs = [
  {
    id: 1,
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "john_doe",
    required: true,
  },
  {
    id: 2,
    label: "Email",
    name: "email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
    required: true,
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Email is not in correct format",
    },
  },
  {
    id: 3,
    label: "Phone",
    name: "phone",
    type: "text",
    placeholder: "+1 234 567 8911",
    required: true,
    pattern: {
      value: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      message: "Phone number is not in correct format",
    },
  },
  {
    id: 4,
    label: "Password",
    name: "password",
    type: "password",
    required: true,
  },
  {
    id: 5,
    label: "Address",
    name: "address",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
    required: false,
  },
  {
    id: 6,
    label: "Country",
    name: "country",
    type: "text",
    placeholder: "USA",
    required: false,
  },
  {
    id: 7,
    label: "City",
    name: "city",
    type: "text",
    placeholder: "California",
    required: false,
  },
];

export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];
