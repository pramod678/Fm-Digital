
const User = require('./user.Model');

    const login =  async (req, res) => {
        const { email, password } = req.body;
      
        const user = await User.findOne({ email });
        if (!user) {
          return res.json({ error: "User Not found" });
        }
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign({ email: user.email }, JWT_SECRET, {
            expiresIn: "30m",
          });
      
          if (res.status(201)) {
            return res.json({ status: "ok", data: token });
          } else {
            return res.json({ error: "error" });
          }
        }
        res.json({ status: "error", error: "InvAlid Password" });
      };
module.exports = {login};