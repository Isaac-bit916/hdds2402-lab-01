export default {
  async fetch(request, env, ctx) {
    // This executes only if a requested file is not found in the public/ folder
    return new Response("404 Not Found - Custom Worker Handler", { 
      status: 404,
      headers: { "content-type": "text/plain;charset=UTF-8" }
    });
  },
};