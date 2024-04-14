import express from "express";
import pg from "pg";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

const db = new pg.Client({
    user: "postgres",
    password: "sql@1234",
    host: "localhost",
    port: 5432,
    database: "dbsproject"
});

db.connect();

app.post("/login", async (req, res)=>{
    try {
       console.log(req.body); 
       const n = req.body.name;
       const p = req.body.password;
       console.log("login with " + n + " " + p);
       if (!n || !p) {
            return res.status(400).json({ success: false, message: "Name or password missing" });
        }
       const info = await db.query("select * from users where username = ($1)",[n]);

       if(info.rows.length === 0){
        return res.json({ success: false, message: "User not found" });
       }

       const user = info.rows[0];

       if(user.password !== p){
        return res.json({ success: false, message: "Incorrect password" });
       }

       res.json({ success: true, message: "Login successful", user });       
    } 
    catch (error) {
        console.error(error.message);
    } 
})

app.post("/signup", async (req, res) => {
    try {
        console.log(req.body);
        const { username, password, email, phn, name } = req.body;
        console.log(`signup with ${name} and ${password}`)
        const existingUser = await db.query("SELECT * FROM users WHERE username = $1", [username]);
        if (existingUser.rows.length !== 0) {
            return res.status(400).json({ success: false, message: "Username already exists" });
        }

        const newUser = await db.query("INSERT INTO users (username, password, email, phoneno, name) VALUES ($1, $2, $3, $4, $5) RETURNING *", [username, password, email, phn, name]);
        
        res.status(201).json({ success: true, message: "User created successfully", user: newUser.rows[0] });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.get("/TrendingEvents", async (req, res) => {
    try {
        const trending = await db.query("SELECT * FROM TrendingEvents");
        res.json(trending.rows); 
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
});

app.post("/filter", async (req, res)=>{
    try {
        const {city, date} = req.body;
        console.log(req.body);
        if(city && date === ""){
            try {
                const events = await db.query("SELECT * FROM events where city = ($1)", [city]);
                res.json(events.rows); 
            } catch (error) {
                console.log(error.message); 
                res.status(500).json({ error: 'Internal Server Error' }); 
            }
        }
        else if(date && !city){
            try {
                const events = await db.query("SELECT * FROM events where event_date::date = ($1)", [date]);
                res.json(events.rows); 
            } catch (error) {
                console.log(error.message); 
                res.status(500).json({ error: 'Internal Server Error' }); 
            }
        }
        else if(date && city){
            try {
                const events = await db.query("SELECT * FROM events where event_date = ($1) and city = ($2)", [date, city]);
                res.json(events.rows); 
            } catch (error) {
                console.log(error.message); 
                res.status(500).json({ error: 'Internal Server Error' }); 
            }
        }
        else{
            try {
                const events = await db.query("SELECT * FROM events");
                res.json(events.rows); 
            } catch (error) {
                console.log(error.message); 
                res.status(500).json({ error: 'Internal Server Error' }); 
            }
        }
    }
    catch (error) {
        console.log(error.message);
    }
})

app.get("/Events", async (req, res) => {
    try {
        const events = await db.query("SELECT * FROM events");
        res.json(events.rows); 
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
});

app.post("/host", async(req, res)=>{
    try {
       console.log(req.body);
       const {name, location, city, price, event_date, organiserid, totalTickets} = req.body; 
       const event = await db.query("INSERT INTO events (name, location, city, price, event_date, organiserid, total_tickets, tickets_sold) VALUES(($1), ($2), ($3), ($4), ($5), ($6), ($7), 0)",[name, location, city, price, event_date, organiserid, totalTickets]); // Insert totalTickets into the events table and initialize tickets_sold with 0
       console.log(event.rows);
       console.log("inserted"); 
       res.json(event.rows);
    } 
    catch (error) {
        console.log(error.message);
    }
})


app.post("/getUser", async(req, res)=>{
    try {
       console.log(req.body);
       const {userID} = req.body;
       const user = await db.query("select * from users where username = ($1)",[userID]);
       console.log(user.rows);
       res.json(user.rows);
    } 
    catch (error) {
        console.log(error.message);
    }
})

app.get("/reviews", async (req, res) => {
    try {
        console.log(req.body);
        const reviews = await db.query("SELECT * FROM reviews");
        console.log(reviews.rows);
        res.json(reviews.rows); 
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
});

app.post("/reviewsAdd", async (req, res) => {
    try {
        const {userid, review, rating} = req.body;
        console.log(req.body);
        const reviews = await db.query("insert into reviews values($1, $2, $3)", [userid, review, rating]);
        console.log(reviews.rows);
        res.json(reviews.rows); 
    } catch (error) {
        console.log(error.message); 
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
});

app.post("/purchase", async (req, res) => {
    try {
        console.log(req.body);
        const { user, id, quant, amount, date, time } = req.body;

        
        const event = await db.query("SELECT total_tickets, tickets_sold FROM events WHERE id = $1", [id]);
        console.log(event.rows);
        const { total_tickets, tickets_sold } = event.rows[0];

        if (quant > total_tickets - tickets_sold) {
            console.log("Not enough tickets available");
            res.status(400).json({ success: false, message: "Not enough tickets available" });
            return;
        }

        
        await db.query("UPDATE events SET tickets_sold = tickets_sold + $1 WHERE id = $2", [quant, id]);


        const purchased = await db.query("INSERT INTO payment (username, event_id, quantity, amount, payment_date, payment_time) VALUES ($1, $2, $3, $4, $5, $6)", [user, id, quant, amount, date, time]);
        console.log(purchased.rows);

        res.json(purchased.rows);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.get("/history/:userID", async (req, res) => {
    try {
      const { userID } = req.params;
      const result = await db.query("SELECT COUNT(*) AS count FROM Payment WHERE username = $1", [userID]);
      const count = result.rows[0].count;
      res.json({ count });
    } catch (error) {
      console.error("Error fetching payment history:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.post("/purchasehistory", async (req, res) => {
    try {
      const { username } = req.body;
      const history = await db.query(
        "SELECT p.*, e.name AS event_name FROM payment p INNER JOIN events e ON p.event_id = e.id WHERE p.username = $1",
        [username]
      );
      res.json(history.rows);
    } catch (error) {
      console.error("Error fetching purchase history:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/organisehistory/:userID", async (req, res) => {
    try {
      const { userID } = req.params;
      const history = await db.query(
        "SELECT * FROM events WHERE organiserid = $1",
        [userID]
      );
      console.log(history.rows);
      res.json(history.rows);
    } catch (error) {
      console.error("Error fetching organizing history:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

app.listen(5000, ()=>{
    console.log("server running on port 5000");
})
