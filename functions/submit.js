

export async function onRequest(context) {
  const task = await context.env.MESSAGES.put(context.name + " @ " + context.email, context.message);
  return new Response(task);
}
