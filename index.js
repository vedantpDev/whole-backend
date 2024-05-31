import epress from "express";
import dotenv from "dotenv";
dotenv.config();
const app = epress();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
