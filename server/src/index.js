const express = require('express');
const bodyParser = require('body-parser');
const ReportRouter = require('./routers/ReportRouter');
const sequelize = require('./database/conection')
const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Include your routers
app.use('/api', ReportRouter); // You can prefix your API routes as needed

// Start your server
const PORT = process.env.PORT || 4000;
sequelize.sync().then(
    () => {
      app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`http://localhost:${PORT}`);
      });
    },
  );
