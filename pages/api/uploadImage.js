//api/uploadImage.js

import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
export const config = {
  runtime: "edge",
};

export default async function upload(request) {
  if (request.method === "POST") {
    // Assuming imageData is sent as the body of the POST request
    const contentType = "image/jpeg"; // Adjust based on the actual image format

    const imageData = await request.arrayBuffer();
    const fileName = `image-${uuidv4()}.jpg`; // or .png, depending on your image type
    try {
      const blob = await put(fileName, imageData, {
        access: "public",
        headers: { "Content-Type": contentType }, // Include the content type here
      });
      return NextResponse.json(blob); // Respond with the blob information
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
  } else {
    return new Response("Method Not Allowed", { status: 405 });
  }
}
