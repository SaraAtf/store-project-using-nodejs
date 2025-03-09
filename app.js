const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
/**------- Require custom modules -------------- */
const productRouter = require("./routes/products");
const connectDB = require("./db/connect");
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
/**-----------Built in middleware------------- */
app.use(express.json());
/**---------------Routes------------------ */
app.use(productRouter);
/**-------------Error &  not found middleware ----------- */
app.use(notFound);
app.use(errorHandler);
/**------------------------ */

const startApp = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		console.log("Connected to DB");
		app.listen(PORT, () => {
			console.log("server listening at port ", PORT);
		});
	} catch (error) {
		console.log(error);
	}
};

startApp();
