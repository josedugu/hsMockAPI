const routes = require("./routes/results.routes");
const fastify = require("fastify")({
  logger: true,
});

require("./utils/mongoose");

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

routes.forEach((route) => fastify.route(route));

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
