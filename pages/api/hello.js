// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(`Policy Wording: ${process.env.ESKIN_MOTOR_POLICY_WORDING}`);
  console.log(`PDS: ${process.env.ESKIN_MOTOR_PDS}`);
  console.log(`PDS_1: ${process.env.ESKIN_MOTOR_PDS_1}`);
  console.log(`MERCHANT_CODE: ${process.env.MERCHANT_CODE}`);
  console.log(`IPAY88_URL: ${process.env.IPAY88_URL}`);
  console.log(`MY_GI_APP_SECRET: ${process.env.MY_GI_APP_SECRET}`);
  res.status(200).json({ name: 'John Doe', value: process.env.API_VARIABLE })
}
