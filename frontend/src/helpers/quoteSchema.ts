const quoteSchema: Quote = {
  date_to_move: "",
  status: "pedding",
  user: {
    name: "",
    email: "",
  },
  location: {
    from_address: "",
    from_position: { lat: "", lng: "" },
    to_address: "",
    to_position: { lat: "", lng: "" },
  },
  volumes: [
    {
      description: "",
      weight: "",
      length: "",
      width: "",
    },
  ],
};

export default quoteSchema;
