const messages = require('./icsToS3_pb');
const services = require('./icsToS3_grpc_pb');
const ics = require('ics');

const grpc = require('grpc');

function eventToIcs(call, callback) {
  const _event = call.request.toObject();
  _event.start = _event.startList;
  _event.end = _event.endList;
  delete _event.startList;
  delete _event.endList;
  console.log(_event);
  ics.createEvent(_event, (err, ics) => {
    console.log(err, ics);
    if (err) return callback(grpc.status.UNKNOWN);
    const reply = new messages.IcsUrl([ics]);
    callback(null, reply);
  });
}

function main() {
  const server = new grpc.Server();
  server.addService(services.ICSService, {toS3: eventToIcs});
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
