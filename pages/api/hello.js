// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(`Policy Wording: ${process.env.ESKIN_MOTOR_POLICY_WORDING}`);
  console.log(`PDS: ${process.env.ESKIN_MOTOR_PDS}`);
  console.log(`PDS_1: ${process.env.ESKIN_MOTOR_PDS_1}`);
  res.status(200).json({ name: 'John Doe', value: process.env.API_VARIABLE })
}
