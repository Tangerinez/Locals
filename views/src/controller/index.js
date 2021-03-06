import axios from "axios";

export default {
  getLocals: function() {
    return axios.get("/api/locals");
  },
  getTravelers: function() {
    return axios.get("/api/traveller");
  },
  pushLocals: function(data) {
    console.log(data);
    return axios.post("/api/locals", data);
  },
  pushTravelers: function(data) {
    console.log(data);
    return axios.post("/api/traveller", data);
  },
  loginSearchLocal: function(data) {
    console.log(data);
    return axios.post("/api/locals/login/", data);
  },
  loginSearchTraveler: function(data) {
    console.log(data);
    return axios.post("/api/traveller/login/", data);
  },
  getLocalById: function(id) {
    return axios.get("/api/locals/" + id);
  },
  getTravelerById: function(id) {
    return axios.get("/api/traveller/" + id);
  },
  updateLocal: function(id, data) {
    console.log(id, data);
    return axios.put("/api/locals/" + id, data);
  },
  updateTraveler: function(id, data) {
    return axios.put("/api/traveller/" + id, data);
  },
  pushDates: function(id, data) {
    console.log("ID", id, "Data", data);
    return axios.post("/api/locals/dates/" + id, data);
  },
  searchLocals: function(data) {
    return axios.post("/api/locals/search", data);
  },
  bookingLocal: function(id, data) {
    console.log(id, data);
    return axios.post("/api/traveller/booking/" + id, data);
  },
  bookingTraveler: function(id, data) {
    console.log(id, data);
    return axios.post("/api/locals/booking/" + id, data);
  },
  deleteLocalsDates: function(id, data) {
    console.log(id, data);
    return axios.post("/api/locals/removeDate/" + id, data);
  },
  deleteTravelerBooking: function(id, data) {
    console.log(id, data);
    return axios.post("/api/traveller/removeBooking/" + id, data);
  }
};
