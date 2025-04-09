export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body;
    res.status(200).json({ message: `Hello, ${name || 'stranger'}!` });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
