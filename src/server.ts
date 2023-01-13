import { app } from "./app/app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Api running in http://localhost:${PORT}`));