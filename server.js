const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());

// ✅ Serve entire public folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Images (optional if already inside public)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// API
app.get('/api/products', (req, res) => {
  const filePath = path.resolve(__dirname, 'products.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read product data' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});