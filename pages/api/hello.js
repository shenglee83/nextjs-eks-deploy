// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(process.env.API_VARIABLE);
  res.status(200).json({ name: 'John Doe', value: process.env.API_VARIABLE })
}
