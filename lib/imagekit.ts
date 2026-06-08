"use server";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export const uploadToImageKit = async (file: File) => {
  const buffer = Buffer.from(await file.arrayBuffer());

  const res = await imagekit.upload({
    file: buffer,
    fileName: file.name,
    folder: "/resumes",
  });

  return res.url;
};
