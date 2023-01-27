import sgClient from "@sendgrid/client";
sgClient.setApiKey(process.env.SENDGRID_API_KEY!);

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { email } = req.body;

    await sgClient.request({
      url: "/v3/marketing/contacts",
      method: "PUT",
      body: {
        contacts: [
          {
            email,
          },
        ],
      },
    });

    return res.status(201).json({ message: "Success" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error?.message });
  }
}
