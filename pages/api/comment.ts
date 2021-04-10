export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    res.send('comment get');
  }
}