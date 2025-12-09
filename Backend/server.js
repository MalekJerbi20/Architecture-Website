const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Contact = require('./models/contact');
const projectRoutes = require('./routes/projects');

const app = express();

// ✅ CHANGE: enable CORS before routes
app.use(cors()); // allow requests from React

// ✅ CHANGE: parse JSON before routes
app.use(express.json()); // parse JSON body

// ✅ serve uploaded images
app.use('/uploads', express.static('uploads'));

// ✅ mount routes AFTER middleware
app.use('/api', projectRoutes);

// Contact form route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form:', name, email, message);

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log('Contact saved to database', newContact);
    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error saving contact to database:', error);
    res.status(500).send({ success: false, error: 'Database error' });
  }
});

// Start server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/architech', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});