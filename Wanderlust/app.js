const express = require("express");
const app = express();
const mongoose = require("mongoose");
const sampleListings = require("./init/data.js");
const Listing = require("./models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

//-------------------------EJS setup-------------------------------//
const path = require("path"); //
app.set("view engine", "ejs"); //
app.set("views", path.join(__dirname, "views")); //
app.use(express.urlencoded({ extended: true }));

//-------------------------Static files (public/css) setup-------------------------------//
app.use(express.static(path.join(__dirname, "/public")));
//-------------------------method-override setup-------------------------------//
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//-------------------------EJS-mate setup-------------------------------//
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});

app.get("/", (req, res) => {
  res.send("Hi, root is working");
});

// index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});
//new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

//create route
app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});
//edit route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

//update route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});
//delete route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});
// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "by the beach",
//     price: 1200,
//     location: "Roorkee",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("Sample Listing was saved");
//   res.send("Successful testListing");
// });
