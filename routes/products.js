const router = require("express").Router();
const multer =require("multer");


const storage = multer.diskStorage({
destination:(req,file,callback)=>{
callback(null,"uploads/images")

},
filename:(req,file,callback)=>{
callback(null,file.originalname);
}
})

const upload = multer({ storage: storage });

let Product = require("../model/productlist");

router.route("/").get(async (req, res) => {
  
     const product = await Product.find({});
      res.status(200).json({ product, count: product.length });
});



router.route("/:id").get(async (req, res) => {
  console.log(req.params.id);
  const product = await Product.findById(req.params.id);
  console.log(product)
  res.status(200).json({ product, count: product.length });
});



router.route("/add").post(upload.single("image"),async (req, res) => {
  const excersies = { ...req.body, image: req.file.originalname };
 const photo = req.file.originalname;
  const user = await Product.create(excersies);
  res.status(200).json({ user });
});




router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json({ res: "product deleted successfully" }))
    .catch((err) => res.status(400).json("Error: " + err));
});



router.route("/:id").patch( async(req, res) => {
    const {
      body: { name, price, description },
    } = req;
    const prod = await Product.findByIdAndUpdate( { _id: req.params.id }, req.body)
    if (!prod) {
      res.status(404).json({ res:"no id" });
    }
    res.status(200).json({ res:"product updated successfully" });

});

module.exports = router;
