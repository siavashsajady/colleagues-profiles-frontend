const { employees } = require('./data.json');

export default function handler(req, res) {
  const emp = employees.filter((em) => em.slug === req.query.slug);
  if (req.method === 'GET') {
    res.status(200).json(emp);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method}is not allowed` });
  }
}
