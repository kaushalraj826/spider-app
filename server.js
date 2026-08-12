hereconst express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection (Apna URI yahan daalein)
// mongoose.connect('YOUR_MONGODB_URI', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    telegramId: { type: String, required: true, unique: true },
    username: String,
    balance: { type: Number, default: 23985.75 },
    energy: { type: Number, default: 1000 },
    level: { type: Number, default: 42 },
    vip: { type: Number, default: 3 },
    referrals: { type: Array, default: [] }
});

const User = mongoose.model('User', userSchema);

// Sync User Data API
app.post('/api/sync', async (req, res) => {
    const { telegramId, username, score, energy } = req.body;
    let user = await User.findOne({ telegramId });
    if (!user) {
        user = new User({ telegramId, username, balance: score, energy });
        await user.save();
    } else {
        user.balance = score;
        user.energy = energy;
        await user.save();
    }
    res.json({ success: true, user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Spider Server running on port ${PORT}`));
