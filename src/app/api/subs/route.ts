import { getServerSession } from "next-auth";
import User from "@/models/User";
import connect from "@/db/mongpDb";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const session = await getServerSession();

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  await connect();

  try {

    const email = session?.user?.email;
    const user = await User.findOne({ email })


    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    const subscriptions = user.subscriptions;
    const subscribers = user.subscribers;
    let data = JSON.stringify({ subscriptions, subscribers });

    return new Response(data, { status: 200 });

  } catch (err: any) {
    return new NextResponse(err.message, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  await connect();

  try {
    const { email, subscription } = await request.json();

    const userSubscriptions = await User.findOneAndUpdate(
      { email: email },
      { $addToSet: { subscriptions: subscription } },
      { new: true }
    );

    const userSubscribers = await User.findOneAndUpdate(
      { name: subscription },
      { $addToSet: { subscribers: email } },
      { new: true }
    );

    await userSubscriptions.save();
    await userSubscribers.save();

    return new NextResponse("Subscriptions or subscribers added successfully", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err.message, { status: 500 });
  }
};